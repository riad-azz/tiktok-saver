# Flask modules
from flask import Blueprint, request

# Local modules
from app.lib.tiktok import get_video_info, format_video_info
from app.utils.flask import json_response, error_response

tiktok_bp = Blueprint("tiktok", __name__, url_prefix="/tiktok")


@tiktok_bp.route("/info", methods=["GET"])
def video_info_api():
    video_url = request.args.get("url")
    if not video_url:
        return error_response("Bad Request, missing params", 400)

    full_response = request.args.get("full", False)

    data = get_video_info(video_url)
    if full_response:
        return json_response(data, 200)
    else:
        video_info = format_video_info(data)
        return json_response(video_info, 200)
