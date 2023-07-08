# Flask modules
from flask import Blueprint, request, send_file

# Other modules
import urllib.parse

# Local modules
from app.utils.flask import error_response
from app.utils.http import download_file_to_memory

proxy_bp = Blueprint("proxy", __name__, url_prefix="/proxy")


@proxy_bp.route("/download", methods=["GET"])
def proxy_file_api():
    encoded_url = request.url.split("?url=")[-1]
    if not encoded_url:
        return error_response("Bad Request, missing params", 400)

    # This is necessary to keep the video URL params
    decoded_url = urllib.parse.unquote(encoded_url)

    file_in_memory = download_file_to_memory(decoded_url, "video/mp4")

    response = send_file(
        file_in_memory,
        mimetype="video/mp4",
        download_name="video.mp4",
        as_attachment=True,
    )
    return response
