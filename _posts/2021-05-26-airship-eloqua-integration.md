---
title: Airship
layout: project
image: "/assets/images/airship-uss-macon.jpeg"
description: Airship Eloqua Integration Project
tags:
- project
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

This integration project was about making Eloqua send push messages using multi channel messaging platform [Airship](https://www.airship.com/). The integration was covering following use cases:
* Send push message from campaign canvas (including scheduled and in-app)
* Send push message from a segment (batch)
* Send push message on form post
* Import devices to Eloqua
* Collect activity response

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
        
<img class="tech-badge" src="/mydoc-pdf{{site.data.vars.aws-image}}">
{% for aws in page.aws %}
<span class="label label-warning"> {{aws}} </span>
{% endfor %}
    
{% else %}

<div class="tags are-medium">
   <span class="tag is-info is-light"> Angular</span>
   <span class="tag is-primary is-light"> serverless</span>
</div>

<div class="tags are-medium">
   {% for aws in page.aws %}
   <span class="tag is-warning is-light">{{ aws }}</span>
   {% endfor %}
</div>

{% endif %}
