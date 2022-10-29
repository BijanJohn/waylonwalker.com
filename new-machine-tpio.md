---
cover: ''
date: 2020-07-25
datetime: 2020-07-25 00:00:00+00:00
description: Today I setup a new machine on Digital Ocean to use with TestProject.io,
  Here are my installation notes.
edit_link: https://github.com/edit/main/pages/notes/new-machine-tpio.md
jinja: false
long_description: 'Today I setup a new machine on Digital Ocean to use with TestProject.io,  Here
  are my installation notes. envsubst '
now: 2022-10-29 15:54:38.061895
path: pages/notes/new-machine-tpio.md
slug: new-machine-tpio
status: published
super_description: 'Today I setup a new machine on Digital Ocean to use with TestProject.io,  Here
  are my installation notes. envsubst '
tags: []
templateKey: blog-post
title: New Machine for developing Tests with TestProject.io
today: 2022-10-29
year: 2020
---

Today I setup a new machine on Digital Ocean to use with TestProject.io,  Here are my installation notes.

``` bash
apt update && apt upgrade -y

apt install zsh
chsh zsh
sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
curl -fsSL https://starship.rs/install.sh | bash
echo 'eval "$(starship init zsh)"' >> ~/.zshrc

# python
sudo apt update
sudo apt install python3-pip -y
echo 'alias python=python3' >> ~/.zshrc
echo 'alias pip=pip3' >> ~/.zshrc

# pipx
apt install python3-venv
pip install pipx
pipx install black
pipx install shell-functools
pip install ipython


# docker
sudo apt update
sudo apt install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
sudo add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
sudo apt update
sudo apt install docker-ce

# docker-compose
sudo curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose

# configure git
git config --global user.name "Waylon Walker"
git config --global user.email waylon@waylonwalker.com

# fzf
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install

# forgit
git clone https://github.com/wfxr/forgit ~/.forgit
echo ". ~/.forgit/forgit.plugin.zsh" >> ~/.zshrc

# ag
apt install silversearcher-ag

# bat
apt install bat
echo "alias cat=batcat" >> ~/.zshrc

# testproject.io tokens
echo 'export TP_AGENT_ALIAS="Digital Ocean Agent"' >>" ~/.zshrc
echo "export TP_AGENT_API_KEY=<your-key> >>" ~/.zshrc
echo "export TP_DEV_TOKEN=<your-token> >>" ~/.zshrc

```


envsubst < .github/ci/docker-compose.yml > docker-compose.yml

``` yaml
# .github/ci/docker-compose.yml
version: "3.1"
services:
  testproject-agent:
    image: testproject/agent:latest
    container_name: testproject-agent
    depends_on:
      - chrome
      - firefox
    environment:
      TP_API_KEY: "${TP_API_KEY}"
      TP_AGENT_ALIAS: "GitHub Action Agent"
      TP_AGENT_TEMP: "true"
      TP_SDK_PORT: "8686"
      CHROME: "chrome:4444"
      CHROME_EXT: "localhost:5555"
      FIREFOX: "firefox:4444"
      FIREFOX_EXT: "localhost:6666"
    ports:
    - "8585:8585"
    - "8686:8686"
  chrome:
    image: selenium/standalone-chrome
    volumes:
      - /dev/shm:/dev/shm
    ports:
    - "5555:4444"
  firefox:
    image: selenium/standalone-firefox
    volumes:
      - /dev/shm:/dev/shm
    ports:
    - "6666:4444"
```


``` bash
docker-compose -f docker-compose.yml
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
    
    <a class='prev' href='/newsboat'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Newsboat</p>
        </div>
    </a>
    
    <a class='next' href='/neovim-live-substitution'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Live Substitution In Neovim</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>