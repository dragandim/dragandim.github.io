---
title: Software Engineer
company: kompasbank
place: Copenhagen
layout: work-experience
startDate: 'Nov 2021'
endDate: 'Mar 2023'
image: "/assets/images/Nordlid_logo_white_2019-300x50.png"
description: "Software Engineer"
skills:
- Nodejs
- Typescript
- AWS
- CDK
- React
- Angular
roles: 
- Solution Engineer
tags:
- work
categories:
- work-experience
---

This was my first role in a fintech industry. I worked on an in house Lead Generation application. It is a tool developed primarily for the sales team but it is used throughout the organization.
The primary objective was to profile companies with solid economy who would be suitable candidates for credit approvals. The input from the sales team was fed into the ML model which analyzed annual reports, 
probability of distress and other financial information relevant in minimizing risks. 

Another interesting part of my journey at kompasbank was working on the credit automation project. In order to process large batches of credit request, we designed a workflow solution which 
integrates external on boarding system (Muinmos) with credit approval REST API and stores the relevant information back into kompasbank's CRM nCino (Salesforce). Once the client information passes KYC, AML and PEP
checks, the financial data is being analyzed and the credits are being approved or disapproved. 

The software was developed using Nodejs and Typescript for both front end, back end and AWS cloud resource provisioning. For the workflow logic we chose AWS SFN service which proved to be an excellent choice
for this problem domain.
