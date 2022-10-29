---
cover: ''
date: 2022-08-09
datetime: 2022-08-09 00:00:00+00:00
description: I love using pipx for automatic virtual environment management of my
  globally This one was not  obvious to me at first, please let me know if there is
  a My firs
edit_link: https://github.com/edit/main/pages/til/pyenv-pipx.md
jinja: false
long_description: I love using pipx for automatic virtual environment management of
  my globally This one was not  obvious to me at first, please let me know if there
  is a My first technique was to make a package that printed out  If you don
now: 2022-10-29 15:54:38.065853
path: pages/til/pyenv-pipx.md
slug: pyenv-pipx
status: draft
super_description: I love using pipx for automatic virtual environment management
  of my globally This one was not  obvious to me at first, please let me know if there
  is a My first technique was to make a package that printed out  If you don
tags:
- python
templateKey: blog-post
title: Using Different versions of python with pipx | pyenv
today: 2022-10-29
year: 2022
---

I love using pipx for automatic virtual environment management of my globally
installed python cli applications, but sometimes the application is not
compatible with your globally installed `pipx`

## Which version of python is `pipx` using??

This one was not  obvious to me at first, please let me know if there is a
better way.  I am pretty certain that this is not the ideal way, but it works.

My first technique was to make a package that printed out `sys.version`.

``` bash
# what version of python does the global pipx use?
pipx run --spec git+https://github.com/waylonwalker/pyvers pyvers

# what version of python does the local pipx use?
python -m pipx run --spec git+https://github.com/waylonwalker/pyvers pyvers
```

## Let's setup some other versions of python with pyenv

> If you don't already have [pyenv](https://github.com/pyenv/pyenv) installed,
> you can follow their [install
> instructions](https://github.com/pyenv/pyenv#installation) to get it.

```bash
pyenv install 3.8.13
pyenv install 3.10.5
```

```
export PIP_REQUIRE_VIRTUALENV=true
```

```
pyenv global 3.10.5
pip install pipx
pipx run --spec git+https://github.com/waylonwalker/pyvers pyvers

3.10.5 (main, Jun  6 2022, 18:49:26) [GCC 12.1.0]
```

```
pyenv global 3.8.13
pip install pipx
pipx run --spec git+https://github.com/waylonwalker/pyvers pyvers

3.8.13 (default, Aug  8 2022, 21:06:56)
[GCC 12.1.0]
```
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
    
    <a class='prev' href='/pyflyby'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Smoother Python with automatic imports | pyflyby</p>
        </div>
    </a>
    
    <a class='next' href='/pyenv-no-sqlite3'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>pyenv no module named '_sqlite3'</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>