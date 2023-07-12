import json
from flask import Response


def json_response(data, status: int = 200):
    response_dict = {"status": "success", "data": data}
    json_data = json.dumps(response_dict)
    response = Response(json_data, mimetype="application/json")
    return response, status


def error_response(message: str = "Internal Server Error", status: int = 500):
    response_dict = {"status": "error", "message": message}
    json_data = json.dumps(response_dict)
    response = Response(json_data, mimetype="application/json")
    return response, status
