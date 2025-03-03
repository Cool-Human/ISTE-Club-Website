# backend/api/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('events/', views.EventList.as_view(), name='event-list'),
    path('events/<int:pk>/', views.EventDetail.as_view(), name='event-detail'),
    path('blogs/', views.BlogList.as_view(), name='blog-list'),
    path('blogs/<int:pk>/', views.BlogDetail.as_view(), name='blog-detail'),
    path('sigs/', views.SIGList.as_view(), name='sig-list'),
    path('sigs/<str:name>/', views.SIGDetail.as_view(), name='sig-detail'), # Dynamic sig pages
    path('projects/', views.ProjectList.as_view(), name='project-list'),
    path('projects/<int:pk>/', views.ProjectDetail.as_view(), name='project-detail'),
]