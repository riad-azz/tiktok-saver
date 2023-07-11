import json
import subprocess
from app.utils.yt_dlp import get_command


def get_video_info(video_url: str) -> dict | None:
    command = get_command(video_url)
    try:
        output = subprocess.check_output(command, shell=True)
        json_data = output.decode("utf-8").strip()
        return json.loads(json_data)
    except subprocess.CalledProcessError:
        print("Unable to extract video url")
    except json.JSONDecodeError as e:
        print(f"Error while decoding video JSON: {e}")
    except Exception as e:
        print(f"An error occurred while fetching video Json: {e}")

    raise None
