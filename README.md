# AWS Serverless Three-Tier Web Application

## Overview

This project demonstrates the design and implementation of a **serverless three-tier web application** on AWS using fully managed cloud services. The application follows AWS best practices for scalability, security, and cost optimization.

The architecture separates the application into three logical layers:

- **Presentation Layer**
- **Application Layer**
- **Data Layer**

This approach improves scalability, simplifies maintenance, and eliminates the need to manage servers.

---

## Architecture

The application is built using the following AWS services:

- Amazon S3
- Amazon CloudFront
- Amazon API Gateway
- AWS Lambda
- Amazon DynamoDB
- AWS IAM

---

## Architecture Flow

```
User
   │
   ▼
CloudFront
   │
   ▼
Amazon S3 (Static Website)
   │
   ▼
API Gateway
   │
   ▼
AWS Lambda
   │
   ▼
Amazon DynamoDB
```

---

## Features

- Serverless architecture
- Static website hosting
- Global content delivery with CloudFront
- REST API integration
- Event-driven backend using AWS Lambda
- NoSQL data storage with DynamoDB
- Secure IAM permissions
- Highly scalable and cost-effective design

---

## Project Structure

```
aws-serverless-three-tier-web-application/

├── README.md
├── architecture/
├── screenshots/
├── frontend/
└── lambda/
```

---

## Screenshots

The repository includes screenshots demonstrating:

- Amazon S3 Bucket
- Bucket Policy
- CloudFront Distribution
- AWS Lambda Function
- Amazon DynamoDB
- Final Running Application

---

## Skills Demonstrated

- AWS Cloud Architecture
- Serverless Computing
- API Gateway
- AWS Lambda
- Amazon S3
- Amazon CloudFront
- Amazon DynamoDB
- IAM
- Cloud Security
- REST APIs

---

## Learning Outcomes

Through this project I gained practical experience in:

- Designing serverless architectures
- Deploying static web applications
- Building REST APIs
- Integrating AWS managed services
- Working with DynamoDB
- Applying AWS architecture best practices

---

## Future Improvements

- Amazon Cognito Authentication
- AWS WAF Integration
- Custom Domain with Route 53
- CloudWatch Monitoring & Alarms
- Infrastructure as Code using Terraform

---

## Author

**Asem Al-Omari**

AWS Certified Solutions Architect – Associate

AWS Certified Cloud Practitioner
