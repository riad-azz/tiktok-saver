# To use these options you must check : https://github.com/yt-dlp/yt-dlp
USE_COOKIES = False
COOKIES_PATH = "cookies.txt"
COOKIES_BROWSER = "chrome"


def get_command(url: str) -> str:
    if USE_COOKIES:
        command = f"yt-dlp {url} --cookies {COOKIES_PATH} --no-download --dump-json -q --cookies-from-browser {COOKIES_BROWSER}"
    else:
        command = f"yt-dlp {url} --no-download --dump-json -q"

    return command
