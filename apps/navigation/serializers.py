from rest_framework import serializers

from .models import NavigationItem


class NavigationItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = NavigationItem
        exclude = ('created', 'updated',)

