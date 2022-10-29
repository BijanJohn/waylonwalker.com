---
cover: ''
date: 2021-03-20
datetime: 2021-03-20 00:00:00+00:00
description: With the realease of  create a  register_pipelines register hook_impl
  class You should now have something that looks like this in your pipeline I was
  not able t
edit_link: https://github.com/edit/main/pages/blog/kedro-pipeline-registry.md
jinja: false
long_description: With the realease of  create a  register_pipelines register hook_impl
  class You should now have something that looks like this in your pipeline I was
  not able to find any official documentation on how conflict resolution kedro automatically
  merges pi
now: 2022-10-29 15:54:38.063651
path: pages/blog/kedro-pipeline-registry.md
slug: kedro-pipeline-registry
status: published
super_description: With the realease of  create a  register_pipelines register hook_impl
  class You should now have something that looks like this in your pipeline I was
  not able to find any official documentation on how conflict resolution kedro automatically
  merges pipelines from both hooks.py takes precedence In my experience there were
  no issues upgrading from  https://twitter.com/datajoely/status/1375193511264456705
tags:
- kedro
- python
templateKey: blog-post
title: Kedro pipeline_registry.py
today: 2022-10-29
year: 2021
---

With the realease of `kedro==0.17.2` came a new module in the project template
`pipeline_registry.py`.  Here are some notes that I learned while playing with
this new module.

## migrating to `pipeline_registry.py`


* create a `src/<package-name>/pipeline_registry.py` file create a
* `register_pipelines` function in `pipeline_registry.py` that mirrors the
* register_pipelines method from your `hooks.py` module do not bring the
* `hook_impl` decorator remove register_pipelines method on your `ProjectHooks`
* class

You should now have something that looks like this in your
`src/<package-name>/pipeline_registry.py`.

``` python 
"""Project pipelines."""
from typing import Dict

from kedro.pipeline import Pipeline


def register_pipelines() -> Dict[str, Pipeline]:
    """Register the project's pipelines.

    Returns: A mapping from a pipeline name to a ``Pipeline`` object.
    """
    return {"__default__": Pipeline([])}
```


> pipeline_registry only works in `kedro>=0.17.2`

## Conflict Resolution

_What happens If I register pipelines in both places_

I was not able to find any official documentation on how conflict resolution
worked so I stepped into a project and added to both my `hooks.py` and
`pipeline_registry.py` file.  I noticed that it would pick up pipelines from
both modules, but pipelines from `hooks.py` always take precedence.  The entire
duplicate pipeline will be over written by the one from `hooks.py`.

>  kedro automatically merges pipelines from both hooks.py takes precedence

## Ready to update

In my experience there were no issues upgrading from `0.17.1` to `0.17.2`.  I
would reccomend only having one `register_pipelines` so decide to migrate to
the new `pipeline_registry.py` or keep it in your `hooks.py`, but both is only
going to lead to confusion.


https://twitter.com/datajoely/status/1375193511264456705
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
    
    <a class='prev' href='/kedro-preflight'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>📝 Kedro Preflight Notes</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-pickle'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro - My Data Is Not A Table</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>