import os
from pathlib import Path
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = Path(__file__).resolve().parent.parent.parent

USE_COOKIES = os.environ.get("USE_COOKIES", "False") == "True"
COOKIES_BROWSER = os.environ.get("COOKIES_BROWSER", "chrome")
COOKIES_PATH = BASE_DIR / "cookies.txt"


def get_command(url: str) -> str:
    if USE_COOKIES:
        command = f"yt-dlp {url} --cookies {COOKIES_PATH} --no-download --dump-json -q --cookies-from-browser {COOKIES_BROWSER}"
    else:
        command = f"yt-dlp {url} --no-download --dump-json -q"

    return command
