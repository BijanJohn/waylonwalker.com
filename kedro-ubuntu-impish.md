---
cover: ''
date: 2022-01-02
datetime: 2022-01-02 00:00:00+00:00
description: I just installed a brand new Ubuntu 21.10 Impish Indri, and wanted a
  But what I got back was not what I expected This is weird, why cant I run kedro
  new with pi
edit_link: https://github.com/edit/main/pages/til/kedro-ubuntu-impish.md
jinja: false
long_description: 'I just installed a brand new Ubuntu 21.10 Impish Indri, and wanted
  a But what I got back was not what I expected This is weird, why cant I run kedro
  new with pipx?  Lets try pip. Same issue. https://waylonwalker.com/what-is-kedro/
  Curious what kedro '
now: 2022-10-29 15:54:38.065952
path: pages/til/kedro-ubuntu-impish.md
slug: kedro-ubuntu-impish
status: draft
super_description: I just installed a brand new Ubuntu 21.10 Impish Indri, and wanted
  a But what I got back was not what I expected This is weird, why cant I run kedro
  new with pipx?  Lets try pip. Same issue. https://waylonwalker.com/what-is-kedro/
  Curious what kedro is?  Check out this article. The issue is that kedro only runs
  on up to  Theres a couple of ways you can fix this?  They all involve installing
  a Anaconda Python.org deadsnakes pyenv miniconda https://waylonwalker.com/install-miniconda/
  Using minicon
tags:
- kedro
- python
- datascience
templateKey: til
title: Running Kedro on Ubuntu 21.10 Impish Indri
today: 2022-10-29
year: 2022
---

I just installed a brand new Ubuntu 21.10 Impish Indri, and wanted a
kedro project to play with so I did what any good kedroid would do, I
went to my command line and ran

```
pipx run kedro new --starter spaceflights
```

But what I got back was not what I expected!

``` bash
Fatal error from pip prevented installation. Full pip output in file:
    /home/walkers/.local/pipx/logs/cmd_2022-01-01_20.42.16_pip_errors.log

Some possibly relevant errors from pip install:
    ERROR: Could not find a version that satisfies the requirement kedro (from versions: none)
    ERROR: No matching distribution found for kedro
Error installing kedro.
```

This is weird, why cant I run kedro new with pipx?  Lets try pip.

``` bash
pip install kedro
```

Same issue.

``` bash
ERROR: Could not find a version that satisfies the requirement kedro (from versions: none)
ERROR: No matching distribution found for kedro
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


> Curious what kedro is?  Check out this article.

## What's up..
_wrong python version_

The issue is that kedro only runs on up to `python 3.8`, and on Ubuntu
21.10 when you `apt install python3` you get `python 3.9` and the
standard repos don't have an old enough version to run kedro.

## How to fix this?

Theres a couple of ways you can fix this?  They all involve installing a
distribution that does not come from the standard repo.

## Where Can I get the right version

* Anaconda
* Python.org
* deadsnakes
* pyenv
* miniconda

## I have two articles that can help you


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/install-miniconda/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/install-miniconda.jpg" alt="article cover for How to Install miniconda on linux (from the command line only)"/>
        <p><strong>How to Install miniconda on linux (from the command line only)</strong></p>
    </a>
</div>


> Using miniconda

``` bash
conda create -n myenv python=3.8
```

https://waylonwalker.com/til/pyenv-first-impressions/

> Using pyenv

``` bash
pyenv install 3.8.12
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
    
    <a class='prev' href='/kedro-your-first-nodes'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Writing your first kedro Nodes</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-static-viz-0-3-0'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro Static Viz 0.3.0 is out with Hooks Support</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>