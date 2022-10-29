---
cover: ''
date: 2021-05-05
datetime: 2021-05-05 00:00:00+00:00
description: 'Creating a directory that is a union of several directories can be achieved
  Here is how I am creating a virtual directory of all my projects that is a ⚠ Notice '
edit_link: https://github.com/edit/main/pages/blog/symlink-gallery.md
jinja: false
long_description: Creating a directory that is a union of several directories can
  be achieved Here is how I am creating a virtual directory of all my projects that
  is a ⚠ Notice that first I am recreating the directory each time. This will ensure
  Since links are alway
now: 2022-10-29 15:54:38.063730
path: pages/blog/symlink-gallery.md
slug: symlink-gallery
status: published
super_description: 'Creating a directory that is a union of several directories can
  be achieved Here is how I am creating a virtual directory of all my projects that
  is a ⚠ Notice that first I am recreating the directory each time. This will ensure
  Since links are always kept up to date without any extra work, all the data is cron
  bashrc/zshrc If you When you cd into a  Add either of these to your '
tags:
- linux
- bash
templateKey: blog-post
title: Create a Virtual File Gallery with Symlinks
today: 2022-10-29
year: 2021
---

Creating a directory that is a union of several directories can be achieved
with a few symlinks at the command line.

## Creating a Virtual File Gallery

Here is how I am creating a virtual directory of all my projects that is a
combination of both work and not-work projects.  I am creating symlinks for
every directory under `~/work` and `~/git`.

```bash
rm -rf ~/projects
mkdir ~/projects
ln -sf ~/work/* ~/projects
ln -sf ~/git/* ~/projects
```

> ⚠ Notice that first I am recreating the directory each time. This will ensure
> that any project that is deleted from their actual directory is removed from
> the virtual gallery.
 
## Updating the gallery

Since links are always kept up to date without any extra work, all the data is
still in the same place it started.  But as new directories are added to any
project directory they will not be automatically added to the virtual gallery.

* cron
* bashrc/zshrc

If you're concerned about system resources, you can add it to a cron job to run
at a regular schedule that makes sense to you.  For me, I just popped those 4
lines right in my `~/.zshrc`.  It's a bit overkill, maybe bloat, but it runs in
an impercieveable amount of time.

## Automatically CD to the real directory

When you cd into a `~/projects/my-proj` directory, your `$PWD` will still be
`~/projects/my-proj`.  I did not want this for my use case.  I wanted to follow
the symlink to the real directory.  I found two options that worked for me.

```
alias cd='cd -P'
set -o physical
```

> Add either of these to your `.bashrc`/`.zshrc` to follow symlinks to the
> actual directory.
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
    
    <a class='prev' href='/talk-python-kedro'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>I was on Talk Python</p>
        </div>
    </a>
    
    <a class='next' href='/switched-to-arch'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>The one reason I switched to arch</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>