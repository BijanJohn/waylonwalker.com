---
cover: ''
date: 2019-09-18
datetime: 2019-09-18 00:00:00+00:00
description: Quick Progress Bars in python using TQDM
edit_link: https://github.com/edit/main/pages/blog/quick-progress-bars-in-python-using-tqdm.md
jinja: false
long_description: tqdm is one of my favorite general purpose utility libraries in
  python.  It for more gifs like these follow me on twitter TQDM also has a convenience
  function called trange that wraps the range function with a tqdm progress bar automatically.
  There i
now: 2022-10-29 15:54:38.063600
path: pages/blog/quick-progress-bars-in-python-using-tqdm.md
slug: quick-progress-bars-in-python-using-tqdm
status: published
super_description: "tqdm is one of my favorite general purpose utility libraries in
  python.  It for more gifs like these follow me on twitter TQDM also has a convenience
  function called trange that wraps the range function with a tqdm progress bar automatically.
  There is also notebook support.  If you are bouncing between ipython and jupyter
  I recomend importing from the auto module. https://waylonwalker.com/autoreload-ipython
  If you are using notebooks you should enable ipython autoreload \U0001F446"
tags:
- python
templateKey: blog-post
title: Quick Progress Bars in python using TQDM
today: 2022-10-29
year: 2019
---

tqdm is one of my favorite general purpose utility libraries in python.  It
allows me to see progress of multipart processes as they happen.  I really like
this for when I am developing something that takes some amount of time and I am
unsure of performance.  It allows me to be patient when the process is going
well and will finish in sufficient time, and allows me to 💥 kill it and find a
way to make it perform better if it will not finish in sufficient time.

![](/tqdm2.gif)

> for more gifs like these follow me on twitter
[@waylonwalker](https://twitter.com/_WaylonWalker)

**Add a simple Progress bar!**
```python
from tqdm import tqdm
from time import sleep

for i in tqdm(range(10)):
	sleep(1)
```

**convenience**

TQDM also has a convenience function called trange that wraps the range function with a tqdm progress bar automatically.

```python
from tqdm import trange
from time import sleep

for i in trange(range(10)):
	sleep(1)
```


**notebook support**

There is also notebook support.  If you are bouncing between ipython and jupyter I recomend importing from the auto module.

```python
from tqdm.auto import tqdm
from time import sleep

for i in tqdm(range(10)):
	sleep(1)
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/autoreload-ipython/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/autoreload-ipython.jpg" alt="article cover for Autoreload in Ipython"/>
        <p><strong>Autoreload in Ipython</strong></p>
    </a>
</div>


> If you are using notebooks you should enable ipython autoreload 👆
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
    
    <a class='prev' href='/quickly-change-conda-env-with-fzf'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Quickly Change Conda Env With Fzf</p>
        </div>
    </a>
    
    <a class='next' href='/python-deepwatch'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>python-deepwatch</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>