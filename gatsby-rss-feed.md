---
cover: ''
date: 2020-01-21
datetime: 2020-01-21 00:00:00+00:00
description: Add an rss feed to your Gatsby Site
edit_link: https://github.com/edit/main/pages/blog/gatsby-rss-feed.md
jinja: false
long_description: Adding an rss feed to your gatsby js site is super simple. https://www.gatsbyjs.org/packages/gatsby-plugin-feed/
now: 2022-10-29 15:54:38.065036
path: pages/blog/gatsby-rss-feed.md
slug: gatsby-rss-feed
status: draft
super_description: Adding an rss feed to your gatsby js site is super simple. https://www.gatsbyjs.org/packages/gatsby-plugin-feed/
tags: []
templateKey: blog-post
title: RSS feed for your Gatsby Site
today: 2022-10-29
year: 2020
---

Adding an rss feed to your gatsby js site is super simple.

https://www.gatsbyjs.org/packages/gatsby-plugin-feed/


## Install

``` bash
npm install --save gatsby-plugin-feed
```

## How to use
``` javascript
// In your gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.edges.map(edge => {
                return Object.assign({}, edge.node.frontmatter, {
                  description: edge.node.excerpt,
                  date: edge.node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  guid: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  custom_elements: [{ "content:encoded": edge.node.html }],
                })
              })
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      excerpt
                      html
                      fields { slug }
                      frontmatter {
                        title
                        date
                      }
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Your Site's RSS Feed",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
            // optional configuration to specify external rss feed, such as feedburner
            link: "https://feeds.feedburner.com/gatsby/blog",
          },
        ],
      },
    },
  ],
}
```

## My updated graphql query


``` graphql
{
	allMarkdownRemark(
		sort: { order: DESC, fields: [frontmatter___date] }
		filter: {
			frontmatter: {
				templateKey: { in: ["blog-post"] }
				status: { in: ["published"] }
			}
		}
	) {
		edges {
			node {
				excerpt
				rawMarkdownBody
				fields {
					slug
				}
				frontmatter {
					title
					date
					cover {
						relativePath
					}
					twitter_cover {
						relativePath
					}
				}
			}
		}
	}
}

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
    
    <a class='prev' href='/gatsby-scripts-with-onload'>
    

        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.5 8.25L9.75 12L13.5 15.75" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"> </path>
        </svg>
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>prev</p>
            <p class='prevnext-title'>Gatsby Scripts with onload</p>
        </div>
    </a>
    
    <a class='next' href='/gatsby-remark-embedder'>
    
        <div class='prevnext-text'>
            <p class='prevnext-subtitle'>next</p>
            <p class='prevnext-title'>gatsby-remark-embedder</p>
        </div>
        <svg width="50px" height="50px" viewbox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10.5 15.75L14.25 12L10.5 8.25" stroke="var(--prevnext-color-angle)" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
        </svg>
    </a>
  </div>