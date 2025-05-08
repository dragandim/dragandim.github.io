---
title: Rich Relevance
layout: project
image: "/assets/images/carlos-muza-hpjSkU2UYSU-unsplash.jpg"
description: Development of an Eloqua Application which handles the content from Rich Relevance Personalization platform
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
- S3
- VPC
- API Gateway
- CloudFront
clients:
- Atea DK
cv_version: |
    - Integrated the **Rich Relevance Personalization Platform** into Oracle Eloqua as a standard marketing application
    - Enabled drag-and-drop **Cloud Content** blocks to insert dynamic, personalized content into Eloqua email templates
    - Implemented **Recommend** integration to deliver product suggestions using data from Eloqua CDOs and user-defined templates
    - Developed UI components allowing marketers to search product catalogs and configure layout options within Eloqua
    - Integrated **Engage** content for personalized banners and promotional messaging, improving engagement through targeted visual content
---

The objective of this project was to integrate the Rich Relevance Customer Experience and Personalization Platform into Oracle Eloqua as a standard application. The integration leveraged Rich Relevance’s Recommend and Engage products to deliver personalized content within Eloqua email campaigns.

Personalization was achieved using Eloqua’s Cloud Content feature, allowing marketers to drag and drop dynamic content blocks directly into email templates. This setup enabled personalized content to be generated at the moment when email content renders, based on predefined logic.

Two types of personalized content were supported:

_Recommend_

The Recommend integration allowed marketers to configure personalized product suggestions. Through a user interface, they could search for products or categories using data pulled from Eloqua Custom Data Objects (CDOs). Visual presentation templates were also managed within Eloqua and made available via dropdown selectors. These templates, combined with selected product data, were used to construct the necessary parameters for dynamic content rendering within emails.

_Engage_

The Engage product followed a similar configuration flow but focused on serving personalized banners, ads, and promotional content. This type of content was simpler to manage, offering quick ways for marketers to enhance visual impact and user engagement within their campaigns.


