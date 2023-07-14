# Tiktok Saver - SaaS

TikTok Saver is a Software as a Service (SaaS) application that allows users to download and save TikTok videos without watermarks and in the highest quality.

## About This Project

TikTok Saver is a SaaS project that enables users to download and save TikTok videos on their devices. Please note that slides are not supported. The backend of the application is built using Python with [yt-dlp](https://github.com/yt-dlp/yt-dlp), while the frontend is developed using the Next.js framework.

The purpose of this project is to provide a ready-to-use SaaS solution for downloading TikTok videos. While you can make security enhancements or make other tweaks, the service is already functional and works as intended for downloading TikTok videos.

If you have any suggestions for improvements, better handling of certain aspects, or if you encounter any issues, please let me know by creating a new issue or contacting me on Discord (`Riad#1732`) or using the new naming (`riad1732`).

## Website Preview

### On Desktop

![desktop preview](https://github.com/riad-azz/readme-storage/blob/main/tiktok-saver/desktop-preview.png?raw=true)

### On Mobile

![mobile preview](https://github.com/riad-azz/readme-storage/blob/main/tiktok-saver/mobile-preview.png?raw=true)

## Getting Started

**1.** Install the latest version of [Docker](https://www.docker.com/).

**2.** Clone the repository:

```bash
git clone https://github.com/riad-azz/tiktok-saver.git
```

**3.** Start the server:

```bash
cd tiktok-saver
```

```bash
docker-compose up -d --build
```

Note: make sure Docker is running before using `docker-compose` command.

## Project Setup

### Docker Compose

The `tiktok-saver/docker-compose.yml` file is responsible for connecting and managing all the containers in the project.

You can customize various aspects here, such as changing the `REDIS_PASSWORD`, modifying ports, or adding more workers to the Flask gunicorn server. For more information, refer to the [Docker Compose documentation](https://docs.docker.com/compose/).

### Flask - Backend

First thing you must do is go to `tiktok-saver/backend` and rename `.env.example` to `.env`.

Here is what you need to know:

**Rate limiting**: Flask Limiter is used for rate limiting. You can customize it in `backend/app/extensions/limiter.py`. The main settings in `.env` are as follows:

- `RATELIMIT_ENABLED` : Setting this to `True` enables rate limiting.

- `RATELIMIT_LIMIT` : You can set the default rate limit for all routes. Check the Flask Limiter documentation for more details.

- `RATELIMIT_REDIS_URL` : This sets the URL of your Redis instance. It is already correctly configured with the `docker-compose.yml`. Only change it if you want to modify the password, in which case, update it in both the `.env` file and `docker-compose.yml`.

Refer to the [Flask Limiter documentation](https://flask-limiter.readthedocs.io/en/stable/) for further information.

**Cross Origin Resource Sharing (CORS)**: Flask Cors is used for Cross Origin Resource Sharing (CORS). You can customize it in `backend/app/extensions/cors.py`. The main setting in `.env` is:

- `CORS_DOMAINS` : You can set the domains that are allowed to access the backend API. Separate multiple domains with a space. If you want the API to be accessible from anywhere, set it to `"*"`.

Refer to the [Flask Cors documentation](https://flask-cors.readthedocs.io/en/latest/) for further information.

### Next.js - Frontend

There isn't much to change or set up here. Here's what you need to know:

**SEO Optimization**: You can find all the SEO configurations in the `frontend/src/configs` folder, specifically in `seo.ts` and `site.ts`. You can adjust settings such as the website URL, name.

**API Configs**: The API configurations can be found in `frontend/src/configs/api.ts`. Only modify these settings if you know what you are doing.

### Nginx

Nginx is a high-performance web server and reverse proxy that efficiently serves static files, proxies requests to Flask and Next.js apps, improves performance, handles high traffic, load balances, and enhances scalability.

You can customize Nginx settings in `tiktok-saver/nginx/nginx.conf`.

For more information, refer to the [Nginx documentation](https://docs.nginx.com/).

## Contribution

All contributions are welcome! If you believe you can improve this project in any way, shape, or form, please feel free to do so.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details
