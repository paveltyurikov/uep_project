from django.db import models
from apps.core.abstract_models import TimeStamp


class Appeal(TimeStamp):
    name = models.CharField(verbose_name='ФИО', max_length=255, null=True, blank=True)
    phone = models.CharField(verbose_name='телефон', max_length=15, null=True, blank=True)
    message = models.TextField(verbose_name='Сообщение', null=True, blank=True)

    class Meta:
        verbose_name = 'Обращение с сайта'
        verbose_name_plural = 'Обращения с сайта'

    def __str__(self):
        return "{} {}".format(self.name, self.phone)
