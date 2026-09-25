---
title: Cloud Infrastructure Platform
layout: standard
tags:
- project
- aws
- infrastructure
categories:
- project
tech:
- name: Terraform
  image: https://www.vectorlogo.zone/logos/terraformio/terraformio-icon.svg
  url: https://www.terraform.io
- name: Terragrunt
  image: https://www.vectorlogo.zone/logos/gruntworkio/gruntworkio-icon.svg
  url: https://terragrunt.gruntwork.io
- name: OpenTofu
  image: https://opentofu.org/img/opentofu_logo.svg
  url: https://opentofu.org
aws:
- ECS Fargate
- CodeDeploy
- API Gateway
- CloudMap
- RDS
- DynamoDB
- S3
- ElastiCache
- CloudFront
- ECR
- IAM
cv_version: |
    - Built a multi-environment AWS infrastructure platform (~44 reusable Terraform/Terragrunt modules) covering VPC networking, ECS Fargate, ALB, API Gateway, CloudMap, RDS PostgreSQL, DynamoDB, S3, ElastiCache, and ECR
    - Applications are defined declaratively (image, port, resources, add-ons) and the platform provisions all underlying AWS resources automatically
    - Implemented blue-green deployments via AWS CodeDeploy for zero-downtime releases across all services
    - Managed across a multi-account AWS organisation (production, non-production, shared services, infrastructure tooling)
cv_skip: false
---

A multi-environment AWS cloud infrastructure platform built with Terraform and Terragrunt, designed to provision and manage all resources required to run containerised microservices at scale.

The platform consists of ~44 reusable Terraform modules covering the full infrastructure stack: VPC networking, ECS Fargate clusters, Application Load Balancers, API Gateways, AWS CloudMap for internal service discovery, RDS PostgreSQL, DynamoDB, S3, ElastiCache/Valkey, and ECR. Each environment (dev, stage, prod) is independently provisioned from a shared module base, ensuring consistency and eliminating configuration drift.

Each application is defined declaratively — specifying its container image, port, resource requirements, add-ons (database, cache, blob storage, secrets), and ingress rules — and the platform handles all underlying AWS resources automatically. Blue-green deployments via AWS CodeDeploy ensure zero-downtime releases across all services.

Infrastructure is managed across a multi-account AWS organisation, with separate accounts for production, non-production, shared services, and infrastructure tooling.
