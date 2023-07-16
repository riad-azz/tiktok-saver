# Flask API - Backend

## Getting Started

- Run the development server:

```bash
python server.py
```

Open [http://localhost:5000](http://localhost:5000) with your browser to see the result.

## Rate limiting

Flask Limiter is used for rate limiting. You can customize it in `backend/app/extensions/limiter.py`. The main settings in `.env` are as follows:

- `RATELIMIT_ENABLED` : Setting this to `True` enables rate limiting.

- `RATELIMIT_LIMIT` : You can set the default rate limit for all routes. Check the Flask Limiter documentation for more details.

- `RATELIMIT_REDIS_URL` : This sets the URL of your Redis instance. It is already correctly configured with the `docker-compose.yml`. Only change it if you want to modify the password, in which case, update it in both the `.env` file and `docker-compose.yml`.
