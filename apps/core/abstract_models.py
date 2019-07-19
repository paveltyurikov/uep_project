from django.db import models
from django.utils.translation import ugettext_lazy as _


class TimeStamp(models.Model):
    created = models.DateTimeField(verbose_name=_('Created'), auto_now_add=True)
    updated = models.DateTimeField(verbose_name=_('Updated'), auto_now=True)

    class Meta:
        abstract = True


class Option(TimeStamp):
    name = models.CharField(verbose_name=_('Option'), max_length=100)
    code = models.CharField(verbose_name=_('Unique option code'), max_length=100, unique=True)
    value = models.CharField(verbose_name=_('Option value'), max_length=100, blank=True, null=True)

    class Meta:
        abstract = True
        verbose_name = _('Option')
        verbose_name_plural = _('Options')

    def __str__(self):
        return "{} {} {}".format(self.name, self.code, self.value)
