---
cover: ''
date: 2022-02-17
datetime: 2022-02-17 00:00:00+00:00
description: python requirements text files can in fact depend on each other due to
  Lets create two requirements files in a new directory to play with. Then add the
  followin
edit_link: https://github.com/edit/main/pages/til/python-nested-requires.md
jinja: false
long_description: python requirements text files can in fact depend on each other
  due to Lets create two requirements files in a new directory to play with. Then
  add the following to each requirements file. Installing requirements This is covered
  in the
now: 2022-10-29 15:54:38.066338
path: pages/til/python-nested-requires.md
slug: python-nested-requires
status: draft
super_description: python requirements text files can in fact depend on each other
  due to Lets create two requirements files in a new directory to play with. Then
  add the following to each requirements file. Installing requirements This is covered
  in the
tags:
- python
templateKey: til
title: Nested requirements.txt in python
today: 2022-10-29
year: 2022
---

python requirements text files can in fact depend on each other due to
the fact that you can pass pip install arguments right into your
`requirements.txt` file.  The trick is to just prefix the file with a
`-r` flag, just like you would if you were installing it with `pip
install`

## try it out
Lets create two requirements files in a new directory to play with.

``` bash
mkdir requirements-nest
cd requirements-nest
touch requirements.txt requirements_dev.txt
```

Then add the following to each requirements file.

``` txt
# requirements.txt
kedro[pandas.ParquetDataSet]
```

```txt
# requirements_dev.txt
-r requirements.txt
ipython
```

## Installing

Installing requirements_dev.txt will install both ipython and pandas
since it includes the base requirements file.

``` bash
# this will install only pandas
pip install -r requirements.txt

# this will install both ipython and pandas
pip install -r requirements_dev.txt
```

## Links

This is covered in the
[pip user guide](https://pip.pypa.io/en/stable/user_guide/),
but it is not obvious that this can be done in a requirements.txt
file.
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
    
    <a class='prev' href='/python-pathlib-glob'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>How I glob for Files in Python</p>
        </div>
    </a>
    
    <a class='next' href='/python-markdown-ast-paragraph'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Using a Python Markdown ast to Find All Paragraphs</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>