---
cover: ''
date: 2021-08-23
datetime: 2021-08-23 00:00:00+00:00
description: 'Avoid serious version conflict issues, and use a virtual environment
  anytime https://youtu.be/ZSxc5VVCBhM conda venv pipenv I prefer to use conda as
  my virtual '
edit_link: https://github.com/edit/main/pages/blog/kedro-environment.md
jinja: false
long_description: Avoid serious version conflict issues, and use a virtual environment
  anytime https://youtu.be/ZSxc5VVCBhM conda venv pipenv I prefer to use conda as
  my virtual environment manager of choice as it give me stores environment in a root
  directory i.e.  c
now: 2022-10-29 15:54:38.065226
path: pages/blog/kedro-environment.md
slug: kedro-environment
status: published
super_description: Avoid serious version conflict issues, and use a virtual environment
  anytime https://youtu.be/ZSxc5VVCBhM conda venv pipenv I prefer to use conda as
  my virtual environment manager of choice as it give me stores environment in a root
  directory i.e.  conda can use its own way to manage environments  the python interpreter
  is packaged with the environment Virtual env (venv) is another very respectable
  option that is built right into environments are typically stored in the project
  directory does no
tags:
- kedro
- python
templateKey: blog-post
title: kedro Virtual Environment
today: 2022-10-29
year: 2021
---

Avoid serious version conflict issues, and use a virtual environment anytime
you are running python, here are three ways you can setup a kedro virtual
environment.

https://youtu.be/ZSxc5VVCBhM

* conda
* venv
* pipenv

## conda

I prefer to use conda as my virtual environment manager of choice as it give me
both the interpreter and the packages I install.  I don't have to rely on the
system version of python or another tool to maintain python versions at all, I
get everything in one tool.

``` python
conda create -n my-project python=3.8 -y
conda activate my-project
python  -m pip install --upgrade pip
pip install -e src
```

``` python
conda info --envs
```

* stores environment in a root directory i.e. `~/miniconda3`
* conda can use its own way to manage environments `environment.yml`
* the python interpreter is packaged with the environment

## virtualenv

Virtual env (venv) is another very respectable option that is built right into
python, and requires no additional installs or using a different distribution
of pytyhon.

```
python -m venv .venv
source ./.venv/bin/activate
python  -m pip install --upgrade pip
pip install -e src
```

* environments are typically stored in the project directory
* does not package the interpreter

## pipenv

Pipenv is another virtual enviroment tool that comes with its own system for
managing dependencies using a `pipfile`.  It's main benefit is that it creates
a lockfile that will allow users to replicate the exact version of all their
packages.  The typical `requirements.txt` workflow can easily break as new
version of dependecies are released between testing  and deplpoyment.

```
pipx run pipenv shell
python  -m pip install --upgrade pip
pip install -e src
```
* stores environment in a root directory i.e. `~/.local/share/virtualenvs/`
* pipenv can use its own way to manage environments `pipfile`
* does not package the interpreter
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
    
    <a class='prev' href='/kedro-git-init'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Kedro Git Init</p>
        </div>
    </a>
    
    <a class='next' href='/kedro-class-hooks'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Create Configurable Kedro Hooks</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>