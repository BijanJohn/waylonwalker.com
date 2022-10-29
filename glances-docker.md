---
cover: ''
date: 2022-02-22
datetime: 2022-02-22 00:00:00+00:00
description: 'Glances is a system monitor with a ton of features, including docker
  processes. I have started using portainer to look at running docker processes, its
  a great '
edit_link: https://github.com/edit/main/pages/til/glances-docker.md
jinja: false
long_description: Glances is a system monitor with a ton of features, including docker
  processes. I have started using portainer to look at running docker processes, its
  a great You will need to install glances to use the glances webui.  We can still
  use You will be p
now: 2022-10-29 15:54:38.065552
path: pages/til/glances-docker.md
slug: glances-docker
status: draft
super_description: Glances is a system monitor with a ton of features, including docker
  processes. I have started using portainer to look at running docker processes, its
  a great You will need to install glances to use the glances webui.  We can still
  use You will be presented with this success message. Now running glances will also
  show information about your running docker
tags:
- python
templateKey: til
title: Glances can watch docker processes
today: 2022-10-29
year: 2022
---

Glances is a system monitor with a ton of features, including docker processes.

I have started using portainer to look at running docker processes, its a great
heavy-weight docker process monitor.  glances works as a great lightweight
monitor to just give you the essentials, ( Name, Status, CPU%, MEM, /MAX,
IOR/s, IOW/s, Rx/s, Tx/s, Command)

## install

You will need to install glances to use the glances webui.  We can still use
`pipx` to manage our virtual environment for us so that we do not need to do so
manually or run the risk of globally installed package dependency hell.

``` bash
pipx install glances
pipx inject glances "glances[docker]"
```

You will be presented with this success message.

``` bash
  injected package glances into venv glances
done! ✨ 🌟 ✨
```

## results

Now running glances will also show information about your running docker
containers.

![running glances with docker installed will show your docker processes](https://images.waylonwalker.com/glances-docker.png)


## Links

* [glances docker](https://glances.readthedocs.io/en/catest/docker.html)
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
    
    <a class='prev' href='/global-gitignore-considered-useful'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>A Good Use for global .gitignore</p>
        </div>
    </a>
    
    <a class='next' href='/gitui-slides'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Gitui is a blazing fast terminal git interface</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>