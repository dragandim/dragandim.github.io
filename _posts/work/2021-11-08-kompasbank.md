---
title: Software Engineer
layout: standard
company: kompasbank
place: Copenhagen
startDate: 2021-11-01
endDate: 2023-03-31
skills:
- Nodejs
- Typescript
- AWS
- CDK
- DynamoDB
- React
- Angular
roles:
- Solution Engineer
tags:
- work
categories:
- work-experience
cv_version: |
    - Built and maintained an internal **Lead Generation** platform used by sales and risk teams to identify creditworthy companies based on ML analysis of annual reports and financial data
    - Integrated feedback loops from sales into a scoring system to minimize credit risk exposure
    - Contributed to the **credit automation** system, integrating Muinmos (onboarding/KYC) with a credit approval REST API and CRM (nCino/Salesforce)
    - Designed workflows using **AWS Step Functions** for end-to-end orchestration of KYC, AML, PEP checks, and financial approvals
    - Developed full-stack components and cloud infrastructure using **Node.js**, **TypeScript**, and AWS CDK
    _Established automated, risk-aware credit approval flows and improved operational efficiency across departments._
---

This was my first role in a fintech industry. I worked on an in house Lead Generation application. It is a tool developed primarily for the sales team but it is used throughout the organization.
The primary objective was to profile companies with solid economy who would be suitable candidates for credit approvals. The input from the sales team was fed into the ML model which analyzed annual reports,
probability of distress and other financial information relevant in minimizing risks.

Another interesting part of my journey at kompasbank was working on the credit automation project. In order to process large batches of credit request, we designed a workflow solution which
integrates external on boarding system (Muinmos) with credit approval REST API and stores the relevant information back into kompasbank's CRM nCino (Salesforce). Once the client information passes KYC, AML and PEP
checks, the financial data is being analyzed and the credits are being approved or disapproved.

The software was developed using Nodejs and Typescript for both front end, back end and AWS cloud resource provisioning. For the workflow logic we chose AWS SFN service which proved to be an excellent choice
for this problem domain.
