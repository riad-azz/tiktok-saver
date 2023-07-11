import re


def validate_tiktok_url(url: str):
    regex_pattern = r"https?://(?:www\.)?([a-zA-Z0-9-]+)(?:\.[a-zA-Z0-9]+)+[/?].*"
    match = re.match(regex_pattern, url)
    if match:
        return True

    return False
