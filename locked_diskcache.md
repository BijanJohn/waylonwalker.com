---
cover: ''
date: 2021-05-14
datetime: 2021-05-14 00:00:00+00:00
description: Running multiple processes using the same diskcache object can cause
  issues Minimum reporducible error is one of my superpowers in development.  I do
  this Marka
edit_link: https://github.com/edit/main/pages/blog/locked_diskcache.md
jinja: false
long_description: "Running multiple processes using the same diskcache object can
  cause issues Minimum reporducible error is one of my superpowers in development.
  \ I do this Markata has a lot going on.  It \U0001F4DD  Here I have my editor showing
  the file on the top split and "
now: 2022-10-29 15:54:38.063626
path: pages/blog/locked_diskcache.md
slug: locked-diskcache
status: draft
super_description: "Running multiple processes using the same diskcache object can
  cause issues Minimum reporducible error is one of my superpowers in development.
  \ I do this Markata has a lot going on.  It \U0001F4DD  Here I have my editor showing
  the file on the top split and have ran it in the This time lets put the cache in
  a context manager so that it automatically Notice when we run this time when I run
  both splits, they are able to Keep your diskcache open for as little as needed,
  especially if you plan to"
tags:
- python
templateKey: blog-post
title: Python Diskcahe is locked
today: 2022-10-29
year: 2021
---

<script>
change_speed = (speed) => [...document.querySelectorAll('video')].map(v => v.playbackRate=v.playbackRate+speed)
</script>
<style>
</style>

Running multiple processes using the same diskcache object can cause issues
with locks.  As I was trying to setup a rich Live display for markata I ran
into issues where each part could not nun simultaneusly.  As I had followed the
instructions from discache it was not directly aparant to me, so I had to make
a simple example to experiment and play with at a small scale.

## Minimum reproducible error

Minimum reporducible error is one of my superpowers in development.  I do this
very often to sus out what is really happening.  My day to day work is
processing data with python, I keep a number of very small data sets handy to
break and fix.  This helps separate complexities of the project and the problem.

## Let's break it

Markata has a lot going on.  It's a plugins all the way down static site
generator built in python.  Trying to find the root cause through the layers of
plugin and cli modules can be a pain, but in this case building a very simple
minimum reporducible error was much easier.

```python
from pathlib import Path
from diskcache import FanoutCache
import time

CACHE_DIR = Path(".") / ".markata.cache"

if __name__ == "__main__":

    cahe = FanoutCache(CACHE_DIR, statistics=True)
    item = cache.get("me")
    print(item)
    time.sleep(20)
```

> 📝 `time.sleep(20)` is here to simulate doing some other work, while the cache
> object is still open.

## Running locked_diskcache.py

Here I have my editor showing the file on the top split and have ran it in the
two lower splits.  Notice that the first (left split) immediately prints out
the result, while the second one (right split) does not print out the result
until the first is completely finished.

<!-- ![](https://images.waylonwalker.com/locked_discache.gif) -->
<video controls muted autoplay playsinline loop=true width="100%">
    <source src="https://images.waylonwalker.com/locked_discache.webm"
            type="video/webm">
    <source src="https://images.waylonwalker.com/locked_discache.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

<div class='speed-control'>
    <button onclick="change_speed(.25)" >
        speed up
    </button>
    <button onclick="change_speed(-.25)" >
        slow down
    </button>
</div>

## Using a context manager

This time lets put the cache in a context manager so that it automatically
closes after it gets the item.

``` python
from pathlib import Path
from diskcache import FanoutCache
import time

CACHE_DIR = Path(".") / ".markata.cache"

if __name__ == "__main__":

    with FanoutCache(CACHE_DIR, statistics=True) as cache:
        item = cache.get("me")
    print(item)
    time.sleep(20)
```

## Running unlocked_diskcahce.py

Notice when we run this time when I run both splits, they are able to
immediatly print out their result and get to work on that sleep statement.
This time the right right split only takes ~20s rather than ~40s since it no
longer needs to wait for the left one to unlock the cache.

<!-- ![](https://images.waylonwalker.com/unlocked_discache.gif) -->
<video controls muted autoplay playsinline loop=true width="100%">
    <source src="https://images.waylonwalker.com/unlocked_discache.webm"
            type="video/webm">
    <source src="https://images.waylonwalker.com/unlocked_discache.mp4"
            type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

<div class='speed-control'>
    <button onclick="change_speed(.25)" >
        speed up
    </button>
    <button onclick="change_speed(-.25)" >
        slow down
    </button>
</div>

## I've learned

Keep your diskcache open for as little as needed, especially if you plan to
have it open on multiple processes.  Hopefully this problem solving session
helps someone else with their discache problems or find a better way to problem
solve with minimum viable errors.

## Useful Links

* [diskcache-pypi](https://pypi.org/project/diskcache/)
* [diskcache-tutorial](http://www.grantjenks.com/docs/diskcache/tutorial.html)
* [diskcache-github](https://github.com/grantjenks/python-diskcache) 👈 Give it a star
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
    
    <a class='prev' href='/long-variable-names-are-good'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Long variable names are good</p>
        </div>
    </a>
    
    <a class='next' href='/localstack-status-permission'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>localstack status permission</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>