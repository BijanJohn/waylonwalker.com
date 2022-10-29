---
cover: ''
date: 2022-04-30
datetime: 2022-04-30 00:00:00+00:00
description: 'When I am creating blog posts it When I have something to take a screenshot
  of, I need to take the shot, take screenshot optimize conversion publish create
  img '
edit_link: https://github.com/edit/main/pages/blog/screenshot-to-blog.md
jinja: false
long_description: 'When I am creating blog posts it When I have something to take
  a screenshot of, I need to take the shot, take screenshot optimize conversion publish
  create img tag I created this tool for myself in python because that is what I am
  most My screenshot '
now: 2022-10-29 15:54:38.064269
path: pages/blog/screenshot-to-blog.md
slug: screenshot-to-blog
status: draft
super_description: 'When I am creating blog posts it When I have something to take
  a screenshot of, I need to take the shot, take screenshot optimize conversion publish
  create img tag I created this tool for myself in python because that is what I am
  most My screenshot tool is quite hacky and not configurable, but works wonderfully
  This is just a tool for me, it does not need to be in a package manager like pip.
  Now that screenshot is installed we can call it and make a screenshot.  I I have
  this tool exposed as a '
tags:
- python
- python
- python
templateKey: blog-post
title: How I Quickly Capture Screenshots directly into My Blog
today: 2022-10-29
year: 2022
---

When I am creating blog posts it's often helpful to add screenshots to them to
illustrate what I see on my screen.  Sometimes I lack good screenshots in my
posts because it just takes more effort than I have in the moment, and I
prioritize making content over making perfect content.

## Making Screenshots

When I have something to take a screenshot of, I need to take the shot,
optimize the image, often convert it to a better format, publish it, and
create a the img tag in my blog.

* take screenshot
* optimize
* conversion
* publish
* create img tag

## Created in 🐍Python

I created this tool for myself in python because that is what I am most
familiar with, but realistically most of what I am calling are shell scripts
that I could do in just about any language.

## Install my screenshot tool

My screenshot tool is quite hacky and not configurable, but works wonderfully
for me. If you like it and want to use it, make it configurable or fork it.
For now it lives on GitHub and since it has a setup.py with entrypoints we can
install it with pipx.

``` bash
pipx install git+https://github.com/WaylonWalker/screenshots.waylonwalker.com
```

> This is just a tool for me, it does not need to be in a package manager like pip.

## calling screenshot

Now that screenshot is installed we can call it and make a screenshot.  I'll
take a screenshot of the frontmatter of this exact post.

![screenshot-to-blog](https://screenshots.waylonwalker.com/screenshot-to-blog.webp)

I have this tool exposed as a command that can be ran in the command line by
calling `screenshot`.  I will rarely use it this way, but makes it easy to
create a hotkey for later.

## Success

Once the screenshot is successful, I get a `notify-send` message popup telling me so.

![screenshot-success](https://screenshots.waylonwalker.com/screenshot-success.webp)

## xbindkeys

Let's make this workflow just a bit smoother.  I want a desktop hotkey that I
can press at any time without opening a split or making sure I'm in zsh or vim,
I want it always there.  For hotkeys like this I use the Desktop manager
agnostic keybinding tool xbindkeys.  I can add the `screenshot` command and the
corresponding keybinding I want to my `~/.xbindkeysrc` file and restart with
`xbindkeys -f ~/.xbindkeysrc`.

```
"screenshot"
    Shift + Mod4 + alt + p
```

Now when I press `Shift + Mod4 + alt + p` I am presented with a little `zenity`
box asking me what I want to name my screenshot, followed by flameshot.

> xbindkeys allows me to bind this hotkey to my system so that no matter where
> I am it will work.

## Name it

The one question I ask myself when creating the hotkey is for a filename.  On
my ubuntu machine I do that with a simple gui application called zenity.  It
looks like this when I open it up.

![screenshot-zenity-window](https://screenshots.waylonwalker.com/screenshot-zenity-window.webp)

Under the hood my screenshot tool is running the following command in a subprocess.

```bash
zenity --entry --text="filename"
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
    
    <a class='prev' href='/scripting-tmux-layouts'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Scripting Tmux Layouts</p>
        </div>
    </a>
    
    <a class='next' href='/save-vim-macro'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Save Vim Macro</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>