---
cover: ''
date: 2021-08-22
datetime: 2021-08-22 00:00:00+00:00
description: Kedro pipeline create is a command that makes creating new https://youtu.be/HtyIKqlEoNw
  The kedro cli comes with the following command to scaffold out The direc
edit_link: https://github.com/edit/main/pages/blog/kedro-pipeline-create.md
jinja: false
long_description: Kedro pipeline create is a command that makes creating new https://youtu.be/HtyIKqlEoNw
  The kedro cli comes with the following command to scaffold out The directory structure
  that it creates looks like this.
now: 2022-10-29 15:54:38.064800
path: pages/blog/kedro-pipeline-create.md
slug: kedro-pipeline-create
status: draft
super_description: Kedro pipeline create is a command that makes creating new https://youtu.be/HtyIKqlEoNw
  The kedro cli comes with the following command to scaffold out The directory structure
  that it creates looks like this.
tags:
- kedro
- python
templateKey: blog-post
title: Kedro Pipeline Create
today: 2022-10-29
year: 2021
---

Kedro pipeline create is a command that makes creating new
pipelines much easier.  There is much less boilerplate that
you need to write yourself.

https://youtu.be/HtyIKqlEoNw

## creating a new pipeline

The kedro cli comes with the following command to scaffold out
new pipelines.  Note that it will not add it to your
`pipeline_registry`, to be covered later, you will need to add
it yourself.

``` bash
kedro pipeline create example
```

## results

The directory structure that it creates looks like this.

``` bash
tree src/kedro_conda/pipelines
src/kedro_conda/pipelines
├── __init__.py
└── example
    ├── __init__.py
    ├── nodes.py
    ├── pipeline.py
    └── README.md
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
    
    <a class='prev' href='/kedro-pipeline-registry'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Kedro pipeline_registry.py</p>
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