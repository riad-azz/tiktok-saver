from flask_cors import CORS

CORS_ORIGINS = ["http://localhost:3000", "http://127.0.0.1:3000", "http://192.168.1.2:3000"]

cors = CORS(
    methods=['GET', 'POST', 'PUT', 'DELETE'],
    origins=CORS_ORIGINS,
)
