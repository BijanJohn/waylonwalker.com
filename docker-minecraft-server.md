---
cover: ''
date: 2022-02-07
datetime: 2022-02-07 00:00:00+00:00
description: I In all these years, I My buddy Nic has been sharing me some of his
  homelab setup, and it I ended up running the first thing in the Readme that included
  a volu
edit_link: https://github.com/edit/main/pages/til/docker-minecraft-server.md
jinja: false
long_description: I In all these years, I My buddy Nic has been sharing me some of
  his homelab setup, and it I ended up running the first thing in the Readme that
  included a volume With the following stored as my  To start the server we open up
  the terminal in this di
now: 2022-10-29 15:54:38.066585
path: pages/til/docker-minecraft-server.md
slug: docker-minecraft-server
status: draft
super_description: I In all these years, I My buddy Nic has been sharing me some of
  his homelab setup, and it I ended up running the first thing in the Readme that
  included a volume With the following stored as my  To start the server we open up
  the terminal in this directory and run Once its up and running we can run commands
  on the server simply by We play very casually most of the time so we will set keepInventory
  to
tags:
- docker
- homelab
templateKey: til
title: Running a Minecraft Server in Docker
today: 2022-10-29
year: 2022
---

I've ran a Minecraft server at home since December 2017 for me and my
son to play on.  We start a brand new one somewhere between every day
and every week.  The older he gets the longer the server lasts.

In all these years, I've been popping open the command line and running
the server manually, and even inside of Digital Ocean occasionally to
play a more public server with a friend.

My buddy Nic has been sharing me some of his homelab setup, and it's
really got me to thinking about what I can run at home, and Dockerizing
all the things.  Today I found a really sweet github repo that had a
minecraft server running in docker with a pretty incredible setup.

I ended up running the first thing in the Readme that included a volume
mount.  If you are going to run this container, I HIGHLY reccomend that
you make sure that you have your world volume mounted, otherwise it will
die with your docker container.


## Docker Compose

With the following stored as my `docker-compose.yml` in a brand new and
otherwise empty directory I was ready to start the server for the night.

``` yaml
version: "3"

services:
  mc:
    container_name: walkercraft
    image: itzg/minecraft-server
    ports:
      - 25565:25565
    environment:
      EULA: "TRUE"
    tty: true
    stdin_open: true
    restart: unless-stopped
    volumes:
      # attach a directory relative to the directory containing this compose file
      - ./minecraft-data:/data
```

To start the server we open up the terminal in this directory and run
the follwing command.

``` bash
docker compose up -d
```

Once its up and running we can run commands on the server simply by
attaching to it.

``` bash
docker attach walkercraft
```

## A few common commands we run in the server

We play very casually most of the time so we will set keepInventory to
true so that we do not loose our inventory when we die.  Sometimes we
also op ourselve so that we can toggle gamemode into creative.

```bash
# set the game to keep your inventory when you die.
/gamrule keepInventory true

# give everyone operater priveledges to they can run commands
/op @a

# give playername op
/op playername
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
    
    <a class='prev' href='/don-t-waste-your-time-learning-everything'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Don’t waste your time learning everything</p>
        </div>
    </a>
    
    <a class='next' href='/docker-deep-dive'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>📝 Docker Deep Dive - Notes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>