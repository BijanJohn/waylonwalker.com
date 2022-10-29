---
cover: ''
date: 2021-12-03
datetime: 2021-12-03 00:00:00+00:00
description: I https://youtu.be/xo4HrFoKF4c The video for this one is part of a I
  have my  You will need the following plugins.  I use plug, if you don Make sure
  that you ha
edit_link: https://github.com/edit/main/pages/blog/setup-yamlls.md
jinja: false
long_description: 'I https://youtu.be/xo4HrFoKF4c The video for this one is part of
  a I have my  You will need the following plugins.  I use plug, if you don Make sure
  that you have nvim Again if you don Next up is the heart of this post, the lsp-config.lua.  This
  one '
now: 2022-10-29 15:54:38.065233
path: pages/blog/setup-yamlls.md
slug: setup-yamlls
status: published
super_description: I https://youtu.be/xo4HrFoKF4c The video for this one is part of
  a I have my  You will need the following plugins.  I use plug, if you don Make sure
  that you have nvim Again if you don Next up is the heart of this post, the lsp-config.lua.  This
  one is pretty Follow the  https://waylonwalker.com/setup-pylsp/
tags:
- linux
- vim
- neovim
templateKey: blog-post
title: Setup a yaml schema | yamlls for a silky smooth setup
today: 2022-10-29
year: 2021
---

I've gone far too long without a good setup for editing yaml
files, I am missing out on autocomplete and proper diagnostics.
This ends today as I setup yaml-language-server in neovim.

https://youtu.be/xo4HrFoKF4c

The video for this one is part of a
[challenge-playlist](https://www.youtube.com/playlist?list=PLTRNG6WIHETAj0nR_WYAxxGjd7kXch5zj)
I put out for myself to constantly improve my dotfiles for all of December.

## init.vim

I have my `init.vim` setup to only source other modules, if you want everything
in a single config, feel free to do as you wish.  I broke mine up earlier this
year as I doubled into nvim and am not going back.

``` vim
source ~/.config/nvim/plugins.vim
lua require'waylonwalker.cmp'
lua require'waylonwalker.lsp-config'
```

## Plugin setup

You will need the following plugins.  I use plug, if you don't you will have to
convert the syntax over to the plugin manager you use.


[neovim/nvim-lspconfig](https://github.com/neovim/nvim-lspconfig) is for
configuring the lsp.  It comes with a bunch of sane defaults for most servers,
so you pretty much just have to call setup on that server unless you want to
change the defaults.

[hrsh7th/nvim-cmp](https://github.com/hrsh7th/nvim-cmp) is what I use for
autocomplete. If you are using something else you might need to set that up in
a different way in order to get the autocomplete to work.  You will still get
the diagnostics with just lsp-config.

[kabouzeid/nvim-lspinstall](https://github.com/kabouzeid/nvim-lspinstall) will
aide in installing lsp's if you want.  I have chosen not to because I want to
have my full setup scripted so when I setup any new machine I just run my
ansible-playbook.  This library is nice to just set things up quick and play
with them.

``` vim
" /home/u_walkews/.config/nvim/plugins.vim
Plug 'neovim/nvim-lspconfig'

" if you want to use nvim-cmp
Plug 'hrsh7th/nvim-cmp'
Plug 'hrsh7th/cmp-nvim-lsp'

" if you want to use lsp-install
Plug 'kabouzeid/nvim-lspinstall'
```

## cmp config

Make sure that you have nvim_lsp as a source in your cmp config.  This is my
config as of now, its likely to change in the future, set yours up how you
like.  hrsh7th has a really good readme if you want help configuring cmp.

> Again if you don't use cmp you can skip this step, cmp is for autocomplete.
> You can use a different plugin for autocomplete, or not use a plugin at all
> if that's your thing.

``` lua
--  ~/.config/nvim/lua/waylonwalker/lsp-config.lua
-- Setup nvim-cmp.
local cmp = require'cmp'

cmp.setup({
snippet = {
    expand = function(args)
    -- For `vsnip` user.
    vim.fn["vsnip#anonymous"](args.body)

    -- For `luasnip` user.
    -- require('luasnip').lsp_expand(args.body)

    -- For `ultisnips` user.
    -- vim.fn["UltiSnips#Anon"](args.body)
    end,
},
mapping = {
  ['<C-n>'] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Insert }),
  ['<C-p>'] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Insert }),
  ['<Down>'] = cmp.mapping.select_next_item({ behavior = cmp.SelectBehavior.Select }),
  ['<Up>'] = cmp.mapping.select_prev_item({ behavior = cmp.SelectBehavior.Select }),
  ['<C-d>'] = cmp.mapping.scroll_docs(-4),
  ['<C-f>'] = cmp.mapping.scroll_docs(4),
  ['<C-Space>'] = cmp.mapping.complete(),
  ['<C-e>'] = cmp.mapping.close(),
  ['<CR>'] = cmp.mapping.confirm({
    behavior = cmp.ConfirmBehavior.Replace,
    select = true,
    })
},
sources = {
    { name = 'nvim_lsp' },
    { name = 'vsnip' },
    { name = 'path' },
    { name = 'buffer' },
    { name = 'calc' },
    { name = 'tmux' },
}
})

```

## lsp config

Next up is the heart of this post, the lsp-config.lua.  This one is pretty
straight forward, require lspconfig (which you need the plugin for), then set
it up with cmp and the extra schemas.  I'm sure there are yaml schemas for tons
of things, I'll probably add more in the future, but for now, this is what I
have.


``` lua
--  ~/.config/nvim/lua/waylonwalker/lsp-config.lua
require'lspconfig'.yamlls.setup{
    on_attach=on_attach,
    capabilities = require('cmp_nvim_lsp').update_capabilities(vim.lsp.protocol.make_client_capabilities()),
    settings = {
        yaml = {
            schemas = {
                ["https://raw.githubusercontent.com/quantumblacklabs/kedro/develop/static/jsonschema/kedro-catalog-0.17.json"]= "conf/**/*catalog*",
                ["https://json.schemastore.org/github-workflow.json"] = "/.github/workflows/*"
            }
        }
    }
}
```

## Related Links

* [my nvim config](https://github.com/WaylonWalker/devtainer/tree/main/nvim/.config/nvim)
* [nvim-lspconfig GitHub]( https://github.com/neovim/nvim-lspconfig )
* [nvim-cmp GitHub]( https://github.com/hrsh7th/nvim-cmp )
* [lspinstall yamlls]( https://github.com/kabouzeid/nvim-lspinstall/blob/main/lua/lspinstall/servers/yaml.lua )
* [yaml-language-server npm]( https://www.npmjs.com/package/yaml-language-server?activeTab=readme )

Follow the [YouTube channel](https://youtube.com/waylonwalker) or the
[rss-feed](https://waylonwalker/rss/) to stay up to date.

## Also Check out My python lsp setup


<div class="onelinelink-wrapper">
    <a class="onelinelink" href="https://waylonwalker.com/setup-pylsp/">
        <img style="float: right;" align='right' src="https://covers.waylonwalker.com/setup-pylsp.jpg" alt="article cover for python lsp setup"/>
        <p><strong>python lsp setup</strong></p>
    </a>
</div>

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
    
    <a class='prev' href='/should-i-switch-to-zeit-now'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Should I switch to Zeit Now</p>
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