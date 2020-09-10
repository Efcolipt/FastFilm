from django.urls import path
from . import views

app_name = "see"
urlpatterns = [
    path('', views.index, name = "index"),
]
