---
cover: ''
date: 2022-03-18
datetime: 2022-03-18 00:00:00+00:00
description: 'If you ever end up on a linux machine that just does not have enough
  ram to You can put this where you wish, for this example I am going to pop it into
  You can '
edit_link: https://github.com/edit/main/pages/til/linux-swap.md
jinja: false
long_description: 'If you ever end up on a linux machine that just does not have enough
  ram to You can put this where you wish, for this example I am going to pop it into
  You can make sure that your swap is working by using the  https://waylonwalker.com/reset-ipython/ '
now: 2022-10-29 15:54:38.065923
path: pages/til/linux-swap.md
slug: linux-swap
status: draft
super_description: If you ever end up on a linux machine that just does not have enough
  ram to You can put this where you wish, for this example I am going to pop it into
  You can make sure that your swap is working by using the  https://waylonwalker.com/reset-ipython/
  I also used this trick in this article to give my python process a bit more oompf
  and get it on home.
tags:
- linux
templateKey: til
title: Create a Swapfile on Your Linux Machine
today: 2022-10-29
year: 2022
---

If you ever end up on a linux machine that just does not have enough ram to
suffice what you are doing and you just need to get the job done you can give
it some more swap.  You can look up reccomendations for how much swap you
should have this is more about just trying to get your job done when you are
almost there, but running out of memory on the hardware you have.

## make the /swap file

You can put this where you wish, for this example I am going to pop it into
`/swap`

```bash
sudo fallocate -l 4G /swap
sudo chmod 600 /swap
sudo mkswap /swap
sudo swapon /swap
```

## make sure that your swap is on

You can make sure that your swap is working by using the `free` command, I like
using the `-h` flag to get human readable numbers.

```bash
❯ free -h
               total        used        free      shared  buff/cache   available
Mem:            15Gi       5.5Gi       4.9Gi       458Mi       5.2Gi       9.3Gi
Swap:          4.0Gi          0B       4.0Gi
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/reset-ipython/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/reset-ipython.jpg" alt="article cover for Reclaim memory usage in Jupyter"/>
        <p><strong>Reclaim memory usage in Jupyter</strong></p>
    </a>
</div>


> I also used this trick in this article to give my python process a bit more oompf and get it on home.
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
    
    <a class='prev' href='/linux-tty'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>A TTY Can Save Your Bacon</p>
        </div>
    </a>
    
    <a class='next' href='/linux-bluetoothctl'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Bluetooth at the command line on Ubuntu</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>