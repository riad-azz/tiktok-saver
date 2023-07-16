from flask_cors import CORS

CORS_ORIGINS = "*"

cors = CORS(
    methods=[
        "GET",
    ],
    origins=CORS_ORIGINS,
)
