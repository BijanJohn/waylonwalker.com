---
cover: ''
date: 2022-02-09
datetime: 2022-02-09 00:00:00+00:00
description: Samba is an implementation of the smb protocol that allows me to setup
  network I think the homelab is starting to intrigue me enought to dive into the
  path of T
edit_link: https://github.com/edit/main/pages/til/simple-samba.md
jinja: false
long_description: Samba is an implementation of the smb protocol that allows me to
  setup network I think the homelab is starting to intrigue me enought to dive into
  the path of To get goind I am going to make a directory  Install samba, open the
  firewall, and edit the
now: 2022-10-29 15:54:38.066128
path: pages/til/simple-samba.md
slug: simple-samba
status: draft
super_description: Samba is an implementation of the smb protocol that allows me to
  setup network I think the homelab is starting to intrigue me enought to dive into
  the path of To get goind I am going to make a directory  Install samba, open the
  firewall, and edit the  I added this to the end of my  Then I made the  I have a
  windows desktop in my office, primarily for my wife to run premiere
tags:
- linux
- linux
- linux
templateKey: til
title: Simple Samba Share Setup
today: 2022-10-29
year: 2022
---

Samba is an implementation of the smb protocol that allows me to setup network
shares on my linux machine that I can open on a variety of devices.

I think the homelab is starting to intrigue me enought to dive into the path of
experimenting with different things that I might want setup in my own home.
One key piece of this is network storage.  As I looked into nas, I realized
that it takes a dedicated machine, or one virtualized at a lower level than I
have capability for right now.


## Humble Beginnings

To get goind I am going to make a directory `/srv/samba/public` open to anyone
on my network.  I am not going to worry too much about it, I just want
something up and running so that I can learn.

Install samba, open the firewall, and edit the `smb.conf`
```
sudo apt install samba samba-common-bin
sudo ufw allow samba
sudo nvim /etc/samba/smb.conf
```

I added this to the end of my `smb.conf`

```
[public]

comment = public share, no need to enter username and password
path = /srv/samba/public/
browseable = yes
writable = yes
guest ok = yes
```

Then I made the `/srv/samba/public` directory and made it writable by anyone.

```
sudo mkdir -p /srv/samba/public
sudo setfacl -R -m "u:nobody:rwx" /srv/samba/public/
```

## Windows, yes windows

I have a windows desktop in my office, primarily for my wife to run premiere
pro, and my son to play Minecraft.  I walked over to it, opened the file
explorer, and ernt to `\\<my-local-ip>`.  It asked for the username and
password, I typed in the username and password of the linux device I have the
share running on, and I was in.  Right there I could see the Public folder.  I
opened it and made a files successfully.
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
    
    <a class='prev' href='/simple-textual-widget'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Making a Textual Widget from a Rich Renderable</p>
        </div>
    </a>
    
    <a class='next' href='/simple-click-2'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>simple click 2</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>