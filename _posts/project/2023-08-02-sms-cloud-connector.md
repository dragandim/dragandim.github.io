---
title: SMS Cloud Connector
layout: standard
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
- name: Angular
  image: /assets/images/angular-svgrepo-com.svg
  url: https://angular.dev/
- name: serverless
  image: /assets/images/serverless-svgrepo-com.svg
  url: https://www.serverless.com/
aws:
- Lambda
- RDS
- SQS
- S3
- VPC
- API Gateway
- CloudFront
- CloudMetrics
clients:
- DanskeSpil
- FDM
- NCCHousing
cv_version: |
    - Developed a custom **SMS Cloud Connector** for Oracle Eloqua, enabling native SMS messaging within campaign workflows
    - Integrated with major SMS providers including **Inmobile**, **SMSDK**, and **Sinch**
    - Implemented dynamic message templating using the **Mustache** engine, supporting personalized content and JSON field merging
    - Designed a callback-based reporting system to track delivery status and sync outcomes back into Eloqua for analytics
    - Empowered marketers to seamlessly add SMS to multi-channel campaigns using a simple drag-and-drop interface in the Eloqua canvas
cv_skip: false
---

Since Eloqua primarily focuses on email marketing and campaign management, it does not include SMS messaging as a native feature. To address this limitation, I partnered with my client to develop a custom Eloqua application that integrates with three major SMS providers:

* [Inmobile](https://www.inmobile.com/)
* [SMSDK](https://sms.dk/)
* [Sinch](https://sinch.com/)

The integration was implemented as an SMS Cloud Connector, allowing marketers to drag a component directly onto the Eloqua campaign canvas. With just a few clicks, users could select the appropriate contact field and design dynamic SMS message templates.

A standout feature of this solution was the integration of the Mustache templating engine, which enabled advanced personalization by merging dynamic data—including stringified JSON fields—directly into SMS bodies.

Message delivery status was tracked through a callback-based reporting mechanism, allowing contacts to be flagged as successful or failed based on delivery outcomes. This data was then synced back into Eloqua for tracking and analytics.

Overall, the integration streamlined SMS functionality within Eloqua, giving marketers a seamless, scalable way to incorporate SMS into their multi-channel campaign strategies.
