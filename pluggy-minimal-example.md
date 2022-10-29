---
cover: ''
date: 2022-01-01
datetime: 2022-01-01 00:00:00+00:00
description: Pluggy makes it so easy to allow users to modify the behavior of a framework
  I As long as the framework document the hooks that are available and what it Instal
edit_link: https://github.com/edit/main/pages/til/pluggy-minimal-example.md
jinja: false
long_description: Pluggy makes it so easy to allow users to modify the behavior of
  a framework I As long as the framework document the hooks that are available and
  what it Installing pluggy is just like most python applications, install python,
  make At the time I star
now: 2022-10-29 15:54:38.065936
path: pages/til/pluggy-minimal-example.md
slug: pluggy-minimal-example
status: draft
super_description: Pluggy makes it so easy to allow users to modify the behavior of
  a framework I As long as the framework document the hooks that are available and
  what it Installing pluggy is just like most python applications, install python,
  make At the time I started playing with pluggy, their docs were less Now Lets pretent
  the user of this library likes everything about it, Here is a short clip of me running
  the pluggy example in it
tags:
- python
templateKey: til
title: A Minimal Pluggy Example
today: 2022-10-29
year: 2022
---

Pluggy makes it so easy to allow users to modify the behavior of a framework
without thier specific feature needing to be implemented in the framework
itself.

I've really been loving the workflow of frameworks built with pluggy.  The first
one that many python devs have experience with is pytest.  I've never created a
pytest plugin, and honestly at the time I looked into how they were made was a
long time ago and it went over my head.  I use a data pipelining framework
called kedro, and have build many plugins for it.

## Making a plugin
_super easy to do_

As long as the framework document the hooks that are available and what it
passes to them it's so easy to make a plugin.  Its just importing the
`hook_impl`, making a class with a function that represents one of the hooks,
and decorating it.

``` python
from framework import hook_impl

class LowerHook:
    @hook_impl
    def start(pluggy_example):
        pluggy_example.message = pluggy_example.message.lower()
```

## installing pluggy

Installing pluggy is just like most python applications, install python, make
your virtual environment, and pip install it.

``` bash
pip install pluggy
```

## Making a plugin driven framework
_much less easy_

At the time I started playing with pluggy, their docs were less
complete, or I was just plain blind, but this was a huge part of the
docs that were missing for me that now actually appear to be there.  But
to get some more examples out there, here is my version.

``` python
import pluggy

# These don't need to match
HOOK_NAMESPACE = "pluggy_example"
PROJECT_NAME = "pluggy_example"

hook_spec = pluggy.HookspecMarker(HOOK_NAMESPACE)
hook_impl = pluggy.HookimplMarker(HOOK_NAMESPACE)


class PluggyExampleSpecs:
    """
    This is where we spec out our frameworks hooks, I like to refer to them as
    the lifecycle.  Each of these functions is a hook that we are exposing to
    our users, with the kwargs that we expect to pass them.
    """
    @hook_spec
    def start(self, pluggy_example: PluggyExample) -> None:
        """
        The first hook that runs.
        """
        pass

    @hook_spec
    def stop(self, pluggy_example: PluggyExample) -> None:
        """
        The last hook that runs.
        """
        pass


class PluggyExample:
    """
    This may not need to be a class, but I wanted a container where all the
    hooks had access to the message.  This made sense to me to do as a class.
    """

    def __init__(self, message="", hooks=None) -> None:
        """
        Setup the plugin manager and register all the hooks.
        """
        self._pm = pluggy.PluginManager(PROJECT_NAME)
        self._pm.add_hookspecs(PluggyExampleSpecs)
        self.message = message
        self.hooks = hooks
        if hooks:
            self._register_hooks()

    def _register_hooks(self) -> None:
        for hook in self.hooks:
            self._pm.register(hook)

    def run(self):
        """
        Run the hooks in the documented order, and pass in any kwargs the hook
        needs access to.  Here I am storing the message within this same class.
        """
        self._pm.hook.start(pluggy_example=self)
        self._pm.hook.stop(pluggy_example=self)
        return self.message


class DefaultHook:
    """
    These are some hooks that run by default, maybe these are created by the
    framework author.
    """
    @hook_impl
    def start(pluggy_example):
        pluggy_example.message = pluggy_example.message.upper()

    @hook_impl
    def stop(pluggy_example):
        print(pluggy_example.message)


if __name__ == "__main__":
    """
    The user of this framework can apply the hook in their own code without
    changing the behavior of the framework, but the library has
    implemented it's own default hooks.
    """
    pe = PluggyExample(
        message="hello world",
        hooks=[
            DefaultHook,
        ],
    )
    pe.run()
```

## Modifying behavior
_as a user of PluggyExample_

Now Lets pretent the user of this library likes everything about it,
except, they don't like all the shouting.  They can either search for a
plugin on Google, github, or pypi and find one, or make it themself. the
magic here is that they do not need to have the package maintainer patch
the core library itself.

```

class LowerHook:
    """
    This is a new hook that a plugin author has created to modify the behavior
    of the framework to lowercase the message.
    """
    @hook_impl
    def start(pluggy_example):
        pluggy_example.message = pluggy_example.message.lower()

from pluggy_example import PluggyExample
pe = PluggyExample(
    message="hello world",
    hooks=[
        DefaultHook,
        LowerHook
    ],
)
pe.run()
```

## Running Pluggy Example

Here is a short clip of me running the pluggy example in it's default
state, then adding the LowerHook, and running a second time.

![example video](https://images.waylonwalker.com/til-pluggy-example.gif)
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
    
    <a class='prev' href='/polybar-gpu-stats'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Gpu Stats in my linux statusbar</p>
        </div>
    </a>
    
    <a class='next' href='/pipx-w'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Glances webui with pipx</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>