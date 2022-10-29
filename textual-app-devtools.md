---
cover: ''
date: 2022-10-24
datetime: 2022-10-24 00:00:00+00:00
description: I am working through the textual tutorial, and I want to put it in a
  proper cli I setup a new project running  https://waylonwalker.com/hatch-new-cli/
  If you ar
edit_link: https://github.com/edit/main/pages/til/textual-app-devtools.md
jinja: false
long_description: I am working through the textual tutorial, and I want to put it
  in a proper cli I setup a new project running  https://waylonwalker.com/hatch-new-cli/
  If you are using  https://waylonwalker.com/minimal-python-package/ Now to get devtools
  through a cl
now: 2022-10-29 15:54:38.065585
path: pages/til/textual-app-devtools.md
slug: textual-app-devtools
status: draft
super_description: 'I am working through the textual tutorial, and I want to put it
  in a proper cli I setup a new project running  https://waylonwalker.com/hatch-new-cli/
  If you are using  https://waylonwalker.com/minimal-python-package/ Now to get devtools
  through a cli without running through  Note: I used sys.argv as a very simple way
  to implement a  If you look at the source, there is one other flag for  Here it
  is running with '
tags:
- python
templateKey: til
title: textual app devtools
today: 2022-10-29
year: 2022
---

I am working through the textual tutorial, and I want to put it in a proper cli
that I can pip install and run the command without `textual run --dev app.py`.
This is a fine pattern, but I also want this to work when I don't have a file
to run.

!["An astronaut working in a lab, hacking on a computer terminal, htop is running, shallow depth of field beakers, test tubes, volumetric lighting, pink lighting, by victo ngai, killian eng vibrant colours, dynamic lighting, digital art" -s50 -W768 -H448 -C7.5 -Ak_lms -S3617210203](https://stable-diffusion.waylonwalker.com/000221.3617210203.webp)

## pyproject.toml entrypoints

I setup a new project running `hatch new`, and added the following entrypoint,
giving me a `tutorial` cli command to run.

``` toml
...

[project.scripts]
tutorial = 'textual_tutorial.tui:tui'
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/hatch-new-cli/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/hatch-new-cli.jpg" alt="article cover for Create a new Python Project with the Hatch Cli"/>
        <p><strong>Create a new Python Project with the Hatch Cli</strong></p>
    </a>
</div>


## setup.py entrypoints

If you are using `setup.py`, you can set up entrypoints in the `setup` command.

``` python
from setuptools import setup

setup(
    ...
    entry_points={
        "console_scripts": ["tutorial = textual_tutorial.tui:tui"],
    },
    ...
)
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/minimal-python-package/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/minimal-python-package.jpg" alt="article cover for Minimal Python Package"/>
        <p><strong>Minimal Python Package</strong></p>
    </a>
</div>


## tui.py
_adding features_

Now to get devtools through a cli without running through `textual run --dev`.
I pulled open the textual cli source code, and this is what it does currently.

> Note: I used sys.argv as a very simple way to implement a `--dev` flag in the
> tutorial.  For a real project, I'd setup argparse, click, or typer.  `typer`
> is my go to these days, unless I am really trying to limit dependencies, then
> the standard library `argparse` might be what I go with.

``` python
def tui():

    from textual.features import parse_features
    import os
    import sys

    dev = "--dev" in sys.argv # this works, but putting it behind argparse, click, or typer would be much better

    features = set(parse_features(os.environ.get("TEXTUAL", "")))
    if dev:
        features.add("debug")
        features.add("devtools")

    os.environ["TEXTUAL"] = ",".join(sorted(features))
    app = StopwatchApp()
    app.run()


if __name__ == "__main__":
    tui()
```

## Other Flags???

If you look at the source, there is one other flag for `headless` mode.

``` python
FEATURES: Final = {"devtools", "debug", "headless"}
```

## Run it

Here it is running with `tutorial --dev` on the left, and `textual console` on the right.

![textual-tutorial-devtools](https://screenshots.waylonwalker.com/textual-tutorial-devtools.webp)
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
    
    <a class='prev' href='/textual-has-devtools'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Textual has devtools</p>
        </div>
    </a>
    
    <a class='next' href='/testproject-io-py-actions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Integration testing with Python, TestProject.io, and GitHub Actions</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>