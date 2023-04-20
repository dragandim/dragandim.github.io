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
aws:
- Lambda
- RDS
- SQS
- S3
- VPC
- API Gateway
- CloudFront
---

This integration project was about making Eloqua send push messages, using multi channel messaging platform [Airship](https://www.airship.com/). 
The integration was covering following use cases:
* Send push message from campaign canvas (scheduled, in-app)
* Send push message from a segment (batch)
* Send push message on form post
* Import devices to Eloqua
* Collect response activity

When working in campaign canvas view, a marketeer can choose an Airship component (cloud action) and drag it onto the campaign canvas. 
In just a few clicks, a marketeer can authenticate, choose a mobile app, select a message template (configured in Airship) and choose
Android or iOS as target platforms. If necessary, a message could be scheduled or send as an immediate push. Once everything is saved, 
the campaign is ready to send push message to all the contacts that pass through the action step.

Besides sending via campaign canvas, a marketeer can choose to send push message to a whole segment in a segment view. Once the 
criteria for the segmentation is defined and saved, the Airship integrated GUI can be slided out and the configuration steps can take place. As in the previous scenario, the configuration process is the same, however behind the scenes the difference is that segment push is a one time send out to all the segment members, while in the ongoing campaigns the messages are send to passing contacts.
The big difference here is that in the first scenario, the integration backend receives contact payload, whereas in the second
the contact payload has to be fetched from Eloqua. 

Apart from sending push messages, the Airship integration also manages the import of Airship devices into Eloqua and collects response activity. 
Devices are stored in Custom Data Objects, while response data are stored as External Activities. Both are used in segmentation process
and in order to create more complex flows based on user interaction.

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
    
{% else %}

<div class="tags are-medium">
   <span class="tag is-info is-light"> Nodejs</span>
   <span class="tag is-primary is-light"> Angular</span>
   <span class="tag is-primary is-light"> serverless</span>
</div>


<div class="tags are-medium">
   {% for aws in page.aws %}
   <span class="tag is-warning is-light">{{ aws }}</span>
   {% endfor %}
</div>

{% endif %}
