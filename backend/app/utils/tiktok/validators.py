def is_valid_tiktok_domain(url: str):
    allowed_domains = [
        "https://m.tiktok.com/",
        "https://www.tiktok.com/",
        "https://tiktok.com/",
        "https://vm.tiktok.com/"
    ]

    return any(url.startswith(x) and len(url) > len(x) for x in allowed_domains)
