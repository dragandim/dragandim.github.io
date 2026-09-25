---
title: Release Management & Deployment Orchestration Platform
layout: standard
tags:
- project
- aws
- devops
categories:
- project
tech:
- name: Nodejs
  image: /assets/images/nodejs-svgrepo-com.svg
  url: https://nodejs.org/
- name: Typescript
  image: https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg
  url: https://www.typescriptlang.org
- name: React
  image: /assets/images/react-logo.svg
  url: https://react.dev
aws:
- Lambda
- API Gateway
- DynamoDB
- ECS Fargate
- CodeDeploy
- EventBridge
cv_version: |
    - Built an internal deployment orchestration platform connecting GitHub pull requests directly to production with full release lifecycle tracking
    - Serverless backend (API Gateway + Lambda + DynamoDB) tracks every release from PR merge through approval, migration, deployment, and completion
    - Implemented migration-gated deployments: system runs DB migrations in an isolated ECS task before deploying, rolling back automatically on failure
    - React/React Router dashboard gives operators real-time visibility and approve/skip controls across all applications and environments
    - Supports per-environment rules: manual approval for production, automated progression for staging
cv_skip: false
---

An internal deployment orchestration platform that connects GitHub pull requests directly to production, giving engineering teams full visibility and control over the release pipeline.

The backend is a serverless API (API Gateway + Lambda + DynamoDB) that tracks every release from creation through to deployment completion. When a pull request is merged, a GitHub Actions workflow registers a release tied to the PR and the built container image. From there, the release moves through a controlled workflow: waiting for approval, optionally running database migrations in an isolated ECS task, triggering a blue-green CodeDeploy deployment, and tracking the final outcome.

Releases can be approved manually via a web dashboard (for production) or automatically via CI (for staging). If an application has a registered migration command, the system runs the migration against the new image before deploying — blocking the deployment until the migration succeeds. Failed migrations roll back the release automatically.

The React/React Router frontend gives operators a real-time view of all applications and their active releases, with live status polling and approve/skip dialogs.

Key features:
- Release approval workflow with per-environment rules (manual for prod, automated for stage)
- Migration-gated deployments: WAITING → MIGRATING → DEPLOYING → SUCCEEDED
- Auto-skip of superseded releases when a newer release is approved
- PR and image tag traceability across all environments
- Real-time status updates without page reload
