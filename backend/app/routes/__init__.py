# Flask modules
from flask import Blueprint

# Local modules
from app.utils.flask import error_response

# Blueprint modules
from .proxy import proxy_bp
from .tiktok import tiktok_bp

api_bp = Blueprint("api", __name__, url_prefix="/api")


@api_bp.errorhandler(429)
def handle_rate_limit_exceeded(e):
    return error_response(str(e), 429)


api_bp.register_blueprint(proxy_bp)
api_bp.register_blueprint(tiktok_bp)
