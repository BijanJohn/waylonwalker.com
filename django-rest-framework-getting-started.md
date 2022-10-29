---
cover: ''
date: 2022-10-09
datetime: 2022-10-09 00:00:00+00:00
description: In my adventure to learn django, I want to be able to setup REST api
  To get started lets open up a  Now we need to declare  Next I will create all the
  files tha
edit_link: https://github.com/edit/main/pages/til/django-rest-framework-getting-started.md
jinja: false
long_description: In my adventure to learn django, I want to be able to setup REST
  api To get started lets open up a  Now we need to declare  Next I will create all
  the files that I need to get the api running. I already have the following model
  from last time I was p
now: 2022-10-29 15:54:38.065636
path: pages/til/django-rest-framework-getting-started.md
slug: django-rest-framework-getting-started
status: published
super_description: In my adventure to learn django, I want to be able to setup REST
  api To get started lets open up a  Now we need to declare  Next I will create all
  the files that I need to get the api running. I already have the following model
  from last time I was playing with django. It Note the name of the model class is
  singular, this is becuase django will Next I will make some dummy data to be able
  to return.  I popped open  Next we need to set up a serializer to seriaze and de-serialize
  data between Now w
tags:
- python
- django
- webdev
templateKey: til
title: Getting Started with Django REST framework
today: 2022-10-29
year: 2022
---

In my adventure to learn django, I want to be able to setup REST api's to feed
into dynamic front end sites.  Potentially sites running react under the hood.

![cell shaded full body shot of a cybernetic blue soldier with glowing eyes working ina lab, llustration, post grunge, pink glowing volumetric lighting, engulfed in smoke and fog, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem" -s50 -W832 -H416 -C18.0 -Ak_lms -S4270306418](https://stable-diffusion.waylonwalker.com/000327.4270306418.webp)

## Install

To get started lets open up a `todo` app that I created with `django-admin startproject todo`.

``` bash
pip install djangorestframework
```

## Install APP

Now we need to declare `rest_framwork` as an `INSTALLED_APP`.

``` bash
INSTALLED_APPS = [
    ...
    "rest_framework",
    ...
]
```

## create the api app

Next I will create all the files that I need to get the api running.

``` bash
mkdir api
touch api/__init__.py api/serializers.py api/urls.py api/views.py
```

![cell shaded full body shot of a cybernetic blue soldier with glowing eyes working ina lab, llustration, post grunge, pink glowing volumetric lighting, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem" -s50 -W832 -H416 -C7.5 -Ak_lms -S3862698977](https://stable-diffusion.waylonwalker.com/000323.3862698977.webp)

## base/models.py

I already have the following model from last time I was playing with django. It
will suffice as it is not the focus of what I am learning for now.

> Note the name of the model class is singular, this is becuase django will
> automatically pluralize it in places like the admin panel, and you would end
> up with Itemss.

``` python
from django.db import models

# Create your models here.

class Item(models.Model):
    name = models.CharField(max_length=200)
    created = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.priority} {self.name}"
```

Next I will make some dummy data to be able to return.  I popped open `ipython`
and made a few records.

``` python
from base.models import Item

Item.objects.create(name='first')
Item.objects.create(name='second')
Item.objects.create(name='third')
```

## api/serializers.py

Next we need to set up a serializer to seriaze and de-serialize data between
our model and json.  You can specify each field individually or all of them by
passing in `__all__`.


``` python
from rest_framework import serializers

from base.models import Item


class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields = '__all__'
```

## api/views.py

!["cell shaded full body shot of a shiny golden cybernetic soldier with glowing eyes looking through binoculars, llustration, post grunge, pink glowing volumetric lighting, engulfed in smoke and fog, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem" -s50 -W832 -H416 -C18.0 -Ak_lms -S2111691103 cell shaded full body shot of a shiny golden cybernetic soldier with glowing eyes looking through binoculars, llustration, post grunge, pink glowing volumetric lighting, engulfed in smoke and fog, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem command ](https://stable-diffusion.waylonwalker.com/000340.2111691103.webp)

Now we need a view leveraging the `djangorestframework`.  The serializer we
just created will be used to serialize all of the rows into a list of objects
that Response can handle.

> Note: to return a collection of model objects we need to set many to `True`

``` python
from rest_framework.decorators import api_view
from rest_framework.response import Response

from base.models import Item

from .serializers import ItemSerializer


@api_view(["GET"])
def get_data(request):
    items = Item.objects.all()
    serializer = ItemSerializer(items, many=True)
    return Response(serializer.data)

@api_view(['POST'])
def add_item(request):
    serializer = ItemSerializer(data = request.data)
    if serializer.is_valid():
        serializer.save()
    return Response()

```

## api/urls.py

!["cell shaded full body shot of a shiny golden cybernetic soldier with glowing eyes looking at a map, llustration, post grunge, pink glowing volumetric lighting, engulfed in smoke and fog, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem" -s50 -W832 -H416 -C18.0 -Ak_lms -S192089936 ](https://stable-diffusion.waylonwalker.com/000341.192089936.webp)

Now we need to setup routing to access the views through an url.

``` python
from django.urls import path

from . import views

urlpatterns = [
        path('', views.get_data),
        path('add/', views.add_item),
        ]
```

## todo/urls.py

Then we need to include these urls from our api in the urls specified by `settings.ROOT_URLCONf`

``` python
from django.urls import path

urlpatterns = [
    ...
    path("api/", include("api.urls")),
]
```

## Run it

``` python
python manage.py runserver
```

Running the developement server and going to `localhost:8000/api` we can see
the full list of items in th api.

![djangorestframework-get-items](https://screenshots.waylonwalker.com/djangorestframework-get-items.webp)
<div class='prevnext'>

    <style type='text/css'>

    :root {
      --prevnext-color-text: #eefbfe;
      --prevnext-color-angle: #e1bd00c9;
      --prevnext-subtitle-brightness: 3;
    }
    [data-theme="light"] {
      --prevnext-color-text: #1f2022;
      --prevnext-color-angle: #ffeb00;
      --prevnext-subtitle-brightness: 3;
    }
    [data-theme="dark"] {
      --prevnext-color-text: #eefbfe;
      --prevnext-color-angle: #e1bd00c9;
      --prevnext-subtitle-brightness: 3;
    }
    .prevnext {
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      align-items: flex-start;
    }
    .prevnext a {
      display: flex;
      align-items: center;
      width: 100%;
      text-decoration: none;
    }
    a.next {
      justify-content: flex-end;
    }
    .prevnext a:hover {
      background: #00000006;
    }
    .prevnext-subtitle {
      color: var(--prevnext-color-text);
      filter: brightness(var(--prevnext-subtitle-brightness));
      font-size: .8rem;
    }
    .prevnext-title {
      color: var(--prevnext-color-text);
      font-size: 1rem;
    }
    .prevnext-text {
      max-width: 30vw;
    }
    </style>
    
    <a class='prev' href='/do-you-hoist'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Do You Hoist</p>
        </div>
    </a>
    
    <a class='next' href='/django-disallowed-host'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>django disallowed host</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>