---
cover: ''
date: 2021-05-02
datetime: 2021-05-02 00:00:00+00:00
description: DRAFT -
edit_link: https://github.com/edit/main/pages/blog/custom-kedro-logger.md
jinja: false
long_description: DRAFT -
now: 2022-10-29 15:54:38.063842
path: pages/blog/custom-kedro-logger.md
slug: custom-kedro-logger
status: draft
super_description: DRAFT -
tags:
- kedro
- python
templateKey: blog-post
title: Custom Kedro Logger
today: 2022-10-29
year: 2021
---

DRAFT - 



``` yaml
formatters:
    mine:
        format: "%(asctime)s - %(name)s - %(levelname)s - %(message)s - %(me)s"

handlers:

    mine_handler:
        class: logging.StreamHandler
        level: INFO
        formatter: mine
        stream: ext://sys.stdout

loggers:
    me:
        level: DEBUG
        handlers: [mine_handler]

root:
    level: INFO
    handlers: [console, info_file_handler, error_file_handler]
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
    
    <a class='prev' href='/custom-python-exceptions'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Custom Python Exceptions</p>
        </div>
    </a>
    
    <a class='next' href='/custom-ipython-prompt'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Custom Ipython Prompt</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>