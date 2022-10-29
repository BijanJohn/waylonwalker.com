---
cover: ''
date: 2022-05-08
datetime: 2022-05-08 00:00:00+00:00
description: I was editing some blog posts over ssh, when I ran into This is the error
  message I was seeing. The fix ended up being pretty simple, but quite a ways down
  this
edit_link: https://github.com/edit/main/pages/til/gpg-sign-git-ssh.md
jinja: false
long_description: I was editing some blog posts over ssh, when I ran into This is
  the error message I was seeing. The fix ended up being pretty simple, but quite
  a ways down this  This is what it looks like when it asks for the passphrase. So
  this did not fix the issu
now: 2022-10-29 15:54:38.065662
path: pages/til/gpg-sign-git-ssh.md
slug: gpg-sign-git-ssh
status: draft
super_description: I was editing some blog posts over ssh, when I ran into This is
  the error message I was seeing. The fix ended up being pretty simple, but quite
  a ways down this  This is what it looks like when it asks for the passphrase. So
  this did not fix the issue on Arch BTW, and I have seen it not work for wsl This
  will unlock the gpg key then let you commit.
tags:
- git
templateKey: til
title: GPG signing commits over ssh
today: 2022-10-29
year: 2022
---

I was editing some blog posts over ssh, when I ran into
this error.  gpg was failing to sign my commits.  I
realized that this was because I could not answer to the
desktop keyring over ssh, but had no idea how to fix it.

## Error

This is the error message I was seeing.

```
gpg failed to sign the data ssh
```

## The fix

The fix ended up being pretty simple, but quite a ways down this [stack overflow post](https://stackoverflow.com/questions/41052538/git-error-gpg-failed-to-sign-data/41054093).
This environment variable tells gpg that we are not logged
into a desktop and it does not try to use the desktop
keyring, and asks to unlog the gpgkey right in the
terminal.

``` bash
export GPG_TTY=$(tty)
```

## The log in menu

This is what it looks like when it asks for the passphrase.

![enter your passphrase to unlock your gpg key](https://images.waylonwalker.com/gpg-passphrase-unlock.png)

## EDIT-another way

So this did not fix the issue on Arch BTW, and I have seen it not work for wsl
users either.  This did work for me and reported to have worked by a wsl user
on a github issue.

``` bash
echo '' | gpg --clearsign
```

This will unlock the gpg key then let you commit.
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
    
    <a class='prev' href='/graceful-kedro-catalog'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Gracefully adopt kedro, the catalog</p>
        </div>
    </a>
    
    <a class='next' href='/goals-2019'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>2019 goals</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>