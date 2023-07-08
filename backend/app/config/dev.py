import os


class DevConfig:
    TESTING = True
    DEBUG = True
    SECRET_KEY = "YOUR-DEV-SECRET-KEY"
    SQLALCHEMY_DATABASE_URI = os.environ.get("DATABASE_URL", "sqlite:///dev-db.db")
    CORS_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000", "http://192.168.1.2:3000"]
    RATELIMIT_STORAGE_URL = "redis://localhost:6379"
