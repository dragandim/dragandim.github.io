
# Projects

{% assign project_posts = site.tags.project %}

{% for post in project_posts %}

## {{ post.title }}

{{ post.content }}

{% include_relative project_techstack.md %}

{% endfor %}

