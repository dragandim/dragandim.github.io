---
title: Work Experiences
tags: [work_experiences]
last_updated: July 3, 2016
keywords: sidebar,  iteration, for loop, navigation, attributes, conditional filtering
summary: "This is Work Experinces summary and its a great content to use in order to propote. part of the theme that remembers your current page, highlights the active item, stays in a fixed position on the page, and more."
sidebar: mydoc_sidebar
permalink: mydoc_work_experiences.html
folder: mydoc
---

## Work Experiences

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


