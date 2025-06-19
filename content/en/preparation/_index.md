+++
title = "2. Preparation Steps"
weight = 2
+++

## Overview
- First, create a virtual environment, considering this as the application environment of the store.
- The EC2 Instance will act as a mock server, where data for the lab is generated.
- The RDS Instance will serve as the database, used for transactions...
- The S3 Bucket will be the Data Lake, including the following buckets:
  - **fashion-landing-zone**: Where raw data from various sources is stored.
  - **fashion-clean-zone**: Where processed data is stored and prepared for analysis.
  - **fashion-logic-zone**: Where Lambda scripts and source code for ETL (Extract, Transform, Load) processes are stored.
- The Kinesis Stream will store customer interaction event streams.

## Deployment Steps

Before getting started, you need to prepare the code for the deployment steps. The project's GitHub link is: [aws-fashion-data-pipeline](https://github.com/ltdungg/aws-fashion-data-pipeline)
- Clone the repository to your computer:

```bash
git clone https://github.com/ltdungg/aws-fashion-data-pipeline
cd aws-fashion-data-pipeline
```


Make sure to set the Region to Singapore (ap-southeast-1) before proceeding with the following steps:

[2.1 Create Required Roles](setup-role.md)

[2.2 Create VPC, Subnet, ...](setup-env.md)

[2.3 Create EC2 Instance](setup-ec2.md)

[2.4 Create RDS Instance](setup-rds.md)

[2.5 Create S3 Bucket](setup-s3.md)

[2.6 Create Kinesis Stream](setup-kinesis.md)
