from django.contrib import admin
from django.urls import path,include


urlpatterns = [
    path('',include('home.urls')),
    path('home/',include('home.urls')),
	path('movie/', include('movie.urls')),
    path('series/', include('series.urls')),
	path('see/', include('see.urls')),
    path('admin/', admin.site.urls),
    path('search/', include('search.urls')),
    path('account/', include('users.urls'))
]
