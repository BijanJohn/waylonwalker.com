---
cover: ''
date: 2022-02-06
datetime: 2022-02-06 00:00:00+00:00
description: Installing rust in your own ansible playbook will make sure that you
  can I try to install everything that I will want to use for more than just a This
  is how ru
edit_link: https://github.com/edit/main/pages/til/install-rust.md
jinja: false
long_description: Installing rust in your own ansible playbook will make sure that
  you can I try to install everything that I will want to use for more than just a
  This is how rust reccomends that you install it on Ubuntu.  First update The first
  thing I do in my play
now: 2022-10-29 15:54:38.065525
path: pages/til/install-rust.md
slug: install-rust
status: draft
super_description: Installing rust in your own ansible playbook will make sure that
  you can I try to install everything that I will want to use for more than just a
  This is how rust reccomends that you install it on Ubuntu.  First update The first
  thing I do in my playbooks is to check if the tool is already I first check for
  an existing install so I can re-run my playbooks Next we need to download the installer
  script and make it executable. I chose to download the installer, because I was
  unable to pass in the L
tags:
- linux
templateKey: til
title: Installing Rust and Cargo on Ubuntu 21.10 using Ansible
today: 2022-10-29
year: 2022
---

Installing rust in your own ansible playbook will make sure that you can
get consistent installs accross all the machines you may use, or
replicate your development machine if it ever goes down.

## Personal philosophy

I try to install everything that I will want to use for more than just a
trial inside of my ansible playbook.  This way I always get the same
setup across my work and home machines, and anytime I might setup a
throw away vm.

## reccommended install

This is how rust reccomends that you install it on Ubuntu.  First update
your system, then run their installer, and finally check that the
install was successful.

``` bash
# system update
sudo apt update
sudo apt upgrade

# download and run the rust installer
curl https://sh.rustup.rs -sSf | sh

# confirm your installation is successful
rustc --version
```

## Ansible Install

The first thing I do in my playbooks is to check if the tool is already
installed.  Here I chose to look for `cargo`, you could also look for
`rustc`.

``` yaml
  - name: check if cargo is installed
    shell: command -v cargo
    register: cargo_exists
    ignore_errors: yes
```

> I first check for an existing install so I can re-run my playbooks
> quickly filling in only missing tools. More on this
> [ansible install conditionally](https://waylonwalker.com/til/ansible_install_if_not_callable/)

Next we need to download the installer script and make it executable.

``` yaml
  - name: Download Installer
    when: cargo_exists is failed
    get_url:
      url: https://sh.rustup.rs
      dest: /tmp/sh.rustup.rs
      mode: '0755'
      force: 'yes'
    tags:
      - rust
```

> I chose to download the installer, because I was unable to pass in the
> `-y` flag otherwise, which is required to do unattended installs.

Last we just run the installer given to us by rust with the `-y` flag so
that it will run unattended.

``` yaml

  - name: install rust/cargo
    when: cargo_exists is failed
    shell: /tmp/sh.rustup.rs -y
    tags:
      - rust
```

## One more thing

Make sure that you source your cargo env, otherwise your shell will not
find `rustc` or `cargo`.  I chose to do this by adding the following
line to my `~/.zshrc`.  You can but it in `~/.bashrc` if that is your
thing, or just run it in your shell to just get it to work.

``` bash
[ -f ~/.cargo/env ] && source $HOME/.cargo/env
```

## Full Install Playbook

Here is a fully working install playbook to get you started or to port
into your own playbook.

``` yaml
- hosts: localhost
  gather_facts: true
  become: true
  become_user: "{{ lookup('env', 'USER') }}"

  pre_tasks:
    - name: update repositories
      apt: update_cache=yes
      become_user: root
      changed_when: False
  vars:
    user: "{{ ansible_user_id }}"
  tasks:
  - name: check if cargo is installed
    shell: command -v cargo
    register: cargo_exists
    ignore_errors: yes

  - name: Download Installer
    when: cargo_exists is failed
    get_url:
      url: https://sh.rustup.rs
      dest: /tmp/sh.rustup.rs
      mode: '0755'
      force: 'yes'
    tags:
      - rust

  - name: install rust/cargo
    when: cargo_exists is failed
    shell: /tmp/sh.rustup.rs -y
    tags:
      - rust

```

You can save this as a  `local.yml` and run the following in your shell
to run the playbook on your local machine.

``` bash
ansible-playbook local.yml --ask-become-pass
```

> note: `--ask-become-pass` is required for the system update step.
> This will ask for your password as soon as ansible starts.


I also have a very similar article on hwo I [ansible install fonts](https://waylonwalker.com/til/ansible_install_fonts/)
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
    
    <a class='prev' href='/install-yq'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Install yq | A light weight yaml parser cli</p>
        </div>
    </a>
    
    <a class='next' href='/install-obs-flatpak'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Install obs flatpak</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>