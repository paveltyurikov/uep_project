from django.contrib import admin
from django_summernote.admin import SummernoteModelAdmin
from mptt.admin import DraggableMPTTAdmin

from .models import NavigationItem


@admin.register(NavigationItem)
class NavigationItemAdmin(SummernoteModelAdmin, DraggableMPTTAdmin):
    model = NavigationItem
    list_display = ['indented_title', 'tree_actions',
                    'id', 'url', 'title', 'is_protected', 'app']
    list_display_links = ['indented_title', ]
    list_editable = ['url', 'title', 'is_protected', 'app']

    fieldsets = (
        (None, {
            'fields': ('url', 'title',),

        }),
        ('Настройки', {
            'fields': (('app', 'parent', 'to_homepage', 'is_protected',),),
        }),
        ('Контент', {
            'fields': ('content',),
        }),
    )
