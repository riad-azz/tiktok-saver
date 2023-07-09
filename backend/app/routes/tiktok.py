# Flask modules
from flask import Blueprint, request

# Other modules
from werkzeug.exceptions import BadRequest

# Local modules
from app.tiktok import get_video_info
from app.utils.flask import json_response
from app.tiktok.validators import validate_tiktok_url
from app.tiktok.formatters import format_video_info

tiktok_bp = Blueprint("tiktok", __name__, url_prefix="/tiktok")


@tiktok_bp.route("/info", methods=["GET"])
def video_info_api():
    video_url = request.args.get("url")
    if not video_url:
        raise BadRequest("Bad Request, missing params")

    # Validate user input
    valid_url = validate_tiktok_url(video_url)
    # Fetch video data from tiktok
    data = get_video_info(valid_url)
    # Format and clean data to be served to our frontend
    video_info = format_video_info(data)

    return json_response(video_info, 200)
