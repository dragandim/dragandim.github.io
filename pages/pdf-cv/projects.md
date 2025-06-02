
# Projects

{% assign project_posts = site.tags.project | where_exp: "item", "item.cv_skip != true" %}

{% for post in project_posts %}

_{{ post.title }}_

{{ post.cv_version }}

[//]: **Tech stack**: {% for t in post.tech %} {{ t.name }}{% unless forloop.last %}, {% endunless %} {% endfor %}

{% endfor %}

