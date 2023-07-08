import json
from flask import Response


def json_response(data, status: int = 200):
    json_data = json.dumps(data)
    response = Response(json_data, mimetype="application/json")
    return response, status


def error_response(message: str = "Internal Server Error", status: int = 500):
    json_data = json.dumps({"error": message})
    response = Response(json_data, mimetype="application/json")
    return response, status
