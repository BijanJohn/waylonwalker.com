---
cover: ''
date: 2022-01-07
datetime: 2022-01-07 00:00:00+00:00
description: Once you have made your sick looking cli apps with rich, eventually you
  are Install them from the command line. Import make a .py file and import them in
  it. If
edit_link: https://github.com/edit/main/pages/til/simple-textual-widget.md
jinja: false
long_description: Once you have made your sick looking cli apps with rich, eventually
  you are Install them from the command line. Import make a .py file and import them
  in it. If you return your rich renderable out of class that inherits from You At
  this point It prob
now: 2022-10-29 15:54:38.065979
path: pages/til/simple-textual-widget.md
slug: simple-textual-widget
status: draft
super_description: Once you have made your sick looking cli apps with rich, eventually
  you are Install them from the command line. Import make a .py file and import them
  in it. If you return your rich renderable out of class that inherits from You At
  this point It probably does not look much different, but it can be
tags:
- python
- cli
templateKey: til
title: Making a Textual Widget from a Rich Renderable
today: 2022-10-29
year: 2022
---

Once you have made your sick looking cli apps with rich, eventually you are
going to want to add some keybindings to them.  Currently Textual, also written
by [@willmcgugan](https://twitter.com/willmcgugan), does this extremely well.
Fair Warning it is in super beta mode and expected to change a bunch.  So take
it easy with hopping on the train so fast.

## Get the things


Install them from the command line.

``` bash
pip install textual
pip install rich
```

Import make a .py file and import them in it.

``` python
from textual.app import App
from textual.widget import Widget
from rich.panel import Panel
```

## Make what you have a widget

If you return your rich renderable out of class that inherits from
`textual.widget.Widget`, you can then dock this inside of an app class
inheriting from `textual.app.App`.

``` python
class MyWidget(Widget):
    def render(self):
        my_renderable = Panel("press q to quit")
        return my_renderable

class MyApp(App):
    async def on_mount(self) -> None:
        await self.view.dock(MyWidget(), edge="top")
        await self.bind("q", "quit")
```

## run it

You've made a TUI (text user interface).  Run the classmethod `run` to display
the it in its full screen glory.

``` python
MyApp.run(log="textual.log")
```

## Final result

At this point It probably does not look much different, but it can be
interactive by binding keys to any method on your app that starts with the word
`action_`, this includes the built-in actions such as `action_quit`.

``` python
from textual.app import App
from textual.widget import Widget
from rich.panel import Panel


class MyWidget(Widget):
    def render(self):
        my_renderable = Panel("press q to quit")
        return my_renderable


class MyApp(App):
    async def on_mount(self) -> None:
        await self.view.dock(MyWidget(), edge="top")
        await self.bind("q", "quit")


if __name__ == "__main__":
    MyApp.run(log="textual.log")
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
    
    <a class='prev' href='/site-down'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Did my site build just go down?</p>
        </div>
    </a>
    
    <a class='next' href='/simple-samba'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Simple Samba Share Setup</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>