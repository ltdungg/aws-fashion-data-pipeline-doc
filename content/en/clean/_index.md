+++
title = "9. Clean Up Resources"
weight = 9
+++

## S3
1. Go to the S3 service and select the buckets created during the project.
2. Choose **Empty** to delete all objects in the bucket.
3. After emptying, select **Delete** to remove the bucket.

## DynamoDB
1. Go to the DynamoDB service and select **Tables** from the left menu.
2. Select the `fashion-rcm-table` table created during the project.
3. Click **Delete** to remove the table.
4. Confirm deletion by typing `confirm` and clicking **Delete**.

## Glue 
1. Go to the Glue service and select **ETL jobs** from the left menu.
2. Select the `fashion-datalake-etl` job, click **Actions**, and choose **Delete jobs**.

3. Select **Databases** from the left menu.
4. Select the `fashion-clean-zone` database and click **Delete**.
5. Select **Crawlers** from the left menu.
6. Select the crawler you created, click **Actions**, and choose **Delete crawler**. Type `Delete` to confirm and click **Delete**.

## RDS
1. Go to the RDS service and select **Databases** from the left menu.
2. Select the `fashion-db` database created during the project. Click **Actions** and choose **Delete**.

![image](/images/clean/img.png)

## Lambda 
1. Go to the Lambda service and select **Functions** from the left menu.
2. Select the Lambda functions you created: `fashion-rds-to-s3`, `kinesis-to-dynamodb`.
3. Click **Actions** and choose **Delete**. Confirm deletion by typing `confirm` and clicking **Delete**.

## EventBridge
1. Go to the EventBridge service and select **Schedules** from the left menu.
2. Select the rule you created, `fashion-rds-to-s3-scheduler`. Click **Delete**.

## EC2
1. Go to the EC2 service and select **Instances** from the left menu.
2. Select the `fashion-webapp` instance you created.
3. Click **Instance state** and choose **Terminate instance**. Click **Terminate (delete)** to confirm deletion.

## ECR 
1. Go to the ECR service and select **Repositories** from the left menu.
2. Select the `fashion-ecr-repository` repository you created.
3. Click **Delete**.

## IAM 
1. Go to the IAM service and select **Roles** from the left menu.
2. Select the roles you created:
   - AWS-Glue-S3-Full-Access
   - AWSGlueServiceRole-FashionCrawlerRole
   - ec2-kinesis-role
   - lambda-s3-full-access
   - lambda-kinesis-dynamodb-role
   - Delete any Kinesis Firehose and EventBridge roles if present.
3. Click **Delete**, type `delete` to confirm, and click **Delete**.

## Network Interfaces
- The Network Interfaces created by Lambda Functions will be automatically deleted about 20–40 minutes after the Lambda Function is deleted.
- You cannot delete the VPC if there are still active Network Interfaces. Therefore, you need to wait until these Network Interfaces are deleted.
- If you want to delete Network Interfaces immediately, see https://repost.aws/knowledge-center/lambda-eni-find-delete

## VPC
1. After the Network Interfaces have been deleted, you can delete the `fashion-vpc` VPC created during the project.
2. Go to the VPC service and select **Your VPCs** from the left menu.
3. Select the `fashion-vpc` VPC you created.
4. Click **Actions** and choose **Delete VPC**. Confirm deletion by typing `delete` and clicking **Delete**.
