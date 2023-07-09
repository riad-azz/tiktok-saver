import pytest
from app.tiktok.validators import validate_tiktok_url, BadRequest


def test_tiktok_url():
    url = "https://www.tiktok.com/@kylegordonisgreat/video/7253101692495973674?is_from_webapp=1&sender_device=pc"
    valid_url = validate_tiktok_url(url)
    assert valid_url is not None
    assert valid_url == "https://www.tiktok.com/@kylegordonisgreat/video/7253101692495973674"


def test_invalid_tiktok_url():
    url = "https://www.example.com"
    with pytest.raises(BadRequest):
        validate_tiktok_url(url)
