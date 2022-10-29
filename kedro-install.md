---
cover: ''
date: 2021-08-21
datetime: 2021-08-21 00:00:00+00:00
description: Kedro comes with an  https://youtu.be/IWimEs-hHQg You must start by having
  your kedro project either cloned down https://waylonwalker.com/kedro-new/ this post
  c
edit_link: https://github.com/edit/main/pages/blog/kedro-install.md
jinja: false
long_description: Kedro comes with an  https://youtu.be/IWimEs-hHQg You must start
  by having your kedro project either cloned down https://waylonwalker.com/kedro-new/
  this post covers kedro new https://waylonwalker.com/kedro-environment/ This post
  covers creating your
now: 2022-10-29 15:54:38.064061
path: pages/blog/kedro-install.md
slug: kedro-install
status: published
super_description: Kedro comes with an  https://youtu.be/IWimEs-hHQg You must start
  by having your kedro project either cloned down https://waylonwalker.com/kedro-new/
  this post covers kedro new https://waylonwalker.com/kedro-environment/ This post
  covers creating your virtual environment for kedro Make sure you have kedro installed
  in your current Kedro uses the  The command that kedro uses from  If kedro does
  not see a  Lets go ahead and run kedro install on one of the projects we already
  create The first time y
tags:
- kedro
- python
templateKey: blog-post
title: Kedro Install
today: 2022-10-29
year: 2021
---

Kedro comes with an `install` command to install and manage all of your
projects dependencies.

https://youtu.be/IWimEs-hHQg

## cd into your project directory and activate env

You must start by having your kedro project either cloned down
from an existing project or created from kedro new.  Then
activate your environment.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/kedro-new/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/kedro-new.jpg" alt="article cover for Kedro New"/>
        <p><strong>Kedro New</strong></p>
    </a>
</div>


> this post covers kedro new


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/kedro-environment/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/kedro-environment.jpg" alt="article cover for kedro Virtual Environment"/>
        <p><strong>kedro Virtual Environment</strong></p>
    </a>
</div>


> This post covers creating your virtual environment for kedro

## install kedro

Make sure you have kedro installed in your current
environment, if you dont already have it.

``` bash
pip install kedro==0.17.4
```

## pip-tools

Kedro uses the `pip-tools` package under the hood to pin
dependencies in a very robust way to ensure that the project
will continue to work on everyone's machine day, including
production, day in and day out.  No matter what happens to the
dependencies you have installed.

### pip-compile

The command that kedro uses from `pip-tools` is `pip-compile`.  It will look at
what you have in a `requirements.in` file, compile the dependencies down to
exact versions, and create a requirements.txt that is fully pinned down, and
updatable by re-running `pip-compile`.

## requirements.in

If kedro does not see a `requirements.in` file it will automatically move your
`requirements.txt` to `requirements.in` and run `pip-compile`.

``` bash
No requirements.in found. Copying contents from requirements.txt...
```


## kedro install

Lets go ahead and run kedro install on one of the projects we already create
and environment for in a previous post, `kedro-conda`.

``` bash
kedro install
```

The first time you run this on a new repo it is likely that you will run into
this warning about creating a new `requirements.in` file.

``` bash
No requirements.in found. Copying contents from requirements.txt...
```

## kedro install flags

Kedro does let you avoid pip-compile all together, by using the
`--no-build-reqs` flag.

``` bash
kedro install --no-build-reqs
```

It also lets you upgrade all of your dependencies with build-reqs.  I would
reccomend doing this on its own branch, and own pull request.  If you are
working on a team you want everyone to be on the same page when it comes to
dependencies.  If you are not, you surely do not want something to break with a
new set of dependencies without a way of rolling back.

``` bash
kedro install --build-reqs
```
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
    
    <a class='prev' href='/kedro-new'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Kedro New</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-inputs'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How Kedro handles your inputs</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>