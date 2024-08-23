# import viewsets
from rest_framework import viewsets

# import local data
from .serializers import CoreSerializer, ExtraSerializer
from .models import CoreModel, ExtraModel

# create a viewset


class CoreViewSet(viewsets.ModelViewSet):
	# define queryset
	queryset = CoreModel.objects.all()

	# specify serializer to be used
	serializer_class = CoreSerializer

class ExtraViewSet(viewsets.ModelViewSet):
	# define queryset
	queryset = ExtraModel.objects.all()

	# specify serializer to be used
	serializer_class = ExtraSerializer