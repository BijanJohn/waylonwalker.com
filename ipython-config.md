---
cover: ''
date: 2020-12-20
datetime: 2020-12-20 00:00:00+00:00
description: I use my ipython terminal daily.  It Activate your virtual environment
  of choice and pip install it.  Any time you You are using a virtual environment
  right? Vi
edit_link: https://github.com/edit/main/pages/blog/ipython-config.md
jinja: false
long_description: I use my ipython terminal daily.  It Activate your virtual environment
  of choice and pip install it.  Any time you You are using a virtual environment
  right? Virtual environments like venv or When you install ipython you start out
  with no config at a
now: 2022-10-29 15:54:38.064243
path: pages/blog/ipython-config.md
slug: ipython-config
status: published
super_description: I use my ipython terminal daily.  It Activate your virtual environment
  of choice and pip install it.  Any time you You are using a virtual environment
  right? Virtual environments like venv or When you install ipython you start out
  with no config at all.  Runnign  This command will create a directory  You can run
  multiple configurations by naming them with  Inside the profile there will be a
  startup directory https://waylonwalker.com/custom-ipython-prompt/ This post creates
  a custom ipython promp
tags:
- python
templateKey: blog-post
title: Ipython-Config
today: 2022-10-29
year: 2020
---

I use my ipython terminal daily.  It's my go to way of running python most of
the time.  After you use it for a little bit you will probably want to setup a
bit of your own configuration.


## install ipython

Activate your virtual environment of choice and pip install it.  Any time you
are running your project in a virtual environment, you will need to install
ipython inside it to access those packages from ipython.


```bash
pip install ipython
```

> You are using a virtual environment right? Virtual environments like venv or
> conda can save you a ton of pain down the road.

## profile_default

When you install ipython you start out with no config at all.  Runnign `ipython
profile create` will start a new profile called `profile_default` that contains
all of the default configuration.

```
ipython profile create
```

This command will create a directory `~/.ipython/profile_default`

## multiple configurations

You can run multiple configurations by naming them with `ipython profile create
[profile_name]` This command will create a directory
`~/.ipython/[profile_name]`

```
ipython profile create my_profile
ipython --profile=my-profile
```

## startup

Inside the profile there will be a startup directory
`~/.ipython/profile_default/startup`.  Ipython will execute each of the files
in this directory on startup.  This is particularly handy to create custom
prompts, search, or import packages automatically for certian profiles.



<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/custom-ipython-prompt/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/custom-ipython-prompt.jpg" alt="article cover for Custom Ipython Prompt"/>
        <p><strong>Custom Ipython Prompt</strong></p>
    </a>
</div>


> This post creates a custom ipython prompt by creating a
> `~/.ipython/profile_default/startup/prompt.py` file.

## ipython_config.py


There are tons of options that are in the `ipython_config.py` file.  My
favorite is to automatically enable my favorite magic command autoreload.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/autoreload-ipython/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/autoreload-ipython.jpg" alt="article cover for Autoreload in Ipython"/>
        <p><strong>Autoreload in Ipython</strong></p>
    </a>
</div>


``` python
c.InteractiveShellApp.extensions = ['autoreload'
c.InteractiveShellApp.exec_lines = []'%autoreload 2']
c.InteractiveShellApp.exec_lines.append('print("Warning: disable autoreload in ipython_config.py to improve performance.")')
```

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
    
    <a class='prev' href='/ipython-help'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Just Ask Ipython for help</p>
        </div>
    </a>
    
    <a class='next' href='/interrogate'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Interrogate is a pretty awesome, brand new, cli for Python packages</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>