import re


def test_tiktok_url():
    url = "https://www.tiktok.com/@santiagothewiz/video/7253509446972738859"
    regex_pattern = r"https?://(?:www\.)?tiktok\.com/[@\w]+/video/\d+"
    assert re.match(regex_pattern, url) is not None


def test_invalid_tiktok_url():
    url = "https://www.example.com"
    regex_pattern = r"https?://(?:www\.)?tiktok\.com/[@\w]+/video/\d+"
    assert re.match(regex_pattern, url) is None
