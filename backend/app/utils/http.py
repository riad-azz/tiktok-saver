import requests
from io import BytesIO
from werkzeug.exceptions import BadGateway, InternalServerError


def download_file(url: str, file_type: str) -> bytes:
    try:
        response = requests.get(url)
        if response.status_code != 200:
            raise BadGateway("Failed to download video file")
    except:
        raise BadGateway("Failed to download video file from remote host")

    # Check if the response type is correct
    content_type = response.headers.get("Content-Type")
    if file_type not in content_type:
        raise BadGateway("Bad response from remote host")

    return response.content


def bytes_to_memory_file(file_bytes: bytes) -> BytesIO:
    try:
        file_in_memory = BytesIO()
        file_in_memory.write(file_bytes)
        file_in_memory.seek(0)
        return file_in_memory
    except:
        raise InternalServerError("Internal Server Error")


def download_file_to_memory(url: str, file_type: str) -> BytesIO:
    file_bytes = download_file(url, file_type)
    file_in_memory = bytes_to_memory_file(file_bytes)
    return file_in_memory
