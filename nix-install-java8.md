---
cover: ''
date: 2022-01-25
datetime: 2022-01-25 00:00:00+00:00
description: 'With the latest version of minecraft it requires a very new, possibly
  I was getting this error trying to get a 1.12.2 forge server running. Caused by:
  java.lang'
edit_link: https://github.com/edit/main/pages/til/nix-install-java8.md
jinja: false
long_description: 'With the latest version of minecraft it requires a very new, possibly
  I was getting this error trying to get a 1.12.2 forge server running. Caused by:
  java.lang.ClassCastException: class jdk.internal.loader.ClassLoaders$AppClassLoader
  cannot be cast '
now: 2022-10-29 15:54:38.066330
path: pages/til/nix-install-java8.md
slug: nix-install-java8
status: draft
super_description: 'With the latest version of minecraft it requires a very new, possibly
  I was getting this error trying to get a 1.12.2 forge server running. Caused by:
  java.lang.ClassCastException: class jdk.internal.loader.ClassLoaders$AppClassLoader
  cannot be cast to class java.net.URLClassLoader (jdk.internal.loader.ClassLoaders$AppClassLoader
  and java.net.URLClassLoader are in module java.base of loader  In researching our
  errors, I found this on a forum. Pre-1.13 Forge only works with Java 8. I don once
  I h'
tags:
- cli
- cli
- cli
templateKey: til
title: nix rescues modded minecraft night
today: 2022-10-29
year: 2022
---

With the latest version of minecraft it requires a very new, possibly
the latest, version of java.  Lately we have been getting into modded
minecraft and I maintain the server for us.  It's been tricky to say the
least.  One hurdle I recently hit involves having the wrong version of
java.

I was getting this error trying to get a 1.12.2 forge server running.

> Caused by: java.lang.ClassCastException: class jdk.internal.loader.ClassLoaders$AppClassLoader cannot be cast to class java.net.URLClassLoader (jdk.internal.loader.ClassLoaders$AppClassLoader and java.net.URLClassLoader are in module java.base of loader 'bootstrap')

In researching our errors, I found this on a forum.

> Pre-1.13 Forge only works with Java 8.

I don't write java, or really know how to manage different versions of
java, but I have nixpkgs installed and it has a ton of odd stuff like
this readily available, so
[searching nixpkgs](https://search.nixos.org/packages?channel=21.05&show=jdk8&from=0&size=50&sort=relevance&type=packages&query=java+8)
landed me with this.

``` bash
nix-env -iA nixpkgs.jdk8
```

once I had this installed I then just changed out java for the full path
to my new nixpkgs.jdk8 java and it worked.

``` bash
/home/walkers/.nix-profile/bin/java -server -Xms${MIN_RAM} -Xmx${MAX_RAM} ${JAVA_PARAMETERS} -jar ${SERVER_JAR} nogui
```

I don't write java or do anything other than host minecraft servers wtih
it.  There is probably a better way of maintaining java versions than
this, but this worked for me.
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
    
    <a class='prev' href='/nix-python-interpreter'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Using Nix to manage my Python Interpreter</p>
        </div>
    </a>
    
    <a class='next' href='/newsboat'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Newsboat</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>