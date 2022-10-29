---
cover: ''
date: 2021-01-10
datetime: 2021-01-10 00:00:00+00:00
description: 'What does it take to create an installable python package that can be
  hosted on pypi? setup.py my This post is somewhat inspired by the bottle framework,
  which '
edit_link: https://github.com/edit/main/pages/blog/minimal-python-package.md
jinja: false
long_description: What does it take to create an installable python package that can
  be hosted on pypi? setup.py my This post is somewhat inspired by the bottle framework,
  which is famously created as a single python module.  Yes, a whole web framework
  is written in o
now: 2022-10-29 15:54:38.064598
path: pages/blog/minimal-python-package.md
slug: minimal-python-package
status: published
super_description: What does it take to create an installable python package that
  can be hosted on pypi? setup.py my This post is somewhat inspired by the bottle
  framework, which is famously created as a single python module.  Yes, a whole web
  framework is written in one file. The name of the package can contain any letters,
  numbers,  Note that pypi treats  This is the version number of your package.  Most
  packages follow Typically most packages use the  These are your external dependencies
  that come from pypi.  T
tags:
- python
templateKey: blog-post
title: Minimal Python Package
today: 2022-10-29
year: 2021
---

What does it take to create an installable python package that can be hosted on pypi?


## What is the minimal python package

* setup.py
* my_module.py


This post is somewhat inspired by the bottle framework, which is famously created as a single python module.  Yes, a whole web framework is written in one file.

## Directory structure

``` bash

.
├── setup.py
└── my_pipeline.py
```


## setup.py

``` python
from setuptools import setup

setup(
    name="",
    version="0.1.0",
    py_modules=["my_pipeline", ],
    install_requires=["kedro"],
)
```

## name

The name of the package can contain any letters, numbers, "_", or "-".  Even if it's for internal/personal consumption only I usually check for discrepancy with pypi so that you don't run into conflicts. 

> Note that pypi treats "-" and "_" as the same thing, beware of name clashes

## version

This is the version number of your package.  Most packages follow
[semver](https://semver.org).  At a high level its three numbers separated by a `.` that follow the format `major.minor.patch`.  It's a common courtesy to only break APIs on major changes, new releases on minor, and fixes on patch.  This can become much more blurry in practice so checkout [semver.org](https://semver.org/).

## py_modules

Typically most packages use the `packages` argument combined with
`find_packages`, but for this minimal package, we are only creating one `.py` file.

## Using packages instead

``` python
from setuptools import setup, find_packages

setup(
    name="",
    version="0.1.0",
    packages=find_packages(),
    install_requires=["kedro"],
)
```


## install_requires
These are your external dependencies that come from pypi.  They go in this list but are often pulled in from a file called `requirements.txt`.  Other developers may look for this file and want to do a `pip install -r
requirements.txt`.

## Clean?

One thing to be careful of here is that everything sits at the top level API, when you users import your module and hit tab they are going to see a lot of stuff unless you hide all of your internal functions behind an `_`.

## Minimal

Can you create a python package with less than two files and less than 8 lines? Should you?  I really like a minimal point to get started from for quick and simple prototypes.  You can always pull a more complicated `cookiecutter` template later if the project is successful.
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
    
    <a class='prev' href='/more-itertools-windowed'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Windowing Python Lists</p>
        </div>
    </a>
    
    <a class='next' href='/minimal-kedro-pipeline'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Minimal Kedro Pipeline</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>