# Flask modules
from flask import Blueprint, request, send_file

# Other modules
import urllib.parse
from werkzeug.exceptions import BadRequest, Unauthorized

# Local modules
from app.lib.proxy import download_file_to_memory
from app.lib.proxy import is_allowed_proxy_domain
proxy_bp = Blueprint("proxy", __name__, url_prefix="/proxy")


@proxy_bp.route("/download", methods=["GET"])
def proxy_file_api():
    encoded_url = request.url.split("?url=")[-1]
    if not encoded_url:
        raise BadRequest("Bad Request, missing params")

    # This is necessary to keep the video URL params
    decoded_url = urllib.parse.unquote(encoded_url)

    # Validate Url input
    is_valid_url = is_allowed_proxy_domain(decoded_url)
    if not is_valid_url:
        raise Unauthorized("Unauthorized request")

    # Save the file in memory and serve it
    file_in_memory = download_file_to_memory(decoded_url, "video/mp4")

    response = send_file(
        file_in_memory,
        mimetype="video/mp4",
        download_name="video.mp4",
        as_attachment=True,
    )
    return response
