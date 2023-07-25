import os
from dotenv import load_dotenv

load_dotenv()


class DevConfig:
    TESTING = True
    DEBUG = True
    TEMPLATES_AUTO_RELOAD = True
    JSON_SORT_KEYS = False
    SECRET_KEY = os.environ.get("SECRET_KEY", "YOUR-FALLBACK-SECRET-KEY")
