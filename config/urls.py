from django.conf import settings
from django.conf.urls import include, url
from django.conf.urls.static import static
from django.contrib import admin
from django.views.generic import TemplateView

index_template = 'index.html'

if settings.WEBPACK:
    index_template = 'webpack_loader.html'

urlpatterns = [
                  url(settings.ADMIN_URL, admin.site.urls),
                  url(r'^summernote/', include('django_summernote.urls')),
                  url(r'^api/nav/', include('apps.navigation.urls')),
                  url(r'^api/appeals/', include('apps.appeals.urls')),
                  url(r'^api/jobs/', include('apps.jobs.urls')),
              ] + static(settings.MEDIA_URL,
                         document_root=settings.MEDIA_ROOT) + static(settings.STATIC_URL,
                                                                     document_root=settings.STATIC_ROOT)
if settings.DEBUG:
    pass

urlpatterns += [url(r'^.*$', TemplateView.as_view(template_name=index_template), name='index')]
