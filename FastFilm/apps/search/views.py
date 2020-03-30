from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

import requests

def index(request,query):
	error = False
	# Api
	api_token_db = 'a74fc0e2e97b235f41c374ac30a95209'

	#Urls
	url_multu = 'https://api.themoviedb.org/3/search/multi?api_key=' + api_token_db + '&language=ru-RU&query=' + str(query)

	request_multu = requests.get(url_multu).json()
	if request_multu['total_results'] == 0 or 'status_code' in request_multu:
		error = True
		result = 404
	else:
		result = request_multu

	return render(request, 'search/search.html',{'result':result,'query':query,'error':error})
	
def redirectIndex(request):
	return HttpResponseRedirect( reverse('home:index') )