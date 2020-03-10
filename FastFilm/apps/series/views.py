from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

import requests

def index(request,page_current):
	api_token ='a74fc0e2e97b235f41c374ac30a95209'
	url = 'https://api.themoviedb.org/3/tv/popular?api_key=' + api_token + '&language=ru-RU&page=' + str(page_current) + "&append_to_response=imdb_id"
	result = requests.get(url).json()
	print(result)
	return render(request, 'series/series.html',{'result': result,'page_current':page_current})
	
def page_once(request):
	return HttpResponseRedirect( reverse('series:index',args = (1,)) )