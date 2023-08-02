# Flask modules
from flask import Blueprint, request
from flask_limiter import ExemptionScope
from werkzeug.exceptions import HTTPException
from flask_limiter.errors import RateLimitExceeded

# Local modules
from app.extensions import limiter
from app.utils.api import error_response
from app.utils.cache import get_cached_response, set_cached_response

# Other modules
import logging

# Blueprint modules
from app.routes.api.tests import tests_bp
from app.routes.api.proxy import proxy_bp
from app.routes.api.tiktok import tiktok_bp

api_bp = Blueprint("api", __name__, url_prefix="/api")

limiter.limit("5/minute")(api_bp)
limiter.exempt(api_bp, flags=ExemptionScope.DEFAULT |
                             ExemptionScope.APPLICATION |
                             ExemptionScope.DESCENDENTS)


@api_bp.errorhandler(Exception)
def handle_error(error):
    if isinstance(error, RateLimitExceeded):
        current_limit = error.limit.limit
        return error_response(f"Too many requests: {current_limit}", 429)
    elif isinstance(error, HTTPException):
        return error_response(error.description, error.code)
    else:
        logging.error(error)
        return error_response()


@api_bp.before_request
def before_request():
    # Attempt to fetch cached response
    cached_response = get_cached_response(request)
    if cached_response is not None:
        return cached_response


@api_bp.after_request
def after_request(response):
    if response.status_code == 200:
        # Cache the response if it is successful (status code 200)
        set_cached_response(request, response)
    return response


api_bp.register_blueprint(tests_bp)
api_bp.register_blueprint(proxy_bp)
api_bp.register_blueprint(tiktok_bp)
