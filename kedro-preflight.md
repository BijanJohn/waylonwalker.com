---
cover: ''
date: 2020-05-09
datetime: 2020-05-09 00:00:00+00:00
description: run checks before running the pipeline
edit_link: https://github.com/edit/main/pages/notes/kedro-preflight.md
jinja: false
long_description: This is a very rough idea for a kedro package to prevent time lost
  to get partway through a pipeline run only to realize that you dont have access
  to data or resources. check that inputs exist or are of a type to skip (sql) check
  that all input and o
now: 2022-10-29 15:54:38.061736
path: pages/notes/kedro-preflight.md
slug: kedro-preflight
status: published
super_description: This is a very rough idea for a kedro package to prevent time lost
  to get partway through a pipeline run only to realize that you dont have access
  to data or resources. check that inputs exist or are of a type to skip (sql) check
  that all input and output databases are accessible with good credentials check for
  s3 bucket access check for spark install
tags: []
templateKey: blog-post
title: "\U0001F4DD Kedro Preflight Notes"
today: 2022-10-29
year: 2020
---

This is a very rough idea for a kedro package to prevent time lost to get partway through a pipeline run only to realize that you dont have access to data or resources.

## Must Haves

* check that inputs exist or are of a type to skip (sql)

# Good to haves
* check that all input and output databases are accessible with good credentials
* check for s3 bucket access
* check for spark install


## Implementation

``` python
@hook_spec
def before_pipeline_run(run_params, pipeline, catalog):

```

## run params
``` json
{
  "run_id": str
  "project_path": str,
  "env": str,
  "kedro_version": str,
  "tags": Optional[List[str]],
  "from_nodes": Optional[List[str]],
  "to_nodes": Optional[List[str]],
  "node_names": Optional[List[str]],
  "from_inputs": Optional[List[str]],
  "load_versions": Optional[List[str]],
  "pipeline_name": str,
  "extra_params": Optional[Dict[str, Any]]
}
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
    
    <a class='prev' href='/kedro-run'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Running your Kedro Pipeline from the command line</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-pipeline-registry'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Kedro pipeline_registry.py</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>