# Local modules
from app.lib.tiktok import validate_tiktok_url


def test_valid_tiktok_url():
    urls_list = [
        "https://m.tiktok.com/random/extra/stuff?v=55",
        "https://tiktok.com/dummy/data/?v=544",
        "https://www.tiktok.com/very/long/url/here/testing?potato=5",
        "https://vm.tiktok.com/@user/v/7541654654"
    ]
    for url in urls_list:
        assert validate_tiktok_url(url) is True


def test_invalid_tiktok_url():
    url = "https://www.example.com"
    valid_url = validate_tiktok_url(url)
    assert valid_url is False
