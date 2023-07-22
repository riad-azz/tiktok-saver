import os
from dotenv import load_dotenv

load_dotenv()


class DevConfig:
    TESTING = True
    DEBUG = True
    SECRET_KEY = os.getenv("SECRET_KEY", "YOUR-FALLBACK-SECRET-KEY")
