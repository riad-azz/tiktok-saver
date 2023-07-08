# Flask modules
from flask import Blueprint, current_app

# Blueprint modules
from .proxy import proxy_bp
from .tiktok import tiktok_bp

# Local modules
from app.utils.flask import error_response

API_BP = Blueprint("api", __name__, url_prefix="/api")


# @API_BP.before_request
# def before_request():
#     if "*" in current_app.config["ALLOWED_HOSTS"]:
#         return


@API_BP.errorhandler(429)
def handle_rate_limit_exceeded(e):
    return error_response("Rate limit exceeded", 429)


API_BP.register_blueprint(proxy_bp)
API_BP.register_blueprint(tiktok_bp)
