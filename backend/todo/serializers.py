from rest_framework import serializers
from .models import Todo

class TodoSerializer(serializers.ModelField):
    class Meta:
        model = Todo
        fields = ('id', 'title', 'description', 'completed')
   