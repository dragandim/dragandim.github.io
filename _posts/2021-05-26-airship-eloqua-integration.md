---
title: Airship
layout: project
image: "/assets/images/airship-uss-macon.jpeg"
description: Airship Eloqua Integration Project
tags:
- project
- eloqua
- integration
categories:
- project
tech:
- name: Nodejs
  image: /assets/images/nodejs-svgrepo-com.svg
- name: Angular 
  image: /assets/images/angular-svgrepo-com.svg
- name: serverless
  image: /assets/images/serverless-svgrepo-com.svg
aws:
- Lambda
- RDS
- SQS
- S3
- VPC
- API Gateway
- CloudFront
- CloudMetrics
---

This integration project enabled Eloqua to send push notifications through the multi-channel messaging platform [Airship](https://www.airship.com/).
The integration supported several key use cases:

* Send push message from campaign canvas (scheduled or in-app)
* Send push message from a segment (batch send)
* Send push message on form post
* Import devices to Eloqua
* Collecting and managing response activity

In the Eloqua campaign canvas, marketers could easily drag and drop the Airship Cloud Action component into their campaign workflow. 
With a few simple steps, users could authenticate, select a mobile app, choose a pre-configured message template from Airship, and 
target either Android or iOS platforms. Push messages could be scheduled for later or sent immediately to all contacts that flowed 
through the action step, providing flexibility and ease of use.

Appart from the campaign canvas, marketers can also send push notifications to an entire segment. In the segment view, after defining 
the segmentation criteria, the integrated Airship interface can be accessed to complete the configuration. Although the setup process 
is similar, there is a key difference: segment-based pushes are one-time sends to all members of a segment, while in ongoing campaigns, 
notifications are sent individually as contacts pass through the action step. Technically, this means that in the campaign canvas, 
the integration backend receives the contact payload directly, whereas for segment pushes, contact data must be fetched from Eloqua.

In addition to sending push messages, the Airship integration supports device import into Eloqua and response activity tracking. 
Imported devices are stored in Custom Data Objects, while response data is recorded as External Activities. Both data types are 
used in segmentation and help create more complex workflows based on user interactions.

### Techstack

{% if site.pdf_sidebar == "mydoc_sidebar" %}
<span class="label label-default">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.nodejs-image}}"> Nodejs
</span>
<span class="label label-info">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.angular-image}}"> Angular
</span>
<span class="label label-primary">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.serverless-image}}"> serverless
</span>
        
<img class="tech-badge" src="/mydoc-pdf{{site.data.vars.aws-image}}">{% for aws in page.aws %}
<span class="label label-warning"> {{aws}} </span>{% endfor %}
    
{% endif %}
