import pytest
from app import create_app

VIDEO_POST_URL = "https://www.instagram.com/p/CGh4a0iASGS"
PHOTO_POST_URL = "https://www.instagram.com/p/CNIE1dplo7u"


@pytest.fixture
def app():
    app = create_app()

    return app


def test_instagram_api_valid(app):
    with app.test_client() as client:
        response = client.get(f'/api/instagram/info?url={VIDEO_POST_URL}')
        assert response.status_code == 200
        assert response.headers['Content-Type'] == 'application/json'


def test_instagram_api_invalid(app):
    with app.test_client() as client:
        response = client.get(f'/api/instagram/info?url={PHOTO_POST_URL}')
        assert response.status_code == 400
        assert response.headers['Content-Type'] == 'application/json'
        assert response.json["error"] == "Unable to extract video url"
