---
cover: ''
date: 2022-09-20
datetime: 2022-09-20 00:00:00+00:00
description: When I am developing python code I often have a repl open alongside of
  it So in the past the way I have setup a few extensions for myself is to add I missed
  the
edit_link: https://github.com/edit/main/pages/til/use-ipython-extensions.md
jinja: false
long_description: 'When I am developing python code I often have a repl open alongside
  of it So in the past the way I have setup a few extensions for myself is to add
  I missed the fact that some of these tools like  The reccomended way is to add them
  to your The issue '
now: 2022-10-29 15:54:38.065903
path: pages/til/use-ipython-extensions.md
slug: use-ipython-extensions
status: published
super_description: 'When I am developing python code I often have a repl open alongside
  of it So in the past the way I have setup a few extensions for myself is to add
  I missed the fact that some of these tools like  The reccomended way is to add them
  to your The issue that I found with this is that you can end up with a sea of errors
  My way around this was to test if the module was importable and if it had a If you
  want to see what I did to my config see '
tags:
- python
templateKey: til
title: I've made my ipython config too complicated, let's fix it.
today: 2022-10-29
year: 2022
---

When I am developing python code I often have a repl open alongside of it
running snippets ofcode as I go.  Ipython is my repl of choice, and I hace
tricked it out the best I can and I really like it.  The problem I recently
discovered is that I have way overcomplicated it.

![](https://stable-diffusion.waylonwalker.com/000221.3407229670.webp)

## What Have I done??

So in the past the way I have setup a few extensions for myself is to add
something like this to my `~/.ipython/profile_default/startup` directory.  It
sets up some things like rich highlighting or in this example automatic
imports.  I even went as far as installing some of these in the case I didn't have them installed.

``` python
import subprocess

from IPython import get_ipython
from IPython.core.error import UsageError

ipython = get_ipython()

try:
    ipython.run_line_magic("load_ext pyflyby", "inline")
except UsageError:
    print("installing pyflyby")
    subprocess.Popen(
        ["pip", "install", "pyflyby"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    ).wait()
    ipython.run_line_magic("load_ext pyflyby", "inline")
    print("installing isort")
    subprocess.Popen(
        ["pip", "install", "isort"],
        stdout=subprocess.DEVNULL,
        stderr=subprocess.DEVNULL,
    )
```

![A man looking over to a glowing nuclear core with hundreds of wires running from it](https://stable-diffusion.waylonwalker.com/000255.43782833.webp)

## What I missed?

I missed the fact that some of these tools like `pyflyby` and `rich` already
have an ipython extension maintained by the library that just works.  It's less
complicated and more robust to future changes in the library.  If anything ever
changes with these I will not have to worry about which version is installed,
the extension will just take care of itself.

## How to activate these.

The reccomended way is to add them to your
`~/.ipython/profile_default/ipython_config.py`

``` python
c.InteractiveShellApp.extensions.append('rich')
c.InteractiveShellApp.extensions.append('markata')
c.InteractiveShellApp.extensions.append('pyflyby')
```

The issue that I found with this is that you can end up with a sea of errors
flooding your terminal.  Personally I will know immediately if ipython is
working right or not and typically have scriped venv installs so I have
everything I need, so If I don't have everything it's probably for a reason and
I don't need an error message lighting up.

My way around this was to test if the module was importable and if it had a
`load_ipython_extension` attribute before appending it as an extension.

``` python
def activate_extension(extension):
    try:
        mod = importlib.import_module(extension)
        getattr(mod, "load_ipython_extension")
        c.InteractiveShellApp.extensions.append(extension)
    except ModuleNotFoundError:
        "extension is not installed"
    except AttributeError:
        "extension does not have a 'load_ipython_extension' function"


extensions = ["rich", "markata", "pyflyby"]
for extension in extensions:
    activate_extension(extension)

```

## My Change

If you want to see what I did to my config see [this commit](https://github.com/WaylonWalker/devtainer/commit/e83b65db8cc292e0de99f1089754e088d8e7e3ef).
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
    
    <a class='prev' href='/variable-names-don-t-need-their-type'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Variables names don't need their type</p>
        </div>
    </a>
    
    <a class='next' href='/update-copier'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Copier < 6.0.0b0 considered dangerous</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>