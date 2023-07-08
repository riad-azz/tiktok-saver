import json
import subprocess
from app.utils.yt_dlp import get_command
from werkzeug.exceptions import InternalServerError, BadRequest


def get_video_info(video_url: str) -> dict | None:
    command = get_command(video_url)
    try:
        output = subprocess.check_output(command, shell=True)
        json_data = output.decode("utf-8").strip()
        return json.loads(json_data)
    except subprocess.CalledProcessError as e:
        raise BadRequest("Unable to extract video url")
    except json.JSONDecodeError as e:
        print(f"Error while decoding video JSON: {e}")
    except Exception as e:
        print(f"An error occurred while fetching video Json: {e}")

    raise InternalServerError("Internal Server Error")


def format_post_json(post: dict):
    post_type = post.get("_type", None)
    if post_type != "video":
        raise BadRequest("This post does not contain a video")

    is_watermarked = False
    highest_quality = list(filter(lambda item: "h264" in item["vcodec"], post["formats"]))
    no_watermark_videos = list(filter(lambda item: "direct video" in item["format"].lower(), highest_quality))

    video_format = no_watermark_videos[0]
    if not video_format:
        watermark_videos = list(filter(lambda item: "download video" in item["format"].lower(), highest_quality))
        video_format = watermark_videos[0]
        is_watermarked = True

    if not video_format:
        video_format = post["formats"][0]

    if not video_format:
        raise BadRequest("This post does not contain a video")

    video_filename = post.get("filename", "tiktok_video.mp4")
    video_duration = video_format.get("duration", "")
    video_link = video_format.get("url", "")
    video_thumbnail = post.get("thumbnail", "")

    video = {
        "filename": video_filename,
        "duration": video_duration,
        "video_link": video_link,
        "thumbnail": video_thumbnail,
        "is_watermarked": is_watermarked,
    }

    return video


def format_video_info(data: dict):
    if not data:
        raise InternalServerError("Video data is missing")

    return format_post_json(data)
