# Flask modules
from flask import Blueprint, Response, request, stream_with_context
from werkzeug.exceptions import BadRequest, Unauthorized, InternalServerError

# Other modules
import time
import logging
import requests
import urllib.parse

# Local modules
from app.utils.proxy import is_allowed_proxy_domain

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

    try:
        response = requests.get(decoded_url, stream=True)

        headers = response.headers

        if headers.get("Content-type") != "video/mp4":
            raise BadRequest("Invalid file type, only videos are allowed.")

        # Set the content disposition header for the downloaded file
        timestamp = str(int(time.time()))
        filename = f"tiktok-saver-{timestamp}.mp4"
        headers['Content-Disposition'] = f'attachment; filename="{filename}"'

        return Response(stream_with_context(response.iter_content(chunk_size=1024)),
                        headers=dict(headers),
                        status=response.status_code)
    except Exception as e:
        logging.error(f"Something went wrong while proxy downloading : {e}")
        raise InternalServerError("Internal Server Error")
