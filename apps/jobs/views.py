from django_filters.rest_framework import DjangoFilterBackend
from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response

from .models import Job
from .serializers import JobSerializer, JobResponseSerializer


class PermissionsMixin(object):
    permission_classes_by_action = {
        'create': [IsAuthenticated, ],
        'retrieve': [IsAuthenticated, ],
        'delete': [IsAuthenticated, ],
        'default': [AllowAny]
    }

    def get_permissions(self):
        try:
            # return permission_classes depending on `action`
            return [permission() for permission in self.permission_classes_by_action[self.action]]
        except KeyError:
            # action is not set return default permission_classes
            return [permission() for permission in self.permission_classes_by_action['default']]


class JobViewSet(PermissionsMixin, viewsets.ModelViewSet):
    queryset = Job.objects.all().prefetch_related('responsibilities', 'expectations', 'conditions')
    serializer_class = JobSerializer
    filter_backends = (DjangoFilterBackend,)

    @action(methods=['POST'], detail=True)
    def add_response(self, request, pk, *args, **kwargs):
        data = request.data
        data['job'] = pk
        serializer = JobResponseSerializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers=headers)

    def create(self, request, *args, **kwargs):
        data = request.data
        serializer = self.get_serializer(data=data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return Response(
            serializer.data,
            status=status.HTTP_201_CREATED,
            headers=headers)
