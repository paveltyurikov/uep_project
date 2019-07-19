from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from .views import NavigationItemViewSet

router = DefaultRouter()

router.register(r'', NavigationItemViewSet, base_name='navigation_item')

urlpatterns = [
    url(r'^', include((router.urls, 'navigation'), namespace='navigation')),
]
