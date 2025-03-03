# backend/api/models.py
from django.db import models
from django.contrib.auth.models import User

class Event(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    date = models.DateTimeField()
    location = models.CharField(max_length=200, blank=True)
    registration_link = models.URLField(blank=True)
    is_upcoming = models.BooleanField(default=True)

    def __str__(self):
        return self.title

class Blog(models.Model):
    CATEGORY_CHOICES = (
        ('technical', 'Technical'),
        ('creative', 'Creative Writing'),
        ('event_report', 'Event Report'),
    )
    title = models.CharField(max_length=200)
    content = models.TextField()
    author = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, blank=True) # Allow anonymous authors
    publication_date = models.DateTimeField(auto_now_add=True)
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES)
    image = models.ImageField(upload_to='blog_images/', blank=True, null=True)


    def __str__(self):
        return self.title


class SIG(models.Model):
    name = models.CharField(max_length=100)
    short_description = models.TextField()
    long_description = models.TextField()
    image = models.ImageField(upload_to='sig_images/', blank = True, null=True)


    def __str__(self):
        return self.name

class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    image = models.ImageField(upload_to='project_images/', blank=True, null=True)
    year = models.IntegerField()  # Year of the Project Expo

    def __str__(self):
        return self.title

#Add more models as you need them.