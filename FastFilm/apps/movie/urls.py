from django.urls import path
from . import views

app_name = "movie"
urlpatterns = [
    path('<int:page_current>/', views.index, name = "index"),
    path('', views.page_once, name = "page_once")
]
