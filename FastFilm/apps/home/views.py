from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

import requests

def index(request):
	api_token ='a74fc0e2e97b235f41c374ac30a95209'
	url_upcoming = 'https://api.themoviedb.org/3/movie/upcoming?api_key=' + api_token + '&language=ru-RU&page=1'
	url_top = 'https://api.themoviedb.org/3/movie/top_rated?api_key=' + api_token + '&language=ru-RU&page=1'
	upcoming = requests.get(url_upcoming).json()
	top = requests.get(url_top).json()
	return render(request, 'home/index.html',{'upcoming': upcoming,'top':top})
	
