---
cover: ''
date: 2022-03-02
datetime: 2022-03-02 00:00:00+00:00
description: There is GNU coreutils command called  Here are some examples of making
  temp directories in different places, my Here is a sample script that shows how
  to captu
edit_link: https://github.com/edit/main/pages/til/bash-mktemp.md
jinja: false
long_description: 'There is GNU coreutils command called  Here are some examples of
  making temp directories in different places, my Here is a sample script that shows
  how to capture the tempdir as a variable and You must have at least 3 trailing X
  My randomm samples I '
now: 2022-10-29 15:54:38.066465
path: pages/til/bash-mktemp.md
slug: bash-mktemp
status: draft
super_description: There is GNU coreutils command called  Here are some examples of
  making temp directories in different places, my Here is a sample script that shows
  how to capture the tempdir as a variable and You must have at least 3 trailing X
  My randomm samples I played with. The man page has good stuff on all the flags that
  you might need.
tags:
- bash
- cli
- linux
templateKey: til
title: Bash mktemp
today: 2022-10-29
year: 2022
---

There is GNU coreutils command called `mktemp` that is super handy in shell
scripts to make temporary landing spots for files so that they never clash with
another instance, and will automatically get cleaned up when you restart, or
whenever `/tmp` gets wiped.  I'm not sure when that is, but I don't expect it
to be long.

## Making temp directories

Here are some examples of making temp directories in different places, my
favorite is `mktemp -dt mytemp-XXXXXX`.

``` bash
# makes a temporary directory in /tmp/ with the defaul template tmp.XXXXXXXXXX
mktemp

# makes a temporary directory in your current directory
mktemp --directory mytemp-XXXXXX
# shorter version
mktemp -d mytemp-XXXXXX

# same thing, but makes a file
mktemp mytemp-XXXXXX

# makes a temporary directory in your /tmp/ directory (or what ever you have configured as your TMPDIR)
mktemp --directory --tmpdir mytemp-XXXXXX
# shorter version
mktemp -dt mytemp-XXXXXX

# same thing, but makes a file
mktemp --tmpdir mytemp-XXXXXX
# shorter version
mktemp -t mytemp-XXXXXX
```

## Use Case

Here is a sample script that shows how to capture the tempdir as a variable and
reuse it.  Here is an example of curling my bootstrap file into a temp
directory and running it from that directory.

``` bash
local tmp=`mktemp -dt bootstrap-XXXXXX`
pushd $tmp
curl https://raw.githubusercontent.com/WaylonWalker/devtainer/main/bootstrap > bootstrap
bash bootstrap
popd
```

## Templates

You must have at least 3 trailing X's that mktemp will replace with random
characters.  I played with it for a bit, it kinda allows for some trailing
characters, and will not fill groups of X's earlier in your template, only the
last consecutive string.

My randomm samples I played with.

``` bash
waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com) took 2m24s
❯ mktemp myXtemp-XaXbXXXX -dt
/tmp/myXtemp-XaXbx9hn

waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com)
❯ mktemp myXtemp-XaXbXXXXs -dt
/tmp/myXtemp-XaXb2tpGs

waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com)
❯ mktemp myXtemp-XaXbXXcXXs -dt
mktemp: too few X's in template ‘myXtemp-XaXbXXcXXs’

waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com)
❯ mktemp myXtemp-XaXbXXcXXs -dt

waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com)
❯ mktemp myXtemp-XaXbXXXXt -dt
/tmp/myXtemp-XaXbe8PWt

waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com)
❯ mktemp myXtemp-XXX-you-XXX -dt
/tmp/myXtemp-XXX-you-48l

waylonwalker.com on  main [!?]  v3.9.7 (waylonwalker.com)
❯ mktemp myXtemp-XXX-you-XX -dt
mktemp: too few X's in template ‘myXtemp-XXX-you-XX’
```

## RTFM

The man page has good stuff on all the flags that you might need.
``` bash
man mktemp
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
    
    <a class='prev' href='/bind-dynamic-lambdas'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>TIL: Bind arguments to dynamically generated lambdas in python</p>
        </div>
    </a>
    
    <a class='next' href='/bash'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>📝 Bash Notes</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>