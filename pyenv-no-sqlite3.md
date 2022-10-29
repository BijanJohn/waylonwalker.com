---
cover: ''
date: 2022-05-31
datetime: 2022-05-31 00:00:00+00:00
description: I I talked about why and how to use pyenv along with my first impressions
  in According to  libsqlite3-dev When I make a fresh env and install ipython I still
  ge
edit_link: https://github.com/edit/main/pages/til/pyenv-no-sqlite3.md
jinja: false
long_description: I I talked about why and how to use pyenv along with my first impressions
  in According to  libsqlite3-dev When I make a fresh env and install ipython I still
  get the same error and I am After having this issue for awhile an coming back to
  I think I h
now: 2022-10-29 15:54:38.066171
path: pages/til/pyenv-no-sqlite3.md
slug: pyenv-no-sqlite3
status: draft
super_description: I I talked about why and how to use pyenv along with my first impressions
  in According to  libsqlite3-dev When I make a fresh env and install ipython I still
  get the same error and I am After having this issue for awhile an coming back to
  I think I had tried this several times, but was missing the  When you spend months
  living with little errors like this and finally fix it,
tags:
- python
templateKey: til
title: pyenv no module named '_sqlite3'
today: 2022-10-29
year: 2022
---

I've been trying to adopt pyenv for a few months, but have been completely
blocked by this issue on one of the main machines I use.  Whenever I start up
ipython I get the following error.

```
ImportError: No module named '_sqlite3
```

I talked about why and how to use pyenv along with my first impressions in
[this post](/til/pyenv-first-impressions)

## pyenv/issues/678

According to [#678](https://github.com/pyenv/pyenv/issues/678) I need to
install `libsqlite3-dev` on ubuntu to resolve this issue.

## install libsqlite3-dev

`libsqlite3-dev` can be installed using apt

```bash
sudo apt install libsqlite3-dev
```

## But wait....

When I make a fresh env and install ipython I still get the same error and I am
still not able to use ipython with pyenv.

```python
ImportError: No module named '_sqlite3
```

## re-install python

After having this issue for awhile an coming back to
[#678](https://github.com/pyenv/pyenv/issues/678) several times I realized that
`libsqlite3-dev` needs to be installed while during install.

```bash
pyenv install 3.8.13
```

I think I had tried this several times, but was missing the `-y` option each
time.  You gotta read errors like this, I am really good at glossing over them.

![pyenv-install-exists](https://screenshots.waylonwalker.com/pyenv-install-exists.webp)

## Let's never have this issue again.

When you spend months living with little errors like this and finally fix it,
its good to make sure that it never happens again.  Whenever I start a new
ubuntu machine I run an ansible playbook that does all the setup for me.  I
added `libsqlite3-dev` to my core install in
[64c85ca](https://github.com/WaylonWalker/devtainer/commit/64c85ca1b38eefe95dfc8723c1e83e8e334cf4dc)
now it will be on all of my machines and not break again.
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
    
    <a class='prev' href='/pyenv-pipx'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Using Different versions of python with pipx | pyenv</p>
        </div>
    </a>
    
    <a class='next' href='/pyenv-first-impressions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>My first impressions with pyenv</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>