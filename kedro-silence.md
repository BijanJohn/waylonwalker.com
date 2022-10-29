---
cover: ''
date: 2021-05-20
datetime: 2021-05-20 00:00:00+00:00
description: 'Kedro can have a chatty logger.  While this is super nice in production
  First, how does one silence a python log?  Python loggers can be retrieved by |
  Level   '
edit_link: https://github.com/edit/main/pages/blog/kedro-silence.md
jinja: false
long_description: Kedro can have a chatty logger.  While this is super nice in production
  First, how does one silence a python log?  Python loggers can be retrieved by |
  Level    | Numeric value | Getting a python logger is straightforward if we know
  the name of the l
now: 2022-10-29 15:54:38.064940
path: pages/blog/kedro-silence.md
slug: kedro-silence
status: published
super_description: "Kedro can have a chatty logger.  While this is super nice in production
  First, how does one silence a python log?  Python loggers can be retrieved by |
  Level    | Numeric value | Getting a python logger is straightforward if we know
  the name of the logger. \U0001F525 If a logger doesn Once we get the logger, we
  need to silence it by setting the log level. ⚠ Be sure to leave some logging left.
  After the point of error, you are not It is possible to set the log level before
  kedro even registers the As of  "
tags:
- kedro
- python
templateKey: blog-post
title: Silence Kedro Logs
today: 2022-10-29
year: 2021
---

Kedro can have a chatty logger.  While this is super nice in production
so see everything that happened during a pipeline run. This can be troublesome
while trying to implement a cli extension with clean output.

## Silence a Python log

First, how does one silence a python log?  Python loggers can be retrieved by
the `logging` module's `getLogger` function. Then their log level can be
changed.  Much of kedro's chattiness comes from INFO level logs.  I don't want
to hear about anything for my current use case unless it's essential, i.e., a
failure.  In this case, I set the log levels to ERROR as most errors should
stop execution anyways.


### python logging levels


| Level    | Numeric value |
|----------|---------------|
| CRITICAL | 50            |
| ERROR    | 40            |
| WARNING  | 30            |
| INFO     | 20            |
| DEBUG    | 10            |
| NOTSET   | 0             |


## Get or Create a logger

Getting a python logger is straightforward if we know the name of the logger.
The following block will grab the logger object for the logger currently
registered under the name passed in.

``` python
logger = logging.getLogger('kedro')
```

> 🔥 If a logger doesn't exist under the passed in name, it will create one for you.

## Set Level

Once we get the logger, we need to silence it by setting the log level.
Typically it's not appropriate to completely turn off loggers as you would still
want information in the case of a complete failure.  If you are building
a cli such as one that prints out the pipelines to the console, you may not want
to see logs that happen during regular operation as this would make it more
challenging to integrate with other shell applications.

``` python 
logger.setLevel(logging.ERROR)
```

> ⚠ Be sure to leave some logging left. After the point of error, you are not
> going to get a clean output anyways.  So let the user see what happened.

It is possible to set the log level before kedro even registers the
logger, if there is no logger currently setup under getLogger, it will create
one.

## Silent all kedro loggers

As of `kedro==0.17.3` this function covers every logger issued by
kedro.  I generated this list of `known_kedro_loggers` by looking through their
codebase and filling in a few others I found by running it.

``` python
def silent_loggers() -> None:
    """All logs need to be silent in order for a clean kedro diff output."""
    known_kedro_loggers = [
        "ProfileTimeTransformer",
        "hooks_handler",
        "kedro.__init__",
        "kedro",
        "kedro.config",
        "kedro.config.config",
        "kedro.extras.decorators.memory_profiler",
        "kedro.framework.cli",
        "kedro.framework.session.session",
        "kedro.framework.session.store",
        "kedro.framework.session",
        "kedro.io.cached_dataset",
        "kedro.io.data_catalog",
        "kedro.io",
        "kedro.journal",
        "kedro.pipeline",
        "kedro.pipeline.decorators",
        "kedro.pipeline.node",
        "kedro.pipeline.pipeline",
        "kedro.runner",
        "kedro.runner.runner",
        "kedro.versioning.journal",
        "py4",
    ]
    for logger in [
        *known_kedro_loggers,
        *list(logging.root.manager.loggerDict.keys()),  # type: ignore
    ]:
        logging.getLogger(logger).setLevel(logging.ERROR)
```

This function comes right from a plugin I am currently working on
[kedro-diff](https://github.com/WaylonWalker/kedro-diff).  Check it out, give
it a star, and watch it for release.



<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


> Not familiar with kedro, check out this article to see what it's all about.

## Master the log

Python logs can seem super confusing at first, understanding how to get a
logger and set its level are the first steps to mastering it.
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
    
    <a class='prev' href='/kedro-spaceflights-stream1'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Kedro Spaceflights - part 1 | Stream replay June 4, 2021</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-run'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Running your Kedro Pipeline from the command line</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>