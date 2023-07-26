# Other modules
from dataclasses import dataclass

# Local modules
from app.utils.models import SerializableDataclass


@dataclass
class TestModel(SerializableDataclass):
    title: str
    content: str
