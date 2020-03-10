from django.urls import path
from . import views

app_name = "search"
urlpatterns = [
    path('<str:query>/', views.index, name = "index"),
    path('', views.redirectIndex, name = "redirectIndex")
]
