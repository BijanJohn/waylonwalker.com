---
cover: ''
date: 2021-12-20
datetime: 2021-12-20 00:00:00+00:00
description: This is not a flaky works half the time kind of plugin, it I can https://youtu.be/2QW5DJiEJH4
  Give the video a watch, I did not have noise-cancelling on in obs.
edit_link: https://github.com/edit/main/pages/blog/pyflyby.md
jinja: false
long_description: This is not a flaky works half the time kind of plugin, it I can
  https://youtu.be/2QW5DJiEJH4 Give the video a watch, I did not have noise-cancelling
  on in obs. My pyflyby is hosted on pypi, so you can get it with pip.  I have had
  no issues If you Se
now: 2022-10-29 15:54:38.063356
path: pages/blog/pyflyby.md
slug: pyflyby
status: published
super_description: 'This is not a flaky works half the time kind of plugin, it I can
  https://youtu.be/2QW5DJiEJH4 Give the video a watch, I did not have noise-cancelling
  on in obs. My pyflyby is hosted on pypi, so you can get it with pip.  I have had
  no issues If you Seriously don pyflyby Add all the things you would like to be imported
  automatically, just as you This following example will set up auto import for both
  DataFrame and Series, Even imports with a comma will be treated separately. I only
  really mention '
tags:
- python
- ipython
- terminal
templateKey: blog-post
title: Smoother Python with automatic imports | pyflyby
today: 2022-10-29
year: 2021
---

This is not a flaky works half the time kind of plugin, it's a seriously smooth
editing experience.  I've just started using pyflyby, and it is solid so far.
I have automatic imports on every save of a python file in neovim, and
automatic imports on every command in ipython.

I can't tell you how pumped I am for this, and how good its felt to use over
the past few weeks.  It's glorious.

## YouTube video
_Listen to me rant on how great pyflyby is_

https://youtu.be/2QW5DJiEJH4

Give the video a watch, I did not have noise-cancelling on in obs. My
apologies for the background hum and the mic stand bumps. I did my best to fix
them up.


## Installation
_How to install pyflyby for automatic python imports_

pyflyby is hosted on pypi, so you can get it with pip.  I have had no issues
installing it on 3.8+ so far.

``` bash
pip install pyflyby
```

## Configuration setup with stow
_always stow your dotfiles_

If you're going to configure any of your tools the first thing you should do is
set it up with stow, seriously don't sleep on the stow.  If you don't have stow
installed or choose not to use stow you can skip this part.

``` bash
cd ~/dotfiles
mkdir ipython
touch ipython/.pyflyby
stow ipython
```

> Seriously don't sleep on the stow.

## How to Configure pyflyby
_it's just a file full of import statements_

`pyflyby` is configured simply by putting all of your import statements that you
want to automatically import into your `~/.pyflyby` file.  You can `import
pandas`, `from pandas import DataFrame`, or even `import pandas as pd`, and all
of these will work pretty much as expected.

``` python
# comments start with a #
# import your favorite libraries
import visidata as vd
import fsspec
import difflib
import s3fs
import seaborn as sns
import plotly

# also supports from imports
from rich.layout import Layout
from rich.live import Live

# duplicates are allowed
import plotly
import plotly

# duplicate names from different libraries are not allowed
import copy
from numpy import copy

```

> Add all the things you would like to be imported automatically, just as you
> would import them.  I went kinda crazy and added over 200 to mine based on
> packages that I use.

## Commas are even supported
_yep all the import styles are supported_

This following example will set up auto import for both DataFrame and Series,
they will both work separately.  I removed these from my config as I felt it
was cleaner without, but it works with them.

``` python
from pandas import DataFrame, Series
```

> Even imports with a comma will be treated separately.


## Jupyter note!
_Both work the same, use what your comfortable with_

I only really mention ipython here, but the same all applies to Jupyter as
well.  I just really like ipython itself, c'mon its right there in the terminal
integrating with the rest of your terminal experience so well.


## Ipython setup
_Automatically import python libraries in ipython with pyflyby_

The recommended way to set uppyflybyfrom the docs is to run the following
magic command.  This works well, but I want even less typing, I want pyflyby
automatically installed and importing things without me even thinking about it.


``` python
%load_ext pyflyby
```

![basic example of pyflyby](https://images.waylonwalker.com/load_ext_pyflyby.gif)

## Ipython setup next level
_automatically import modules in python **without %load_ext**_

I really want pyflyby to just work in every environment without me thinking
much about it.  I want it to load automatically, and even to attempt to install
itself if it's missing.

``` python
from IPython import get_ipython
import subprocess


ipython = get_ipython()

try:
    ipython.magic("load_ext pyflyby")
except ModuleNotFoundError:
    print("installing pyflyby")
    subprocess.Popen(
        ["pip", "install", "pyflyby"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    ).wait()
    ipython.magic("load_ext pyflyby")
```

> Note: if installation fails you will still make it into ipython, there will
> just be a traceback to the failed command as you enter.

I've had zero issues with this, but if there ever comes a time when it does
not work in certain environments for you.  I'd strongly suggest you to add this
to a separate profile.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/ipython-config/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/ipython-config.jpg" alt="article cover for Ipython-Config"/>
        <p><strong>Ipython-Config</strong></p>
    </a>
</div>


> Check out this article for a bit more in depth ipython configuration


## ipython auto import examples

pyflyby can import all the various import types just fine.

* import something
* from module import something
* import something as alias


``` python
df = pd.read_csv("https://waylonwalker.com/cars.csv")
[PYFLYBY] import pandas as pd
```

## Getting Help

Want help on something that you have in your pyflyby config, just give it the
`?`, `??`, or `help` and pyflyby will import it for you.

``` python
Popen?
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/ipython-help/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/ipython-help.jpg" alt="article cover for Just Ask Ipython for help"/>
        <p><strong>Just Ask Ipython for help</strong></p>
    </a>
</div>


## Autocomplete
_This is next level python auto-import_

pyflyby even goes as far as helping tab completion.  If you try to tab complete
`Pop` it will complete to `Popen` without even adding `Popen` to your local
namespace.  If you ask for something inside of a module i.e. `requests.<tab>`,
then it will import requests.


``` python
# does not populate the namespace
Pop<tab>

# !!does populate the local namespace
requests.<tab>
```


## What happens when a module is not installed
_ModuleNotFoundError_

When you are in an environment where you do not have a module installed that is
in your pyflyby config, it will throw a `ModuleNotFoundError` when it tries to
import, and it will not import or try to install for you.  You will have to
change environments or install that module.

``` python
❯ pd?
[PYFLYBY] import pandas as pd
[PYFLYBY] Error attempting to 'import pandas as pd': ModuleNotFoundError: No module named 'pandas'
[PYFLYBY] Traceback (most recent call last):
[PYFLYBY]   File "/home/u_walkews/.local/lib/python3.8/site-packages/pyflyby/_autoimp.py", line 1610, in _try_import
[PYFLYBY]     exec_(stmt, scratch_namespace)
[PYFLYBY]   File "<string>", line 1, in <module>
[PYFLYBY] ModuleNotFoundError: No module named 'pandas'
Object `pd` not found.

❯ df = pd.read_csv("https://waylonwalker.com/cars.csv")
<ipython-input-3-69b040434562>:1 in <module>

NameError: name 'pd' is not defined

```


## nvim pyflyby setup
_automatically importing python modules in vim, neovim, nvim_

This is by far the best part of this article.  It makes development so fluid.
It's not necessarily all about the speed.  It really helps you move at the
speed of your thoughts, without needing to worry about imports.  Remembering
where deeply nested modules are does not need to be a thing.

``` vim
function! s:PyPreSave()
    Black
endfunction

function! s:PyPostSave()
    execute "silent !tidy-imports --black --quiet --replace-star-imports --action REPLACE " . bufname("%")
    execute "e"
endfunction

:command! PyPreSave :call s:PyPreSave()
:command! PyPostSave :call s:PyPostSave()

augroup waylonwalker
    autocmd!
    autocmd bufwritepre *.py execute 'PyPreSave'
    autocmd bufwritepost *.py execute 'PyPostSave'
    autocmd bufwritepost .tmux.conf execute ':!tmux source-file %'
    autocmd bufwritepost .tmux.local.conf execute ':!tmux source-file %'
    autocmd bufwritepost *.vim execute ':source %'
augroup end
```

![running pyflyby on save in nvim](https://images.waylonwalker.com/pyflyby-nvim.gif)

## refactoring
_This is where it really shines_

This setup really shines when you are refactoring.  You can freely move modules
and classes around without worrying about bringing imports with them. Often
when refactoring some modules from one file to another the most tedious part is
editing the imports.  Often you can't even grab whole lines because there are
several imports and some are needed in both places but not all.  pyflyby
handles all this like a champ.

![simple refactoring example with pyflyby](https://images.waylonwalker.com/pyflyby-refactoring.gif)

## Where to install for vim
_just make sure the tidy-imports command is available to vim_

pyflyby goes into the environment that you have active at the time that you
start neovim.  Typically, this is the virtual environment that I am using for
the project I am editing.


## What gets imported/removed
_only give me what I actually use_

Anything within the base config of pyflyby or your own config specified in
`~/.pyflyby` will get automatically imported if it is used within the
file/console.  If you are working in a file, and stop using a module, it will
automatically get removed.

* Anything that is used, and found in the config is added
* Anything that is unused gets removed

## Where does it put imports
_after the last import_

`pyflyby` does not sort imports into paragraphs or by category.  When it needs
to add new imports.  It will find the last paragraph of imports in your file,
add the new one, and sort that paragraph alphabetically.

``` python
from collections import Counter

import requests

from plugins.custom_seo import post_render
# <-- pyflyby will put the import here
```

## What about isort
_put those imports where they go_

I did not like that I was getting pre-commit issues when using pyflyby, so I
added isort to my chain of autocommands to automatically run isort and make my
pre-commit happy.

``` vim
function! s:PyPostSave()
    execute "silent !tidy-imports --black --quiet --replace-star-imports --action REPLACE " . bufname("%")
    execute "silent !isort " . bufname("%")
    execute "e"
endfunction
```

Let's write some code

``` python
def get():
    """
    Get all the posts from waylonwalker.com.

    Yes theres an rss feed, you should be subscribed if your not already.

    Oh, and we don't need no stinkin error handing because it's always live
    """
    r = requests.get("https://waylonwalker.com/rss.xml")
    return r.content
```

Save it and pyflyby will inject requests into our file automatically, no need
to type that out anymore.

``` python
import requests

def get():
    """
    Get all the posts from waylonwalker.com.

    Yes theres an rss feed, you should be subscribed if your not already.

    Oh, and we don't need no stinkin error handing because it's always live
    """
    r = requests.get("https://waylonwalker.com/rss.xml")
    return r.content
```

## What about __init__ / api's
_careful to fill in the `__all__` like you are supposed to_

<!-- ` -->

Files such as __init__.py often import things they do not need, this is simply
there for a convenience of the library user and to make the api cleaner.  These
type of modules should implement a `__all__` list of all the unused things that
are imported according to pep8.  Pyflyby will remove any unused modules unless
they are in the `__all__` list.

``` python
# snippet from kedro.extras.datasets.pandas

__all__ = [
    "CSVDataSet",
    "ExcelDataSet",
    "FeatherDataSet",
    "GBQTableDataSet",
    "ExcelDataSet",
    "AppendableExcelDataSet",
    "HDFDataSet",
    "JSONDataSet",
    "ParquetDataSet",
    "SQLQueryDataSet",
    "SQLTableDataSet",
]

```

![pyflyby in __init__ files](https://images.waylonwalker.com/pyflyby-__all__.gif)

## py command
_one liners that need imports_

pyflyby also comes with a cli command to run one liners.  It's pretty genius,
I'm sure I will find a use or two for it, but so far it's been more of a novelty
for me.

``` bash
py help pd
py help pd.DataFrame

py pd.read_csv 'https://waylonwalker.com/cars.csv'
```

![pyflyby's py command can run one liners from bash or zsh even with imports](https://images.waylonwalker.com/pyflyby-py.gif)

## Links

* [pyflyby repo](https://github.com/deshaw/pyflyby)
* [docs](https://deshaw.github.io/pyflyby/)
* [My YouTube Video for pyflyby](https://youtu.be/2QW5DJiEJH4)
* [configuring ipython](https://waylonwalker.com/ipython-config/)
* [asking ipython for help??](https://waylonwalker.com/ipython-help/)
* [sample data I used with pandas](https://waylonwalker.com/cars.csv)
* [my rss feed](https://waylonwalker.com/rss.xml)
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
    
    <a class='prev' href='/pypi-2fa'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>I turned on 2FA for all of my pypi packages</p>
        </div>
    </a>
    
    <a class='next' href='/pre-commit-is-awesome'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>pre-commit is awesome</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>