---
cover: ''
date: 2022-09-05
datetime: 2022-09-05 00:00:00+00:00
description: https://www.youtube.com/watch?v= These are mostly my notes to remind
  myself, I When I started running  You should now see  so that you can boot into
  snapper sna
edit_link: https://github.com/edit/main/pages/til/setting-up-snapper-on-arch.md
jinja: false
long_description: https://www.youtube.com/watch?v= These are mostly my notes to remind
  myself, I When I started running  You should now see  so that you can boot into
  snapper snapshots leaving off for now https://youtu.be/
now: 2022-10-29 15:54:38.065649
path: pages/til/setting-up-snapper-on-arch.md
slug: setting-up-snapper-on-arch
status: draft
super_description: https://www.youtube.com/watch?v= These are mostly my notes to remind
  myself, I When I started running  You should now see  so that you can boot into
  snapper snapshots leaving off for now https://youtu.be/
tags:
- linux
templateKey: blog-post
title: Setting up snapper on Arch
today: 2022-10-29
year: 2022
---

https://www.youtube.com/watch?v=_97JOyC1o2o

```
snapper
snap-pac
grub-btrfs
```

## Note

These are mostly my notes to remind myself, I'd Highly reccomend watching
[this-video]( https://www.youtube.com/watch?v=_97JOyC1o2o) or reading this
[arch wiki page](https://wiki.archlinux.org/title/snapper)

## /.snapshots already exists error

When I started running `sudo snapper -c root create-config /`  I ran into the
following error.

![snapshots-already-exists](https://screenshots.waylonwalker.com/snapshots-already-exists.webp)

```
Creating config failed (creating btrfs subvolume .snapshots failed since it already exists).
```

## remove existing snapshots

``` bash
sudo umount /.snapshots
sudo rm -r /.snapshots
```

## configure snapper

``` bash
sudo snapper -c root create-config /
sudo snapper -c home create-config /home
```

## btrfs subvolumes

``` bash
sudo btrfs subvolume list /
```

![btrfs-subvolume-list](https://screenshots.waylonwalker.com/btrfs-subvolume-list.webp)

``` bash
sudo btrfs subvolume delete /.snapshots
sudo mkdir /.snapshots
```

##

``` bash
# you might not see snapshots mounted yet
lsblk

# if you check fstab you will see an entry for it
cat /etc/fstab

# mount it
sudo mount -a

# now you should see /.snapshots mounted
lsblk
```

You should now see `.snapshots` in mountpoints.

![lsblk-snapshots](https://screenshots.waylonwalker.com/lsblk-snapshots.webp)

## Setting the default to @

so that you can boot into snapper snapshots

``` bash
sudo btrfs subvol get-default /
sudo btrfs subvol list /
```

![btrfs-subvol-get-default](https://screenshots.waylonwalker.com/btrfs-subvol-get-default.webp)

``` bash
sudo btrfs subvol set-default 256 /
sudo btrfs subvol get-default /
## ID 256 gen 105268 top level 5 path @
```

![btrfs-subvol-set-default]( https://screenshots.waylonwalker.com/btrfs-subvol-set-default.webp )

## snapper ls

``` bash
sudo snapper ls
```

![snapper-ls-init](https://screenshots.waylonwalker.com/snapper-ls-init.webp)

leaving off for now

https://youtu.be/_97JOyC1o2o?t=909

## config

``` bash
sudo nvim /etc/snapper/configs/root
```

``` bash
ALLOW_GROUPS="wheel"

# limits for timeline cleanup
TIMELINE_MIN_AGE="1800"
TIMELINE_LIMIT_HOURLY="5"
TIMELINE_LIMIT_DAILY="7"
TIMELINE_LIMIT_WEEKLY="0"
TIMELINE_LIMIT_MONTHLY="0"
TIMELINE_LIMIT_YEARLY="0"
```

```
sudo chown -R :wheel /.snapshots/
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
    
    <a class='prev' href='/setup-pylsp'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>python lsp setup</p>
        </div>
    </a>
    
    <a class='next' href='/serverless-things-to-investigate'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Serverless things to investigate</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>