# Flask modules
from flask import Blueprint, request

# Other modules
from werkzeug.exceptions import BadRequest, InternalServerError

# Local modules
from app.utils.flask import json_response
from app.lib.tiktok import get_video_info
from app.lib.tiktok import is_valid_tiktok_domain
from app.lib.tiktok import format_video_info

tiktok_bp = Blueprint("tiktok", __name__, url_prefix="/tiktok")


@tiktok_bp.route("/info", methods=["GET"])
def video_info_api():
    video_url = request.args.get("url")
    if not video_url:
        raise BadRequest("Bad Request, missing params.")

    # Validate user input
    is_valid_url = is_valid_tiktok_domain(video_url)
    if not is_valid_url:
        raise BadRequest("Invalid Tiktok URL, please enter a valid post URL.")

    # Fetch video data from tiktok
    try:
        data = get_video_info(video_url)
    except:
        raise InternalServerError("Invalid Tiktok post URL, could not find video URL.")

    # Format and clean data to be served to our frontend
    try:
        video_info = format_video_info(data)
    except Exception as e:
        print(f"Problem formatting json for {video_url}\nerror: {e}")
        raise InternalServerError("Internal Server Error")

    if video_info is None:
        raise BadRequest("Could not find video URL, please contact the support if this problem persists.")

    serialized_data = video_info.to_dict()
    return json_response(serialized_data, 200)
