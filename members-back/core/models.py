from distutils.command.upload import upload
from email.mime import image
from django.db import models

# Create your models here.

def upload_image(instance, filename):
    return f"{instance.id}-{filename}"

class Member(models.Model):
    name = models.CharField(max_length=100)
    surname = models.CharField(max_length=100)
    phone=models.CharField(max_length=100)
    email=models.EmailField()
    adress=models.CharField(max_length=200)
    image=models.ImageField(upload_to='members_profile', blank=True, null = True)
    image2= models.ImageField(upload_to='upload_image', blank=True, null=True)

    def __str__(self):
        return self.name + self.surname