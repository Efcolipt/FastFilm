from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

import requests

def index(request,query):
	api_token = 'a74fc0e2e97b235f41c374ac30a95209'
	url = 'https://api.themoviedb.org/3/search/movie?api_key=' + api_token + '&language=ru-RU&query=' + str(query)
	result = requests.get(url).json()
	return render(request, 'search/search.html',{'result':result,'query':query})
	
def redirectIndex(request):
	return HttpResponseRedirect( reverse('home:index') )