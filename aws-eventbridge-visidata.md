---
cover: ''
date: 2022-02-15
datetime: 2022-02-15 00:00:00+00:00
description: Reading eventbridge rules from the command line can be a total drag,
  pipe it I just love when I start thinking through how to parse a bunch of json at
  the
edit_link: https://github.com/edit/main/pages/til/aws-eventbridge-visidata.md
jinja: false
long_description: Reading eventbridge rules from the command line can be a total drag,
  pipe it I just love when I start thinking through how to parse a bunch of json at
  the
now: 2022-10-29 15:54:38.065909
path: pages/til/aws-eventbridge-visidata.md
slug: aws-eventbridge-visidata
status: draft
super_description: Reading eventbridge rules from the command line can be a total
  drag, pipe it I just love when I start thinking through how to parse a bunch of
  json at the
tags:
- python
- cli
- bash
templateKey: til
title: View AWS event bridge rules with visidata
today: 2022-10-29
year: 2022
---

Reading eventbridge rules from the command line can be a total drag, pipe it
into visidata to make it a breeze.

I just love when I start thinking through how to parse a bunch of json at the
command line, maybe building out my own custom cli, then the solution is as
simple as piping it into visidata.  Which is a fantastic tui application that
had a ton of vim-like keybindings and data features.


``` python
alias awsevents = aws events list-rules | visidata -f json
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
    
    <a class='prev' href='/background-1'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>background tasks in python</p>
        </div>
    </a>
    
    <a class='next' href='/awesome-people'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Awesome People</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>