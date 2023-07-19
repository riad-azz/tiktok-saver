# Flask modules
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from flask_limiter.errors import RateLimitExceeded

# Local modules
from app.utils.api import error_response

# Blueprint modules
from app.routes.api.tests import tests_bp
from app.routes.api.proxy import proxy_bp
from app.routes.api.tiktok import tiktok_bp

api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.errorhandler(Exception)
def handle_error(error):
    if isinstance(error, RateLimitExceeded):
        current_limit = error.limit.limit
        return error_response(f"Too many requests: {current_limit}", 429)
    elif isinstance(error, HTTPException):
        return error_response(error.description, error.code)
    else:
        print(error)
        return error_response()


api_bp.register_blueprint(tests_bp)
api_bp.register_blueprint(proxy_bp)
api_bp.register_blueprint(tiktok_bp)