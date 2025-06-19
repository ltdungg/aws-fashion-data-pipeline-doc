+++
title = "2.1 Creating Required Roles"
weight = 1
+++

## Overview
In this section, we will create the necessary IAM Roles for the AWS services used in this project. These roles will allow AWS services to access different resources within your AWS account.

The roles include:
- Role for Lambda to access S3
- Role for EC2 to access Kinesis
- Role for Lambda to access Kinesis and DynamoDB
- Role for Glue to access S3

## Create a Role for Lambda to Access S3
1. Go to the AWS Console and select **IAM** from the services menu.

![img.png](/images/preparation/iam-1.png)

2. Select **Roles** from the left menu, then click **Create role**.

![img.png](/images/preparation/iam-2.png)

3. On the **Select trusted entity** screen, choose **AWS service**, then select **Lambda** from the list of services. Click **Next**.

![img.png](/images/preparation/iam-3.png)

4. In the Add permissions section:
    - Search for and select **AmazonS3FullAccess** from the policy list.
    - Search for and select **AWSLambdaENIManagementAccess** from the policy list.
    - Click **Next**.

5. In the Name, review, and create section:
   - Enter the role name as `lambda-s3-full-access`.
   - For the description, enter `Allow Lambda access S3 with Full Access`.
   - Click **Create role**.

![img.png](/images/preparation/iam-5.png)

## Create a Role for EC2 to Access Kinesis
1. Go to the AWS Console and select **IAM** from the services menu.

![img.png](/images/preparation/iam-1.png)

2. Select **Roles** from the left menu, then click **Create role**.

![img.png](/images/preparation/iam-2.png)

3. On the **Select trusted entity** screen, choose **AWS service**, then select **EC2** from the list of services. Click **Next**.

![img.png](/images/preparation/iam-6.png)

4. In the Add permissions section:
    - Search for and select **AmazonKinesisFullAccess** from the policy list.
    - Click **Next**.

![img.png](/images/preparation/iam-7.png)

5. In the Name, review, and create section:
   - Enter the role name as `ec2-kinesis-role`.
   - For the description, enter `Allow EC2 access Kinesis with Full Access`.
   - Click **Create role**.

![img.png](/images/preparation/iam-8.png)

## Create a Role for Lambda to Access Kinesis and DynamoDB
1. Similar to the steps above, create a role with the use case as **Lambda**.
2. In the Add permissions section:
    - Search for and select **AmazonKinesisFullAccess** from the policy list.
    - Search for and select **AmazonDynamoDBFullAccess** from the policy list.
    - Search for and select **AmazonAthenaFullAccess** from the policy list.
    - Search for and select **AWSLambdaBasicExecutionRole** from the policy list.
    - Search for and select **AmazonS3FullAccess** from the policy list.
    - Click **Next**.
3. In the Name, review, and create section:
   - Enter the role name as `lambda-kinesis-dynamodb-role`.
   - For the description, enter `Allow Lambda access Kinesis and DynamoDB and S3 with Full Access`.
   - Click **Create role**.

## Create a Role for Glue to Access S3
1. Similar to the steps above, create a role with the use case as **Glue**.
2. In the Add permissions section:
    - Search for and select **AmazonS3FullAccess** from the policy list.
    - Search for and select **AWSGlueServiceRole** from the policy list.
    - Click **Next**.
3. In the Name, review, and create section:
   - Enter the role name as `AWS-Glue-S3-Full-Access`.
   - For the description, enter `Allow Glue access to S3 with Full Access`.
   - Click **Create role**.
