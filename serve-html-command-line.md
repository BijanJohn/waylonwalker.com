---
cover: ''
date: 2021-12-28
datetime: 2021-12-28 00:00:00+00:00
description: When I first moved to vim from and ide like vscode or sublime text one
  of my You will need a way to run another process alongside vim, here are a couple
  use bac
edit_link: https://github.com/edit/main/pages/til/serve-html-command-line.md
jinja: false
long_description: When I first moved to vim from and ide like vscode or sublime text
  one of my You will need a way to run another process alongside vim, here are a couple
  use background jobs c-z to send a job to the background fg to bring it back use
  a second terminal
now: 2022-10-29 15:54:38.065822
path: pages/til/serve-html-command-line.md
slug: serve-html-command-line
status: draft
super_description: When I first moved to vim from and ide like vscode or sublime text
  one of my You will need a way to run another process alongside vim, here are a couple
  use background jobs c-z to send a job to the background fg to bring it back use
  a second terminal use a second tab use tmux and run it in a separate split/window
  use an embeded nvim terminal Python already exists on most linux systems by default,
  and most are now on If you are a web developer it npx is a handy tool that lets
  you run command line
tags:
- vim
- linux
- bash
templateKey: til
title: Serve html from your command line
today: 2022-10-29
year: 2021
---

When I first moved to vim from and ide like vscode or sublime text one of my
very first issues was trying to preview my website at `localhost:8000`.  There
had always just been a button there to do it in all of my other editors, not
vim.  There are not many buttons for anything in vim.  While there is probably a
plugin that can run a webserver for me in vim, it's not necessary, we just need
the command line we are already in.

## running a separate process

You will need a way to run another process alongside vim, here are a couple
ideas to get you going that are not the focus here.style

* use background jobs
  * c-z to send a job to the background
  * fg to bring it back
* use a second terminal
* use a second tab
* use tmux and run it in a separate split/window
* use an embeded nvim terminal

## running a development webserver from the command line

Python already exists on most linux systems by default, and most are now on
python3.  If you are on windows typing python will take you directly to the
windows store to install it, or you can also use wsl.

``` bash
# python3
python -m http.server

# running on port 5000
python -m http.server --directory markout 5000
```

```
# for the low chance you are on python2
python -m SimpleHTTPServer

# running on port 5000
python -m SimpleHTTPServer 5000
python -m SimpleHTTPServer --directory markout 5000

```

![running a python static webserver from the command line](https://images.waylonwalker.com/python-m-http-server.png)

## using nodejs

If you are a web developer it's likely that you need nodejs and npm on your
system anyways and may want to use one of the servers from npm.  I'll admit with
these not being tied to the long term support of a language they are much more
feature rich with things like compression out of the box.  In my opinion they
are nice things that you would want out of a production server, but may not
be necessary for development.

### installing npx

``` bash
# if you don't alredy have npx
npm i -g npx
```

> npx is a handy tool that lets you run command line applications straight from
> npm without installing them.  It pulls the latest version every time you want
> to run, then executes it without it being installed.

### running the http-server with npx

``` bash
npx http-server

# running on port 5000
npx http-server -p 5000
npx http-server markout -p 5000

```

![running a nodejs static webserver from the command line](https://images.waylonwalker.com/npx-http-server.png)
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
    
    <a class='prev' href='/serverless-things-to-investigate'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Serverless things to investigate</p>
        </div>
    </a>
    
    <a class='next' href='/send-email-with-github-actions'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Send Emails with GitHub Actions</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>