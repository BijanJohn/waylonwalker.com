---
cover: ''
date: 2021-08-18
datetime: 2021-08-18 00:00:00+00:00
description: 'https://youtu.be/uqiv5LAiJe0 Kedro new is simply a wrapper around the
  cookiecutter templating library.  The https://waylonwalker.com/what-is-kedro/ Unsure
  what '
edit_link: https://github.com/edit/main/pages/blog/kedro-new.md
jinja: false
long_description: https://youtu.be/uqiv5LAiJe0 Kedro new is simply a wrapper around
  the cookiecutter templating library.  The https://waylonwalker.com/what-is-kedro/
  Unsure what kedro is, Check out yesterdays post on What is Kedro. I reccomend using  The
  kedro team do
now: 2022-10-29 15:54:38.064883
path: pages/blog/kedro-new.md
slug: kedro-new
status: published
super_description: https://youtu.be/uqiv5LAiJe0 Kedro new is simply a wrapper around
  the cookiecutter templating library.  The https://waylonwalker.com/what-is-kedro/
  Unsure what kedro is, Check out yesterdays post on What is Kedro. I reccomend using  The
  kedro team does not reccomend  I like using  The kedro team also has a set of starters,
  by passing in  pipx https://waylonwalker.com/kedro-environment/ The next post in
  this series will help you create your virtual environment for your new kedro project.
tags:
- kedro
- python
templateKey: blog-post
title: Kedro New
today: 2022-10-29
year: 2021
---

https://youtu.be/uqiv5LAiJe0

Kedro new is simply a wrapper around the cookiecutter templating library.  The
kedro team maintains a ready made template that has everything you need for a
kedro project.  They also maintain a few kedro starters, which are very similar
to the base template.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


> Unsure what kedro is, Check out yesterdays post on What is Kedro.

## pipx

I reccomend using `pipx` when running kedro new.  `pipx` is designed for system
level cli tools so that you do not need to maintain a virtual environment or
worry about version conflicts, `pipx` manages the environment for you.

The kedro team does not reccomend `pipx` in their docs as they already feel
like there is a bit of a tool overload for folks that may be less familiar with

``` python
pipx kedro new
```

I like using `pipx` as it gives you better control over using a specific
version or always the latest version, unlike when you run what you have on your
system depends on when you last installed or upgraded.

## Kedro New

The kedro team also has a set of starters, by passing in `--starter` you can
start with a different template.  Here is an example with the kedro
spaceflights starter.

``` bash
pipx run kedro new --starter spaceflights

=============
Please enter a human readable name for your new project.
Spaces and punctuation are allowed.
 [New Kedro Project]: Spaceflights Complete

Repository Name:
================
Please enter a directory name for your new project repository.
Alphanumeric characters, hyphens and underscores are allowed.
Lowercase is recommended.
 [spaceflights-complete]:

Python Package Name:
====================
Please enter a valid Python package name for your project package.
Alphanumeric characters and underscores are allowed.
Lowercase is recommended. Package name must start with a letter
or underscore.
 [spaceflights_complete]:

Change directory to the project generated in /home/u_walkews/git/spaceflights-complete

A best-practice setup includes initialising git and creating a virtual environment before running ``kedro install`` to install project-specific dependencies. Refer to the Kedro documentation: https://kedro.readthedocs.io/
```

### Other versions of kedro with pipx

`pipx` not only ensures that you run  the latest version, it can also run a
very specific version.

``` bash
pipx run --spec kedro==0.16.6 kedro new
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/kedro-environment/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/kedro-environment.jpg" alt="article cover for kedro Virtual Environment"/>
        <p><strong>kedro Virtual Environment</strong></p>
    </a>
</div>


> The next post in this series will help you create your virtual environment for your new kedro project.
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
    
    <a class='prev' href='/kedro-parameters'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Setting Parameters in kedro</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-install'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro Install</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>