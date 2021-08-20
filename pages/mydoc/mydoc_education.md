---
title: Education
tags: [education, content]
keywords:
summary: 
sidebar: mydoc_sidebar
permalink: mydoc_education.html
folder: mydoc
---

{% for education in site.data.education %}
## {{ education.name }}

#### {{ education.institution }}
_{{ education.startDate }} - {{ education.endDate }}_

{% endfor %}

{% include links.html %}
