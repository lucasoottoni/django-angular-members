from dataclasses import field
from rest_framework import serializers
from .models import Member


class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields =['id', 'name', 'surname', 'phone', 'image', 'image2']
   
class MemberSimpleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields =['id', 'name','surname']
