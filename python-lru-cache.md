---
cover: ''
date: 2022-03-28
datetime: 2022-03-28 00:00:00+00:00
description: The easiest way to speed up any code is to run less code.  A common technique
  The easiest and most common to setup in python is a builtin functools.lru Any time
edit_link: https://github.com/edit/main/pages/til/python-lru-cache.md
jinja: false
long_description: 'The easiest way to speed up any code is to run less code.  A common
  technique The easiest and most common to setup in python is a builtin functools.lru
  Any time you have a function where you expect the same results each time a when
  same  lru lru lru '
now: 2022-10-29 15:54:38.065965
path: pages/til/python-lru-cache.md
slug: python-lru-cache
status: draft
super_description: The easiest way to speed up any code is to run less code.  A common
  technique The easiest and most common to setup in python is a builtin functools.lru
  Any time you have a function where you expect the same results each time a when
  same  lru lru lru The  The example above does a web request.  As a Data Engineer
  I often write scripts web request do change their output If I were building webapps,
  or some sort of process that was running for a long This one is new to me but you
  can cache not only o
tags:
- python
templateKey: til
title: Cache a python function with lru_cache
today: 2022-10-29
year: 2022
---

The easiest way to speed up any code is to run less code.  A common technique
to reduce the amount of repative work is to implement a cache such that the
next time you need the same work done, you don't need to recompute anything you
can simply retrieve it from a cache.

## lru_cache

The easiest and most common to setup in python is a builtin functools.lru_cache.

```python
from functools import lru_cache

@lru_cache
def get_cars():
    print('pulling cars data')
    return pd.read_csv("https://waylonwalker.com/cars.csv", storage_options = {'User-Agent': 'Mozilla/5.0'})
```

## when to use lru_cache

Any time you have a function where you expect the same results each time a
function is called with the same inputs, you _can_ use lru_cache.

> when same *args, **kwargs always return the same value

lru_cache only works for one python process.  If you are running multiple
subprocesses, or running the same script over and over, lru_cache will not
work.

> lru_cache only caches in a single python process

## max_size

lru_cache can take an optional parameter `maxsize` to set the size of your
cache.  By default its set to `128`, if you want to store more or less items in
your cache you can adjust this value.

The `get_cars` example is a bit of a unique one.  As
[anthonywritescode](https://www.youtube.com/watch?v=K0Q5twtYxWY) points out
this implementation is behaving like a singleton, and we can optimize the size
of the cache by allocating exactly how many items we will ever have in it by
setting its value to 1.

```python
from functools import lru_cache

@lru_cache(maxsize=1)
def get_cars():
    print('pulling cars data')
    return pd.read_csv("https://waylonwalker.com/cars.csv", storage_options = {'User-Agent': 'Mozilla/5.0'})
```

## My example stretches the rule a little bit

The example above does a web request.  As a Data Engineer I often write scripts
that run for a short time then stop.  I do not expect the output of this
function to change during the runtime of this job, and if it did I may actually
want them to match anyways.

> web request do change their output

If I were building webapps, or some sort of process that was running for a long
time.  Something that starts and waits for work, this may not be a good
application of lru_cache.  If this process is running for days or months my
assumption that the request does not change is no longer valid.

## There's also a typed kwarg for lru_cache

This one is new to me but you can cache not only on the value, but the type of
the value being passed into your function.

> (from the docstring)
> If *typed* is True, arguments of different types will be cached separately.
> For example, f(3.0) and f(3) will be treated as distinct calls with distinct
> results.
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
    
    <a class='prev' href='/python-markdown-ast-paragraph'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Using a Python Markdown ast to Find All Paragraphs</p>
        </div>
    </a>
    
    <a class='next' href='/python-git'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Using Git from Python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>