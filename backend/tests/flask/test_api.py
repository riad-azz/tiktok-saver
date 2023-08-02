# Other modules
import os
import pytest

# Local modules
from app import create_app


@pytest.fixture
def app():
    DEBUG = os.environ.get("DEBUG", "False") == "True"
    app = create_app(debug=DEBUG)

    return app


def test_api_success(app):
    with app.test_client() as client:
        response = client.get("/api/tests/success")
        assert response.status_code == 200
        assert response.json["status"] == "success"
        assert response.json["data"]["title"] == "riad-azz"
        assert response.json["data"]["content"] == "Successful API response"


def test_api_bad_request(app):
    with app.test_client() as client:
        response = client.get("/api/tests/bad-request")
        assert response.status_code == 400
        assert response.json["status"] == "error"
        assert response.json["message"] == "Bad Request"


def test_api_internal_server_error(app):
    with app.test_client() as client:
        response = client.get("/api/tests/internal-server-error")
        assert response.status_code == 500
        assert response.json["status"] == "error"
        assert response.json["message"] == "Internal Server Error"


def test_api_unknown_exception(app):
    with app.test_client() as client:
        response = client.get("/api/tests/unknown-exception")
        assert response.status_code == 500
        assert response.json["status"] == "error"
        assert response.json["message"] == "Internal Server Error"
