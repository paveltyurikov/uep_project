from django.contrib import admin
from .models import Appeal


@admin.register(Appeal)
class AppealAdmin(admin.ModelAdmin):
    model = Appeal
    list_display = ['id', 'created']
    search_fields = ['id', ]
