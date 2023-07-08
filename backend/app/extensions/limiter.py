from flask_limiter import Limiter
from flask_limiter.util import get_remote_address

import os
from dotenv import load_dotenv

load_dotenv()

RATELIMIT_ENABLED = os.environ.get("RATELIMIT_ENABLED", "False") == "True"
RATELIMIT_STORAGE_URL = os.environ.get("RATELIMIT_STORAGE_URL", "memory://")

limiter = Limiter(
    key_func=get_remote_address,
    default_limits=["5 per minute"],
    storage_uri=RATELIMIT_STORAGE_URL,
    in_memory_fallback_enabled=True,
    strategy="moving-window",  # or "fixed-window"
    headers_enabled=True,
    enabled=RATELIMIT_ENABLED,
)