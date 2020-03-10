from django.urls import path
from . import views

app_name = "see_movie"
urlpatterns = [
    path('<int:id>/', views.index, name = "index"),
    path('', views.page_no, name = "page_no"),
]
