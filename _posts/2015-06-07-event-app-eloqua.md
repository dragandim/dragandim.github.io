---
title: Event App
layout: project
image: "/assets/images/britt-gaiser-hSAlu33padA-unsplash.jpg"
description: A sample post to show how the content will look and how will different
  headlines, quotes and codes will be represented.
tags:
- project
categories:
- project
aws: 
- ECS
- RDS
- VPC
- CloudFront
---

The main objective of this project was to create an application which would help fasciliate event management in Eloqua. In many cases managing events can be a repetative task,
requiring many hours of work in order to setup the necessary logic for an event flow. Tracking changes in particpation status. and handling waiting list for 
This application atteps to do exactly that, save the marketeer from manual work and create the pattern for the particiation flow.

### Event Assets
During the event creation process, many Eloqua assets are being created and integrated into the campagin canvas. Assets such as Segment, Email, Form, Landing Page, Custom Data Objects and Campagin are created and configured in order to support invitation, registration, unregistration and waiting list email notifications. When a Segment is ready and the campaign activaed, the Contacts on that 
segment would recieve an inviation email and by clicking on the registration link, enter the flow.

### Participation Flow
A participant can have different status changes such as registered, attended, unregistered and waiting. All these status changes can be initiated within the application and stored in 
the Custom Data Object in Eloqua. 

### Participation flow via Processing steps 
The change of states (registered, attended, waiting) is handles viea processing steps. 

### Asset Templates 
Ppre defined templates for unified look and feel.

- Participation flow (invitation, registration, unregistration, waiting list)
- Aasset management such as registration forms, processing steps, landing pages,  emails and custom data object connecting all assets in a campaign canvas.

Application can handle participant attendance, different flows (invitation, registration, unregistration) and waiting list for booked events.

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

<img class="tech-badge" src="/mydoc-pdf{{site.data.vars.aws-image}}">
{% for aws in page.aws %}
<span class="label label-warning"> {{aws}} </span>
{% endfor %}

{% else %}

<div class="tags are-medium">
   <span class="tag is-primary is-light"> Nodejs</span>
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
