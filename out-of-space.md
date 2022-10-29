---
cover: ''
date: 2020-02-01
datetime: 2020-02-01 00:00:00+00:00
description: Out of Space! How to remove 65 conda environments in one command.
edit_link: https://github.com/edit/main/pages/blog/out-of-space.md
jinja: false
long_description: This morning I logged into my machine and was nearly out of space
  64GB miniconda3 5GB conda cache 4GM pip cache 34GB docker Photo by  These are the
  commands that I often use to reclaim space.  Its so easy to fill up small vm This
  shows us where to st
now: 2022-10-29 15:54:38.063671
path: pages/blog/out-of-space.md
slug: out-of-space
status: published
super_description: This morning I logged into my machine and was nearly out of space
  64GB miniconda3 5GB conda cache 4GM pip cache 34GB docker Photo by  These are the
  commands that I often use to reclaim space.  Its so easy to fill up small vm This
  shows us where to start and gives a baseline of how much space we have reclaimed.
  Next keep drilling into directories that are big and running this command to see
  whats big inside of it.  When you find somethign that you are willing to part with  Honestly
  I rarely bothe
tags: []
templateKey: blog-post
title: Out of Space
today: 2022-10-29
year: 2020
---

This morning I logged into my machine and was nearly out of space

* 64GB miniconda3!
* 5GB conda cache
* 4GM pip cache
* 34GB docker

## Find it

[![Looking for big files when the weeds are too tall](https://res.cloudinary.com/practicaldev/image/fetch/s--0LE2KZJW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/je7pxcagfs7m23p98kck.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--0LE2KZJW--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/je7pxcagfs7m23p98kck.jpg)

> Photo by [Simon Migaj](https://unsplash.com/@simonmigaj?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/find?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)


These are the commands that I often use to reclaim space.  Its so easy to fill up small vm's in the cloud, or in my case today let your dev machine go way too long without a good cleanup.

### Show Remaining Space on Drives

This shows us where to start and gives a baseline of how much space we have reclaimed.

``` bash
df -h
```


### show largest files in current directory

Next keep drilling into directories that are big and running this command to see whats big inside of it.  When you find somethign that you are willing to part with `rm -rf <directory>` it and check `df -h` to see if you have enough reclaimed yet.

``` bash
du . -h --max-depth=1
```

Honestly I rarely bother unless the directory is in the GB's of space.  A super simple filter for that is to just grep for G.

``` bash
du . -h --max-depth=1 | grep G
```


## conda

### How Many?

As a first baseline lets see how many enviroments we are starting with. I started with 71. Yeah I have had this machine for 2 years, and dont regularly remove them.

``` bash
conda info --envs | tail -n +2 | wc -l
```



bash

### Lets batch it out!

We are devs here surely we can automate this issue! The following four lines will generate a list of existing conda environments, edit them with vim, remove the remaining ones, then remove the text file we created to remove from.

Make sure that you only keep names of environments that you want to **remove** in `conda_envs_to_remove.txt` and delete the environment names you want to keep.

``` bash
conda info --envs | tail -n +2 | cut -d ' ' -f1 > conda_envs_to_remove.txt
vim conda_envs_to_remove.txt
cat ~/.conda_envs_remove | tr '\n' '\0' | xargs -l -0 conda remove --all -y -n
rm conda_envs_to_remove.txt
```

### 📝 Side note

When I am creating one of these complicated bash pipelines including xargs I generally print out the command first and make sure that it does what I want. The following command will test the above script before doing dangerous things!

``` bash
cat ~/.conda_envs_remove | tr '\n' '\0' | xargs -l -0 echo "conda remove --all -y -n "
```

## Cache

If your feeling really strained for space, you can `rm -rf ~/.cache`. Personally I like the improved speed of installing everything... obviously I install a lot of new environments.

## Docker

[![Alt Text](https://res.cloudinary.com/practicaldev/image/fetch/s--W4NWBxYC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/olcef3lh31dtrwa51u7g.jpg)](https://res.cloudinary.com/practicaldev/image/fetch/s--W4NWBxYC--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/olcef3lh31dtrwa51u7g.jpg)

> Photo by [Henry Be](https://unsplash.com/@henry_be?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText) on [Unsplash](https://unsplash.com/s/photos/dark-fire?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText)

For more information read this article, [https://docs.docker.com/config/pruning/](https://docs.docker.com/config/pruning/ "https://docs.docker.com/config/pruning/"). I have all of the images that I want pushed remotely so I just dumped everything with the following command.

``` bash
docker system prune
docker system prune --volumes
```

Running these two sets of commands cleared up about **70GB** of space for me with very little effort on my behalf. I hope others find the first command helpful to batch remove many conda environments at once.
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
    
    <a class='prev' href='/packages-i-maintain'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Packages I Maintain</p>
        </div>
    </a>
    
    <a class='next' href='/obs-virtual-camera-on-boot'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>obs virtual camera on boot</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>