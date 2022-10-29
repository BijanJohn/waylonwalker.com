---
cover: ''
date: 2021-11-20
datetime: 2021-11-20 00:00:00+00:00
description: 'Trying to read a .ipynb file without starting a jupyter server?  jut
  has you https://youtu.be/t8AvImnwor0 watch the video version of this post on  jut
  ! Take a '
edit_link: https://github.com/edit/main/pages/blog/jut.md
jinja: false
long_description: 'Trying to read a .ipynb file without starting a jupyter server?  jut
  has you https://youtu.be/t8AvImnwor0 watch the video version of this post on  jut
  ! Take a look at the help of the  There is some good information on the projects
  Don jut nbconvert '
now: 2022-10-29 15:54:38.063736
path: pages/blog/jut.md
slug: jut
status: published
super_description: Trying to read a .ipynb file without starting a jupyter server?  jut
  has you https://youtu.be/t8AvImnwor0 watch the video version of this post on  jut
  ! Take a look at the help of the  There is some good information on the projects
  Don jut nbconvert does not have its own cli, instead it sits under the jupyter command.
  Need to see images, go here Note, nb convert does not work with a url, you will
  need to have the notebook locally. nbconvert nbconvert Glow is a terminal markdown
  viewer that looks
tags:
- linux
- bash
- datascience
templateKey: blog-post
title: JUT | Read Notebooks in the Terminal
today: 2022-10-29
year: 2021
---

Trying to read a .ipynb file without starting a jupyter server?  jut has you
covered.

https://youtu.be/t8AvImnwor0

> watch the video version of this post on [YouTube](https://youtu.be/t8AvImnwor0)

## install

`jut` is packaged and available on pypi so installing is as easy as pip installing it.


``` bash
pip install jut
```

![installing jut with pip](https://images.waylonwalker.com/jut-install.gif)

> ! This is my first time including snippets of the video in the article like this, let me know what you think!

## examples


``` bash
jut https://cantera.org/examples/jupyter/thermo/flame_temperature.ipynb
jut https://cantera.org/examples/jupyter/thermo/flame_temperature.ipynb --head 3
jut https://cantera.org/examples/jupyter/thermo/flame_temperature.ipynb --tail 2
```

![running jut examples](https://images.waylonwalker.com/jut-command.gif)

## what are all the commands available for jut?

Take a look at the help of the `jut` cli to explore all the options that it
offers.

``` bash
jut --help
```

There is some good information on the projects
[readme](https://github.com/kracekumar/jut) as well.

![getting help with jut](https://images.waylonwalker.com/jut-help.gif)

## without installing
_using pipx_

Don't want jut cluttering up your venv, or want to save yourself from making a
new one, [`pipx`](https://github.com/pypa/pipx) can manage a separate virual
environment for you.  This is one of the biggest selling points for me.

``` bash
pipx run jut https://cantera.org/examples/jupyter/thermo/flame_temperature.ipynb --head 3
```

![running jut with pipx](https://images.waylonwalker.com/jut-pipx.gif)

## nbconvert

`jut` is the lightweight option that I think will fit the bill often for me,
but it just doesn't always cut it.  Mostly if there are images in the notebook
or  large output that is hard to read, its time to pull out the medium guns
that sit between fulling running jupyter and `jut`.

``` bash
pip install nbconvert
```

> nbconvert does not have its own cli, instead it sits under the jupyter command.


### converting to html

> Need to see images, go here!

``` bash
wget https://cantera.org/examples/jupyter/thermo/flame_temperature.ipynb
jupyter nbconvert flame_temperature.ipynb --to html
python -m http.server
```

> Note, nb convert does not work with a url, you will need to have the notebook locally.

![nbconvert to html to see images](https://images.waylonwalker.com/jut-nbconvert-html.gif)

## what other options does nbconvert offer?

`nbconvert` also offers a standard help flag that you can access by passing in
the `--help` flag

``` bash
jupyter nbconvert --help
```

### converting to markdown

`nbconvert` also supports converting to many other formats, one option that is
quite interesting for use in the terminal is markdown.  We could simply convert
the notebook to markdown and cat it out.

``` bash
jupyter nbconvert flame_temperature.ipynb --to maarkdown
cat flameflame_temperature.md
```

![nbconvert to markdown and displaying in bat](https://images.waylonwalker.com/jut-nbconvert-markdown-bat.gif)

### viewing markdown with glow

Glow is a terminal markdown viewer that looks really good.  These days I use
`bat` as `cat` so I don't get quite as much benefit from `glow`, but it still
looks pretty good.


```
glow flameflame_temperature.md
```

![nbconvert to markdown and displaying in glow](https://images.waylonwalker.com/jut-nbconvert-markdown-glow.gif)

### viewing markdown as slides with lookatme
_[lookatme](https://github.com/d0c-s4vage/lookatme)_

Lookatme is my slideshow tool of choice.  Creating slides in markdown is such a
fantasic user experience,  It realy lets you go from outline to finished slide
deck fluidly.  Refactoring the whole thing is also so much easier than with gui
tools.  Once you have your idea fleshed out it does make the process of making
slides in powerpoint much easier if thats what you need.


On to nbconvert, without even changing the notebook we can look at the notebook
as a slideshow in the terminal.  The only thing that it needs is some markdown
headers to start new slides from.

``` bash
lookatme flameflame_temperature.md
```

![nbconvert to markdown and displaying as slides with lookatme](https://images.waylonwalker.com/jut-nbconvert-markdown-lookatme.gif)

### viewing markdown with rich

Bringing this full circle, lets take a look at the converted markdown with
rich.  Here you will notice a surprising similarity to what we saw with `jut`.

``` bash
pip install rich
python -m rich.markdown flame_temperature.md
```

Rich still cannot pull directly from a url or display markdown with out being
installed and managed by yourself.  Unlike how `jut` can leverage [`pipx`](https://github.com/pypa/pipx) to
manage the installation sandbox for you.



## Links

* [jut](https://github.com/kracekumar/jut) - View notebooks in the terminal
* [nbconvert](https://nbconvert.readthedocs.io/en/latest/usage.html) - convert notebooks to other formats
* [flame-temperature notebook](https://cantera.org/examples/jupyter/thermo/flame_temperature.ipynb) - The sample notebook I used
* [glow](https://github.com/charmbracelet/glow) - Terminal Markdown viewer
* [lookatme](https://github.com/d0c-s4vage/lookatme) - Terminal Markdown slideshow tool
* [pipx](https://github.com/pypa/pipx) - Run python cli's without maintianing a virtual environment
* [rich](https://github.com/willmcgugan/rich) - Beautiful python terminal formatter
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
    
    <a class='prev' href='/kedro'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Kedro</p>
        </div>
    </a>
    
    <a class='next' href='/just-use-pathlib'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Just Use Pathlib</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>