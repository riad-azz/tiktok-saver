from pydantic import BaseModel


class VideoInfo(BaseModel):
    filename: str
    is_watermarked: bool
    duration: int
    description: str
    video_link: str
    thumbnail: str
