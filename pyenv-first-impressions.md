---
cover: ''
date: 2021-12-30
datetime: 2021-12-30 00:00:00+00:00
description: pyenv provides an easy way to install almost any version of python from
  I needed to install an older version of python on ubuntu I Based on the Readme it
  looked
edit_link: https://github.com/edit/main/pages/til/pyenv-first-impressions.md
jinja: false
long_description: pyenv provides an easy way to install almost any version of python
  from I needed to install an older version of python on ubuntu I Based on the Readme
  it looked like I needed to install using homebrew,so this https://waylonwalker.com/til/installing-h
now: 2022-10-29 15:54:38.066520
path: pages/til/pyenv-first-impressions.md
slug: pyenv-first-impressions
status: draft
super_description: pyenv provides an easy way to install almost any version of python
  from I needed to install an older version of python on ubuntu I Based on the Readme
  it looked like I needed to install using homebrew,so this https://waylonwalker.com/til/installing-homebrew-linux/
  You can list all of the available versions to install with Installing a version
  is as easy as  Running  This creates a  I immediately ran into the same issue I
  was having before when trying to When I open a terminal and call  To make a
tags:
- python
- linux
- bash
templateKey: til
title: My first impressions with pyenv
today: 2022-10-29
year: 2021
---

pyenv provides an easy way to install almost any version of python from
a large list of distributions. I have simply been using the version of
python from the os package manager for awhile, but recently I bumped my
home system to Ubuntu 21.10 impish, and it is only 3.9+ while the
libraries I needed were only compatable with up to 3.8.

> I needed to install an older version of python on ubuntu

I've been wanting to check out pyenv for awhile now, but without a
burning need to do so.

## installing

Based on the Readme it looked like I needed to install using homebrew,so this
is what I did, but I later realized that there is a pyenv-installer repo that
may have saved me this need.

https://waylonwalker.com/til/installing-homebrew-linux/

## List out install candidates

You can list all of the available versions to install with
`pyenv install --list`.  It does reccomend updating pyenv if you suspect
that it is missing one.  At the time of writing this comes out to 532
different versions!

``` bash
pyenv install --list
```

## Let's install the latest 3.8 patch

Installing a version is as easy as `pyenv install 3.8.12`.  This will
install it, but not make it active anywhere.

```
pyenv install 3.8.12
```

## let's use python 3.8.12 while in this directory

Running `pyenv local` will set the version of python that we wish to use
while in this directory and any directory underneath of it while using
the pyenv command.

``` bash
pyenv local python3.8.12
```

## .python-version file

This creates a `.python-version` files in the directory I ran it in,
that contains simply the version number.

``` bash
3.8.12
```

## using with pipx

I immediately ran into the same issue I was having before when trying to
run pipx, as pipx was running my system python.  I had to install pipx
in the python3.8 environment to get it to use it.

``` bash
pyenv exec pip install pipx
pyenv exec pipx run kedro new
```

## python is still the system python

When I open a terminal and call `python` its still my system python that
I installed and set with update-alternatives.  I am not sure if this is
expected or based on how I had installed the system python previously,
but it's what happened on my system.

```
update-alternatives --query python

Name: python
Link: /home/walkers/.local/bin/python
Status: auto
Best: /usr/bin/python3
Value: /usr/bin/python3
```

## making a virtual environment

To make a virtual environment, I simply ran `pyenv exec python` in place
of where I would normally run python and it worked for me.  There is a
whole package to get pyenv and venv to play nicely together, so I
suspect that there is more to it, but this worked well for me and I was
happy.

```
pyenv exec python -m venv .venv --prompt $(basename $PWD)
```

Now when my virtual environment is active it points to the python in
that virtual environment, and is the version of python that was used to
create the environment.

## Links
https://github.com/pyenv/pyenv#installation
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
    
    <a class='prev' href='/pyenv-no-sqlite3'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>pyenv no module named '_sqlite3'</p>
        </div>
    </a>
    
    <a class='next' href='/pycon-2018-roundup'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Pycon 2018 Roundup</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>