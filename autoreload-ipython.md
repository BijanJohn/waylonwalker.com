---
cover: ''
date: 2019-09-08
datetime: 2019-09-08 00:00:00+00:00
description: Autoreload in python
edit_link: https://github.com/edit/main/pages/blog/autoreload-ipython.md
jinja: false
long_description: "I have used  \U0001F525 Blazing Fast \U0001F4A5 Keeps me in the
  comfort of my text editor \U0001F44F Allows me to use Jupyter when I need \U0001F45F
  Extremely Reliable One of the biggest benefits that I find is that it shortens the
  distance between my module/library code and test code "
now: 2022-10-29 15:54:38.063421
path: pages/blog/autoreload-ipython.md
slug: autoreload-ipython
status: published
super_description: "I have used  \U0001F525 Blazing Fast \U0001F4A5 Keeps me in the
  comfort of my text editor \U0001F44F Allows me to use Jupyter when I need \U0001F45F
  Extremely Reliable One of the biggest benefits that I find is that it shortens the
  distance between my module/library code and test code inside of a terminal/notebook.
  \ Now I primarily use jupyter notebooks for the presentation aspect.  I develop
  code from the comfort of my editor with all of the tools I have setup, and run the
  functions in a notebook to get the output.  From there I "
tags:
- python
templateKey: blog-post
title: Autoreload in Ipython
today: 2022-10-29
year: 2019
---

I have used `%autoreload` for several years now with great success and 🔥 rapid reloads.  It allows me to move super fast when developing libraries and modules.  They have made some great updates this year that allows class modules to be automatically be updated.

## What I like about autoreload

🔥 Blazing Fast

💥 Keeps me in the comfort of my text editor

👏 Allows me to use Jupyter when I need

👟 Extremely Reliable

One of the biggest benefits that I find is that it shortens the distance between my module/library code and test code inside of a terminal/notebook.  Now I primarily use jupyter notebooks for the presentation aspect.  I develop code from the comfort of my editor with all of the tools I have setup, and run the functions in a notebook to get the output.  From there I might do some aggregations or plots, but the 🥩 meat of development is done outside of jupyter.

> Now I primarily use jupyter notebooks for the presentation aspect.

## Enabling Autoreload

📐 _config_

This is a short script that I use to setup ipython so that it automatically reloads modules.  This allows me to use a separate terminal and editor, and keep data in memory while developing functions.

```bash
ipython profile create
```

Then edit the created file `~/.ipython/profile_default/ipython_config.py`.

```python
c.InteractiveShellApp.extensions = ['autoreload']
c.InteractiveShellApp.exec_lines = ['%autoreload 2']
c.InteractiveShellApp.exec_lines.append('print("Warning: disable autoreload in ipython_config.py to improve performance.")')
```

## According to the docs

[autoreload caveates](https://ipython.org/ipython-doc/3/config/extensions/autoreload.html#caveats "IPython caveats")

> Some of the known remaining caveats are:
>
> Replacing code objects does not always succeed: changing a @property in a class to an ordinary method or a method to a member variable can cause problems (but in old objects only).
> Functions that are removed (eg. via monkey-patching) from a module before it is reloaded are not upgraded.
> C extension modules cannot be reloaded, and so cannot be autoreloaded.

## So what can gets updated??

🤲 _Nearly everything..._

* new/updated functions
* new/updated functions
* new/updated class methods
* new/updated class attributes

## What does not get updated

🔄 _needs restart_

**config** files that are side loaded with modules typically do not get updated in my experience, and I tend to restart the session.

**init** class methods do not get reran, but the session does not need to be reloaded.  The class instance will just need to be re-instanciated.

## Testing out the capabilities

💨 _Watch_ it go

Here is a gif of me taking autoreload out for a test drive.  When creating the session test_autoreload.py does not even exist. From there new functions, classes, attributes, and methods are added in the file and all live reload into ipython.

![](https://images.waylonwalker.com/test_autoreload4.gif)
_for more gifs like these follow me on twitter_ [_@waylonwalker_](https://twitter.com/_WaylonWalker)

## What About Jupyter Notebooks????

💥 _Exactly the Same_

Since jupyter uses ipython in be background Jupyter will use the same `ipython_config.py` file to have autoreload enabled by default.

![](https://images.waylonwalker.com/test_autoreload_jupyter.gif)
_for more gifs like these follow me on twitter_ [_@waylonwalker_](https://twitter.com/_WaylonWalker)

## Go use it now

Take the splash into rapid development of python functions with minimal distance between your modules/library and your ipython/jupyter session.

## Want automatic imports??


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/pyflyby/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/pyflyby.jpg" alt="article cover for Smoother Python with automatic imports | pyflyby"/>
        <p><strong>Smoother Python with automatic imports | pyflyby</strong></p>
    </a>
</div>


> This article covers how I setup automatic imports in ipython
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
    
    <a class='prev' href='/bash'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>📝 Bash Notes</p>
        </div>
    </a>
    
    <a class='next' href='/automating-my-post-starter'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Automating my Post Starter</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>