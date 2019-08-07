from django.db import models
from apps.core.abstract_models import TimeStamp


class Job(TimeStamp):
    title = models.CharField(verbose_name='Название вакансии', max_length=255)
    sort_idx= models.SmallIntegerField(verbose_name='sort', default=0)
    class Meta:
        ordering=['sort_idx', '-created']
        verbose_name = 'Вакансия'
        verbose_name_plural = 'Вакансии'

    def __str__(self):
        return self.title


class AbstractJobProperty(TimeStamp):
    def __str__(self):
        return "{} {}".format(self.job.title, self.title)

    class Meta:
        abstract = True


class Responsibility(AbstractJobProperty):
    job = models.ForeignKey('Job', on_delete=models.CASCADE, related_name='responsibilities')
    title = models.CharField(verbose_name='Функции и обязанности', max_length=255)

    class Meta:
        verbose_name = 'Функции и обязанности'
        verbose_name_plural = 'Функции и обязанности'


class Expectation(AbstractJobProperty):
    job = models.ForeignKey('Job', on_delete=models.CASCADE, related_name='expectations')
    title = models.CharField(verbose_name='Мы ожидаем', max_length=255)

    class Meta:
        verbose_name = 'Мы ожидаем'
        verbose_name_plural = 'Мы ожидаем'


class Condition(AbstractJobProperty):
    job = models.ForeignKey('Job', on_delete=models.CASCADE, related_name='conditions')
    title = models.CharField(verbose_name='Условия', max_length=255)

    class Meta:
        verbose_name = 'Условия'
        verbose_name_plural = 'Условия'


class JobResponse(TimeStamp):
    job = models.ForeignKey('Job', on_delete=models.CASCADE, related_name='responses')
    name = models.CharField(verbose_name='ФИО', max_length=255, null=True, blank=True)
    phone = models.CharField(verbose_name='телефон', max_length=15, null=True, blank=True)
    message = models.TextField(verbose_name='Сообщение', null=True, blank=True)

    class Meta:
        verbose_name = 'Отклик на вакансию'
        verbose_name_plural = 'Отклики на вакансию'

    def __str__(self):
        return "".format(self.job.title, self.name, self.phone)
