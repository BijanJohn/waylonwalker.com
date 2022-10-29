---
cover: ''
date: 2022-04-03
datetime: 2022-04-03 00:00:00+00:00
description: I I What currently have is a single module starter package that is on
  github Since it You can make a quick game by inheriting from Game, and calling Here
  is wha
edit_link: https://github.com/edit/main/pages/til/pygame-boilerplate-apr-2022.md
jinja: false
long_description: 'I I What currently have is a single module starter package that
  is on github Since it You can make a quick game by inheriting from Game, and calling
  Here is what the current '
now: 2022-10-29 15:54:38.065492
path: pages/til/pygame-boilerplate-apr-2022.md
slug: pygame-boilerplate-apr-2022
status: draft
super_description: 'I I What currently have is a single module starter package that
  is on github Since it You can make a quick game by inheriting from Game, and calling
  Here is what the current '
tags:
- python
- gamedev
templateKey: til
title: Pygame Boilerplate Apr 2022
today: 2022-10-29
year: 2022
---

I'm poking a bit into gamedev.  Partly to better understand, partly
because it's stretching different parts of my brain/skillset than
writing data pipelines does, but mostly for the experience of designing
them with my 9yo Wyatt.

## pygame boilerplates

I've seen several pygame boilerplate templates, but they all seem to
rely heavily on globl variables.  That's just not how I generally
develop anything.  I want a package that I can pip install, run, import,
test, all the good stuff.

## My current starter

What currently have is a single module starter package that is on github
so that I can install it and start building games with very little code.

## Installation

Since it's a package on GitHub you can install it with the git+ prefix.

``` bash
pip install git+https://github.com/WaylonWalker/pygame-starter
```

## Example Game

You can make a quick game by inheriting from Game, and calling
`.run()`.  This example just fills the screen with an aqua color, but
you can put all of your game logic in the `game` method.

``` python
from pygame_starer import Game

class MyGame(Game):
    def game(self):
        self.screen.fill((128, 255, 255))

if __name__ == "__main__":
    game = MyGame()
    game.run()

```

## The starter

Here is what the current `game.py` looks like.  I will probably update
it as time goes on and I learn more about the things I want to do with
it.

```python
from typing import Tuple

import pygame


class Game:
    def __init__(
        self,
        screen_size: Tuple[int, int] = (854, 480),
        caption: str = "pygame-starter",
        tick_speed: int = 60,
    ):
        """

        screen_size (Tuple[int, int]): The size of the screen you want to use, defaults to 480p.
        caption (str): the name of the game that will appear in the title of the window, defaults to `pygame-starter`.
        tick_speed (int): the ideal clock speed of the game, defaults to 60

        ## Example Game

        You can make a quick game by inheriting from Game, and calling
        `.run()`.  This example just fills the screen with an aqua color, but
        you can put all of your game logic in the `game` method.

        ``` python
        from pygame_starer import Game

        class MyGame(Game):
            def game(self):
                self.screen.fill((128, 255, 255))

        if __name__ == "__main__":
            game = MyGame()
            game.run()

        ```
        """
        pygame.init()
        pygame.display.set_caption(caption)

        self.screen_size = screen_size
        self.screen = pygame.display.set_mode(self.screen_size)
        self.clock = pygame.time.Clock()
        self.tick_speed = tick_speed

        self.running = True
        self.surfs = []

    def should_quit(self):
        """check for pygame.QUIT event and exit"""
        for event in pygame.event.get():
            if event.type == pygame.QUIT:
                self.running = False

    def game(self):
        """
        This is where you put your game logic.

        """
        ...

    def reset_screen(self):
        """
        fill the screen with black
        """
        self.screen.fill((0, 0, 0))

    def update(self):
        """
        run one update cycle
        """
        self.should_quit()
        self.reset_screen()
        self.game()
        for surf in self.surfs:
            self.screen.blit(surf, (0, 0))
        pygame.display.update()
        self.clock.tick(self.tick_speed)

    def run(self):
        """
        run update at the specified tick_speed, until exit.
        """
        while self.running:
            self.update()
        pygame.quit()


if __name__ == "__main__":
    game = Game()
    game.run()
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
    
    <a class='prev' href='/pygame-event-queue'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>pygame events are queued | Don't make this mistake</p>
        </div>
    </a>
    
    <a class='next' href='/pyflyby'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Smoother Python with automatic imports | pyflyby</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>