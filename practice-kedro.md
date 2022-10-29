---
cover: ''
date: 2022-01-27
datetime: 2022-01-27 00:00:00+00:00
description: I am a huge believer in practicing your craft.  Professional athletes
  https://waylonwalker.com/what-is-kedro/ Go to your playground directory, and if
  you don In
edit_link: https://github.com/edit/main/pages/til/practice-kedro.md
jinja: false
long_description: I am a huge believer in practicing your craft.  Professional athletes
  https://waylonwalker.com/what-is-kedro/ Go to your playground directory, and if
  you don Install pipx in your system python.  This is one of the very few, and From
  inside your  I us
now: 2022-10-29 15:54:38.065860
path: pages/til/practice-kedro.md
slug: practice-kedro
status: draft
super_description: I am a huge believer in practicing your craft.  Professional athletes
  https://waylonwalker.com/what-is-kedro/ Go to your playground directory, and if
  you don Install pipx in your system python.  This is one of the very few, and From
  inside your  I use this quite often to try out new things in a safe place. Conda
  is a fine choice to manage your virtual environments.  It used to one great benefit
  of conda is that it lets you choose the interpreter Your new environment will be
  listed in your list o
tags:
- python
- kedro
templateKey: til
title: Practice making pipelines with kedro
today: 2022-10-29
year: 2022
---

I am a huge believer in practicing your craft.  Professional athletes
spend most of their time honing their skills and making themsleves
better.  In Engineering many spend nearly 0 time practicing.  I am not
saying that you need to spend all your free time practicing, but a few
minutes trying new things can go a long way in how you understand what
you are doing and make a hue impact on your long term productivity.



<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/what-is-kedro/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/what-is-kedro.jpg" alt="article cover for What is Kedro"/>
        <p><strong>What is Kedro</strong></p>
    </a>
</div>


## Start practicing

**practice** building pipelines with _#kedro_ today

Go to your playground directory, and if you don't have one, make one.

``` bash
cd ~/playground
```

## get pipx

Install pipx in your system python.  This is one of the very few, and
possibly the only python library that deserves to be installed in your
system directory, primarily because its used to sanbox clis in their own
virtual environment automatically for you.

``` bash
pip install pipx
```

## make a new project

From inside your `playground` directory, start your new kedro project.
This is quite simple and painless.  So much so that if you mess this one
up doing something wild, it might be easier to make a new one that
fixing the wild one.

```
pipx run kedro new
# answer the questions it asks
```

> I use this quite often to try out new things in a safe place.

## Make a virtual environment.

### Using Conda

Conda is a fine choice to manage your virtual environments.  It used to
make things so much easier on windows that it was almost required.
Nowadays getting python running on windows has become so much easier
that this is less so.

``` python
conda create -n my-project python=3.8 -y
conda activate my-project
python  -m pip install --upgrade pip
pip install -e src
```

> one great benefit of conda is that it lets you choose the interpreter
> to go with your virtual environment.

Your new environment will be listed in your list of conda env here.

``` python
conda info --envs
```

### Using venv

`venv` is what I use now.  Nothing against conda, it works great.
`venv` just feels a bit lighter and more common.  I've actually grown to
appreciate that the `venv` is right where I put it, most often in the
project directory.

```
python -m venv .venv
source ./.venv/bin/activate
python  -m pip install --upgrade pip
pip install -e src
```

### using pipenv

`pipenv` is another fine choice.  I like how in one command it makes the
environment and activates it for you.  `pipenv` also puts virtual
environments in the global directory.

```
pipx run pipenv shell
python  -m pip install --upgrade pip
pip install -e src
```

## Make pipelines

Now go make some pipelines with your new project, try something wild,
break it, and make another.
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
    
    <a class='prev' href='/practice-python-online'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>🐍 Practice Python Online</p>
        </div>
    </a>
    
    <a class='next' href='/popen-stderr'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Read stderr from python subprocess.Popen</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>