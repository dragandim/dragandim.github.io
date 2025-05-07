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
  url: https://nodejs.org/
- name: jQuery
  image: /assets/images/jquery-svgrepo-com.svg
  url: https://jquery.com/
- name: Sails
  image: /assets/images/sails-svgrepo-com.svg
  url: https://sailsjs.com/
- name: Docker
  image: /assets/images/docker-svgrepo-com.svg
  url: https://www.docker.com/
aws:
- ECS
- RDS
- VPC
- CloudFront
clients:
- Atea NO
- FDMMarketing
- NCCHousing
cv_version: |
    - Built an Eloqua application to automate and streamline event management, reducing manual setup for marketers
    - Automatically generated and configured Eloqua assets including Segments, Emails, Forms, Landing Pages, Campaigns, and CDOs
    - Integrated assets into campaign canvas flows to support invitations, registrations, cancellations, and waiting list handling
    - Enabled participant status tracking (registered, attended, unregistered, waiting) via Eloqua processing steps and CDO updates
    - Supported reusable **Asset Templates** for emails and landing pages to ensure brand consistency and reduce setup time
---

The primary goal of this project was to build an application that simplifies and streamlines event management in Oracle Eloqua. Creating event flows manually in Eloqua is often repetitive and time-consuming. This application was designed to automate that process — enabling marketers to set up event logic and required assets with minimal manual effort.

During the event creation process, the application automatically generates and configures Eloqua assets such as Segments, Emails, Forms, Landing Pages, Campaigns, and Custom Data Objects (CDOs). These assets are then integrated into the Eloqua campaign canvas to support the full event lifecycle, including invitations, registrations, cancellations, and waiting list handling.

Once a campaign is activated, Contacts in the segment receive an invitation email. By clicking the registration link, they enter the event flow. Participant status (e.g. registered, attended, unregistered, waiting) can be updated through the application and is tracked via CDOs using Eloqua processing steps.

To maintain consistent branding and reduce setup time, the application supports reusable Asset Templates for emails and landing pages. This enables high levels of customization and reusability across events.

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
