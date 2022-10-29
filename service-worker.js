/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at
 http://www.apache.org/licenses/LICENSE-2.0
 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */

// Names of the two caches used in this version of the service worker.
// Change to v2, etc. when you update any of the local resources, which will
// in turn trigger the install event again.
const PRECACHE = '32dcb00ee18264b844a9f467334c5dc0';
const RUNTIME = '32dcb00ee18264b844a9f467334c5dc0';

// A list of local resources we always want to be cached.
const PRECACHE_URLS = ['/break-pane/', '/tmux-new-session/', '/react-headroom/', 'main.min.css', '/markata-dev-server/', '/newsboat/', '/localstack-status-permission/', '/if-name-main/', '/d3-day3/', '/kedro-run/', '/telegraph-release/', '/git-update-user/', '/gh-rm-workflow-runs/', '/strip-trailing-whitespace/', '/keyboard-driven-vscode/', '/data-scientist-advice/', '/stand-with-your-team/', '/new-machine-tpio/', '/i-spoke-at-python-web-conf-2022/', '/devto-comments-from-url/', '/dotfile-rice-challenge-intro/', '/nvim-ides-are-slow/', '/copier-slugify/', '/custom-scrollbar-design/', '/my-github-profile/', '/what-is-kedro/', '/tmux-resize-panes/', '/practice-python-online/', '/reasons-to-kedro/', '/2021-content-strategy/', '/python-args-kwargs-slides/', '/kedro-pipeline-registry/', '/tmux-zoom/', '/just-use-pathlib/', '/markdown-cli/', '/gracefully-redirect/', '/setup-yamlls/', '/more-itertools-windowed/', '/tmux-display-message/', '/create-new-kedro-project/', '/tmux-nav-2021/', '/refactor-in-cli/', '/pariss-athena-on-black-tech-pipeline/', '/kedro-catalog/', '/maintianing-multiple-git-remotes/', '/custom-ipython-prompt/', '/switched-to-arch/', '/diffurcate/', 'scroll.css', '/tmux-list-keys/', '/brainstorming-kedro-hooks/', '/what-are-github-actions/', '/vim-augroup/', '/crush-dev-to-posts/', '/reset-ipython/', '/reader/', '/designing-kedro-router/', '/what-is-kedro-1/', '/twitter-deepdives/', '/reasons-to-kedro-notes/', '/markata-configure-head/', '/kedro-your-first-nodes/', '/minimal-kedro-pipeline/', '/do-you-hoist/', '/happy/', '/jinja2-escape/', '/creating-the-kedro-preflight-hook/', '/tmux-prefix/', '/tmux-next-prev-session/', '/python-data-science-background/', '/2020-rebrand/', '/install-micromamba/', 'archive', '/how-python-tools-config/', '/git-in-depth/', '/bind-dynamic-lambdas/', '/quickly-change-conda-env-with-fzf/', '/kedro-class-hooks/', '/tmux-ta/', '/kedro-incremental-versioned-datasets/', '/tmux-ls/', '/pipx-textual-devtools/', '/two-new-aliases-for-git/', '/tmux-select-layout/', '/explain-twitter-cards/', '/digital-ocean/', '/whats-new-in-kedro-0164/', '/talk-python-kedro/', '/variable-names-don-t-need-their-type/', '/journey/', '/save-vim-macro/', '/vim-replace-visual-star/', '/tmux-start-application/', '/start-streaming/', '/gatsby-remark-embedder/', 'one-dark.min.css', '/edit-on-github/', '/install-nvim-skit/', 'index.html', '/tmux-source-file/', '/nvim-navic/', '/tmux-select-pane/', '/ipython-help/', '/send-email-with-github-actions/', '8bitcc.ico', '/pyflyby/', '/flexbox-zombies/', '/don-t-waste-your-time-learning-everything/', '/digital-gardening-stream-6-6-2021/', '/hatch-version/', '/chrome-extensions-i-use/', '/tmux-targeted-session/', '/kedro-preflight/', '/get-python-package-versions/', '/kedro-catalog-create-cli/', '/audio-for-blog/', '/out-of-space/', '/pre-commit-is-awesome/', '/packages-to-investigate/', '/git-push-without-setting-upstream/', '/gitui/', '/eight-years-cat/', '/fix-styled-components-in-gatsby/', '/bash/', '/3-things-to-automate-with-python/', '/cmd-exe-tips/', 'manifest.json', '/kedro-environment/', '/stories-10-10-2020-10-21-2020/', '/pytest-capsys/', '/keep-location-list-closed/', '/neovim-live-substitution/', '/markata-todoui-live-replay-4-6-2022/', '/blogging-for-me/', '/autoreload-ipython/', '/kedro-basics/', '/goals-2019/', '/tmux-new-window/', '/why-use-cms/', '/master-no-more/', '/vimgrep-open-buffers/', '/use-ipython-extensions/', '/tmux-rename-session/', '/install-miniconda/', '/simple-click/', './', '/explicit-vs-implicit-returns-in-javascript/', '/kedro-inputs/', '/tmux-fzf-session-jump/', '/kedro172-replit/', '/whats-on-your-github-profile/', '/expand-one-line-links/', '/realistic-git-workflow/', '/if-tmux/', '/quick-progress-bars-in-python-using-tqdm/', '/personal-url-shortener/', '/kedro-catalog-search/', '/kedro-silence/', '/building-kedro-dev/', '/interrogate/', '/whats-new-in-kedro-0166/', '/ipython-q-exit/', '/ipython-config/', '/reusable-bash/', '/recent/', '/four-github-actions-website/', '/quickly-edit-posts/', '/tmux-popups/', '/python-deepwatch/', '/tmux-rotate-window/', '/python-args-kwargs/', '/codeit-bro-interview/', '/adding-google-fonts-to-a-gatsbyjs-site/', '/automating-my-post-starter/', '/symlink-gallery/', '/markata-now-uses-hatch/', '/tmux-status-bar/', '/d3-day4/', '/tmux-choose-tree/', '/custom-python-exceptions/', '/kedro-in-scripts/', '/hatch-new-cli/', '/markata-0-3-0/', '/tmux-splitting-panes/', '/vim-wsl-clipboard/', '/kedro-pickle/', '/kedro-spaceflights-stream2/', '/django-rest-framework-getting-started/', '/trying-out-django/', '/2018-retrospective/', '/fuzzy-edit-zsh/', '/kedro-install/', '/tmux-attach/', '/jut/', '/obs-virtual-camera-on-boot/', '/update-copier/', '/kedro-parameters/', '/serverless-things-to-investigate/', '/graceful-kedro-catalog/', '/d3-day-5/', '/trim-branches/', '/parsing-rss-python/', 'furo-purge.min.css', '/reading-list/', '/kedro-new/', '/fix-git-commit-author/', '/tmux-copy-mode/', '/learn-early/', '/resume-tips/', '/published/', '/testproject-io-py-actions/', '/git-diff-branches/', '/git-auto-commit-action-review/', '/rich-syntax-range-style/', '/github-actions-syntax/', '/gatsby-scripts-with-onload/', '/forestry-io/', '/named-tuples-data-science/', '/from-markdown-to-blog-with-markata/', '/tmux-last-session/', '/django-disallowed-host/', '/building-cli-apps-in-python/', '/four-github-actions-python/', '/supercharge-zsh-startup/', '/debugging-python/', 'archive-styles.css', '/tmux-killing-tmux/', '/kedro-spaceflights-stream1/', '/kedro-static-viz-0-3-0/', '/tmux-has-session/', '/filtering-pandas/', '/vim-sort-u/', '/packages-i-maintain/', '/kedro/', '/minimal-python-package/', '/archive/', '/pypi-2fa/', '/create-custom-kedro-dataset/', '/git-rewrite-history/', '/find-replace/', '/tmux-show-messages/', '/tmux-command-line/', '/should-i-switch-to-zeit-now/', '/markata-supports-jinja-plugins-0-5-0-dev2/', '/how-i-kedro/', '/drawing-ascii-boxes/', '/all/', '/django-create-superuser/', '/tmux-floating-popups/', '/kedro-git-init/', '/find-kedro-release/', '/tmux-join-pane/', '/sqlalchemy-models/'];

// The install handler takes care of precaching the resources we always need.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(PRECACHE)
      .then(cache => cache.addAll(PRECACHE_URLS))
      .then(self.skipWaiting())
  );
});

// The activate handler takes care of cleaning up old caches.
self.addEventListener('activate', event => {
  const currentCaches = [PRECACHE, RUNTIME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return cacheNames.filter(cacheName => !currentCaches.includes(cacheName));
    }).then(cachesToDelete => {
      return Promise.all(cachesToDelete.map(cacheToDelete => {
        return caches.delete(cacheToDelete);
      }));
    }).then(() => self.clients.claim())
  );
});

// The fetch handler serves responses for same-origin resources from a cache.
// If no response is found, it populates the runtime cache with the response
// from the network before returning it to the page.
self.addEventListener('fetch', event => {
  // Skip cross-origin requests, like those for Google Analytics.
  if (event.request.url.startsWith(self.location.origin)) {
    event.respondWith(
      caches.match(event.request).then(cachedResponse => {
        if (cachedResponse) {
          return cachedResponse;
        }

        return caches.open(RUNTIME).then(cache => {
          return fetch(event.request).then(response => {
            // Put a copy of the response in the runtime cache.
            return cache.put(event.request, response.clone()).then(() => {
              return response;
            });
          });
        });
      })
    );
  }
});