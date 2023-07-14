from dataclasses import dataclass
from app.utils.models import JSONSerializable


@dataclass
class VideoInfo(JSONSerializable):
    filename: str
    is_watermarked: bool
    duration: int
    description: str
    video_link: str
    thumbnail: str
