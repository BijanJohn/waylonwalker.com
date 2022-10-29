---
cover: ''
date: 2022-01-10
datetime: 2022-01-10 00:00:00+00:00
description: I recently paired up with another dev running windows with Ubuntu running
  in Open up a terminal and get your required system dependencies using the apt I
  like r
edit_link: https://github.com/edit/main/pages/til/installing-pipx-on-ubuntu.md
jinja: false
long_description: I recently paired up with another dev running windows with Ubuntu
  running in Open up a terminal and get your required system dependencies using the
  apt I like running things like this through an ansible-playbook as it give me some
  Here is a clip of m
now: 2022-10-29 15:54:38.065572
path: pages/til/installing-pipx-on-ubuntu.md
slug: installing-pipx-on-ubuntu
status: draft
super_description: I recently paired up with another dev running windows with Ubuntu
  running in Open up a terminal and get your required system dependencies using the
  apt I like running things like this through an ansible-playbook as it give me some
  Here is a clip of me getting pipx running on ubuntu 21.10, and running a few of
tags:
- python
- linux
- cli
templateKey: til
title: Installing Pipx on Ubuntu
today: 2022-10-29
year: 2022
---

I recently paired up with another dev running windows with Ubuntu running in
wsl, and we had a bit of a stuggle to get our project off the ground because
they were missing com system dependencies to get going.

## Straight in the terminal

Open up a terminal and get your required system dependencies using the apt
package manager and the standard ubuntu repos.

``` bash
sudo apt update
sudo apt upgrade
sudo apt install \
      python3-dev \
      python3-pip \
      python3-venv \
      python3-virtualenv
pip install pipx
```

## Using an Ansible-Playbook

I like running things like this through an ansible-playbook as it give me some
extra control and repeatability next time I have a new machine to setup.

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
    - name: Install System Packages 1 (terminal)
      become_user: root
      apt:
        name:
          - build-essential
          - python3-dev
          - python3-pip
          - python3-venv
          - python3-virtualenv
    - name: check is pipx installed
      shell: command -v pipx
      register: pipx_exists
      ignore_errors: yes

    - name: pipx
      when: pipx_exists is failed
      pip:
        name: pipx
      tags:
        - pipx
```

## video clip

Here is a clip of me getting pipx running on ubuntu 21.10, and running a few of
my favorite pipx commands.

![installation video](https://images.waylonwalker.com/pipx-install-ubuntu.gif)
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
    
    <a class='prev' href='/interrogate'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Interrogate is a pretty awesome, brand new, cli for Python packages</p>
        </div>
    </a>
    
    <a class='next' href='/installing-homebrew-linux'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Installing Homebrew on Linux</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>