# Other modules
import os
import pytest

# Local modules
from app import create_app

VIDEO_POST_URL = "https://www.tiktok.com/@kevinlithium/video/7253860622557908266?is_from_webapp=1&sender_device=pc"
SLIDES_POST_URL = "https://www.tiktok.com/@garfminusgarf/video/7254402677306707243"
INVALID_URL = "https://www.example.com/"


@pytest.fixture
def app():
    DEBUG = os.environ.get("DEBUG", "False") == "True"
    app = create_app(debug=DEBUG)

    return app


def test_tiktok_api(app):
    with app.test_client() as client:
        response = client.get(f"/api/tiktok/info?url={VIDEO_POST_URL}")
        assert response.status_code == 200
        assert response.headers["Content-Type"] == "application/json"


def test_tiktok_api_invalid_url(app):
    with app.test_client() as client:
        response = client.get(f"/api/tiktok/info?url={INVALID_URL}")
        assert response.status_code == 400
        assert response.headers["Content-Type"] == "application/json"
        assert response.json["status"] == "error"
        assert response.json["message"] == "Invalid Tiktok URL, please enter a valid post URL."
