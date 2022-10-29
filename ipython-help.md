---
cover: ''
date: 2021-10-10
datetime: 2021-10-10 00:00:00+00:00
description: We can https://youtu.be/TZrRAP-9UMk In any python repl you can access
  the docstring of a function by calling for  In Ipython we can even get some syntax
  highlig
edit_link: https://github.com/edit/main/pages/blog/ipython-help.md
jinja: false
long_description: 'We can https://youtu.be/TZrRAP-9UMk In any python repl you can
  access the docstring of a function by calling for  In Ipython we can even get some
  syntax highlighting with the  Sometimes the docstrings are not good enough, and
  don The more common way '
now: 2022-10-29 15:54:38.063989
path: pages/blog/ipython-help.md
slug: ipython-help
status: published
super_description: 'We can https://youtu.be/TZrRAP-9UMk In any python repl you can
  access the docstring of a function by calling for  In Ipython we can even get some
  syntax highlighting with the  Sometimes the docstrings are not good enough, and
  don The more common way I do it is with the ipython  You thought the syntax highlighting
  was good with ipython, check out what Install rich then inspect If you liked this
  one, check out the YouTube Channel, catch me live on twitch, twitter:  https://twitter.com/'
tags:
- python
templateKey: blog-post
title: Just Ask Ipython for help
today: 2022-10-29
year: 2021
---

## It happens to the best of us

We can't all remember every single function signature out there, it's just not
possible.  If you want to stay productive while coding without the temptation
to hit YouTube or Twitter.  Use the built in help.  Here are 5 ways to get help
without leaving your terminal.

https://youtu.be/TZrRAP-9UMk

## Docstrings

In any python repl you can access the docstring of a function by calling for `help`.

``` python
help(df.rolling)
```

In Ipython we can even get some syntax highlighting with the `?`.

``` python
df.rolling?
```

## Source Code

Sometimes the docstrings are not good enough, and don't give us the content we
need, and we just need to look at the source.  Without leaving your terminal
there are two ways I often use to get to the source of a function I am trying
to use.

``` python
import inspect
inspect.getsource(df.rolling)
```

The more common way I do it is with the ipython `??`.

```
df.rolling??
```

## Bonus rich.inspect

You thought the syntax highlighting was good with ipython, check out what
`rich.inspect` can do! As far as I know there is no way to get to source code,
but the results are still fantastic.



``` bash
pip install rich
```

> Install rich

``` python
from rich import inspect
inspect(cars.rolling, help=True)
```

> then inspect

## Connect with me

If you liked this one, check out the YouTube Channel, catch me live on twitch,
or connect on twitter, I'd love to hear from you.

twitter:  https://twitter.com/_WaylonWalker
twitch: https://www.twitch.tv/waylonwalker
github: https://github.com/waylonwalker/
twitch: https://www.twitch.tv/waylonwalker
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
    
    <a class='next' href='/ipython-config'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Ipython-Config</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>