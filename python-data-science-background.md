---
cover: ''
date: 2019-09-10
datetime: 2019-09-10 00:00:00+00:00
description: This post is intended as an extension/update from  This post is intended
  as an extension/update from  I use it in more places than I probably should Before
  we g
edit_link: https://github.com/edit/main/pages/blog/python-data-science-background.md
jinja: false
long_description: 'This post is intended as an extension/update from  This post is
  intended as an extension/update from  I use it in more places than I probably should
  Before we get into it, I want to make a shout out to Kenneth Reitz for making this
  so easy.  Kenneth '
now: 2022-10-29 15:54:38.064947
path: pages/blog/python-data-science-background.md
slug: python-data-science-background
status: published
super_description: This post is intended as an extension/update from  This post is
  intended as an extension/update from  I use it in more places than I probably should
  Before we get into it, I want to make a shout out to Kenneth Reitz for making this
  so easy.  Kenneth is a python God for all that he has given to the community in
  so many ways, especially with his ideas in building stupid simple api I believe
  one of the later pr Imagine that this function is a big one If we were to call this
  function 10 times it wou
tags:
- python
- data
templateKey: blog-post
title: Background Tasks in Python for Data Science
today: 2022-10-29
year: 2019
---

This post is intended as an extension/update from [background tasks in
python](https://waylonwalker.com/background-1/).  I started using `background`
the week that Kenneth Reitz released it.  It takes away so much boilerplate
from running background tasks that I use it in more places than I probably
should. After taking a look at that post today, I wanted to put a better data
science example in here to help folks get started.

This post is intended as an extension/update from [background tasks in python](https://waylonwalker.com/background-1/).  I started using `background` the week that Kenneth Reitz released it.  It takes away so much boilerplate from running background tasks that I use it in more places than I probably should. After taking a look at that post today, I wanted to put a better data science example in here to help folks get started.

> I use it in more places than I probably should

Before we get into it, I want to make a shout out to Kenneth Reitz for making this so easy.  Kenneth is a python God for all that he has given to the community in so many ways, especially with his ideas in building stupid simple api's for very complicated things.

## Installation

### install via pip

    pip install background

### install via github

I believe one of the later pr's to the project fixes the way arguments are passed in.  I generally clone the repo or copy the module directly into my project.

**clone it**

    git clone https://github.com/ParthS007/background.git
    cd background
    python setup.py install

**copy the module**

    curl https://raw.githubusercontent.com/ParthS007/background/master/background.py > background.py

## 🐌 The Slow Function

Imagine that this function is a big one!  This function is fairly realistic as it takes in some input and returns a DataFrame.  This is what a good half of my fuctions do in data science.  The internals of this function generally will include a sql query, load from s3 or a data catalog, an aggregation from another DataFrame.  In general it should do one simple thing.

**Feel Free to copy this "boilerplate"**

``` python
import background
from time import sleep
import pandas as pd

@background.task
def long_func(i):
    """
    Simulates fetching data from a service
    and returning a pandas DataFrame.

    """
    sleep(10)
    return pd.DataFrame({'number_squared': [i**2]})
```

## Calling the Slow Function

_it's the future calling 🤙_

If we were to call this function 10 times it would take 100s.  Not bad for a dumb example, but detrimental when this gets scaled up💥.  We want to utilize all of our available resources to reduce our development time and get moving on our project.

Calling `long_func` will return a future object.  This object has a number of methods that you can read about in the [cpython docs](https://docs.python.org/3/library/concurrent.futures.html#future-objects).  The main one we are interested in is `result`.  I typically call these functions many times and put them into a list object so that I can track their progress and get their results.  If you needed to map inputs back to the result use a dictionary.

``` python
%time futures = [long_func(i) for i in range(10)]

CPU times: user 319 µs, sys: 197 µs, total: 516 µs
Wall time: 212 µs
```

## Do something with those `results()`

Simply running the function completes in no time! This is because the future objects that are returned are non blocking and will run in a background task using the `ProcessPoolExecutor`.  To get the result back out we need to call the `result` method on the future object.`result` is a blocking function that will not realease until the function has completed.

``` python
%%time
futures = [long_func(i) for i in range(10)]
pd.concat([future.result() for future in futures])

CPU times: user 5.38 ms, sys: 3.53 ms, total: 8.9 ms
Wall time: 10 s
```

Note that this example completed in `10s`, the time it took for only one run, not all 10! 😎

## n

😫 _crank it up_

By default the number of parallel processes wil be equal to the number of cpu threads on your machine. To increase the number of parallel processes (`max_workers`) set increase `background.n`.

``` python
background.n = 100
```

## Is it possible to overruse @background.task?

I use this essentially anywhere that I cannot vectorize a python operation and push the compute down into those fast 💨 c extended libraries like numpy, and the operation takes more than a few minutes.  Nearly every big network request I make gets broken down into chunks and multithreaded.  Let me know... is is possible to overruse `@background.task`? Let me know your thoughts [@_WaylonWalker](https://twitter.com/_WaylonWalker).

## Repl.It

Play with the code here!  Try different values of background.n and n_runs.

<iframe height="800px" width="100%" src="https://replit.com/@WaylonWalker/TestRepl?lite=true" scrolling="no" frameborder="no" allowtransparency="true" allowfullscreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals"></iframe>
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
    
    <a class='prev' href='/python-deepwatch'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>python-deepwatch</p>
        </div>
    </a>
    
    <a class='next' href='/python-args-kwargs-slides'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>SLIDES - understanding python \*args and \*\*kwargs</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>