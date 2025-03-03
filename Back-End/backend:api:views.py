# backend/api/views.py
from rest_framework import generics, permissions
from .models import Event, Blog, SIG, Project
from .serializers import EventSerializer, BlogSerializer, SIGSerializer, ProjectSerializer
from django.http import Http404

class EventList(generics.ListCreateAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class EventDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Event.objects.all()
    serializer_class = EventSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class BlogList(generics.ListCreateAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]  # Allow anyone to read, authenticated users to create

    def perform_create(self, serializer):
        serializer.save(author=self.request.user)  # Associate the logged-in user as the author

    def get_queryset(self):
        queryset = Blog.objects.all()
        category = self.request.query_params.get('category')
        if category is not None:
            queryset = queryset.filter(category=category)
        return queryset


class BlogDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Blog.objects.all()
    serializer_class = BlogSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class SIGList(generics.ListAPIView):
    queryset = SIG.objects.all()
    serializer_class = SIGSerializer

class SIGDetail(generics.RetrieveAPIView):
    queryset = SIG.objects.all()
    serializer_class = SIGSerializer
    lookup_field = 'name'  # Use 'name' to retrieve SIGs

    def get_object(self):
        # Override get_object to handle case-insensitive name lookup
        queryset = self.get_queryset()
        name = self.kwargs['name'].lower() # Get the name and convert to lowercase
        try:
            # filter and get the first match, handle case where the name is not found
            obj = queryset.filter(name__iexact=name).first() #Case Insensitive Exact match.
            if obj is None:
                raise Http404("SIG not found")
            return obj
        except SIG.DoesNotExist:
            raise Http404("SIG not found")


class ProjectList(generics.ListCreateAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

class ProjectDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]