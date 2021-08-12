---
title: Skills
tags: [getting_started]
last_updated: July 3, 2016
keywords: sidebar, accordion, yaml, filtering
summary: "Skillset description"
sidebar: mydoc_sidebar
permalink: mydoc_skills.html
folder: mydoc
---

## The list of skills

{% for skill in site.data.skills %}
  * {{ skill.name }}
{% endfor %}
