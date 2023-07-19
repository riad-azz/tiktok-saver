# Local modules
from app.utils.tiktok import is_valid_tiktok_domain


def test_valid_tiktok_url():
    urls_list = [
        "https://m.tiktok.com/random/extra/stuff?v=55",
        "https://tiktok.com/dummy/data/?v=544",
        "https://www.tiktok.com/very/long/url/here/testing?potato=5",
        "https://vm.tiktok.com/@user/v/7541654654"
    ]
    for url in urls_list:
        assert is_valid_tiktok_domain(url) is True


def test_invalid_tiktok_url():
    url = "https://www.example.com"
    valid_url = is_valid_tiktok_domain(url)
    assert valid_url is False
