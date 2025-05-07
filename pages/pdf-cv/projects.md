
# Projects

{% assign project_posts = site.tags.project %}

{% for post in project_posts %}

_{{ post.title }}_

{{ post.cv_version }}

[//]: **Tech stack**: {% for t in post.tech %} {{ t.name }}{% unless forloop.last %}, {% endunless %} {% endfor %}

{% endfor %}

