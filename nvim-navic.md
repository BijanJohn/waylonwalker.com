---
cover: ''
date: 2022-10-27
datetime: 2022-10-27 00:00:00+00:00
description: With the latest release of version of nvim 0.8.0 we get access to a new
  winbar nvim exposes the winbar api in lua, and you can send any text to the winbar
  as fo
edit_link: https://github.com/edit/main/pages/til/nvim-navic.md
jinja: false
long_description: With the latest release of version of nvim 0.8.0 we get access to
  a new winbar nvim exposes the winbar api in lua, and you can send any text to the
  winbar as follows. You can try it for yourself right from the nvim command line.
  Now you will notice o
now: 2022-10-29 15:54:38.065986
path: pages/til/nvim-navic.md
slug: nvim-navic
status: published
super_description: With the latest release of version of nvim 0.8.0 we get access
  to a new winbar nvim exposes the winbar api in lua, and you can send any text to
  the winbar as follows. You can try it for yourself right from the nvim command line.
  Now you will notice one line above your file with the word  If you want to clear
  it out, you can just set it to an empty string or  You will need to install  Note
  I created an  Then you need to use that  Then in a lua file you need to setup the
  winbar, for now I put this
tags:
- vim
templateKey: til
title: nvim navic
today: 2022-10-29
year: 2022
---

With the latest release of version of nvim 0.8.0 we get access to a new winbar
feature.  One thing I have long wanted somewhere in my nvim is navigation for
pairing partners or anyone watching can keep track of where I am.  As the
driver it's easy to keep track of the file/function you are in.  But when you
make big jumps in a few keystrokes it can be quite disorienting to anyone
watching, and having this feedback to look at is very helpful.

!["cybernetic soldier working on a rusting tape machine robot, cinematic lighting, detailed, cell shaded, 4 k, warm colours, concept art, by wlop, ilya kuvshinov, artgerm, krenz cushart, greg rutkowski, pixiv. cinematic dramatic atmosphere, sharp focus, volumetric lighting, cinematic lighting, studio quality" -s50 -W832 -H416 -C6.0 -Ak_lms -S2841371882](https://stable-diffusion.waylonwalker.com/000362.2841371882.webp)

## winbar

nvim exposes the winbar api in lua, and you can send any text to the winbar as follows.

``` lua
vim.o.winbar = "here"
```

You can try it for yourself right from the nvim command line.

``` vim
:lua vim.o.winbar = "here"
```

Now you will notice one line above your file with the word `here` at the very
beginning.

## Clearing the winbar

If you want to clear it out, you can just set it to an empty string or `nil`.

``` vim
:lua vim.o.winbar = ""
:lua vim.o.winbar = nil
```

## Setting up nvim-navic

You will need to install `nvim-navic` if you want to use it.  I added it to my
plugins using Plug as follows.

``` vim
call plug#begin('~/.local/share/nvim/plugged')
Plug 'SmiteshP/nvim-navic'
call plug#end()
```

> Note! `nvim-navic` does require the use of the nvim lsp, so if you are not
> using it then maybe this won't work for you.

I created an `on_attach` function long ago, cause that's what Teej told me to
do.  Now I am glad I did, because it made this change super easy.

``` lua
local function on_attach(client, bufnr)
    if client.server_capabilities.documentSymbolProvider then
        navic.attach(client, bufnr)
    end
end
```

Then you need to use that `on_attach` function on all of the lsp's that you
want navic to work on.

Then in a lua file you need to setup the winbar, for now I put this in my
lsp-config settings file, but eventually I want to move my settings to lua and
put it there.

``` lua
vim.o.winbar = " %{%v:lua.vim.fn.expand('%F')%}  %{%v:lua.require'nvim-navic'.get_location()%}"
```

## What my winbar looks like

What I have right now is everything someone who is watching would need to know
to navigate to the same place that I am in the project.

``` text
 waylonwalker/app.py   Link >  on_click
```

![nvim-navic-example](https://screenshots.waylonwalker.com/nvim-navic-example.webp)

## Diff

Here are the changes that I made to to my plugins list and my lsp-config to get
it.

```diff
 /home/u_walkews/.config/nvim/plugins.vim
call plug#begin('~/.local/share/nvim/plugged')
+Plug 'SmiteshP/nvim-navic'
```

``` diff
#  /home/u_walkews/.config/nvim/lua/waylonwalker/lsp-config.lua
-local function on_attach() end
+local navic = require("nvim-navic")
+local function on_attach(client, bufnr)
+    if client.server_capabilities.documentSymbolProvider then
+        navic.attach(client, bufnr)
+    end
+end
+
+vim.o.winbar = " %{%v:lua.vim.fn.expand('%F')%}  %{%v:lua.require'nvim-navic'.get_location()%}"
```

## GH commit

If you want to see the change on GitHub, here is the
[diff](https://github.com/WaylonWalker/devtainer/commit/62298a935d93a2cf21e1c965d323363bcbd22881)

[![nvim-navic-setup-gh-diff](https://screenshots.waylonwalker.com/nvim-navic-setup-gh-diff.webp)](https://github.com/WaylonWalker/devtainer/commit/62298a935d93a2cf21e1c965d323363bcbd22881)
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
    
    <a class='prev' href='/obs-virtual-camera-on-boot'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>obs virtual camera on boot</p>
        </div>
    </a>
    
    <a class='next' href='/nvim-ides-are-slow'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>nvim conf 2021 | IDE's are slow | Waylon Walker</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>