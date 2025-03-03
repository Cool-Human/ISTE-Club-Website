# backend/api/serializers.py
from rest_framework import serializers
from .models import Event, Blog, SIG, Project

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'

class BlogSerializer(serializers.ModelSerializer):
    author_username = serializers.ReadOnlyField(source='author.username') # Display username

    class Meta:
        model = Blog
        fields = '__all__'
        read_only_fields = ('author_username',)

class SIGSerializer(serializers.ModelSerializer):
    class Meta:
        model = SIG
        fields = '__all__'

class ProjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Project
        fields = '__all__'