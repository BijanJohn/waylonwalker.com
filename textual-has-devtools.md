---
cover: ''
date: 2022-06-09
datetime: 2022-06-09 00:00:00+00:00
description: Textual has devtools in the upcoming css branch, and its pretty awesome
  Textual is still very early and not really ready for prime time, but it As  https://twit
edit_link: https://github.com/edit/main/pages/til/textual-has-devtools.md
jinja: false
long_description: Textual has devtools in the upcoming css branch, and its pretty
  awesome Textual is still very early and not really ready for prime time, but it
  As  https://twitter.com/willmcgugan/status/1531294412696956930 Textual is a tui
  application framework. Unl
now: 2022-10-29 15:54:38.065622
path: pages/til/textual-has-devtools.md
slug: textual-has-devtools
status: draft
super_description: Textual has devtools in the upcoming css branch, and its pretty
  awesome Textual is still very early and not really ready for prime time, but it
  As  https://twitter.com/willmcgugan/status/1531294412696956930 Textual is a tui
  application framework. Unlike when you are building cli In the future it will likely
  be in main and not need this, but for now you need Now you can create a virtual
  environment, feel free to use whatever virtual Once textual is installed you can
  open up the devtools by runnin
tags:
- python
- python
- python
templateKey: til
title: Textual has devtools
today: 2022-10-29
year: 2022
---

Textual has devtools in the upcoming css branch, and its pretty awesome!

## It's still early

Textual is still very early and not really ready for prime time, but it's quite
amazing how easy some things such as creating keybindings is.  The docs are
coming, but missing right now so if you want to use textual be ready for
reading source code and examples.

## On to the devtools

As [@willmcgugan](https://twitter.com/willmcgugan) shows in this tweet it's
pretty easy to setup, it requires having two terminals open, or using tmux, and
currently you have to use the css branch.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">BTW.<br><br>Do this in one terminal:<br><br>textual console<br><br>Run scripts with:<br><br>textual run <a href="https://t.co/3CuaqTyxjl">https://t.co/3CuaqTyxjl</a> --dev</p>&mdash; Will “it’s terminal”🧛‍♂️ McGugan (@willmcgugan) <a href="https://twitter.com/willmcgugan/status/1531294412696956930?ref_src=twsrc%5Etfw">May 30, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Why does textual need its own devtools

Textual is a tui application framework. Unlike when you are building cli
applications, when the tui takes over the terminal in full screen there is no
where to print statement debug, and breakpoints don't work.

## getting the css branch

In the future it will likely be in main and not need this, but for now you need
to get the css branch to get devtools.

``` bash
git clone https://github.com/Textualize/textual
git fetch --alll
git checkout css
```

## install in a virtual environment

Now you can create a virtual environment, feel free to use whatever virtual
environment tool you want, venv is built in to most python distributions
though, and should just be there.

``` bash
python3 -m venv .venv --prompt textual
source .venv/bin/activate
pip install .
```

## Now that we have textual installed

Once textual is installed you can open up the devtools by running textual console.

```bash
textual console
```

![textual-console](https://screenshots.waylonwalker.com/textual-console.webp)
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
    
    <a class='prev' href='/textual-popup-hack'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Textual Popup Hack</p>
        </div>
    </a>
    
    <a class='next' href='/textual-app-devtools'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>textual app devtools</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>