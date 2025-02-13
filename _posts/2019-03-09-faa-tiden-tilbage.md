---
title: Få tiden tilbage
layout: project
image: "/assets/images/faa-tiden-tilbage-overview.png"
description: Få tiden tilbage project
tags:
- project
- campaign
categories:
- project
tech: 
- name: Nodejs
  image: /assets/images/nodejs-svgrepo-com.svg
- name: Ionic 
  image: /assets/images/ionic-icon-svgrepo-com.svg
- name: serverless
  image: /assets/images/serverless-svgrepo-com.svg
aws: 
- Lambda
- RDS
- S3
- VPC
- API Gateway
- CloudFront
---

"Få tiden tilbage" was an interesting projects that took almost 6 month to complete. The client was a public transportation company (DSB) and the concept was focusing on bringing back value to the passengers who experience delays, due to the maintenance work done on the railways. 

The first release of the application was managing journeys, where a passenger is able to check in on the start of the journey, and checkout on the end destination, earning a certain amount of minutes based on the rules defined for that specific route. Every journey route had a defined award, and every journey was adding to the total of the credits saved. 
 
Once the saved credits reached over a certain limit, the users were able to use those credits to make an in-app ticket purchase. In the second release of the application, users 
where able to choose from a specific set of destinations, select a route that they can afford, purchase and save the ticket for later use. The tickets with the QR codes where 
complied to DSB scanners so that they could be checked for validation while traveling in the trains. 

For this project, Nordlid has recieved the Danish Digital Award in the category ["Digital Activation"](https://danishdigitalaward.dk/projekt/faa-tiden-tilbage-3/)

{% if site.pdf_sidebar == "mydoc_sidebar" %}
### Techstack
<span class="label label-default">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.nodejs-image}}"> Nodejs
</span>
<span class="label label-info">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.ionic-image}}"> Ionic
</span>
<span class="label label-primary">
    <img class="tech-badge" src="/mydoc-pdf{{site.data.vars.serverless-image}}"> serverless
</span>

<img class="tech-badge" src="/mydoc-pdf{{site.data.vars.aws-image}}">{% for aws in page.aws %}
<span class="label label-warning"> {{aws}} </span>{% endfor %}

{% endif %}
