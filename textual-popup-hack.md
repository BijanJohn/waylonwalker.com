---
cover: ''
date: 2022-02-26
datetime: 2022-02-26 00:00:00+00:00
description: 'As I am toying around with textual, I am wanting some popup user input
  The main issue is that when you are in a textual app, it kinda owns the textual
  is still '
edit_link: https://github.com/edit/main/pages/til/textual-popup-hack.md
jinja: false
long_description: As I am toying around with textual, I am wanting some popup user
  input The main issue is that when you are in a textual app, it kinda owns the textual
  is still very beta Part of this comes down to the fact that textual is still very
  beta and So the s
now: 2022-10-29 15:54:38.066365
path: pages/til/textual-popup-hack.md
slug: textual-popup-hack
status: draft
super_description: 'As I am toying around with textual, I am wanting some popup user
  input The main issue is that when you are in a textual app, it kinda owns the textual
  is still very beta Part of this comes down to the fact that textual is still very
  beta and So the solution that was easiest for me... shell out to a tmux popup. Here
  is what the running todo application looks like with the copier https://waylonwalker.com/tmux-popups/
  a bit more on tmux-popus '
tags:
- python
- cli
- tmux
templateKey: til
title: Textual Popup Hack
today: 2022-10-29
year: 2022
---

As I am toying around with textual, I am wanting some popup user input
to take over.  Textual is still pretty new and likely to change quite
significantly, so I don't want to overdo the work I put into it, So for
now on my personal tuis I am going to shell out to tmux.

## The Problem

The main issue is that when you are in a textual app, it kinda owns the
input.  So if you try to run another python function that calls for
`input` it just cant get there.  There is a
[textual-inputs](https://github.com/sirfuzzalot/textual-inputs) library
that covers this, and it might work really well for some use cases, but
many of my use cases have been for things that are pre-built like
copier, and I am trying to throw something together quick.

> textual is still very beta

Part of this comes down to the fact that textual is still very beta and
likely to change a lot, so all of the work I have done with it is for
quick and dirty, or fun side projects.

## The Solution

So the solution that was easiest for me... shell out to a tmux popup.
The application I am working on wants to create new documents using
copier templates.  copier has a fantastic cli that walks throught he
template variables and asks the user to fill them in, so I just shell
out to that with `Popen`.  Make sure that you wait for this process to
finish otherwise there will be bit of jank in your textual app.

``` python
async def action_new_post(self) -> None:
    proc = subprocess.Popen(
        'tmux popup "copier copy plugins/todo-template tasks"', shell=True
    )
    proc.wait()
```

## example

Here is what the running todo application looks like with the copier
popup over it.

![example of the popup running over textual](https://images.waylonwalker.com/textual-popup-hack.png)


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-popups/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-popups.jpg" alt="article cover for tmux popups"/>
        <p><strong>tmux popups</strong></p>
    </a>
</div>


> a bit more on tmux-popus [here] https://waylonwalker.com/tmux-popups/)

## Links

* [textual repo](https://github.com/Textualize/textual/)
* [textual-inputs repo](https://github.com/sirfuzzalot/textual-inputs)
* [my article on tmux popups](https://waylonwalker.com/tmux-popups/)
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
    
    <a class='prev' href='/thank-you'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Thanks For Subscribing</p>
        </div>
    </a>
    
    <a class='next' href='/textual-has-devtools'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Textual has devtools</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>