---
title: Få tiden tilbage
layout: project
image: "/assets/images/faa-tiden-tilbage-overview.png"
description: Få tiden tilbage project
tags:
- project
categories:
- project
aws: 
- Lambda
- RDS
- S3
- VPC
- API Gateway
- CloudFront
---

"Få tiden tilbage" was an interesting projects that took almost 6 month to complete. The client was a public transpaoration copmany (DSB) and the concept was focusing on bringing back value
 to the passangeres who experince dealays, due to the maintenance work done on the railways. The first release of the application was dealing with the journeys, where a passenger was to able to check in
 on the begining of the journey, and checkout on the destination, earning a certain amount of minutes. Every journey route had a defined award, and every journey was adding to the total of the time saved. 
 
The second release of the application was dealing with the in-app ticket purchase based on the time (points) saved. 

You can read more about this project for which Norlid won the Danish Digital Award in the category ["Digital Activation"](https://danishdigitalaward.dk/projekt/faa-tiden-tilbage-3/)

### Techstack
{% if site.pdf_sidebar == "mydoc_sidebar" %}
<span class="label label-default">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.nodejs-image}}"> Nodejs
</span>
<span class="label label-info">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.ionic-image}}"> Ionic
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
   <span class="tag is-primary is-light"> Nodejs</span>
   <span class="tag is-primary is-light"> Ionic</span>
   <span class="tag is-primary is-light"> Angular</span>
   <span class="tag is-primary is-light"> serverless</span>
</div>

<div class="tags are-medium">
   {% for aws in page.aws %}
   <span class="tag is-warning is-light">{{ aws }}</span>
   {% endfor %}
</div>

{% endif %}
