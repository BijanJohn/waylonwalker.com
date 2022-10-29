---
cover: ''
date: 2022-02-11
datetime: 2022-02-11 00:00:00+00:00
description: One thing about moving to a tiling window manager like awesome wm or
  i3 is that Running  Here is what I had to do to connect my headphones. Here is the
  output o
edit_link: https://github.com/edit/main/pages/til/linux-bluetoothctl.md
jinja: false
long_description: 'One thing about moving to a tiling window manager like awesome
  wm or i3 is that Running  Here is what I had to do to connect my headphones. Here
  is the output of the help menu on my machine, it seems pretty straight note ctrl
  revers to the bluetooth '
now: 2022-10-29 15:54:38.066198
path: pages/til/linux-bluetoothctl.md
slug: linux-bluetoothctl
status: draft
super_description: One thing about moving to a tiling window manager like awesome
  wm or i3 is that Running  Here is what I had to do to connect my headphones. Here
  is the output of the help menu on my machine, it seems pretty straight note ctrl
  revers to the bluetooth controller on the machine you are on, and dev This was something
  that I have never used, and thought it would be intimidating
tags:
- linux
- desktop
templateKey: til
title: Bluetooth at the command line on Ubuntu
today: 2022-10-29
year: 2022
---

One thing about moving to a tiling window manager like awesome wm or i3 is that
they are so lightweight they are all missing things like bluetooth gui's out of
the box, and you generally bring your own.  Today I just needed to connet a new
set of headphones, so I decided to just give the `bluetoothctl` cli a try.  It
seems to come with Ubuntu, I don't think I did anything to get it.

``` bash
bluetoothctl
```

Running `bluetoothctl` pops you into a repl/shell like bah, python, or ipython.
From here you can execute `bluetoothctl` commands.


Here is what I had to do to connect my headphones.

``` bash
# list out the commands available
help

# scan for new devices and stop when you see your device show up
scan on
scan off

# list devices
devices
paired-devices

# pair the device
pair XX:XX:XX:XX:XX:XX

# now your device should show up in the paired list
paired-devices

# connet the device
connect XX:XX:XX:XX:XX:XX
```

## help

Here is the output of the help menu on my machine, it seems pretty straight
forward to block, and remove devices from here.

note ctrl revers to the bluetooth controller on the machine you are on, and dev
refers to a device id.

``` bash
Menu main:
Available commands:
-------------------
advertise                                         Advertise Options Submenu
scan                                              Scan Options Submenu
gatt                                              Generic Attribute Submenu
list                                              List available controllers
show [ctrl]                                       Controller information
select <ctrl>                                     Select default controller
devices                                           List available devices
paired-devices                                    List paired devices
system-alias <name>                               Set controller alias
reset-alias                                       Reset controller alias
power <on/off>                                    Set controller power
pairable <on/off>                                 Set controller pairable mode
discoverable <on/off>                             Set controller discoverable mode
agent <on/off/capability>                         Enable/disable agent with given capability
default-agent                                     Set agent as the default one
advertise <on/off/type>                           Enable/disable advertising with given type
set-alias <alias>                                 Set device alias
scan <on/off>                                     Scan for devices
info [dev]                                        Device information
pair [dev]                                        Pair with device
trust [dev]                                       Trust device
untrust [dev]                                     Untrust device
block [dev]                                       Block device
unblock [dev]                                     Unblock device
remove <dev>                                      Remove device
connect <dev>                                     Connect device
disconnect [dev]                                  Disconnect device
menu <name>                                       Select submenu
version                                           Display version
quit                                              Quit program
exit                                              Quit program
help                                              Display help about this program
```

## Final Impressions

This was something that I have never used, and thought it would be intimidating
but it worked great first try out of the box.  It could have been my device on
the other end, but this was one of the least frustrations I have had pairing a
new device.
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
    
    <a class='prev' href='/linux-swap'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Create a Swapfile on Your Linux Machine</p>
        </div>
    </a>
    
    <a class='next' href='/links'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Links</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>