def is_allowed_proxy_domain(url: str):
    allowed_domains = [
        "https://api16-normal-c-useast1a.tiktokv.com/",
        "https://v77.tiktokcdn.com/",
        "https://v16m.tiktokcdn.com/",
    ]

    return any(url.startswith(x) for x in allowed_domains)
