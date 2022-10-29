---
cover: ''
date: 2022-03-15
datetime: 2022-03-15 00:00:00+00:00
description: 'If you have ever mistyped a git command very close to an existing one
  What you might not have known is that you can configure git to just run Now when
  you typo '
edit_link: https://github.com/edit/main/pages/til/git-config-help-autocorrect.md
jinja: false
long_description: If you have ever mistyped a git command very close to an existing
  one What you might not have known is that you can configure git to just run Now
  when you typo a git command it will autmatically run after the I
now: 2022-10-29 15:54:38.066269
path: pages/til/git-config-help-autocorrect.md
slug: git-config-help-autocorrect
status: draft
super_description: If you have ever mistyped a git command very close to an existing
  one What you might not have known is that you can configure git to just run Now
  when you typo a git command it will autmatically run after the I
tags:
- git
- cli
templateKey: til
title: Configure Git to Autocorrect Your Fat Fingers
today: 2022-10-29
year: 2022
---

If you have ever mistyped a git command very close to an existing one
you have likely seen this message.

``` bash
❯ git chekout dev
git: 'chekout' is not a git command. See 'git --help'.

The most similar command is
        checkout
```

## Automatically run the right one

What you might not have known is that you can configure git to just run
this command for you.

``` bash
# Gives you 0.1 seconds to respond
git config --global help.autocorrect 1

# Gives you 1 seconds to respond
git config --global help.autocorrect 10

# Gives you 5 seconds to respond
git config --global help.autocorrect 50
```

## Fat Fingers Gone

Now when you typo a git command it will autmatically run after the
configured number of tenths of a second.

``` bash
❯ git chkout get-error
WARNING: You called a Git command named 'chkout', which does not exist.
Continuing in 1.0 seconds, assuming that you meant 'checkout'.
M       pages/blog/how-i-deploy-2021.md
M       pages/hot_tips/001.md
M       pages/templates/gratitude_card.html
M       plugins/index.py
M       plugins/publish_amp.py
M       plugins/render_template_variables.py
M       plugins/youtube.py
M       requirements.txt
M       static/index.html
Switched to branch 'get-error'
```

## My config

I'm rocking 10 for now just to see how I feel about it, but honestly I
cannot think of a time that I have seen the original warning that was
not what I wanted.  This at least gives me some time to respond if I am
unsure.

``` bash
git config --global help.autocorrect 10
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
    
    <a class='prev' href='/git-diff-branches'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Today I learned `git diff feature..main`</p>
        </div>
    </a>
    
    <a class='next' href='/git-checkout-worktree'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Git Worktrees are not so Scary</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>