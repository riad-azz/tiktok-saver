import os
from dotenv import load_dotenv

load_dotenv()


class ProdConfig:
    TESTING = False
    DEBUG = False
    SECRET_KEY = os.getenv("SECRET_KEY", "YOUR-FALLBACK-SECRET-KEY")
