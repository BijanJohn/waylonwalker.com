---
cover: ''
date: 2022-04-04
datetime: 2022-04-04 00:00:00+00:00
description: 'Browsing through twitter the other day I discovered it through this
  https://twitter.com/ Before I dive in deep, I do want to mention that Dunk is super
  new and '
edit_link: https://github.com/edit/main/pages/til/dunk-is-my-new-diff-pager.md
jinja: false
long_description: Browsing through twitter the other day I discovered it through this
  https://twitter.com/ Before I dive in deep, I do want to mention that Dunk is super
  new and beta at The author really cautions the use of it as your default pager this
  early, I He no
now: 2022-10-29 15:54:38.065714
path: pages/til/dunk-is-my-new-diff-pager.md
slug: dunk-is-my-new-diff-pager
status: draft
super_description: Browsing through twitter the other day I discovered it through
  this https://twitter.com/ Before I dive in deep, I do want to mention that Dunk
  is super new and beta at The author really cautions the use of it as your default
  pager this early, I He notes that it might have some issues especially with partially
  staged files. You can try it with pipx. If you like it, you can install it with
  pip or pipx, I prefer pipx for You can configure dunk as your default pager with
  the command line, or As  You
tags:
- python
- linux
- python
templateKey: til
title: Dunk is my new diff pager
today: 2022-10-29
year: 2022
---

[Dunk](https://github.com/darrenburns/dunk) is a beautiful git diff tool
built on top of [rich](https://github.com/Textualize/rich).

Browsing through twitter the other day I discovered it through this
tweet by [_darrenburns](https://twitter.com/_darrenburns).

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Ok, here&#39;s what I&#39;ve been building today 👇<br><br>Pipe the output of &#39;git diff&#39; into dunk and you&#39;ll get a GitHub style side-by-side diff right in your terminal.<a href="https://t.co/al5y68YSda">https://t.co/al5y68YSda</a> <a href="https://t.co/LLOcaNhpyP">pic.twitter.com/LLOcaNhpyP</a></p>&mdash; Darren Burns 🌱 (@_darrenburns) <a href="https://twitter.com/_darrenburns/status/1510350016623394817?ref_src=twsrc%5Etfw">April 2, 2022</a></blockquote>
<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>


## Dunk is beta

Before I dive in deep, I do want to mention that Dunk is super new and beta at
this point.  I am making it my default pager, because I know what I am doing
and can quickly shift back if I need to, no sweat.  If you are a little less
comfortable with the command line, terminal, or reading any issues that might
come up, it might be best if you just pipe into Dunk when you want to use it.

The author really cautions the use of it as your default pager this early, I'm
just showing that it's possible, and I'm trying it.

> He notes that it might have some issues especially with partially staged files.

## try it

You can try it with pipx.

```bash
git diff | pipx run dunk
```

## install it

If you like it, you can install it with pip or pipx, I prefer pipx for
cli applications like this.


```bash
pipx install dunk
```

## set it as your default pager

You can configure dunk as your default pager with the command line, or
by editing your `.gitconfig` file.

```bash
git config --global pager.diff "dunk | less -R`
```

```toml
[pager]
    diff = dunk | less -R
```

> As [pointed out](https://twitter.com/_darrenburns/status/1511106440613797896) by
> [_darrenburns](https://twitter.com/_darrenburns) dunk is not a pager and you
> can gain back all of the benefits of using a pager by piping into less with the
> `-R` flag.

## reset it if you don't like it

You can `--unset` your pager configuration from the command line or edit
your `.gitconfig` file by hand to remove the lines shown above.

```bash
git config --global --unset pager.diff
```

## Comparison

I have some edits to a game my son and I are working on unstaged so I
ran `git diff` on that project with and without dunk to compare the
differences.

![default diff](https://images.waylonwalker.com/git-diff-creeper-adventure-default.png)

Dunk just looks so good.

![dunk diff](https://images.waylonwalker.com/git-diff-creeper-adventure-dunk.png)

## Always install

If you follow along here often you know that I am a big fan of
installing all my tools in an ansible playbook so that I don't suffer
configuring a new machine for months after getting it and wondering why
its not exactly like the last.

```yaml
# Dunk - prettier git diffs
# https://github.com/darrenburns/dunk
- name: check is dunk installed
  shell: command -v black
  register: dunk_exists
  ignore_errors: yes

- name: install dunk
  when: dunk_exists is failed
  shell: pipx install dunk
```

https://waylonwalker.com/til/ansible_install_if_not_callable/

> More on conditionally installing tools with ansible in this post.
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
    
    <a class='prev' href='/edit-on-github'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Edit On GitHub</p>
        </div>
    </a>
    
    <a class='next' href='/dunder-rich'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Adding __rich__ methods to python classes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>