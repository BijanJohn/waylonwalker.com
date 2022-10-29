---
cover: ''
date: 2022-02-20
datetime: 2022-02-20 00:00:00+00:00
description: Glances has a pretty incredible webui to view system processes and information
  The nice thing about the webui is that it can be accessed from a remote system.
  Y
edit_link: https://github.com/edit/main/pages/til/pipx-w.md
jinja: false
long_description: Glances has a pretty incredible webui to view system processes and
  information The nice thing about the webui is that it can be accessed from a remote
  system. You will need to install glances to use the glances webui.  We can still
  use You will be pr
now: 2022-10-29 15:54:38.066413
path: pages/til/pipx-w.md
slug: pipx-w
status: draft
super_description: 'Glances has a pretty incredible webui to view system processes
  and information The nice thing about the webui is that it can be accessed from a
  remote system. You will need to install glances to use the glances webui.  We can
  still use You will be presented with this success message. Now that you have glances
  installed you can run it with the  This will present you with the following success
  message. Now that its running you can open your web browser to '
tags:
- python
templateKey: til
title: Glances webui with pipx
today: 2022-10-29
year: 2022
---

Glances has a pretty incredible webui to view system processes and information
like htop, or task manager for windows.

The nice thing about the webui is that it can be accessed from a remote system.
This would be super nice on something like a raspberry pi, or a vm running in
the cloud.  Its also less intimidating and easier to search if you are not a
terminal junky.

## install

You will need to install glances to use the glances webui.  We can still use
`pipx` to manage our virtual environment for us so that we do not need to do so
manually or run the risk of globally installed package dependency hell.

``` bash
pipx install glances
pipx inject glances "glances[web]"
```

You will be presented with this success message.

``` bash
  injected package glances into venv glances
done! ✨ 🌟 ✨
```

## running the webui

Now that you have glances installed you can run it with the `-w` flag to run
the webui.

``` bash
glances -w
```

This will present you with the following success message.

``` bash
Glances Web User Interface started on http://0.0.0.0:61208/
```

## Open it in your browser

Now that its running you can open your web browser to `localhost:61208` and be
presented with the glances webui.

![running the glances webui on my system](https://images.waylonwalker.com/glances-w.png)

## Links

* [pipx](https://pypa.github.io/pipx/)
* [website](https://nicolargo.github.io/glances/)
* [docs](https://glances.readthedocs.io/en/latest/index.html)
* [github](https://github.com/nicolargo/glances)
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
    
    <a class='prev' href='/pluggy-minimal-example'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>A Minimal Pluggy Example</p>
        </div>
    </a>
    
    <a class='next' href='/pipx-textual-devtools'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>pipx textual devtools</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>