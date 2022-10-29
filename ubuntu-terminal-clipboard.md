---
cover: ''
date: 2022-01-26
datetime: 2022-01-26 00:00:00+00:00
description: One of the first things I noticed broken in my terminal based workflow
  moving First off you need to get  I have tmux setup to automatically copy any selection
  I
edit_link: https://github.com/edit/main/pages/til/ubuntu-terminal-clipboard.md
jinja: false
long_description: One of the first things I noticed broken in my terminal based workflow
  moving First off you need to get  I have tmux setup to automatically copy any selection
  I make to the clipboard To get my yanks to go to the system clipboard in neovim,
  I just add
now: 2022-10-29 15:54:38.065874
path: pages/til/ubuntu-terminal-clipboard.md
slug: ubuntu-terminal-clipboard
status: draft
super_description: One of the first things I noticed broken in my terminal based workflow
  moving First off you need to get  I have tmux setup to automatically copy any selection
  I make to the clipboard To get my yanks to go to the system clipboard in neovim,
  I just added If you need to copy something right from the terminal you can use xclip
  I set up some alias
tags:
- linux
- vim
- tmux
templateKey: til
title: Tmux and Vim Clipboard for Ubuntu
today: 2022-10-29
year: 2022
---

One of the first things I noticed broken in my terminal based workflow moving
from Windows wsl to ubuntu was that my clipboard was all messed up and not
working with my terminal apps.  Luckily setting tmux and neovim to work with
the system clipboard was much easier than it was on windows.

First off you need to get `xclip` if you don't already have it provided by your
distro.  I found it in the apt repositories.  I have used it between Ubuntu
18.04 and 21.10 and they all work flawlessly for me.

I have tmux setup to automatically copy any selection I make to the clipboard
by setting the following in my `~/.tmux.conf`. While I have neovim open I need
to be in insert mode for this to pick up.

``` bash
# ~/tmux.conf
bind -T copy-mode-vi Enter send-keys -X copy-pipe-and-cancel "xclip -i -f -selection primary | xclip -i -selection clipboard"
bind-key -T copy-mode-vi MouseDragEnd1Pane send-keys -X copy-pipe-and-cancel "xclip -selection clipboard -i"
```

To get my yanks to go to the system clipboard in neovim, I just added
unnamedplus to my existing clipboard variable.

``` vim
# ~/.config/nvim/init.vim
set clipboard+=unnamedplus
```

If you need to copy something right from the terminal you can use xclip
directly.  I do this semi-often to send someone a message in chat.

``` bash
cat file.txt | clip -sel copy
```

I set up some alias's for doing this a bit more efficiently, but don't find
myself using them very often.  This helps me grab commands from history and
copy them.

``` bash
alias hclip="history | tail -n1 | cut -c 8- | xclip -sel clip"
alias fclip="history -n 1000 | fzf | cut -c 8- | xclip -sel clip"
alias fclip="history -n 1000 | fzf | xclip -sel clip"
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
    
    <a class='prev' href='/upcoming-posts'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Upcoming Posts</p>
        </div>
    </a>
    
    <a class='next' href='/ubuntu'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Ubuntu</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>