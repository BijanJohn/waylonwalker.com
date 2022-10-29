---
cover: ''
date: 2022-02-10
datetime: 2022-02-10 00:00:00+00:00
description: 'I often run shell commands from python with Popen, but not often enough
  To get the stderr we must get it from the proc, read it, and decode the Now that
  we can '
edit_link: https://github.com/edit/main/pages/til/popen-stderr.md
jinja: false
long_description: 'I often run shell commands from python with Popen, but not often
  enough To get the stderr we must get it from the proc, read it, and decode the Now
  that we can read the '
now: 2022-10-29 15:54:38.065615
path: pages/til/popen-stderr.md
slug: popen-stderr
status: draft
super_description: 'I often run shell commands from python with Popen, but not often
  enough To get the stderr we must get it from the proc, read it, and decode the Now
  that we can read the '
tags:
- python
templateKey: til
title: Read stderr from python subprocess.Popen
today: 2022-10-29
year: 2022
---

I often run shell commands from python with Popen, but not often enough
do I set up error handline for these subprocesses.  It's not too hard,
but it can be a bit awkward if you don't do it enough.

## Using Popen


``` python
import subprocess
from subprocess import Popen

# this will run the shell command `cat me` and capture stdout and stderr
proc = Popen(["cat", "me"], stdout=subprocess.PIPE, stderr=subprocess.PIPE)

# this will wait for the process to finish.
proc.wait()
```

## reading from stderr

To get the stderr we must get it from the proc, read it, and decode the
bystring.  Note that we can only get the stderr object once, so if you want to
do more than just read it you will need to store a copy of it.

``` python
proc.stderr.read().decode()
```

## Better Exception

Now that we can read the `stderr` we can make better error tracking for the
user so they can see what to do to resolve the issue rather than blindly
failing.

``` python
err_message = proc.stderr.read().decode()
if proc.returncode != 0:
    # the process was not successful

    if "No such file" in err_message:
        raise FileNotFoundError('No such file "me"')
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
    
    <a class='prev' href='/practice-kedro'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Practice making pipelines with kedro</p>
        </div>
    </a>
    
    <a class='next' href='/polybar-gpu-stats'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Gpu Stats in my linux statusbar</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>