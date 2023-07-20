# Tiktok Saver - SaaS

TikTok Saver is a Software as a Service (SaaS) application that allows users to download and save TikTok videos without watermarks and in the highest quality.

## About This Project

TikTok Saver is a SaaS project that enables users to download and save TikTok videos on their devices. Please note that slides are not supported. The backend of the application is built using Python with [yt-dlp](https://github.com/yt-dlp/yt-dlp), while the frontend is developed using the Next.js framework.

The purpose of this project is to provide a ready-to-use SaaS solution for downloading TikTok videos. While you can make security enhancements or make other tweaks, the service is already functional and works as intended for downloading TikTok videos.

If you have any suggestions for improvements, better handling of certain aspects, or if you encounter any issues, please let me know by creating a new issue or contacting me on Discord `_riad_`.

## Website Preview

This is the website preview on desktop and mobile:

![website preview](https://github.com/riad-azz/readme-storage/blob/main/tiktok-saver/website-preview.png?raw=true)

## Getting Started

Install the latest version of [Docker](https://www.docker.com/) then follow these steps:

**1.** Clone the repository:

```bash
git clone https://github.com/riad-azz/tiktok-saver.git
```

**2.** Navigate to the project folder:

```bash
cd tiktok-saver
```

**3.** Starting the server:

Run this command for the first build:

```bash
# Build and run the server
docker-compose up -d --build

# Run the server
docker-compose up -d
```

Note: make sure Docker is installed and running before using `docker-compose` command.

## Contribution

All contributions are welcome! If you believe you can improve this project in any way, shape, or form, please feel free to do so.

## License

This project is licensed under the [MIT] License - see the LICENSE.md file for details
