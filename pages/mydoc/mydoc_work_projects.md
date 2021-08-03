---
title: Projects
tags: [getting_started]
last_updated: July 3, 2016
keywords: sidebar,  iteration, for loop, navigation, attributes, conditional filtering
summary: "My most interesting projects for the past 10 years"
sidebar: mydoc_sidebar
permalink: mydoc_work_projects.html
folder: mydoc
---

## Projects

- [x] #refs, [links](), **formatting**, and <del>tags</del> supported
- [x] list syntax required (any unordered or ordered list supported)
- [x] this is a **complete** item
- [ ] this is an _incomplete_ item

{% for tag in site.tags %}
    {% if tag[0] == "project" %}
        {% for post in tag[1] %}

## {{ post.title }}
{{ post.content }}

        {% endfor %}
    {% endif %}
{% endfor %}


