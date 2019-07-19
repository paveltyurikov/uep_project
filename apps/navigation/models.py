from django.db import models
from mptt.models import MPTTModel, TreeForeignKey

from apps.core.abstract_models import TimeStamp

PAGE_APP_CHOICES = (
    ('redirect', 'Redirect'),
    ('pages', 'Простая страница'),
    ('jobs', 'Вакансии'),
    ('test', 'Тестовое приложение'),
)


class NavigationItem(TimeStamp, MPTTModel):
    parent = TreeForeignKey('NavigationItem',
                            on_delete=models.CASCADE,
                            null=True, blank=True,
                            related_name='children')
    url = models.CharField(verbose_name='URL', help_text='Веедите слово в виде about/', max_length=255, unique=True)
    title = models.CharField(verbose_name='Заголовок', max_length=255)
    app = models.CharField(verbose_name='Тип страницы', max_length=50,
                           help_text='Выберите приложение для страницы', choices=PAGE_APP_CHOICES, default='page')
    content = models.TextField(verbose_name='Содержание', null=True, blank=True)
    is_protected = models.BooleanField(verbose_name='Защитить паролем', default=False)
    to_homepage = models.BooleanField(verbose_name='Отображать контент на главной?', default=False)

    class Meta:
        verbose_name = 'Страница сайта'
        verbose_name_plural = 'Страницы сайта'

    def __str__(self):
        return "{} {}".format(self.title, self.url)
