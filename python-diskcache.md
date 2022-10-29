---
cover: ''
date: 2022-03-29
datetime: 2022-03-29 00:00:00+00:00
description: When I need to cache some data between runs or share a cache accross
  multiple Install diskcache into your virtual environement of choice using pip from
  your com
edit_link: https://github.com/edit/main/pages/til/python-diskcache.md
jinja: false
long_description: When I need to cache some data between runs or share a cache accross
  multiple Install diskcache into your virtual environement of choice using pip from
  your command line. There are a couple of different types of cache,  Adding to the
  cache only needs
now: 2022-10-29 15:54:38.066571
path: pages/til/python-diskcache.md
slug: python-diskcache
status: draft
super_description: When I need to cache some data between runs or share a cache accross
  multiple Install diskcache into your virtual environement of choice using pip from
  your command line. There are a couple of different types of cache,  Adding to the
  cache only needs a key and value. Optionally you can set the seconds before it expires.  The
  cache invalidation Diskcache supports tagging entries added to the cache. This seems
  to let you do a few new things like getting items from the cache by You can read
  from th
tags:
- python
templateKey: til
title: How I setup a sqlite cache in python
today: 2022-10-29
year: 2022
---

When I need to cache some data between runs or share a cache accross multiple
processes my go to library in python is `diskcache`.  It's built on sqlite with
just enough cacheing niceties that make it very worth it.

## install diskcache

Install diskcache into your virtual environement of choice using pip from your command line.

```bash
python -m pip install diskcache
```

## setup the cache

There are a couple of different types of cache, `Cache`, `FanoutCache`,
and `DjangoCache`, you can read more about those in the
[docs](https://grantjenks.com/docs/diskcache)

```python
from diskcache import Cache
cache = FanoutCache('.mycache', statistics=True)
```



## Adding to the cache

Adding to the cache only needs a key and value.

``` python
cache.add('me', 'waylonwalker' )
```

## Set the expire time

Optionally you can set the seconds before it expires.  The cache invalidation
tools like this is what really makes diskcache shine over using raw sqlite or
any sort of static file.

``` python
cache.add('me', 'waylonwalker', expire=60)
```

## tagging

Diskcache supports tagging entries added to the cache.

``` python
# add an item to the cache with a tag
cache.add('me', 'waylonwalker', expire=60, tag='people')
```

This seems to let you do a few new things like getting items from the cache by
both key and tag, or evict all tags from the cache.

``` python
# evict all items tagged as 'people' from the cache
cache.evict(tag='people')
```

## Reading from the cache

You can read from the cache by using the `.get` method and giving it the key
you want to retrieve.

```python
who = cache.get('me')
# who == 'waylonwalker'
```

## Cache Misses

Cache misses will return a `None` just like any dictionary `.get` miss.

```
missed = cache.get('missing')
# missed == None
```

## ⭐

Give Grant some love and give
[grantjenks/python-diskcache](https://github.com/grantjenks/python-diskcache) a
⭐.
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
    
    <a class='prev' href='/python-docstring-ast'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Get Python docstring with ast</p>
        </div>
    </a>
    
    <a class='next' href='/python-dict-get'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>python dict get</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>