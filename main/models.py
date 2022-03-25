from django.db import models

class Shortener_link(models.Model):

    #Attribute
    long_link = models.URLField()
    short_link = models.CharField(max_length=100, unique=True)
