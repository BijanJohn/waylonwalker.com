---
cover: ''
date: 2022-01-30
datetime: 2022-01-30 00:00:00+00:00
description: I Within the past year I have added some tools to my personal setup that
  are not Like any  Once I had this file, I stowed it into  Always stow your dotfiles,
  do
edit_link: https://github.com/edit/main/pages/til/global-gitignore-considered-useful.md
jinja: false
long_description: I Within the past year I have added some tools to my personal setup
  that are not Like any  Once I had this file, I stowed it into  Always stow your
  dotfiles, don Note, the reason that it is a  Next run this command to add the  Once
  you have done this
now: 2022-10-29 15:54:38.065929
path: pages/til/global-gitignore-considered-useful.md
slug: global-gitignore-considered-useful
status: draft
super_description: I Within the past year I have added some tools to my personal setup
  that are not Like any  Once I had this file, I stowed it into  Always stow your
  dotfiles, don Note, the reason that it is a  Next run this command to add the  Once
  you have done this you should have both your  No worries, lets get it into your
  dotfiles repo and stow it. If you dont already have a dotfiles directry you should.  It
  is important for
tags:
- git
templateKey: til
title: A Good Use for global .gitignore
today: 2022-10-29
year: 2022
---

I've never found a great use for a global `.gitignore` file.  Mostly I fear
that by adding a lot of the common things like `.pyc` files it will be missing
from the project and inevitably be committed to the project by someone else.

## Personal Tools

Within the past year I have added some tools to my personal setup that are not
required to run the project, but works really well with my setup.  They are
`direnv` and `pyflyby`.  Since these both support project level configuration,
are less common, and not in most  `.gitignore` templates they make for great
candidates to add to a global `.gitignore` file.

## create the config

Like any `.gitignore` it supports gits wildignore syntax.  I made a
`~/dotfiles/git/.global_gitignore` file, and added the following to it.

```bash
.envrc
.pyflyby
.copier-defaults
.venv*/
.python-version
markout
.markata.cache
```

Once I had this file, I stowed it into `~/.global_gitignore`.

``` bash
cd ~/dotfiles/
stow git
```

> Always stow your dotfiles, don't set yourself up for wondering why your next
> machine is not working right.

## stow note

Note, the reason that it is a `~/.global_gitignore` and not a `~/.gitignore` is
that I was unable to stow a `.gitignore file`.  They must be ignored by
default, and I was unable to figure out how to turn it back on.

## set the config

Next run this command to add the `~/.global_gitignore` to your gitignore as a
global excludesfile.

```bash
git config --global core.excludesfile ~/.global_gitignore
```

## commit it

Once you have done this you should have both your `~/dotfiles/git/.gitconfig`
and `~/dotfiles/.global_gitignore` ready to commit.

```bash
cd ~/dotfiles

git add git/.global_gitignore
git add git/.gitconfig

git commit -m "add global_gitignore"
```

## You didn't stow your .gitconfig

_the shame!_

No worries, lets get it into your dotfiles repo and stow it.

```bash
cd ~/dotfiles

# if you dont have a git directory make it.
mkdir git
mv ~/.gitconfig ~/devtainer/git
# now use stow to symlink it back to where it was
# so git works as expected.
stow git
```

## You dont have a dotfiles directory

_double shame 😲_

If you dont already have a dotfiles directry you should.  It is important for
it to be in your home directory for stow to work properly, if you really don't
want it there, look up how to configure stow to account for this.

```bash
# make a dotfiles directory and go there
mkdir ~/dotfiles
cd ~/dotfiles

# make it a git repo
git init

# if you dont have a git directory make it.

mkdir git
mv ~/.gitconfig ~/devtainer/git
# now use stow to symlink it back to where it was
# so git works as expected.
stow git
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
    
    <a class='prev' href='/goals-2019'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>2019 goals</p>
        </div>
    </a>
    
    <a class='next' href='/glances-docker'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Glances can watch docker processes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>