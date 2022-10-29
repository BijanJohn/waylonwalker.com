---
cover: ''
date: 2021-04-23
datetime: 2021-04-23 00:00:00+00:00
description: 'https://www.hanselminutes.com/784/doing-open-source-with-brian-douglas
  A handy way to try weird things in docker is using Installing on Ubuntu. In order
  to run '
edit_link: https://github.com/edit/main/pages/blog/docker-deep-dive.md
jinja: false
long_description: https://www.hanselminutes.com/784/doing-open-source-with-brian-douglas
  A handy way to try weird things in docker is using Installing on Ubuntu. In order
  to run docker commands without using sudo you need to add docker to Namespaces and
  Control Groups
now: 2022-10-29 15:54:38.064173
path: pages/blog/docker-deep-dive.md
slug: docker-deep-dive
status: draft
super_description: https://www.hanselminutes.com/784/doing-open-source-with-brian-douglas
  A handy way to try weird things in docker is using Installing on Ubuntu. In order
  to run docker commands without using sudo you need to add docker to Namespaces and
  Control Groups are hard, which is why containers were unusable Each container looks
  and feels like a regular OS. It has its own eth0, users, Namespaces are analogous
  to what Hypervisors do on hardware. Process ID (pid) Network (net) Filesystem/mount
  (mnt) Inter-pr
tags:
- docker
- linux
templateKey: blog-post
title: "\U0001F4DD Docker Deep Dive - Notes"
today: 2022-10-29
year: 2021
---

https://www.hanselminutes.com/784/doing-open-source-with-brian-douglas

## Play With Docker

A handy way to try weird things in docker is using
[play-with-docker](play-with-docker.com).  You get a four hour session for
free, after four hours everything will be deleted, but you can start a new
session.

### Installing Docker on Linux

Installing on Ubuntu.

``` bash
wget -qO- https://get.docker.com/ | sh
```

### Running Docker commands without sudo

In order to run docker commands without using sudo you need to add docker to
your group.


``` bash
sudo usermod -aG docker ubuntu
```

## Architecture and Theory


**Container** - Isolated area of an OS with resource usage limits applied.

Namespaces and Control Groups are hard, which is why containers were unusable
by mortals before docker.



## Namespaces
_Isolation_

Each container looks and feels like a regular OS. It has its own eth0, users,
kernel.  These are completely isolated from every other container running on
the system.

Namespaces are analogous to what Hypervisors do on hardware.

* Process ID (pid)
* Network (net)
* Filesystem/mount (mnt)
* Inter-proc comms (ipc)
* UTS (uts)
* User (usr)

##  Control Groups
_Resource usage limits_
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
    
    <a class='prev' href='/docker-minecraft-server'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Running a Minecraft Server in Docker</p>
        </div>
    </a>
    
    <a class='next' href='/do-you-hoist'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Do You Hoist</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>