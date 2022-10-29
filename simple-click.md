---
cover: ''
date: 2020-01-29
datetime: 2020-01-29 00:00:00+00:00
description: Add helpful cli to your python libraries... All of them!
edit_link: https://github.com/edit/main/pages/blog/simple-click.md
jinja: false
long_description: "cli tools are super handy and easy to add to your python libraries
  to supercharge them. Even if your library is not a cli tool there are a number of
  things that a cli can do to your library. Things a cli can do to enhance your library.
  \U0001F19A print versio"
now: 2022-10-29 15:54:38.063383
path: pages/blog/simple-click.md
slug: simple-click
status: published
super_description: "cli tools are super handy and easy to add to your python libraries
  to supercharge them. Even if your library is not a cli tool there are a number of
  things that a cli can do to your library. Things a cli can do to enhance your library.
  \U0001F19A print version For our simple Entry points are the magic that make python
  cli tools available as their own command without having python before it or the
  file extension. What do You wish more python libraries included in their cli?  "
tags:
- python
- cli
templateKey: blog-post
title: simple click
today: 2022-10-29
year: 2020
---

cli tools are super handy and easy to add to your python libraries to supercharge them. Even if your library is not a cli tool there are a number of things that a cli can do to your library.

## Example Ideas

Things a cli can do to enhance your library.

🆚 print version
🕶 print readme
📝 print changelog
📃 print config
✏ change config
👩‍🎓 run a tutorial
🏗 scaffold a project with cookiecutter

## 🖱 [Click](https://click.palletsprojects.com/)

[Click](https://click.palletsprojects.com/) is the most popular python cli tool framework for python. There are others, some old, some new comers that make take the crown. For now [Click](https://click.palletsprojects.com/) is the gold standard if you want to make a powerful cli quickly. If you are dependency conscious and dont need a lot of tooling, use [argparse](https://docs.python.org/3/library/argparse.html).

## Project Structure

    .
    ├── setup.py
    └── simple_click
        ├── cli.py
        └── __init__.py

## ❯ cli.py

``` python
    # simple_click/cli.py
    import click

    __version__ = "1.0.0"

    @click.group()
    def cli():
       pass

    @cli.command()
    def version():
        """prints project version"""
        click.echo(__version__)


    if __name__ == '__main__':
        cli()
```

## ✨ **init**.py

For our simple_click library `__init__.py__` can be left empty. It is here purely to signify that simple_click is a library. It is likely that you will import other modules here that need to reside at the top level of your library api, your cli does not need to be at the top of of your api.

``` python
    # __init__.py
```

## 🚪 Entry Points

Entry points are the magic that make python cli tools available as their own command without having python before it or the file extension.

``` python
    # setup.py

    from setuptools import setup, find_packages

    # this is the 🥩 meat of this snippet
    # simple_click is the command name
    # = simple_click is the library name
    # .cli is the cli.py file
    # :cli is the cli function
    #
    # the second item is a shorthand alias to the main command

    entry_points = [
       "simple_click = simple_click.cli:cli",
       "scli         = simple_click.cli:cli",
    ]


    setup(
        name='simple_click',
        version='1.0.0',
        url='https://github.com/mypackage.git',
        packages=find_packages(),
        entry_points={"console_scripts": entry_points},

    )
```

## 🕶 See it in action

![Simple-click-in-action](https://images.waylonwalker.com/simple_click3.gif)

## 📢 Discuss

What do You wish more python libraries included in their cli?  [Tweet it @_waylonwalker](https://twitter.com/intent/tweet?text=@_waylonwalker%20More%20libraries%20should%20...%0A%0Awaylonwalker.com/b/scli)

![Tweet it @_waylonwalker](https://twitter.com/intent/tweet?text=@_waylonwalker%20More%20libraries%20should%20...%0A%0Awaylonwalker.com/b/scli)
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
    
    <a class='prev' href='/sqlalchemy-models'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>SqlAlchemy Models</p>
        </div>
    </a>
    
    <a class='next' href='/should-i-switch-to-zeit-now'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Should I switch to Zeit Now</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>