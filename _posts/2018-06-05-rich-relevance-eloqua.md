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
---

The objective of this project was to integrate Rich Relevance Customer Experience and Personalization Platform as a standard Eloqua application. The content personalization was implemented using products Recommend and Engage. The main objective was to 
integrate personalized content into Email Templates by using 'Cloud Content' drag'n'drop feature in Eloqua. 
This would enable marketeer to configure a cloud service so that the content can by generated dynamicaly 
as email get opened.

There were two types of content types that could be integrated, which are related products and content promotion. 

### Recommend
Recommend content was handled in such way that the markeeter could search for a specific product (or category) in the user interfrace,
while pulling data from the CDO in the Eloqua. The layout for the visual presentation are also placed in Eloqua select drop downs. 
This allows a marketeer to configure elements in the Eloqua instance and then used them in the Rich Relevance integration 
in order to construct necessary parameters which are used during the Email rendering. 

### Engage
Engage content is handled and configured in the similar way, it is slightly simpler to work with since it shows
advertisement, banners and similar content.

{% if site.pdf_sidebar == "mydoc_sidebar" %}
### Techstack
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

