from flask import request
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

import os
from dotenv import load_dotenv

load_dotenv()

RATELIMIT_ENABLED = os.environ.get("RATELIMIT_ENABLED", "False") == "True"
RATELIMIT_STORAGE_URL = os.environ.get("RATELIMIT_STORAGE_URL", "memory://")


def default_exempt_when():
    EXEMPTED_HOSTS = ["127.0.0.1", "localhost", "192.168.1.2"]
    return request.remote_addr in EXEMPTED_HOSTS


limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["100 per day", "5 per minute", ],
    storage_uri=RATELIMIT_STORAGE_URL,
    in_memory_fallback_enabled=True,
    strategy="moving-window",  # or "fixed-window"
    headers_enabled=True,
    enabled=RATELIMIT_ENABLED,
    default_limits_exempt_when=default_exempt_when,
)
