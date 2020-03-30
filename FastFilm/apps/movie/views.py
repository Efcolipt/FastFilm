from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

import requests

def index(request,page_current):
	api_token ='a74fc0e2e97b235f41c374ac30a95209'
	url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + api_token + '&language=ru-RU&page=' + str(page_current)
	result = requests.get(url).json()
	return render(request, 'movie/films.html',{'result': result,'page_current':page_current})
	
def page_once(request):
	return HttpResponseRedirect( reverse('movie:index',args = (1,)) )