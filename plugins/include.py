from markata.hookspec import hook_impl


def expand_content(content: str, markata):
    slugs = [
        line.replace("%%include ", "")
        for line in content.split("\n")
        if line.startswith("%%include")
    ]

    for slug in slugs:
        try:
            include_content = markata.filter(f'slug=="{slug}"')[0].content
            return content.replace(f"%%include {slug}", include_content)
        except IndexError:
            ...


@hook_impl(trylast=True)
def pre_render(markata):
    for article in markata.articles:

        if "%%include" in article.content:
            article.content = expand_content(article.content, markata)
