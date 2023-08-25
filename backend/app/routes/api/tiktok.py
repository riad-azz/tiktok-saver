# Flask modules
from flask import Blueprint, request
from werkzeug.exceptions import BadRequest, InternalServerError

# Other modules
import logging

# Local modules
from app.utils.api import success_response
from app.utils.tiktok import get_video_info
from app.utils.tiktok import is_valid_tiktok_domain
from app.utils.tiktok import format_video_info

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
        raise InternalServerError("Could not find video URL for this post.")

    # Format and clean data to be served to our frontend
    try:
        video_info = format_video_info(data)
    except Exception as e:
        logging.error(f"Problem formatting json for {video_url}\n" f"error: {e}")
        raise InternalServerError("Something went wrong, please try again.")

    if video_info is None:
        raise BadRequest("Could not find video URL for this post.")

    data = video_info.model_dump()

    return success_response(data=data, cache_response=True)
