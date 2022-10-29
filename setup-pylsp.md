---
cover: ''
date: 2021-05-17
datetime: 2021-05-17 00:00:00+00:00
description: Setting up python with the native nvim>0.5 lsp was mr https://github.com/neovim/nvim-lspconfig
  https://github.com/palantir/python-language-server/issues/190 Get
edit_link: https://github.com/edit/main/pages/blog/setup-pylsp.md
jinja: false
long_description: Setting up python with the native nvim>0.5 lsp was mr https://github.com/neovim/nvim-lspconfig
  https://github.com/palantir/python-language-server/issues/190 Getting mypy working
  with lsp was tricky for me.  I had some issues trying to
now: 2022-10-29 15:54:38.064075
path: pages/blog/setup-pylsp.md
slug: setup-pylsp
status: draft
super_description: Setting up python with the native nvim>0.5 lsp was mr https://github.com/neovim/nvim-lspconfig
  https://github.com/palantir/python-language-server/issues/190 Getting mypy working
  with lsp was tricky for me.  I had some issues trying to
tags:
- vim
- linux
- python
templateKey: blog-post
title: python lsp setup
today: 2022-10-29
year: 2021
---

Setting up python with the native nvim>0.5 lsp was mr


## lsp-config

https://github.com/neovim/nvim-lspconfig

``` vim
lua << EOF
require'lspconfig'.pyright.setup{}
EOF
```

## pyls#190

https://github.com/palantir/python-language-server/issues/190

``` lua
lspconfig.pyls.setup {
  cmd = {"pyls"},
  filetypes = {"python"},
  settings = {
    pyls = {
      configurationSources = {"flake8"},
      plugins = {
        jedi_completion = {enabled = true},
        jedi_hover = {enabled = true},
        jedi_references = {enabled = true},
        jedi_signature_help = {enabled = true},
        jedi_symbols = {enabled = true, all_scopes = true},
        pycodestyle = {enabled = false},
        flake8 = {
          enabled = true,
          ignore = {},
          maxLineLength = 160
        },
        mypy = {enabled = false},
        isort = {enabled = false},
        yapf = {enabled = false},
        pylint = {enabled = false},
        pydocstyle = {enabled = false},
        mccabe = {enabled = false},
        preload = {enabled = false},
        rope_completion = {enabled = false}
      }
    }
  },
  on_attach = on_attach
}
```


## mypy

Getting mypy working with lsp was tricky for me.  I had some issues trying to
run mypy in ci and pyright in my editor and I really wanted them to match.

``` bash
pipx install 'python-lsp-server[all]'
pipx inject python-lsp-server pylsp-mypy
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
    
    <a class='prev' href='/setup-yamlls'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Setup a yaml schema | yamlls for a silky smooth setup</p>
        </div>
    </a>
    
    <a class='next' href='/setting-up-snapper-on-arch'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>Setting up snapper on Arch</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>