---
cover: ''
date: 2021-06-03
datetime: 2021-06-03 00:00:00+00:00
description: ''
edit_link: https://github.com/edit/main/pages/blog/modal-jumping.md
jinja: false
long_description: ''
now: 2022-10-29 15:54:38.064648
path: pages/blog/modal-jumping.md
slug: modal-jumping
status: draft
super_description: ''
tags:
- vim
templateKey: blog-post
title: Modal jumping
today: 2022-10-29
year: 2021
---

```
nnoremap <leader>e :execute getline(".")<cr>j
```

```
nnoremap <c-j> g,
nnoremap <c-k> g;
```

```
nnoremap <c-j> <c-]>
nnoremap <c-k> g;
```

```
nnoremap <c-j> :cnext<cr>
nnoremap <c-k> :cprev<cr>
```

```
nnoremap <c-j> :lnext<cr>
nnoremap <c-k> :lprev<cr>
```

```
nnoremap <c-j> :tnext<cr>
nnoremap <c-k> :tprevious<cr>
nnoremap <c-j> :trewind<cr>
nnoremap <c-k> :tprevious<cr>
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
    
    <a class='prev' href='/modded-minecraft-in-docker'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Modded Minecraft in Docker</p>
        </div>
    </a>
    
    <a class='next' href='/minimal-python-package'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Minimal Python Package</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>