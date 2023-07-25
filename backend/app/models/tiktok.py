from dataclasses import dataclass
from app.utils.models import SerializableDataclass


@dataclass
class VideoInfo(SerializableDataclass):
    filename: str
    is_watermarked: bool
    duration: int
    description: str
    video_link: str
    thumbnail: str
