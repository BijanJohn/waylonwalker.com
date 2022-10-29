---
cover: ''
date: 2022-03-14
datetime: 2022-03-14 00:00:00+00:00
description: yq I love that all of these modern tools built in go and rust, just give
  you a I use a bunch of these tools, and for what its worth I trust the devs behind
  Sinc
edit_link: https://github.com/edit/main/pages/til/install-yq.md
jinja: false
long_description: yq I love that all of these modern tools built in go and rust, just
  give you a I use a bunch of these tools, and for what its worth I trust the devs
  behind Since I am all trusting of them I just want the latest version.  I do not
  want I wrote or stol
now: 2022-10-29 15:54:38.066064
path: pages/til/install-yq.md
slug: install-yq
status: draft
super_description: yq I love that all of these modern tools built in go and rust,
  just give you a I use a bunch of these tools, and for what its worth I trust the
  devs behind Since I am all trusting of them I just want the latest version.  I do
  not want I wrote or stole, I think I wrote it, this line of bash quite awhile ago,
  and Now that we know how to consistently get the right version, I generally right
  Now I don This is how I installed it, of course you can always follow Mike
tags:
- linux
- cli
templateKey: til
title: Install yq | A light weight yaml parser cli
today: 2022-10-29
year: 2022
---

`yq` is a command line utility for parsing and querying yaml, like `jq` does for json.

## This is for me

I love that all of these modern tools built in go and rust, just give you a
zipped up executable right from GitHub releases, but it's not necessarily
straight forward how to install them.  `yq` does one of the best jobs I have
seen, giving you instructions on how to get a specific version and install it.


I use a bunch of these tools, and for what its worth I trust the devs behind
them to make sure they don't break.  This so far has worked out well for me,
but if it ever doesn't I can always pick an older version.

## Just give me the latest

Since I am all trusting of them I just want the latest version.  I do not want
to update a shell script with new versions, or even care about what then next
version is, I just want it. Luckily you can script the release page for the
latest version on all that I have came accross.

## What is the latest

I wrote or stole, I think I wrote it, this line of bash quite awhile ago, and
it has served me well for finding the latest release for any GitHub project
using releases.  Just update it with the name of the tool, org, and repo and it
works.

``` bash
YQ_VERSION=$(curl --silent https://github.com/mikefarah/yq/releases/latest | tr -d '"' | sed 's/^.*tag\///g' | sed 's/>.*$//g' | sed 's/^v//')
```

## Install with your shell

Now that we know how to consistently get the right version, I generally right
click the release in the releases page, replace the version with
`${TOOL_VERSION}` and put it in this wget call, then move the binary over to `~/.local/bin`

``` bash
local tmp=`mktemp -dt install-XXXXXX`
pushd $tmp
YQ_VERSION=$(curl --silent https://github.com/mikefarah/yq/releases/latest | tr -d '"' | sed 's/^.*tag\///g' | sed 's/>.*$//g' | sed 's/^v//')
wget https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/yq_linux_amd64.tar.gz -O- -q | tar -zxf - -C /tmp
cp yq_linux_amd64 ~/.local/bin/yq
popd
```

## Install with ansible

Now I don't want to worry about missing `yq` again, so I am added it to my
ansible install script.  This way it's installed everyt time I setup a new
system with all of my favorite cli's.

``` yaml
- name: check is yq installed
  shell: command -v yq
  register: yq_exists
  ignore_errors: yes
  tags:
    - yq

- name: Install yq
  when: yq_exists is failed
  shell: |
    local tmp=`mktemp -dt install-XXXXXX`
    pushd $tmp
    YQ_VERSION=$(curl --silent https://github.com/mikefarah/yq/releases/latest | tr -d '"' | sed 's/^.*tag\///g' | sed 's/>.*$//g' | sed 's/^v//')
    wget https://github.com/mikefarah/yq/releases/download/v${YQ_VERSION}/yq_linux_amd64.tar.gz -O- -q | tar -zxf - -C /tmp
    cp yq_linux_amd64 {{ lookup('env', 'HOME') }}/.local/bin/yq
    popd
  tags:
    - yq
```

## Links

This is how I installed it, of course you can always follow Mike's instructions
from the repo.

* [yq repo](https://github.com/mikefarah/yq)
* [yq docs](https://mikefarah.gitbook.io/yq/)
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
    
    <a class='prev' href='/installing-homebrew-linux'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Installing Homebrew on Linux</p>
        </div>
    </a>
    
    <a class='next' href='/install-rust'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Installing Rust and Cargo on Ubuntu 21.10 using Ansible</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>