---
title: Work Experiences
tags: [work_experiences]
last_updated: July 3, 2016
keywords: sidebar, iteration, filtering
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_work_experiences.html
folder: mydoc
---

{% for tag in site.tags %}
    {% if tag[0] == "work" %}
        {% for post in tag[1] %}

## {{ post.title }}

#### {{ post.company }}
_{{ post.startDate }} - {{ post.endDate }}_

{{ post.content }}

        {% endfor %}
    {% endif %}
{% endfor %}


