---
cover: ''
date: 2021-12-25
datetime: 2021-12-25 00:00:00+00:00
description: Lately I This is one of those things that can be a total pain to get
  right on make sure your user fonts directory exists chech if the font you want exists
  on yo
edit_link: https://github.com/edit/main/pages/til/ansible_install_fonts.md
jinja: false
long_description: 'Lately I This is one of those things that can be a total pain to
  get right on make sure your user fonts directory exists chech if the font you want
  exists on your machine download and unzip fonts into the fonts directory repeat
  2-3 for all the fonts '
now: 2022-10-29 15:54:38.065728
path: pages/til/ansible_install_fonts.md
slug: ansible-install-fonts
status: draft
super_description: Lately I This is one of those things that can be a total pain to
  get right on make sure your user fonts directory exists chech if the font you want
  exists on your machine download and unzip fonts into the fonts directory repeat
  2-3 for all the fonts you use on your system https://www.youtube.com/watch?v=2MEmsinxRK4
  I made a YT based on this post ansible docs for  https://waylonwalker.com/setup-yamlls/
  check out how I install yamlls using ansible
tags:
- dotfiles
- ansible
templateKey: til
title: Installing system nerd-fonts with ansible
today: 2022-10-29
year: 2021
---

Lately I've been on a journey to really clean up my dotfiles, and I was
completely missing fonts.  I noticed jumping into a new vm I had a bunch
of broken devicons when using Telescope with the devicons plugins.

This is one of those things that can be a total pain to get right on
some systems, and it's so nice when it's just there for you pretty much
out of the box.

1. make sure your user fonts directory exists
2. chech if the font you want exists on your machine
3. download and unzip fonts into the fonts directory
4. repeat 2-3 for all the fonts you use on your system

``` yaml
- name: ensure fonts directory
  file:
    path: "{{ lookup('env', 'HOME') }}/.fonts"
    state: directory

- name: Hack exists
  shell: "ls {{ lookup('env', 'HOME') }}/.fonts/Hack*Nerd*Font*Complete*"
  register: hack_exists
  ignore_errors: yes

- name: Download Hack
  when: hack_exists is failed
  ansible.builtin.unarchive:
    src: https://github.com/ryanoasis/nerd-fonts/releases/download/v2.1.0/Hack.zip
    dest: "{{ lookup('env', 'HOME') }}/.fonts/"
    remote_src: yes

```

https://www.youtube.com/watch?v=2MEmsinxRK4

> I made a YT based on this post

## Links

* ansible docs for [builtin.unarchive](https://docs.ansible.com/ansible/latest/collections/ansible/builtin/unarchive_module.html)


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/setup-yamlls/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/setup-yamlls.jpg" alt="article cover for Setup a yaml schema | yamlls for a silky smooth setup"/>
        <p><strong>Setup a yaml schema | yamlls for a silky smooth setup</strong></p>
    </a>
</div>


> check out how I install yamlls using ansible
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
    
    <a class='prev' href='/ansible-install-if-not-callable'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Installing packages with ansible only if they do not exist</p>
        </div>
    </a>
    
    <a class='next' href='/amazon-web-services'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Amazon Web Services</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>