---
title: Projects
tags: [getting_started]
last_updated: July 3, 2016
keywords: sidebar,  iteration, for loop, navigation, attributes, conditional filtering
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_projects.html
folder: mydoc
---

{% for tag in site.tags %}
    {% if tag[0] == "project" %}
        {% for post in tag[1] %}

## {{ post.title }}
{{ post.content }}

        {% endfor %}
    {% endif %}
{% endfor %}


