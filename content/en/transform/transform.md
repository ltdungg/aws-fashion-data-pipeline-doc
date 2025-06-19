+++
title = "6.1 Create Glue Job"
weight = 1
+++

## Overview
In this section, we will create a Glue Job to transform data from the S3 bucket `fashion-landing-zone` to the S3 bucket `fashion-clean-zone`[1].

## Create Glue Job
1. Log in to the AWS Management Console and search for the AWS Glue service.

![image](/images/transform/glue-job-1.png)

2. In the AWS Glue interface, select "Go to ETL jobs" from the left menu.

![image](/images/transform/glue-job-2.png)

3. In the ETL jobs interface, select **Create job from a blank graph** or **Visual ETL** to create a new Glue Job.

![image](/images/transform/glue-job-3.png)

4. In the new Glue Job creation interface, click **Script**, then click **Edit Script** and select **Confirm**.

![image](/images/transform/glue-job-4.png)

5. Copy the code from the following link and paste it into the **Script** box: [Glue Job Script](https://github.com/ltdungg/aws-fashion-data-pipeline/blob/main/glue/transform/transform.py)
   - Then, on line 13, enter your S3 bucket name in the `LANDING_BUCKET` variable.
   - On line 14, enter your S3 bucket name in the `CLEAN_BUCKET` variable.
   - Then click on **Job details**.

![image](/images/transform/glue-job-5.png)

6. In the Job details interface, fill in the following information:
   - **Name**: `fashion-datalake-etl`
   - **IAM role**: Select the IAM Role **"AWS-Glue-S3-Full-Access"** that you created earlier.
   - Scroll down to **Advanced properties**
   - For **Script path**: Enter the path as follows: `s3://<YOUR-BUCKET-LOGIC-ZONE>/fashion-datalake-etl/script/`
   - For **Spark UI logs path**: Enter: `s3://<YOUR-BUCKET-LOGIC-ZONE>/fashion-datalake-etl/sparkHistoryLogs/`
   - For **Temporary path**: Enter: `s3://<YOUR-BUCKET-LOGIC-ZONE>/fashion-datalake-etl/temporary/`
   - Click **Save** to save the Glue Job.

![image](/images/transform/glue-job-6.png)
![image](/images/transform/glue-job-6-2.png)
![image](/images/transform/glue-job-6-3.png)

7. Schedule the Glue Job to run automatically daily:
   - In the Glue Job interface, select **Schedules** from the left menu.
   - Click **Create schedule**.

![image](/images/transform/glue-job-7.png)

8. In the schedule creation interface to run the Glue Job at 0:00 every day, enter the following information:
   - **Name**: `fashion-datalake-etl-schedule`
   - **Frequency**: Select **Daily**
   - **Start hour**: Enter **17** (since the schedule uses UTC, subtract 7 hours to run at 0:00 Vietnam time).
   - **Minute of the hour**: Enter **0**
   - Click **Create schedule** to create the Glue Job schedule.

![image](/images/transform/glue-job-8.png)

## Run the Glue Job
1. In the Glue Job interface, select **Run**, then choose **Runs** from the left menu to check the Glue Job run status.

![image](/images/transform/glue-job-9.png)

![image](/images/transform/glue-job-10.png)

2. Wait a moment for the Glue Job to finish running, then check if the Glue Job status is **Succeeded**. If so, the Glue Job has run successfully.

![image](/images/transform/glue-job-11.png)

3. Check if there is data in the S3 bucket `fashion-clean-zone`. If data is present, the Glue Job ran successfully.

4. Check the output of the Glue Job in CloudWatch Logs:
   - Go to the **CloudWatch** service, select **Log groups**
   - Search for the log group named `/aws-glue/jobs/output` and click on it
   - Here you will see the logs for the Glue Job you ran.
