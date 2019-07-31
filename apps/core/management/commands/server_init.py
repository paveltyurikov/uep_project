from django.core.management.base import BaseCommand
from django.contrib.auth.models import User
from django.conf import settings


class Command(BaseCommand):
    def handle(self, *args, **options):
        User.objects.all().delete()
        print('Perform check')
        if self.check_defaults():
            self.create_users()
            print('server_init completed')
        else:
            print('server_init was not completed')

    def create_users(self):
        self.create_user(
            username=settings.UEP_ADMIN_LOGIN,
            email='adm@noemail.ru', password=settings.UEP_ADMIN_PASSWORD,
            is_staff=True,
            is_superuser=True
        )

    def create_user(self, username, email, password, is_staff, is_superuser):
        user, created = User.objects.get_or_create(
            username=username, email=email, is_staff=is_staff, is_superuser=is_superuser)
        if created:
            user.set_password(password)
            user.save()
        return user

    def check_defaults(self):
        check_success = True
        for setting in [
            'UEP_ADMIN_LOGIN',
            'UEP_ADMIN_PASSWORD',
        ]:
            if getattr(settings, setting) == 'CHANGE_ME':
                print('!!! In .env file not set {} variable !!!'.format(setting))
                check_success = False
        return check_success
