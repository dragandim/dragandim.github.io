---
title: Senior Backend Developer
company: Appvestor
place: Copenhagen
layout: work-experience
startDate: 2023-10-01
endDate: 2025-01-31
_startDate: 'Okt 2023'
_endDate: 'Jan 2025'
image: "/assets/images/Nordlid_logo_white_2019-300x50.png"
description: "Senior Backend Developer"
skills:
- AWS
- Nodejs
- Typescript
- Python
- MySQL
- PostgresSQL
roles:
- Senior Backend Developer
tags:
- work
categories:
- work-experience
cv_version: |
    - Led backend development for **Doralytics**, optimizing reporting pipelines and infrastructure
    - Migrated `finance.appvestor.com` from PostgreSQL to MySQL
    - Replaced Google API workflows with **AWS Step Functions**
    - Built Lambda functions for campaign attribution
    - Developed an OpenAPI-based REST API in Python/Flask
---

As a Senior Backend Developer at Appvestor, I was focused on optimizing the Doralytics
(reporting and analytics system) and migrating finance.appvestor.com from PostgreSQL to MySQL.
My main responsibilities included:

- Downsizing AWS resources and decommissioning obsolete system components.
- Migration of application vitals from Google APIs to AWS Step Functions (SFN) and
  moving credentials from EFS to MySQL.
- Developing Lambda functions to calculate campaign attribution on EC2 instances.
- Migrating insertion orders from finance.appvestor.com, creating an OpenAPI specification,
  and implementing an Insertion Orders REST API using Python and Flask.
- Enabling data synchronization from PostgreSQL to MySQL through the aws_lambda extension,
  executed within PostgreSQL triggers.
- Setting up a notifications Lambda function, triggered directly from MySQL via lambda_sync.

These efforts improved resource efficiency, streamlined data workflows,
and strengthened backend system functionality.

