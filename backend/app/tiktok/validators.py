import re
from werkzeug.exceptions import BadRequest


def validate_tiktok_url(url: str):
    regex_pattern = r"https://(?:www\.)?tiktok\.com/[@\w]+/video/\d+"
    match = re.match(regex_pattern, url)
    if match:
        return match[0]
    else:
        raise BadRequest("Invalid Tiktok URL")
