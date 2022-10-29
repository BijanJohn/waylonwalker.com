---
cover: ''
date: 2022-02-13
datetime: 2022-02-13 00:00:00+00:00
description: The default keybinding for copy-mode  To do this I just popped open my  I
  have a full video on copy-mode you can find here. https://waylonwalker.com/tmux-copy-m
edit_link: https://github.com/edit/main/pages/til/tmux-copy-mode-binding.md
jinja: false
long_description: The default keybinding for copy-mode  To do this I just popped open
  my  I have a full video on copy-mode you can find here. https://waylonwalker.com/tmux-copy-mode/
now: 2022-10-29 15:54:38.066015
path: pages/til/tmux-copy-mode-binding.md
slug: tmux-copy-mode-binding
status: draft
super_description: The default keybinding for copy-mode  To do this I just popped
  open my  I have a full video on copy-mode you can find here. https://waylonwalker.com/tmux-copy-mode/
tags:
- tmux
- cli
templateKey: til
title: A better copy-mode bind for Tmux
today: 2022-10-29
year: 2022
---

The default keybinding for copy-mode `<prefix>-[` is one that is just so
awkward for me to hit that I end up not using it at all.  I was on a
call with my buddy Nic this week and saw him just fluidly jump into
`copy-mode` in an effortless fashion, so I had to ask him for his
keybinding and it just made sense. Enter, that's it.  So I have addedt
his to my `~/.tmux.conf` along with one for `alt-enter` and have found
myself using it way more so far.

## Setting copy-mode to enter

To do this I just popped open my `~/.tmux.conf` and added the following.
Now I can get to `copy-mode` with `<prefix>-Enter` which is `control-b
Enter`, or `alt-enter`.

```bash
bind Enter copy-mode
bind -n M-Enter copy-mode
```

## More on copy-mode

I have a full video on copy-mode you can find here.


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/tmux-copy-mode/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/tmux-copy-mode.jpg" alt="article cover for tmux copy-mode"/>
        <p><strong>tmux copy-mode</strong></p>
    </a>
</div>

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
    
    <a class='prev' href='/tmux-display-message'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>tmux display-message</p>
        </div>
    </a>
    
    <a class='next' href='/tmux-copy-mode'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>tmux copy-mode</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>