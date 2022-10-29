---
cover: ''
date: 2020-12-14
datetime: 2020-12-14 00:00:00+00:00
description: ?docstring ??sourcecode %run %debug %autoreload %history autoformat %reset
  ! Stop going to google everytime your stuck and stay in your workflow.  The Docstring
edit_link: https://github.com/edit/main/pages/blog/ipython-ninjitsu.md
jinja: false
long_description: ?docstring ??sourcecode %run %debug %autoreload %history autoformat
  %reset ! Stop going to google everytime your stuck and stay in your workflow.  The
  Docstring not enough for you use case.  I often run into cases where the I turned
  my nose up at thi
now: 2022-10-29 15:54:38.064980
path: pages/blog/ipython-ninjitsu.md
slug: ipython-ninjitsu
status: draft
super_description: ?docstring ??sourcecode %run %debug %autoreload %history autoformat
  %reset ! Stop going to google everytime your stuck and stay in your workflow.  The
  Docstring not enough for you use case.  I often run into cases where the I turned
  my nose up at this one, prior to seeing the famous  ipython comes with a post-mortem
  debugger, and it can be a lifesaver.  If we https://waylonwalker.com/reset-ipython
  https://waylonwalker.com/autoreload-ipython place this in your ~/.ipython/profile
  This is a relativ
tags:
- python
- bash
- ipython
templateKey: blog-post
title: Ipython Ninjitsu
today: 2022-10-29
year: 2020
---

* ?docstring
* ??sourcecode
* %run
* %debug
* %autoreload
* %history
* autoformat
* %reset
* !shell commands

## ?docstring

Stop going to google everytime your stuck and stay in your workflow.  The
ipython `?` is a superhero for productivity and staying on task.

``` python
from kedro.pipeline import Pipeline
Pipeline?

Init signature:
Pipeline(
    nodes: Iterable[Union[kedro.pipeline.node.Node, ForwardRef('Pipeline')]],
    *,
    tags: Union[str, Iterable[str]] = None,
)
Docstring:
A ``Pipeline`` defined as a collection of ``Node`` objects. This class
treats nodes as part of a graph representation and provides inputs,
outputs and execution order.
Init docstring:
Initialise ``Pipeline`` with a list of ``Node`` instances.

Args:
    nodes: The iterable of nodes the ``Pipeline`` will be made of. If you
        provide pipelines among the list of nodes, those pipelines will
        be expanded and all their nodes will become part of this
        new pipeline.
    tags: Optional set of tags to be applied to all the pipeline nodes.

Raises:
    ValueError:
        When an empty list of nodes is provided, or when not all
        nodes have unique names.
    CircularDependencyError:
        When visiting all the nodes is not
        possible due to the existence of a circular dependency.
:
```

**Note** This does jump you into a pager, a j,k or up, down to navigate, q to quit.


## ??sourcecode

Docstring not enough for you use case.  I often run into cases where the
docstring is not clear enough and I need to see the implementation for myself
to see what a function does.

## %run

I turned my nose up at this one, prior to seeing the famous [I don't like
notebooks](https://www.youtube.com/watch?v=7jiPeIFXb6U) by
[Joel Grus](https://joelgrus.com/).  My first snobby reaction was that
developing modules and using autoreload was superior.  I have since realized
there is a place for `%run`, and it can cut down on some keystrokes to import,
setup, and run even when developing in modules.

## %debug

ipython comes with a post-mortem debugger, and it can be a lifesaver.  If we
have a long running function that runs into an error it can be a complete buzzkill.

``` python
def long_func():
   import time
   time.sleep(12)
   n = 12
   df = pd.Data({'a': range(n)})
   return df

long_func()
```

## %reset


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/reset-ipython/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/reset-ipython.jpg" alt="article cover for Reclaim memory usage in Jupyter"/>
        <p><strong>Reclaim memory usage in Jupyter</strong></p>
    </a>
</div>


## %autoreload


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/autoreload-ipython/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/autoreload-ipython.jpg" alt="article cover for Autoreload in Ipython"/>
        <p><strong>Autoreload in Ipython</strong></p>
    </a>
</div>


``` python
c.InteractiveShellApp.extensions = ["autoreload"]
c.InteractiveShellApp.exec_lines = ["%autoreload 2"]
c.InteractiveShellApp.exec_lines.append(
    'print("Warning: disable autoreload in ipython_config.py to improve performance.")'
)
```

> place this in your ~/.ipython/profile_default/ipython_config.py to auto reload without needing to run the magic every time

## autoformat

This is a relatively new feature to ipython.  I really enjoy it, as the time
that I need the most help autoformatting my code is riffing on an ad hoc
analysis at the command line.

``` python
c.TerminalInteractiveShell.autoformatter = "black"
```

> place this in your ~/.ipython/profile_default/ipython_config.py to autoformat with black by default

## new prompt

## reverse history search

_Control R_

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
    
    <a class='prev' href='/ipython-q-exit'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>IPython q to exit</p>
        </div>
    </a>
    
    <a class='next' href='/ipython-help'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Just Ask Ipython for help</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>