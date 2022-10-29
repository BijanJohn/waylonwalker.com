---
cover: ''
date: 2022-10-18
datetime: 2022-10-18 00:00:00+00:00
description: For far too long I have had to fidget with v4l2oloopback after reboot.  I
  After a reboot the start virtual camera button won Today I learned that you can
  turn o
edit_link: https://github.com/edit/main/pages/til/obs-virtual-camera-on-boot.md
jinja: false
long_description: 'For far too long I have had to fidget with v4l2oloopback after
  reboot.  I After a reboot the start virtual camera button won Today I learned that
  you can turn on kernel modules through some files in  This is what I did to my arch
  system to get it to '
now: 2022-10-29 15:54:38.066028
path: pages/til/obs-virtual-camera-on-boot.md
slug: obs-virtual-camera-on-boot
status: published
super_description: For far too long I have had to fidget with v4l2oloopback after
  reboot.  I After a reboot the start virtual camera button won Today I learned that
  you can turn on kernel modules through some files in  This is what I did to my arch
  system to get it to work right after boot.
tags:
- linux
templateKey: til
title: obs virtual camera on boot
today: 2022-10-29
year: 2022
---

For far too long I have had to fidget with v4l2oloopback after reboot.  I've
had this happen on ubuntu 18.04, 22.04, and arch.

After a reboot the start virtual camera button won't work, It appears and is
clickable, but never turns on.  Until I run this command.

``` bash
sudo modprobe v4l2loopback video_nr=10 card_label="OBS Video Source" exclusive_caps=1
```

!["cell shaded, long, full body, shot of a cybernetic blue soldier with glowing pink eyes looking into a selfie camera with ring light, llustration, post grunge, 4 k, warm colors, cinematic dramatic atmosphere, sharp focus, pink glowing volumetric lighting, concept art by josan gonzales and wlop, by james jean, Victo ngai, David Rubín, Mike Mignola, Laurie Greasley, highly detailed, sharp focus,alien,Trending on Artstation, HQ, deviantart, art by artgem" -s50 -W832 -H416 -C12.0 -Ak_lms -S373882614 ](https://stable-diffusion.waylonwalker.com/000378.373882614.webp)

Today I learned that you can turn on kernel modules through some files in `/etc/modules...`

This is what I did to my arch system to get it to work right after boot.

``` bash
echo "v4l2loopback" | sudo tee /etc/modules-load.d/v4l2loopback.conf
echo "options v4l2loopback video_nr=10 card_label=\"OBS Video Source\" exclusive_caps=1" | sudo tee /etc/modprobe.d/v4l2loopback.conf
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
    
    <a class='prev' href='/out-of-space'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Out of Space</p>
        </div>
    </a>
    
    <a class='next' href='/nvim-navic'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>nvim navic</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>