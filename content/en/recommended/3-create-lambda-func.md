+++
title = "7.3 Create Lambda Function"
weight = 3
+++

## Steps to Implement

1. Go to the AWS Management Console and search for the **Lambda** service by typing **Lambda**.
![image](/images/recommendation/img_10.png)

2. In the Lambda interface, select **Create function**.

3. In the Create function interface, select **Container image**.
   - **Function name**: `kinesis-to-dynamodb`
   - **Container image URI**: Click Browse images and select the ECR repository `fashion-ecr-repository` and the Docker Image you created in the previous step. Make sure to select the image with the `latest` tag.
   - **Execution role**: Select **Use an existing role** and choose the role `lambda-kinesis-dynamodb-role` created in the previous step.
   - Click **Create function** to create the Lambda Function.

![image](/images/recommendation/img_12.png)

4. After creation, go to the Configuration of the Lambda Function. In the **VPC** section, click **Edit** and configure as follows:
   - In General configuration, click **Edit** and set the timeout to 5 minutes and Memory to 512MB.
   - In the **Environment** section, click Edit and add the following environment variables:
     - `KINESIS_DATA_STREAM_NAME`: `fashion-ds`
     - `KINESIS_DATA_STREAM_ARN`: Get the ARN of the Kinesis Data Stream `fashion-ds` from AWS Kinesis Data Streams.
     - `DYNAMODB_TABLE_NAME`: `fashion-rcm-table`
     - `CLEAN_ZONE_DATABASE_CATALOG`: `fashion-clean-zone`
   ![image](/images/recommendation/img_13.png)

5. Create a Trigger for the Lambda Function:
   - Purpose: Connect the Lambda Function to the Kinesis Data Stream to receive data from the stream whenever there is a new event.
   - In the main interface of the Lambda Function, select **Add trigger**.
   ![image](/images/recommendation/img_14.png)

   - Select **Kinesis** from the list of services. Choose the Kinesis Data Stream `fashion-ds` created in the previous step.
   - Set **Batch size** to 1 (the maximum number of records Lambda will process in one invocation).
   - Click **Add**.
   ![image](/images/recommendation/img_15.png)
