# backend/api/admin.py
from django.contrib import admin
from .models import Event, Blog, SIG, Project

admin.site.register(Event)
admin.site.register(Blog)
admin.site.register(SIG)
admin.site.register(Project)