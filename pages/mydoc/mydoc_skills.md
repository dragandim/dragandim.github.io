---
title: Skills
tags: [getting_started]
last_updated: July 3, 2016
keywords: sidebar, accordion, yaml, iteration, for loop, navigation, attributes, conditional filtering
summary: "This is skillset summary and its a great contnet to use in order to propote. part of the theme that remembers your current page, highlights the active item, stays in a fixed position on the page, and more. This page explains a bit about how the sidebar was put together."
sidebar: mydoc_sidebar
permalink: mydoc_skills.html
folder: mydoc
---

## The list of skills comes here 

{% for skill in site.data.skills %}
  {{ product.name }}
{% endfor %}

Skills comminging here. The sidebar uses the [Navgoco jQuery plugin](https://github.com/tefra/navgoco) as its basis. Why not use Bootstrap? Navgoco provides a few features that I couldn't find in Bootstrap:

* Navgoco sets a cookie to remember page, the cookie allows the plugin to remember the state.
* Navgoco inserts an `active` class based on the navigation option keeping the accordion open.
* Navgoco includes the expand and collapse.

In short, the sidebar has some complex logic here. I've integrated Navgoco's features with the sidebar.html and sidebar data files to build the sidebar. It's probably the most impressive part of this theme. (Other themes usually aren't focused on creating hierarchies of pages, but this kind of hierarchy is important in a documentation site.)

You can see that the `external_url` is a condition that applies a different formatting. Although this feature is available, I recommend putting any external navigation links in the top navigation bar instead of the side navigation bar.


