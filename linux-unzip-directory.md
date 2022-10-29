---
cover: ''
date: 2022-04-02
datetime: 2022-04-02 00:00:00+00:00
description: This morning I was trying to install a modpack on my minecraft server
  after So I Then I go back to my server and download the modpack with wget. Now I
  can unzip
edit_link: https://github.com/edit/main/pages/til/linux-unzip-directory.md
jinja: false
long_description: This morning I was trying to install a modpack on my minecraft server
  after So I Then I go back to my server and download the modpack with wget. Now I
  can unzip my mods into the  I run the minecraft server with docker, which is setup
  to mount the htt
now: 2022-10-29 15:54:38.065741
path: pages/til/linux-unzip-directory.md
slug: linux-unzip-directory
status: draft
super_description: This morning I was trying to install a modpack on my minecraft
  server after So I Then I go back to my server and download the modpack with wget.
  Now I can unzip my mods into the  I run the minecraft server with docker, which
  is setup to mount the https://waylonwalker.com/til/docker-minecraft-server/ A bit
  more on that in the other post, but when I download the whole modpack
tags:
- linux
- bash
- cli
templateKey: til
title: Unzip minecraft mods to their directory from the command line
today: 2022-10-29
year: 2022
---

This morning I was trying to install a modpack on my minecraft server after
getting a zip file, and its quite painful when I unzip everything in the
current directory rather than the directory it belongs in.

## I had the files on a Windows Machine

So I've been struggling to get mods installed on linux lately and the easiest
way to download the entire pack rather than each mod one by one seems to be to
use the overwolf application on windows.  Once I have the modpack I can start
myself a small mod-server by zipping it, putting it in a mod-server directory
and running a python `http.server`

```bash
python -m http.server
```

## Downoading on the server

Then I go back to my server and download the modpack with wget.

``` python
wget 10.0.0.171:8000/One%2BBlock%2BServer%2BPack-1.4.zip
```

## Unzip to the minecraft-data directory

Now I can unzip my mods into the `minecraft-data` directory.

```bash
unzip One+Block+Server+Pack-1.4.zip -d minecraft-data
```
## Running the server with docker
I run the minecraft server with docker, which is setup to mount the
minecraft-data directory.

https://waylonwalker.com/til/docker-minecraft-server/

A bit more on that in the other post, but when I download the whole modpack
like this I make these changes to my docker compose. (commented out lines)

```yaml
version: "3.8"

services:
  mc:
    container_name: walkercraft
    image: itzg/minecraft-server:java8
    environment:
      EULA: "TRUE"
      TYPE: "FORGE"
      VERSION: 1.15.2
      # MODS_FILE: /extras/mods.txt
      # REMOVE_OLD_MODS: "true"
    tty: true
    stdin_open: true
    restart: unless-stopped
    ports:
      - 25565:25565
    volumes:
      - ./minecraft-data:/data
      # - ./mods.txt:/extras/mods.txt:ro

volumes:
  data:
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
    
    <a class='prev' href='/list-all-files-containing-phrase'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>List all the files containing a phrase</p>
        </div>
    </a>
    
    <a class='next' href='/linux-tty'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>A TTY Can Save Your Bacon</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>