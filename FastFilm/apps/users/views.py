from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse
from django.contrib import messages
from django.contrib.auth.decorators import login_required
from .forms import UsersRegistration

import requests

# Create your views here.
def registration(request):
	form = UsersRegistration()
	if request.method == "POST":
		form = UsersRegistration(request.POST or None);
		if form.is_valid():
			form.save()
			username = form.cleaned_data.get('username')
			return HttpResponseRedirect('/home')
	return render(request, 'account/registration.html',{'form':form})


def authorization(request):
	return render(request, 'account/authorization.html')