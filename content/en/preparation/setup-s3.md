+++
title = "2.5 Create S3 Bucket"
weight = 5
+++

## Introduction
In this section, we will create S3 Buckets to serve as a Data Lake for the Data Pipeline.
We will create the following buckets:
- fashion-landing-zone: This is where raw, unprocessed data is stored.
- fashion-clean-zone: This is where transformed data, ready for analytical tasks, is stored.
- fashion-logic-zone: This is where Lambda Functions and Airflow DAGs for AWS MWAA are stored.

## Setup
1. Access the **Amazon Management Console**
    - Search for the S3 service
    - Select **S3** from the search results
    - Then click **Create bucket**

![alt](/images/preparation/s3-1.png)
![alt](/images/preparation/s3-2.png)

2. In the Create bucket interface
    - Set **Bucket name** to `fashion-landing-zone`
    - Leave the other parameters as default
    - Click **Create bucket**

![alt](/images/preparation/s3-3.png)

3. Repeat step 2 for the following buckets:
    - `fashion-clean-zone`
    - `fashion-logic-zone`

![alt](/images/preparation/s3-4.png)

You have successfully created 3 S3 buckets.
