import os


class ProdConfig:
    TESTING = False
    DEBUG = False
    SECRET_KEY = os.environ.get("SECRET_KEY", "YOUR-FALLBACK-SECRET-KEY")
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "sqlite:///dev-db.db")
    CORS_ORIGINS = ["*"]  # Set your domains here
    RATELIMIT_STORAGE_URL = "redis://localhost:6379"
