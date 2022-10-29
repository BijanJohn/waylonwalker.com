---
cover: ''
date: 2000-01-15
datetime: 2000-01-15 00:00:00+00:00
description: I
edit_link: https://github.com/edit/main/pages/blog/python-atexit.md
jinja: false
long_description: I
now: 2022-10-29 15:54:38.063460
path: pages/blog/python-atexit.md
slug: python-atexit
status: draft
super_description: I
tags:
- python
- python
- python
templateKey: til
title: Python atexit
today: 2022-10-29
year: 2000
---

I'm still trying to understand this one, but this is how you force a
python object to stop atexit.


``` python
import atexit

class Server:
    def __init__(
        self,
        auto_restart: bool = True,
        directory: Union[str, "Path"] = None,
        port: int = 8000,
    ):
        if directory is None:
            from markata import Markata

            m = Markata()
            directory = m.config["output_dir"]

        self.directory = directory
        self.port = find_port(port=port)
        self.start_server()
        atexit.register(self.kill)

    def start_server(self):
        import subprocess

        self.cmd = [
            "python",
            "-m",
            "http.server",
            str(self.port),
            "--directory",
            self.directory,
        ]

        self.proc = subprocess.Popen(
            self.cmd,
            stderr=subprocess.PIPE,
            stdout=subprocess.PIPE,
        )
        self.start_time = time.time()


    def kill(self):
        self.auto_restart = False
        self.proc.kill()

    def __rich__(self) -> Panel:
        if not self.proc.poll():
            return Panel(
                f"[green]serving on port: [gold1]{self.port} [green]using pid: [gold1]{self.proc.pid} [green]uptime: [gold1]{self.uptime} [green]link: [gold1] http://localhost:{self.port}[/]",
                border_style="blue",
                title="server",
            )

        else:
            if self.auto_restart:
                self.start_server()

            return Panel(f"[red]server died", title="server", border_style="red")
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
    
    <a class='prev' href='/python-auto-pdb'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Implement --pdb in a python cli</p>
        </div>
    </a>
    
    <a class='next' href='/python-args-kwargs-slides'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>SLIDES - understanding python \*args and \*\*kwargs</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>