from rest_framework import serializers

from .models import Job, Responsibility, Expectation, Condition, JobResponse


class ResponsibilitySerializer(serializers.ModelSerializer):
    class Meta:
        model = Responsibility
        exclude = ('created', 'updated',)

class ExpectationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Expectation
        exclude = ('created', 'updated',)


class ConditionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Condition
        exclude = ('created', 'updated',)


class JobResponseSerializer(serializers.ModelSerializer):
    class Meta:
        model = JobResponse
        exclude = ('created', 'updated',)

class JobSerializer(serializers.ModelSerializer):
    responsibilities = ResponsibilitySerializer(many=True, read_only=True)
    expectations = ExpectationSerializer(many=True, read_only=True)
    conditions =  ConditionSerializer(many=True, read_only=True)
    class Meta:
        model = Job
        exclude = ('created', 'updated',)

