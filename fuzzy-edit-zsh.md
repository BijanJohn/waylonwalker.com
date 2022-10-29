---
cover: ''
date: 2021-12-02
datetime: 2021-12-02 00:00:00+00:00
description: 'https://youtu.be/PQw I am often in a set of tmux splits flying back
  and forth, accidentally close my Make sure you check out the YouTube video to see
  all of my '
edit_link: https://github.com/edit/main/pages/blog/fuzzy-edit-zsh.md
jinja: false
long_description: 'https://youtu.be/PQw I am often in a set of tmux splits flying
  back and forth, accidentally close my Make sure you check out the YouTube video
  to see all of my improvements. If you have never heard of an alias before it Here
  are the new aliases that '
now: 2022-10-29 15:54:38.065300
path: pages/blog/fuzzy-edit-zsh.md
slug: fuzzy-edit-zsh
status: published
super_description: 'https://youtu.be/PQw I am often in a set of tmux splits flying
  back and forth, accidentally close my Make sure you check out the YouTube video
  to see all of my improvements. If you have never heard of an alias before it Here
  are the new aliases that I came up with to smooth out my workflow.  These Follow
  the '
tags:
- linux
- bash
templateKey: blog-post
title: Open files FAST from zsh | or bash if thats your thing
today: 2022-10-29
year: 2021
---

https://youtu.be/PQw_is7rQSw

I am often in a set of tmux splits flying back and forth, accidentally close my
editor, so when I come back to that split and hit my keybinds to edit files I
enter them into zsh rather than into nvim like I intended.  Today I am going to
sand off that rough edge and get as similar behavior to nvim as I can with a
couple of aliases.


Make sure you check out the YouTube video to see all of my improvements.

## what's an alias

If you have never heard of an alias before it's essentially a shortcut to a
given command.  You can pass additional flags to the underlying command and
they will get passed in.  Most of the time they are just shorter versions of
commands that you run often or even like in this case a common muscle memory
typo that occurs for you.


## My new alias's for fuzzy editing files from zsh

Here are the new aliases that I came up with to smooth out my workflow.  These
give me a similar feel to how these keys work in neovim but from zsh.

``` bash
# fuzzy select file to edit
alias p='nvim `fzf --preview="bat --color always {}"`'

# give me the same syntax as edit while in neovim
alias :e='nvim '
```

Follow the [YouTube channel](https://youtube.com/waylonwalker) or the [rss
feed](https://waylonwalker/rss/) to stay up to date.


## Related links

* [playlist for my dotfiles challenge](https://www.youtube.com/playlist?list=PLTRNG6WIHETAj0nR_WYAxxGjd7kXch5zj)
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
    
    <a class='prev' href='/gatsby-remark-embedder'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>gatsby-remark-embedder</p>
        </div>
    </a>
    
    <a class='next' href='/from-markdown-to-blog-with-markata'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>From Markdown to Blog with Markata | lightning talk | python web conf 2022</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>