---
Tags:
- cli
- linux
- tmux
cover: ''
date: 2021-08-13
datetime: 2021-08-13 00:00:00+00:00
description: https://youtu.be/nT0FA1RNZEs Now your creating, jumping, and killing
  sessions like a boss. You are slicing This script is simply my fork of Chris Toomey
  My vers
edit_link: https://github.com/edit/main/pages/blog/tmux-ta.md
jinja: false
long_description: 'https://youtu.be/nT0FA1RNZEs Now your creating, jumping, and killing
  sessions like a boss. You are slicing This script is simply my fork of Chris Toomey
  My version of the  By default I have my projects open with a vertical split, vim
  is on top, with '
now: 2022-10-29 15:54:38.063854
path: pages/blog/tmux-ta.md
slug: tmux-ta
status: published
super_description: 'https://youtu.be/nT0FA1RNZEs Now your creating, jumping, and killing
  sessions like a boss. You are slicing This script is simply my fork of Chris Toomey
  My version of the  By default I have my projects open with a vertical split, vim
  is on top, with I also have a directory setup that is a symlink-gallery of all of
  my projects, https://waylonwalker.com/symlink-gallery/ This post covers how I combine
  all my projects into a single directory. my  my  https://waylonwalker.com/tmux-nav-2021/
  for more '
tags: []
templateKey: blog-post
title: tmux ta
today: 2022-10-29
year: 2021
---

https://youtu.be/nT0FA1RNZEs

Now your creating, jumping, and killing sessions like a boss. You are slicing
through projects with ease, let me show you one more thing that can be the
cream on top of this silky smooth setup we have been working towards.

## [Chris Toomey's](https://twitter.com/christoomey) Tmux Course

This script is simply my fork of Chris Toomey's `tat` script straight out of
his course.  It helps us create or jump to project specific sessions with ease.

## a directory of projects

My version of the `ta` script will let you pass it a directory, and it will
give you a fuzzy popup.

``` bash
ta ~/git
```

## setting up a keybinding

``` bash
bind C-g display-popup -E "ta ~/git"
```

![ta-git](https://images.waylonwalker.com/ta-git.png)

## default layout

By default I have my projects open with a vertical split, vim is on top, with
my file finder open and the lower split is set to just my terminal.  This is
what I do 90% of the time that I open a project anyways.

![ta-git-layout](https://images.waylonwalker.com/ta-git-layout.png)

## More projects

I also have a directory setup that is a symlink-gallery of all of my projects,
both private and public.  This makes it easy to have one key that lets me see
all of my projects.

```bash
rm -rf ~/projects
mkdir ~/projects
ln -sf ~/work/* ~/projects
ln -sf ~/git/* ~/projects
```


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/symlink-gallery/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/symlink-gallery.jpg" alt="article cover for Create a Virtual File Gallery with Symlinks"/>
        <p><strong>Create a Virtual File Gallery with Symlinks</strong></p>
    </a>
</div>


> This post covers how I combine all my projects into a single directory.

## Related Links

* [default key bindings](https://gist.github.com/mzmonsour/8791835)
* [Chris Toomey's](https://twitter.com/christoomey) Tmux Course
* my [ta script](https://github.com/WaylonWalker/devtainer/blob/main/bin/.local/bin/ta)
* my [.tmux.conf](https://github.com/WaylonWalker/devtainer/blob/main/tmux/.tmux.conf)


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-nav-2021/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-nav-2021.jpg" alt="article cover for How I navigate tmux in 2021"/>
        <p><strong>How I navigate tmux in 2021</strong></p>
    </a>
</div>


> for more information on how I navigate tmux, check out this full post


Also check out the full YouTube
[tmux-playlist](https://www.youtube.com/playlist?list=PLTRNG6WIHETB4reAxbWza3CZeP9KL6Bkr)
to see all of the videos in this series.
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
    
    <a class='prev' href='/tmux-targeted-session'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux targeted session</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-status-bar'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux status-bar</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>