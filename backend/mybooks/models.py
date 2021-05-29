from django.db import models
from django.conf import settings
from django.db.models.deletion import CASCADE


class Book(models.Model):
    user = models.ForeignKey(settings.AUTH_USER_MODEL,
                             on_delete=models.CASCADE)
    title = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self) -> str:
        return f'Book <titulo: {self.title}>'
