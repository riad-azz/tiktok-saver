from flask_cors import CORS

import os
from dotenv import load_dotenv

load_dotenv()

FRONTEND_DOMAIN = os.environ.get("CORS_DOMAINS", None)

if FRONTEND_DOMAIN:
    CORS_ORIGINS = FRONTEND_DOMAIN.split(" ")
else:
    CORS_ORIGINS = "*"

print(CORS_ORIGINS)

cors = CORS(
    methods=['GET',],
    origins=CORS_ORIGINS,
)
