---
cover: ''
date: 2021-01-20
datetime: 2021-01-20 00:00:00+00:00
description: "How small can a minimum kedro pipeline ready to package be?  I made
  one within 4 files that you can pip install.  It \U0001F4DD Note this is only a
  composable pipeline, "
edit_link: https://github.com/edit/main/pages/blog/minimal-kedro-pipeline.md
jinja: false
long_description: "How small can a minimum kedro pipeline ready to package be?  I
  made one within 4 files that you can pip install.  It \U0001F4DD Note this is only
  a composable pipeline, not a full project, it does not contain a catalog or runner.
  I have everything for this po"
now: 2022-10-29 15:54:38.065091
path: pages/blog/minimal-kedro-pipeline.md
slug: minimal-kedro-pipeline
status: published
super_description: "How small can a minimum kedro pipeline ready to package be?  I
  made one within 4 files that you can pip install.  It \U0001F4DD Note this is only
  a composable pipeline, not a full project, it does not contain a catalog or runner.
  I have everything for this post hosted in this  This repo represents the minimal
  amount of structure to build a kedro pipeline that can be shared across projects.
  \ Its installable, and drops right into your  This is a sharable pipeline that can
  be used across many different proj"
tags:
- python
- kedro
- data
templateKey: blog-post
title: Minimal Kedro Pipeline
today: 2022-10-29
year: 2021
---

How small can a minimum kedro pipeline ready to package be?  I made one within 4 files that you can pip install.  It's only a total of 35 lines of python, 8 in `setup.py` and 27 in `mini_kedro_pipeline.py`.

> 📝 Note this is only a composable pipeline, not a full project, it does not contain a catalog or runner.

## Minimal Kedro Pipeline

I have everything for this post hosted in this [gihub repo](https://github.com/WaylonWalker/mini-kedro-pipeline), you can fork it, clone it, or just follow along.

## Installation

``` bash
pip install git+https://github.com/WaylonWalker/mini-kedro-pipeline
```

## Caveats

This repo represents the minimal amount of structure to build a kedro pipeline that can be shared across projects.  Its installable, and drops right into your `hooks.py` or `run.py` modules.  It is not a runnable pipeline.  At this point
I think the config loader requires to have a logging config file.

This is a sharable pipeline that can be used across many different projects.

## Usage

``` python
# hooks.py

import mini_kedro_project as mkp

class ProjectHooks:
    @hook_impl
    def register_pipelines(self) -> Dict[str, Pipeline]:
        """Register the project's pipeline.

        Returns:
            A mapping from a pipeline name to a ``Pipeline`` object.

        """

        return {"__default__": Pipeline([]), "mkp": mkp.pipeline}
```

## Implemantation

This builds on another post that I made about creating the minimal python package.  I am not sure if it should be called a package, it's a module, but what do you call it after you build it and host it on pypi?


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/minimal-python-package/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/minimal-python-package.jpg" alt="article cover for Minimal Python Package"/>
        <p><strong>Minimal Python Package</strong></p>
    </a>
</div>


## Directory structure

``` bash
.
├── .gitignore
├── README.md
├── setup.py
└── my_pipeline.py
```

## setup.py

This is a very minimal `setup.py`.  This is enough to get you started with a package that you can share across your team.  In practice, there is a bit more that you might want to include as your project grows.

``` python
from setuptools import setup

setup(
    name="MiniKedroPipeline",
    version="0.1.0",
    py_modules=["mini_kedro_pipeline"],
    install_requires=["kedro"],
)
```

## mini_kedro_pipeline.py

The mini kedro pipeline looks like any set of nodes in your project.  Many projects will separate nodes and functions, I prefer to keep them close together.  The default recommendation is also to have a `create_pipelines` function that returns the pipeline.

This pattern creates a singleton, if you were to reference the same pipeline in multiple places within the same running interpreter and modify the one you would run into issues.  I don't foresee myself running into this issue, but maybe as more features become available I will change my mind.

``` python
"""
An example of a minimal kedro pipeline project
"""
from kedro.pipeline import Pipeline, node

__version__ = "0.1.0"
__author__ = "Waylon S. Walker"

nodes = []


def create_data():
    "creates a dictionary of sample data"
    return {"beans": range(10)}


nodes.append(node(create_data, None, "raw_data", name="create_raw_data"))


def mult_data(data):
    "multiplies each record of each item by 100"
    return {item: [i * 100 for i in data[item]] for item in data}


nodes.append(node(mult_data, "raw_data", "mult_data", name="create_mult_data"))

pipeline = Pipeline(nodes)
```
## Kedro in scripts


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/kedro-in-scripts/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/kedro-in-scripts.jpg" alt="article cover for Using Kedro In Scripts"/>
        <p><strong>Using Kedro In Scripts</strong></p>
    </a>
</div>


> If you enjoyed this one check out this companion article where I build a fully runnable kedro project in a single script.

## Share your pipelines

Go forth and share your pipelines across projects.  Let me know, do you share pipelines or catalogs across projects?
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
    
    <a class='prev' href='/minimal-python-package'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Minimal Python Package</p>
        </div>
    </a>
    
    <a class='next' href='/master-no-more'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Master No More</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>