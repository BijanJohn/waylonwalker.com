---
cover: ''
date: 2022-01-31
datetime: 2022-01-31 00:00:00+00:00
description: I keep my nodes short and sweet.  They do one thing and do it well. I
  Here are two examples, the first one  Many times I just want to get the data in
  as fast as
edit_link: https://github.com/edit/main/pages/til/kedro-lambda-node.md
jinja: false
long_description: 'I keep my nodes short and sweet.  They do one thing and do it well.
  I Here are two examples, the first one  Many times I just want to get the data in
  as fast as possible, learn Note: try not to take the idea of a one liner too far.  If
  your'
now: 2022-10-29 15:54:38.066057
path: pages/til/kedro-lambda-node.md
slug: kedro-lambda-node
status: draft
super_description: 'I keep my nodes short and sweet.  They do one thing and do it
  well. I Here are two examples, the first one  Many times I just want to get the
  data in as fast as possible, learn Note: try not to take the idea of a one liner
  too far.  If your'
tags:
- python
- kedro
templateKey: til
title: Lambda Function as a Kedro Node
today: 2022-10-29
year: 2022
---

I keep my nodes short and sweet.  They do one thing and do it well. I
turn almost every DataFrame transformation into its own node.  It makes
it must easier to pull catalog entries, than firing up the pipeline,
running it, and starting a debugger.  For this reason many of my nodes
can be built from inline lambdas.

## Examples

Here are two examples, the first one `lambda x: x` is sometimes referred
to as an identity function.  This is super common to use in the early
phases of a project.  It lets you follow standard layering conventions,
without skipping a layer, overthinking if you should have the layer or
not, and leaves a good placholder to fill in later when you need it.

> Many times I just want to get the data in as fast as possible, learn
> about it, then go back and tidy it up.

``` python
from kedro.pipeline import node

my_first_node = node(
   func=lambda x: x,
   inputs='raw_cars',
   output='int_cars',
   tags=['int',]
   )

my_first_node = node(
   func=lambda cars: cars[['mpg', 'cyl', 'disp',]].query('disp>200'),
   inputs='raw_cars',
   output='int_cars',
   tags=['pri',]
   )
```

> Note: try not to take the idea of a one liner too far.  If your
> one line function wraps several lines down it probably deserves to be
> a real function for readability and a good docstring.
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