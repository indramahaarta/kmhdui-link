from django.http import HttpResponse
from django.shortcuts import render, redirect
from main.models import Shortener_link

def index(request) :

    return render(request, "main.html", {})


def create(request) :

    if request.method == "POST" and is_ajax(request):

        short_url = request.POST.get('short_url')
        long_url = request.POST.get('long_url')

        try :
            old_url = Shortener_link.objects.get(short_link = short_url)
            old_url.long_link = long_url
        except :
            newUrl = Shortener_link.objects.create(long_link=long_url, short_link=short_url)
            newUrl.save()
    
    return render(request, 'main.html')


def main_url(request, url):

    try :
        object = Shortener_link.objects.get(short_link= url)
        return redirect(object.long_link)
    except :
        return render(request, 'notFoundPage.html')
        

def is_ajax(request):
    return request.META.get('HTTP_X_REQUESTED_WITH') == 'XMLHttpRequest'