from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from .views import AppealViewSet

router = DefaultRouter()

router.register(r'', AppealViewSet, base_name='appeal')

urlpatterns = [
    url(r'^', include((router.urls, 'appeal'), namespace='appeal')),
]
