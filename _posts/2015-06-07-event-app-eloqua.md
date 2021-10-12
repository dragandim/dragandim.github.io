---
title: Event App
layout: project
image: "/assets/images/britt-gaiser-hSAlu33padA-unsplash.jpg"
description: A sample post to show how the content will look and how will different
  headlines, quotes and codes will be represented.
tags:
- project
- eloqua
- integration
categories:
- project
aws: 
- ECS
- RDS
- VPC
- CloudFront
---

The main objective of this project was to create an application which would help fasciliate event management in Eloqua. In many cases managing events in Eloqua can be a repetative task,
requiring many hours of work in order to setup the necessary logic for an event flow. This application attempts to do exactly that, save the marketeer from manual work and create the assets and the pattern for the particiation flow.

During the event creation process, many Eloqua assets are being created and integrated into the campagin canvas. Assets such as Segment, Email, Form, Landing Page, Custom Data Objects and Campagin are created and configured in order to support invitation, registration, unregistration and waiting list email notifications. When a Segment is ready and the Campaign activated on the campaign canvas, the Contacts on that segment would recieve an inviation email and by clicking on the registration link, enter the event flow.

A participant can have different status changes such as registered, attended, unregistered and waiting. All these status changes can be initiated within the application and stored in 
the Custom Data Object in Eloqua. The change of participant status (registered, attended, waiting) are handled viea processing steps.

In order to achieve a specific look and feel for the Emails and Landing Pages, Event application supports Assets Templates. This allows a high level of customization
and reusability. 

### Techstack
{% if site.pdf_sidebar == "mydoc_sidebar" %}
<span class="label label-default">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.nodejs-image}}"> Nodejs
</span>
<span class="label label-info">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.jquery-image}}"> jQuery
</span>
<span class="label label-info">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.sails-image}}"> Sails
</span>
<span class="label label-primary">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.docker-image}}"> Docker
</span>

<img class="tech-badge" src="/mydoc-pdf{{site.data.vars.aws-image}}">{% for aws in page.aws %}
<span class="label label-warning"> {{aws}} </span>{% endfor %}

{% else %}

<div class="tags are-medium">
   <span class="tag is-info is-light"> Nodejs</span>
   <span class="tag is-primary is-light"> jQuery</span>
   <span class="tag is-primary is-light"> Sails</span>
   <span class="tag is-primary is-light"> Docker</span>
</div>

<div class="tags are-medium">
   {% for aws in page.aws %}
<span class="tag is-warning is-light">{{ aws }}</span>
   {% endfor %}
</div>

{% endif %}
