from rest_framework import serializers

from .models import Appeal


class AppealSerializer(serializers.ModelSerializer):

    class Meta:
        model = Appeal
        exclude = ('created', 'updated',)

    def not_blank(self, value):
        if value == '':
            raise serializers.ValidationError('Поле обязательно для заполнения')
        return value

    def validate_message(self, value):
        return self.not_blank(value)
