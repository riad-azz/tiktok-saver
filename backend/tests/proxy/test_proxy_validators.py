# Local modules
from app.utils.proxy import is_allowed_proxy_domain


def test_valid_proxy_domain():
    urls_list = [
        "https://api16-normal-c-useast1a.tiktokv.com/",
        "https://v77.tiktokcdn.com/",
        "https://v16m.tiktokcdn.com/",
        "https://api16-normal-c-useast1a.tiktokv.com/aweme/v1/play/?video_id=v12044gd0000cile1rbc77u9s4smhvrg&"
        "line=0&is_play_url=1&source=PackSourceEnum_FEED&file_id=023e564f131e40b59a6f7bc85099e7ed&"
        "item_id=7253860622557908266&signv3=video_id;file_id;item_id.09e6e43bafd52daea9d780c5caba0141"]
    for url in urls_list:
        assert is_allowed_proxy_domain(url) is True


def test_invalid_proxy_domain():
    url = "https://www.example.com"
    valid_url = is_allowed_proxy_domain(url)
    assert valid_url is False
