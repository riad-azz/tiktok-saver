import json
import subprocess
from app.utils.yt_dlp import get_command


def get_video_info(post_url: str) -> dict:
    command = get_command(post_url)
    try:
        output = subprocess.check_output(command, shell=True)
        json_data = output.decode("utf-8").strip()
        return json.loads(json_data)
    except subprocess.CalledProcessError:
        print(f"Unable to extract video url for : {post_url}")
    except json.JSONDecodeError as e:
        print(f"Error while decoding {post_url} video JSON: {e}")
    except Exception as e:
        print(f"An error occurred while fetching {post_url} video Json: {e}")

    raise Exception(f"Failed to fetch tiktok info for : {post_url}")
