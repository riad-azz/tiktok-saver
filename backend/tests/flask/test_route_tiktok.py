import pytest
from app import create_app

VIDEO_POST_URL = "https://www.tiktok.com/@kevinlithium/video/7253860622557908266?is_from_webapp=1&sender_device=pc"
SLIDES_POST_URL = "https://www.tiktok.com/@garfminusgarf/video/7254402677306707243"
INVALID_URL = "https://www.example.com/"


@pytest.fixture
def app():
    app = create_app()

    return app


def test_tiktok_api(app):
    with app.test_client() as client:
        response = client.get(f'/api/tiktok/info?url={VIDEO_POST_URL}')
        assert response.status_code == 200
        assert response.headers['Content-Type'] == 'application/json'


def test_tiktok_api_invalid_post(app):
    with app.test_client() as client:
        response = client.get(f'/api/tiktok/info?url={SLIDES_POST_URL}')
        assert response.status_code == 400
        assert response.headers['Content-Type'] == 'application/json'
        assert response.json["error"] == "Unable to extract video URL, please make sure this post contains a video"


def test_tiktok_api_invalid_url(app):
    with app.test_client() as client:
        response = client.get(f'/api/tiktok/info?url={INVALID_URL}')
        assert response.status_code == 400
        assert response.headers['Content-Type'] == 'application/json'
        assert response.json["error"] == "Invalid Tiktok URL"
