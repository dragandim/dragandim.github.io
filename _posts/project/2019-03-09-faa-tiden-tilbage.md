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
  url: https://nodejs.org/
- name: Ionic
  image: /assets/images/ionic-icon-svgrepo-com.svg
  url: https://ionicframework.com/
- name: serverless
  image: /assets/images/serverless-svgrepo-com.svg
  url: https://www.serverless.com/
aws:
- Lambda
- RDS
- S3
- VPC
- API Gateway
- CloudFront
clients:
- DSB
cv_version: |
    - Developed the backend and mobile application for *Få tiden tilbage*, a six-month project for Danish public transport provider **DSB**
    - Designed a system where passengers earned time-based credits for delays caused by railway maintenance
    - Implemented a check-in/checkout flow that tracked journeys and awarded credits based on predefined route rules
    - Introduced in-app ticketing functionality with credit redemption, route selection, and QR-code validation compatible with DSB scanners
    - The project received a **Danish Digital Award** in the ["Digital Activation"](https://danishdigitalaward.dk/projekt/faa-tiden-tilbage-3/) category for its innovative public impact
---

Få tiden tilbage was a six-month project developed for DSB, the Danish public transportation company. The concept focused on compensating passengers affected by railway maintenance delays by returning time as a form of value.

In the initial release, the app allowed passengers to check in at the start of their journey and check out at their destination. Based on predefined rules for each route, users earned “minutes” — a form of credit — for completed trips. These credits accumulated over time, representing the value of delays experienced.

Once users reached a certain credit threshold, they could redeem their minutes for in-app ticket purchases. The second release introduced a route selection and ticketing system: users could choose from eligible destinations, redeem credits for a QR-code ticket, and store it for future travel. These tickets were fully compatible with DSB’s on-board scanners for validation.

The project was recognized with a Danish Digital Award in the ["Digital Activation"](https://danishdigitalaward.dk/projekt/faa-tiden-tilbage-3/) category, acknowledging its innovation and positive public impact.

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
