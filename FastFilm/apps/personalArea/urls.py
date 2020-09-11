from django.urls import path
from . import views

app_name = "personalArea"
urlpatterns = [
    path('',  views.personal ,name="personal")
]


