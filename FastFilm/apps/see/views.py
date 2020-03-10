from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse
import requests

# Create your views here.
def index(request,id):
	errors = 0
	movie_tracker = False
	series_tracker = False
	series = request.GET.get("series", 0)
	movie = request.GET.get("movie", 0)
	# Api
	api_token_vid = '05kYgyT9G4Z2hggKfwX0hDgbAeUrJumY098'
	api_token_db = 'a74fc0e2e97b235f41c374ac30a95209'

	#Urls
	url_movie = 'https://api.themoviedb.org/3/movie/' + str(id) + '?api_key=' + api_token_db + '&language=ru-RU'
	url_series = 'https://api.themoviedb.org/3/tv/' + str(id) + '?api_key=' + api_token_db + '&language=ru-RU'
	if (movie != 0) :
		movie = requests.get(url_movie).json()
		movie_tracker = True
		if not('status_code' in movie ) :
			url_video_movie = 'https://videocdn.tv/api/short?imdb_id=' + str(movie['imdb_id']) + '&api_token=' + api_token_vid
			video = requests.get(url_video_movie).json()
		else:
			errors = 404

	elif( series != 0):
		series = requests.get(url_series).json()
		series_tracker = True
		url_imdb__id_series = 'https://api.themoviedb.org/3/tv/' + str(id) + '/external_ids?api_key=' + api_token_db
		imdb_req = requests.get(url_imdb__id_series).json()
		if not('status_code' in series)  :
			url_video_series = 'https://videocdn.tv/api/short?imdb_id=' + str(imdb_req['imdb_id']) + '&api_token=' + api_token_vid
			video = requests.get(url_video_series).json()
		else:
			errors = 404

	if video['total'] == 0 :
		video_result = 404
	else:
		video_result = video['data'][0]
	print(series)
	if series_tracker:
		result = series
	else:
		result = movie
	return render(request, 'see/see.html',{'result': result, 'video': video_result, 'series_tracker':series_tracker,'movie_tracker':movie_tracker}  )
	
def page_no(request):
	return HttpResponseRedirect(reverse('home:index'))