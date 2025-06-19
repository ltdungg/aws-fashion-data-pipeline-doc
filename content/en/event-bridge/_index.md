+++
title = "8. Schedule Recurring Tasks"
weight = 8
+++

## Introduction
In this section, we will set up recurring tasks to automate the process of updating data and generating product recommendations in the system. We will use Amazon EventBridge to schedule these tasks.

## Steps to Implement
1. In the AWS Management Console, search for and select the **EventBridge** service.

![image](/images/event-bridge/img.png)

2. Select **EventBridge Schedule** and then choose **Create rules** from the left sidebar.

![image](/images/event-bridge/img_1.png)

3. In the **Create rule** interface, fill in the following information:
   - **Name**: `fashion-rds-to-s3-scheduler`
   - **Description**: `Rule to trigger Lambda function for ETL process`
   - Under **Schedule Pattern**, select **Recurring schedule**
   - Timezone: `(UTC +07:00) Asia/Saigon`
   - Cron expression: `cron(0 0 * * ? *)` (this means the task will run every day at 00:00 Vietnam time)
   - Flexible time window: Leave as 5 minutes
   - Click **Next**

![image](/images/event-bridge/img_2.png)

4. In the **Select targets** section, choose **AWS Lambda** and select the Lambda Function `fashion-rds-to-s3` created in the previous step.

![image](/images/event-bridge/img_3.png)

5. Click **Next** to review the configuration, then click **Create schedule** to complete the rule creation.
