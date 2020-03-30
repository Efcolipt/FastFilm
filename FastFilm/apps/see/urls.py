from django.urls import path
from . import views

app_name = "see_movie"
urlpatterns = [
    path('', views.index, name = "index"),
]
