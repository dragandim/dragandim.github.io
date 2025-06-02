---
title: Airship Integration
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
cv_version: |
    - Developed an Eloqua integration with **Airship**, enabling push notifications as part of multi-channel marketing campaigns
    - Supported multiple use cases including push sends from campaign canvas, form submissions, and batch segment targeting
    - Built drag-and-drop push messaging for Eloqua using Airship Cloud Actions
    - Handled both real-time contact payloads and batch contact retrieval for different campaign modes
    - Enabled device imports into Eloqua via **Custom Data Objects**, and logged push interaction events as **External Activities** for segmentation and reporting
cv_skip: false
---

This integration project enabled Oracle Eloqua to send push notifications via [Airship](https://www.airship.com/),a multi-channel messaging platform. The solution supported several key use cases:

* Sending push notifications from the campaign canvas (scheduled or in-app)
* Triggering batch push messages from Eloqua segments
* Sending push notifications on form submissions
* Importing mobile device data into Eloqua
* Tracking and managing push response activity

Within the Eloqua campaign canvas, marketers could easily drag the Airship Cloud Action component into their workflows. Through a simple configuration process, users could authenticate, select a target mobile app, choose a message template from Airship, and specify platform targeting (iOS or Android). Push notifications could be sent instantly or scheduled, providing both flexibility and ease of use.

The integration also supported batch segment pushes. From the segment view, users could define segmentation criteria and configure push delivery via the embedded Airship interface. While the configuration process was similar to canvas-based sends, the underlying mechanism differed:

* In the campaign canvas, contact payloads were delivered directly to the backend as users flowed through the workflow
* In segment-based sends, contact records were fetched from Eloqua in bulk

Additionally, the integration enabled device imports into Eloqua, storing device data in Custom Data Objects, and logging user interactions (e.g., opens, taps) as External Activities. These data points supported advanced segmentation and enabled more sophisticated user engagement strategies.

