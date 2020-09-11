from django.urls import path
from django.contrib.auth import views as authViews
from . import views

app_name = "users"
urlpatterns = [
    path('registration', views.registration, name = "registration"),
    path('authorization', authViews.LoginView.as_view(template_name="account/authorization.html"),name="authorization"),
    path('exit', authViews.LogoutView.as_view(next_page="/home"),name="logout")
]
