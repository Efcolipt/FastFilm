from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

import requests

# Create your views here.
def Registration(request):
	return render(request, 'account/registration.html')