---
title: Event App
layout: project
image: "/assets/images/britt-gaiser-hSAlu33padA-unsplash.jpg"
description: Eloqua integration project for creating event flows and assets 
tags:
- project
- eloqua
- integration
categories:
- project
tech: 
- name: Nodejs
  image: /assets/images/nodejs-svgrepo-com.svg
- name: jQuery 
  image: /assets/images/jquery-svgrepo-com.svg
- name: Sails
  image: /assets/images/sails-svgrepo-com.svg
- name: Docker
  image: /assets/images/docker-svgrepo-com.svg
aws: 
- ECS
- RDS
- VPC
- CloudFront
---

The main objective of this project was to create an application which would help facilitate event management in Eloqua. In many cases managing events in Eloqua can be a repetitive task,
requiring many hours of work in order to setup the necessary logic for an event flow. This application attempts to do exactly that, save the marketeer from manual work and create the assets and the pattern for the participation flow.

During the event creation process, many Eloqua assets are being created and integrated into the campaign canvas. Assets such as Segment, Email, Form, Landing Page, Custom Data Objects and Campaign are created and configured in order to support invitation, registration, unregistration and waiting list email notifications. When a Segment is ready and the Campaign activated on the campaign canvas, the Contacts on that segment would receive an invitation email and by clicking on the registration link, enter the event flow.

A participant can have different status changes such as registered, attended, unregistered and waiting. All these status changes can be initiated within the application and stored in 
the Custom Data Object in Eloqua. The change of participant status (registered, attended, waiting) are handled via processing steps.

In order to achieve a specific look and feel for the Emails and Landing Pages, Event application supports Assets Templates. This allows a high level of customization
and re-usability. 

{% if site.pdf_sidebar == "mydoc_sidebar" %}
### Techstack
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

{% endif %}
