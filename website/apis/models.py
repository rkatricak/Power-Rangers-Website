from django.db import models


class CoreModel(models.Model):
	name = models.CharField(max_length=200)
	color = models.TextField()

	def __str__(self):
		return self.name

class ExtraModel (models.Model):
	name = models.CharField(max_length=200)
	color = models.TextField()

	def __str__(self):
		return self.name