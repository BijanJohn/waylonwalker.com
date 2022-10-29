---
cover: ''
date: 2022-02-16
datetime: 2022-02-16 00:00:00+00:00
description: 'In my adventure to put more homelab in docker, I moved our modded So
  far I have found all of our mods from  under the hood docker is using wget to get
  the mod. '
edit_link: https://github.com/edit/main/pages/til/modded-minecraft-in-docker.md
jinja: false
long_description: In my adventure to put more homelab in docker, I moved our modded
  So far I have found all of our mods from  under the hood docker is using wget to
  get the mod. The link you click I am using docker compose, it makes the command
  much easier to start, C
now: 2022-10-29 15:54:38.065599
path: pages/til/modded-minecraft-in-docker.md
slug: modded-minecraft-in-docker
status: draft
super_description: In my adventure to put more homelab in docker, I moved our modded
  So far I have found all of our mods from  under the hood docker is using wget to
  get the mod. The link you click I am using docker compose, it makes the command
  much easier to start, Create a directory for your server and add the following to
  a Once you have your mod file link from the network tab add them to a Once you have
  made it this far starting the server is pretty simple. If your still in the same
  directory, taking down the
tags:
- homelab
- docker
templateKey: til
title: Modded Minecraft in Docker
today: 2022-10-29
year: 2022
---

In my adventure to put more homelab in docker, I moved our modded
minecraft setup to docker.

## Getting Mods

So far I have found all of our mods from [curse
forge](https://www.curseforge.com/minecraft/mc-mods).  modpacks make
getting multiple mods working together much easier, someone else has
already vetted a pack of often times 100+ mods that all play well
together.  I have yet to get these working in docker, I will, but for
not I just have individual mods.

## download file

under the hood docker is using wget to get the mod. The link you click
on from curseforge will block wget.  What I do is pop open the devtools
(f12 in chrome), click on the network tab, click the download link on
the web page, and watch the real link show up.


![minecraft mod in netwrok tab](https://images.waylonwalker.com/minecraft-mod-wget-file.png)

## Docker-compose

I am using docker compose, it makes the command much easier to start,
and all the things needed stored in a file.  I am not using compose to
run multiple things, just for the simple start command.

Create a directory for your server and add the following to a
`docker-compose.yml` file.

``` yaml
version: "3.8"

services:
  mc:
    container_name: walkercraft
    image: itzg/minecraft-server
    ports:
      - 25565:25565
    environment:
      EULA: "TRUE"
      TYPE: "FORGE"
      VERSION: 1.16.5
      MODS_FILE: /extras/mods.txt
      REMOVE_OLD_MODS: "true"
    tty: true
    stdin_open: true
    restart: unless-stopped
    ports:
      - 25565:25565
    volumes:
      - ./minecraft-data:/data
      - ./mods.txt:/extras/mods.txt:ro

volumes:
  data:
```

## mods.txt

Once you have your mod file link from the network tab add them to a
mods.txt file next to your docker-compose file.

``` txt
https://media.forgecdn.net/files/3620/189/engineersdecor-1.16.5-1.1.16.jar
```

## start your server

Once you have made it this far starting the server is pretty simple.

``` bash
docker compose up -d
```

## kill your server

If your still in the same directory, taking down the server should be
pretty easy as well.

``` bash
docker compose down

# if that does not work you can kill it
docker ps
# copy the id of your container
docker kill <id>
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
    
    <a class='prev' href='/more-itertools-windowed'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Windowing Python Lists</p>
        </div>
    </a>
    
    <a class='next' href='/modal-jumping'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Modal jumping</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>