from django.http import Http404,HttpResponseRedirect
from django.contrib.auth import get_user_model
from django.contrib.auth.decorators import login_required
from django.shortcuts import render
from django.http import Http404,HttpResponseRedirect
from django.urls import reverse

@login_required(login_url='/account/authorization')
def personal(request):
    return  render(request, 'personalArea/personal.html')