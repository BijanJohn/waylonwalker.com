---
cover: ''
date: 2020-01-23
datetime: 2020-01-23 00:00:00+00:00
description: cmd.exe tips
edit_link: https://github.com/edit/main/pages/blog/cmd-exe-tips.md
jinja: false
long_description: I spend a lot of my time at the terminal for my daily work, mostly
  in Linux or wsl.  One big reason for using wsl over cmd.exe is the ease of walking
  through history that fzf provides.  This week we had a windows bug in a cli and
  I was stuck in vanil
now: 2022-10-29 15:54:38.064821
path: pages/blog/cmd-exe-tips.md
slug: cmd-exe-tips
status: published
super_description: "I spend a lot of my time at the terminal for my daily work, mostly
  in Linux or wsl.  One big reason for using wsl over cmd.exe is the ease of walking
  through history that fzf provides.  This week we had a windows bug in a cli and
  I was stuck in vanilla cmd.exe \U0001F62D First off if you are stuck using cmd.exe,
  do yourself a favor and get cmder.  It makes life just a bit easier.  It is super
  confugurable and comes with several power ups that make it a bit more enjoyable
  than cmd.exe. The next simple tec"
tags: []
templateKey: blog-post
title: cmd.exe tips
today: 2022-10-29
year: 2020
---

I spend a lot of my time at the terminal for my daily work, mostly in Linux or wsl.  One big reason for using wsl over cmd.exe is the ease of walking through history that fzf provides.  This week we had a windows bug in a cli and I was stuck in vanilla cmd.exe 😭

## > Cmder

![](https://images.waylonwalker.com/main.png)

First off if you are stuck using cmd.exe, do yourself a favor and get cmder.  It makes life just a bit easier.  It is super confugurable and comes with several power ups that make it a bit more enjoyable than cmd.exe.

## History

**F7** - Scroll through history

**F8** - Search history based

## Example

![](https://images.waylonwalker.com/cmd_exe_history_2.gif)

## .bat

The next simple technique is to save your commands into a .bat file. Any valid command ran with cmd.exe can be saved into a bat file and called again later by running it in the terminal.

**save your command**

use f7/f8 to get your command back add `> filename.bat` at the end, hit the home key and add echo to the front.  **Do not** wrap with quotes.  This is not bash.

``` bash
echo python cmd_example.py > cmd_example.bat
```

**>> append**

``` bash
echo python cmd_example2.py >> cmd_example.bat
```

## type not cat

To ensure that you got the command right... and didn't forget that you were in cmd.exe instead of bash and add quotes. you will want to see the file contents. For this reach for **type** not **cat**.

``` bash
type cmd_example.bat
```

**results**
``` bash
python cmd_example.py
python cmd_example2.py
```

## Your quick tips

let me know what quick cmd.exe tips you have.

[![tweet your tip](https://images.waylonwalker.com/2020-01-27 06-32-34_Microsoft Text Input Application.png "tweet your tip")](https://twitter.com/intent/tweet?text=@waylonwalker%20my%20favorite%20cmd.exe%20tip%20is%20...%20https%3A//waylonwalker.com/blog/cmd-exe-tips/ "tweet your tip")
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
    
    <a class='prev' href='/codeit-bro-interview'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Codeit Bro Interview</p>
        </div>
    </a>
    
    <a class='next' href='/chrome-extensions-i-use'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Chrome Extensions I use</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>