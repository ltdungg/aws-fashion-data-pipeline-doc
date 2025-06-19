+++
title = "5.3 Test Lambda Function"
weight = 3
+++

## Run the Lambda Function Test

1. Go to the Lambda Function page for `lambda-rds-to-s3` in your AWS Console.
2. Click on **Test**.

![img.png](/images/test-connection/img_9.png)

3. Because the Lambda function is designed to run once per day at the start of the next day (i.e., at 00:01 the following day), you need to add an Event JSON with `DATE_EXECUTION` set to the date you are running the lab, in the format `YYYY-MM-DD`. For example: "2025-04-17".
   - In the Test section:
     - Select **Create new event**
     - Enter a name for the event, e.g., `test`
     - Use the following Event JSON:
     ```python
        {
          "DATE_EXECUTION": "<Date of workshop execution>"
        }
     ```
![img.png](/images/test-connection/img_10.png)

4. Click **Test**.

5. You have successfully run the test.

![alt](/images/test-connection/img_11.png)

6. Go back to the S3 bucket `fashion-landing-zone` and check if data has been generated.

![alt](/images/test-connection/img_12.png)
