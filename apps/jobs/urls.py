from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from .views import JobViewSet

router = DefaultRouter()

router.register(r'', JobViewSet, base_name='job')

urlpatterns = [
    url(r'^', include((router.urls, 'jobs'), namespace='jobs')),
]
