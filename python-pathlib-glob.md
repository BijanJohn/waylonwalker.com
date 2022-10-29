---
cover: ''
date: 2022-03-17
datetime: 2022-03-17 00:00:00+00:00
description: A very common task for any script is to look for files on the system.  My
  go to I setup a directory to make some examples about globbing.  Here is what the
  1 di
edit_link: https://github.com/edit/main/pages/til/python-pathlib-glob.md
jinja: false
long_description: A very common task for any script is to look for files on the system.  My
  go to I setup a directory to make some examples about globbing.  Here is what the
  1 directory, 8 files Pathlib is a standard library module available in all LTS versions
  of pyt
now: 2022-10-29 15:54:38.065768
path: pages/til/python-pathlib-glob.md
slug: python-pathlib-glob
status: draft
super_description: A very common task for any script is to look for files on the system.  My
  go to I setup a directory to make some examples about globbing.  Here is what the
  1 directory, 8 files Pathlib is a standard library module available in all LTS versions
  of python at Creating a Path instance. The path object has a glob method that allows
  you to glob for files with a unix If you need some more detail on what globbing
  is there is a
tags:
- python
templateKey: til
title: How I glob for Files in Python
today: 2022-10-29
year: 2022
---

A very common task for any script is to look for files on the system.  My go to
method when globbing for files in python is to use pathlib.

## Setup

I setup a directory to make some examples about globbing.  Here is what the
directory looks like.

``` bash
❯ tree .
.
├── content
│   ├── hello.md
│   ├── hello.py
│   ├── me.md
│   └── you.md
├── readme.md
├── README.md
├── READMES.md
└── setup.py
```

1 directory, 8 files
## Pathlib

Pathlib is a standard library module available in all LTS versions of python at
this point.

``` python
❯ from pathlib import Path
```

Creating a Path instance.

``` python
# current working directory
Path()
Path.cwd()

# The users home directory
Path.home()

# Path to a directory by string
Path('/path/to/directory')

# The users ~/.config directory
Path.home() / '.config'
```

## Globbing Examples

The path object has a glob method that allows you to glob for files with a unix
style glob pattern to search for files.  Note that it gives you a generator.
This is great for many use cases, but for examples its easier to turn them to a
list to print them out.

If you need some more detail on what globbing is there is a
[wikipedia](https://en.wikipedia.org/wiki/Glob_(programming)) article
discussing it.  I am just showing how to glob with pathlib.

``` python

❯ Path().glob("**/*.md")
<generator object Path.glob at 0x7fa35adc4f90>

❯ list(Path().glob("**/*.md"))

[
    PosixPath('readme.md'),
    PosixPath('READMES.md'),
    PosixPath('README.md'),
    PosixPath('content/you.md'),
    PosixPath('content/me.md'),
    PosixPath('content/hello.md')
]

❯ list(Path().glob("**/*.py"))
[PosixPath('setup.py'), PosixPath('content/hello.py')]

❯ list(Path().glob("*.md"))
[PosixPath('readme.md'), PosixPath('READMES.md'), PosixPath('README.md')]

❯ list(Path().glob("*.py"))
[PosixPath('setup.py')]

❯ list(Path().glob("**/*hello*"))
[PosixPath('content/hello.py'), PosixPath('content/hello.md')]

❯ list(Path().glob("**/REA?ME.md"))
[PosixPath('README.md')]
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
    
    <a class='prev' href='/python-pep-584'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Python's Dict Union Operator | Pep 584</p>
        </div>
    </a>
    
    <a class='next' href='/python-nested-requires'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Nested requirements.txt in python</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>