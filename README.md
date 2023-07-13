# Tiktok Saver - SaaS

Download and save Tiktok videos with the highest quality and no watermark.

## About This Project

TikTok Saver is a SaaS (Software as a service) project that enables users to download and save TikTok videos on their devices _(slides are not supported)_. It uses Python with [yt-dlp](https://github.com/yt-dlp/yt-dlp) as the backend and Next.js as the frontend framework.

The whole point of this project is to be used as a SaaS. While you might want to add more security or tweak few things, the service is ready and works as intended for downloading tiktok videos.

If there is anything you think can be improved or can be handled better, please let me know by creating a new issue or contact me on discord `Riad#1732` or the new naming `riad1732`.

## Website Preview

### On Desktop

![desktop preview](https://github.com/riad-azz/readme-storage/blob/main/tiktok-saver/desktop-preview.png?raw=true)

### On Mobile

![mobile preview](https://github.com/riad-azz/readme-storage/blob/main/tiktok-saver/mobile-preview.png?raw=true)

## Running the project

**1.** Install the latest [Docker](https://www.docker.com/) version.

**2.** Cloning the repository:

```bash
git clone https://github.com/riad-azz/tiktok-saver.git
```

**3.** Starting the server:

```bash
cd tiktok-saver
```

```bash
docker-compose up -d --build
```

## Docker Compose

The `docker-compose.yml` is what holds the whole project together and links all the containers.

You can tweak a lot of stuff here, like changing the `REDIS_PASSWORD`, changing `ports` or add more workers to the flask [gunicorn](https://gunicorn.org/) and other stuff, check out [docker compose docs](https://docs.docker.com/compose/) to learn more about it.

## Flask - Backend

First thing you must do is go to `tiktok-saver/backend` and rename `.env.example` to `.env`.

Here is what you need to know:

### Rate limiting

[Flask Limiter](https://flask-limiter.readthedocs.io/en/stable/) is used for rate limiting, you can customize it to your liking in `backend/app/extensions/limiter.py` as for the main settings in `.env`:

- RATELIMIT_ENABLED : pretty straight forwards, this determines wether rate limiting is used or not.

- RATELIMIT_LIMIT : you can set the default rate limit for all routes here , check [flask-limiter docs](https://flask-limiter.readthedocs.io/en/stable/#quick-start) for more details.

- RATELIMIT_REDIS_URL : you can set the URL of your redis here and there is no need to change it because its set up correctly with the `docker-compose.yml`, unless you want to change the password then change it in both the `.env` and in `docker-compose.yml`.

### Cross Origin Resource Sharing (CORS)

[Flask Cors](https://flask-cors.readthedocs.io/en/latest/) is used for Cross Origin Resource Sharing (CORS), you can customize it to your liking in `backend/app/extensions/cors.py` as for the main settings in `.env`:

- CORS_DOMAINS : you can set all the domains that you would like to allow access to the backend API and separate them with a space, if you would like the API to be accessible from anywhere just set it to `"*"`.

## Next.js - Frontend

There isn't really much to change or setup except maybe for the domain and SSL but here is what you need to know:

### SEO Optimization

you can find all the SEO configs in the `frontend/src/configs` folder inside `seo.ts` and `site.ts` where you can tweak stuff like the website URL and name, also in `frontend/public/site.webmanifest`.

### API Configs

you can find the API configs in `frontend/src/configs/api.ts` where you can change the URL's but i do not recommend touching this unless you know what you are doing.

## Nginx

A High-performance web server & reverse proxy. Efficiently serves static files, proxies requests to Flask & Next.js apps, improves performance, handles high traffic, load balances, and enhances scalability.

You can tweak the Nginx settings in `tiktok-saver/nginx/nginx.conf` and add stuff like SSL Certificate (HTTPS) or add your domain, check out [nginx docs](https://docs.nginx.com/) to learn more.

## Contribution

All contribution is welcome, if you think you can improve the project In any way, shape or form please feel free to do so.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details
