# DEVELOPER NOTES

These are notes to help with the development

## Flask

- Running Flask for development:

```bash
python run.py
```

- Running Flask for production with gunicorn:

  - From the CLI:

  ```bash
  python -m pip install -U gunicorn
  ```

  ```bash
  gunicorn --bind 0.0.0.0:8080 server:app
  ```

  - From the Dockerfile

  ```Dockerfile
  RUN pip install -U gunicorn
  CMD ["gunicorn", "--bind", "0.0.0.0:8080", "run:app"]
  ```

## Redis

### Running a local Redis using Docker

- Download and install Docker: [Official Docker Website](https://www.docker.com/products/docker-desktop/)

- Pull the Redis Docker image: Run the following command to pull the Redis Docker image from Docker Hub:

```bash
docker pull redis
```

- Start a Redis container: Run the following command to start a Redis container:

```bash
docker run -d --name my-redis -p 6379:6379 -e REDIS_PASSWORD=REDIS-PASSWORD redis
```

This command starts a Redis container named "my-redis" and maps port 6379 of the container to port 6379 on the host machine.

- To stop the Redis container, you can use the following command:

```bash
docker stop my-redis
```

- To remove the Redis container entirely, you can use the following command:

```bash
docker rm my-redis
```
