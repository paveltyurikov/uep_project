# Generated by Django 2.2.3 on 2019-07-10 09:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('jobs', '0003_auto_20190710_1213'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='job',
            options={'ordering': ['sort_idx', '-created'], 'verbose_name': 'Вакансия', 'verbose_name_plural': 'Вакансии'},
        ),
        migrations.AddField(
            model_name='job',
            name='sort_idx',
            field=models.SmallIntegerField(default=0, verbose_name='sort'),
        ),
    ]
