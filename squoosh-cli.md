---
cover: ''
date: 2022-01-29
datetime: 2022-01-29 00:00:00+00:00
description: Today I discovered a sweet new cli for compressing images. First the
  main feature of squoosh is a  What is even cooler is that once you have settings
  you are ha
edit_link: https://github.com/edit/main/pages/til/squoosh-cli.md
jinja: false
long_description: Today I discovered a sweet new cli for compressing images. First
  the main feature of squoosh is a  What is even cooler is that once you have settings
  you are happy with and are I copied the command that it gave me for converting to
  webp, and set it u
now: 2022-10-29 15:54:38.066316
path: pages/til/squoosh-cli.md
slug: squoosh-cli
status: draft
super_description: Today I discovered a sweet new cli for compressing images. First
  the main feature of squoosh is a  What is even cooler is that once you have settings
  you are happy with and are I copied the command that it gave me for converting to
  webp, and set it up to I opened my images repo and converted all pngs to webp using
  the command above. I also converted to avif, but it sent all my cpus to 100 for
  quite awhile, for
tags:
- cli
- cli
- webdev
templateKey: til
title: Squoosh cli
today: 2022-10-29
year: 2022
---

Today I discovered a sweet new cli for compressing images.
[squoosh cli](https://github.com/GoogleChromeLabs/squoosh/tree/dev/cli)
is a wasm powered cli that supports a bunch of formats that I would want to
convert my website images to.

## Web App

First the main feature of squoosh is a [web app](https://squoosh.app) that
makes your images smaller right in the browser, using the same wasm.  It's
sweet!  There is a really cool swiper to compare the output image with the
original, and graphical dials to change your settings.

## CLI

What is even cooler is that once you have settings you are happy with and are
really cutting down those kb's on your images, there is a copy cli command
button!  If you have npx (which you should if you have nodejs and npm) already
installed it just works without installing anything more.

![The button on squoosh.app](https://images.waylonwalker.com/squoosh-cli-button.png)


## Converting all of my png's to webp

I copied the command that it gave me for converting to webp, and set it up to
run on all of my pngs.

```
npx @squoosh/cli --webp \
  '{"quality":75 \
    "target_size":0 \
    "target_PSNR":0 \
    "method":4 \
    "sns_strength":50 \
    "filter_strength":60 \
    "filter_sharpness":0 \
    "filter_type":1 \
    "partitions":0 \
    "segments":4 \
    "pass":1 \
    "show_compressed":0 \
    "preprocessing":0 \
    "autofilter":0 \
    "partition_limit":0 \
    "alpha_compression":1 \
    "alpha_filtering":1 \
    "alpha_quality":100 \
    "lossless":0 \
    "exact":0 \
    "image_hint":0 \
    "emulate_jpeg_size":0 \
    "thread_level":0 \
    "low_memory":0 \
    "near_lossless":100 \
    "use_delta_palette":0 \
    "use_sharp_yuv":0 \
    }' \
    static/*.png -d squoosh-webp
```

I opened my images repo and converted all pngs to webp using the command above.
I got 94% compression on my existing pngs without resizing anything.  This is
dang impressive, and not too hard to do.  I do want to refactor my images site
at some point and include this as part of the ci system.

![resulting file sizes for converting png to wepb.](https://images.waylonwalker.com/squoosh-webp-results.png)

I also converted to avif, but it sent all my cpus to 100 for quite awhile, for
only another 2MB total.  Not sure if its worth it or not.
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
    
    <a class='prev' href='/stand-with-your-team'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Stand With Your Team</p>
        </div>
    </a>
    
    <a class='next' href='/sqlalchemy-models'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>SqlAlchemy Models</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>