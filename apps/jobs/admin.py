from django.contrib import admin
from .models import Job, Responsibility, Expectation, Condition


class ResponsibilityInlineAdmin(admin.TabularInline):
    model = Responsibility


class ExpectationInlineAdmin(admin.TabularInline):
    model = Expectation


class ConditionInlineAdmin(admin.TabularInline):
    model = Condition


@admin.register(Job)
class JobAdmin(admin.ModelAdmin):
    model = Job
    list_display = ['id', 'title', 'sort_idx', 'created']
    list_editable = ['title', 'sort_idx']
    search_fields = ['id', ]
    actions = ['job_action', ]
    inlines = [ResponsibilityInlineAdmin,
               ExpectationInlineAdmin,
               ConditionInlineAdmin,
               ]

    def job_action(self, request, queryset):
        pass

    job_action.short_description = "Сделать что-то с job_action"
