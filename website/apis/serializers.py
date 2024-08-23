# import serializer from rest_framework
from rest_framework import serializers

# import model from models.py
from .models import CoreModel, ExtraModel

# Create a model serializer
class CoreSerializer(serializers.HyperlinkedModelSerializer):
	# specify model and fields
	class Meta:
		model = CoreModel
		fields = ('name', 'color')

class ExtraSerializer(serializers.HyperlinkedModelSerializer):
	# specify model and fields
	class Meta:
		model = ExtraModel
		fields = ('name', 'color')