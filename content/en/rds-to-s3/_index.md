+++
title = "4. Extract Data from RDS to S3"
weight = 4
+++

## Overview
- In this section, we will use AWS Lambda to extract data from Amazon RDS and save it to Amazon S3. We will use a simple Lambda function to accomplish this.
- The Lambda function will be triggered to connect to Amazon RDS, execute an SQL query to retrieve data, and then save the data to Amazon S3 as a CSV file.
- First, download the Lambda function zip file [here](https://github.com/ltdungg/aws-fashion-data-pipeline/blob/main/lambda/rds-to-s3/rds-to-s3-lambda.zip). Click the **download raw file** button at the top right of the screen to download.

## Access S3
1. Go to the AWS Console, search for and select **S3** from the services menu.
2. Click on the `fashion-logic-zone` bucket that we created earlier.
3. In the bucket interface, click **Upload**.

![img.png](/images/rds-to-s3/img_3.png)
4. In the **Upload** interface:
   - Click **Add files**, select the `rds-to-s3-lambda.zip` file you downloaded above.
   - Click **Upload**.

![img.png](/images/rds-to-s3/img_4.png)

5. After a successful upload, you will see the `rds-to-s3-lambda.zip` file in the bucket. Save the Object URL of this file; we will use it in the Lambda function.

## Create Lambda Function
1. Go to the AWS Console, search for and select **Lambda** from the services menu.
![img.png](/images/rds-to-s3/img.png)

2. Click **Create function**.

![img.png](/images/rds-to-s3/img_1.png)

3. In the **Create function** interface:
   - Choose **Author from scratch**.
   - Enter the function name as `lambda-rds-to-s3`.
   - Select **Python 3.13** for Runtime.
   - Click Change default execution role.
     - Select **Use an existing role**.
     - Choose the `lambda-s3-full-access` role that we created earlier.
   - Click **Create function**.

![img.png](/images/rds-to-s3/img_2.png)

4. In the **Function code** section:
   - Under **Code source**, click **Upload from** and select **Amazon S3 location**.
   - Enter the path to the `rds-to-s3-lambda.zip` file you uploaded to S3 earlier.
   - Click **Save**.

![img.png](/images/rds-to-s3/img_5.png)

![img.png](/images/rds-to-s3/img_6.png)

5. After a successful upload, click **Configuration**.
   - In the **General configuration** section, click **Edit**.
   - Set **Memory** to `512 MB`.
   - Set **Timeout** to `5 minutes`.
   - Click **Save**.

![img.png](/images/rds-to-s3/img_7.png)

6. In the **Configuration** interface, click **Environment variables**.
   - Click **Edit**.
   - Click **Add environment variable**.
   - Enter the following environment variables:
     - `RDS_HOST`: The endpoint address of the Amazon RDS instance created earlier.
     - `RDS_PASSWORD`: The password for the `postgres` user created earlier.
     - `S3_BUCKET`: `fashion-landing-zone`.
   - Click **Save**.

![img.png](/images/rds-to-s3/img_8.png)

7. In the **Configuration** interface, click **VPC**.
   - Click **Edit**.
   - For **VPC**, select the VPC created earlier.
   - For **Subnets**, select the two private subnets created earlier:
     - fashion-subnet-private1-ap-southeast-1a
     - fashion-subnet-private2-ap-southeast-1b
   - For **Security groups**, select the default security group of the VPC.
   - Click **Save**.

![img.png](/images/rds-to-s3/img_9.png)

## Allow Lambda to Access RDS
1. Return to the fashion-db interface under **Databases** in the RDS console.
2. Scroll down to **Connected compute resources**, click **Action**, and select **Set up Lambda connection**.

![img.png](/images/rds-to-s3/img_10.png)

3. In the Set up Lambda connection interface:
   - Choose **choosing existing function**
   - Select the `lambda-rds-to-s3` function created earlier.
   - Turn off the **Connect using Proxy** option.
   - Click **Set up**.

![img.png](/images/rds-to-s3/img_11.png)
