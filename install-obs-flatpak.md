---
cover: ''
date: 2022-02-25
datetime: 2022-02-25 00:00:00+00:00
description: Big announcement recently that obs studio now builds out to a flatpak,
  I did not have flatpak installed so the first thing I had to do was get Once I had
  flatpa
edit_link: https://github.com/edit/main/pages/til/install-obs-flatpak.md
jinja: false
long_description: Big announcement recently that obs studio now builds out to a flatpak,
  I did not have flatpak installed so the first thing I had to do was get Once I had
  flatpak, I was able to get obs installed with the following Once Installed it fired
  right up for
now: 2022-10-29 15:54:38.065676
path: pages/til/install-obs-flatpak.md
slug: install-obs-flatpak
status: draft
super_description: Big announcement recently that obs studio now builds out to a flatpak,
  I did not have flatpak installed so the first thing I had to do was get Once I had
  flatpak, I was able to get obs installed with the following Once Installed it fired
  right up for me with the next command they Pretty straightforward, following the
  instructions given it all worked
tags:
- linux
- linux
- linux
templateKey: til
title: Install obs flatpak
today: 2022-10-29
year: 2022
---

Big announcement recently that obs studio now builds out to a flatpak,
hopefully making it easier for all of us to install, especially us near
normies that don't regularly compile anything from source.

## install flatpak

I did not have flatpak installed so the first thing I had to do was get
the `flatpak` command installed, and add their default repo.

``` bash
sudo apt install flatpak
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo
```

Once I had flatpak, I was able to get obs installed with the following
command.

``` bash
flatpak install flathub com.obsproject.Studio
```

Once Installed it fired right up for me with the next command they
suggested.

``` bash
flatpak run com.obsproject.Studio
```

## It Works

Pretty straightforward, following the instructions given it all worked
for me, but it was missing a lot of the plugins that the current snap
package I am using gives me (namely virtual webcam).  So I am not ready
to jump onto it until I figure out how to manage my own obs plugins.
For now I think the snap is working just well enough.

## Links

* [flatpak setup for ubuntu](https://flatpak.org/setup/Ubuntu)
* [obs release notes](https://github.com/obsproject/obs-studio/releases/tag/27.2.0)
* [obs flatpak](https://flathub.org/apps/details/com.obsproject.Studio)
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
    
    <a class='prev' href='/install-rust'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Installing Rust and Cargo on Ubuntu 21.10 using Ansible</p>
        </div>
    </a>
    
    <a class='next' href='/install-nvim-skit'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>How linux users install a text editor</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>