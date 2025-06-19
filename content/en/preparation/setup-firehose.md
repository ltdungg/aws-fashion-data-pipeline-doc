+++
title = "2.7 Create Kinesis Firehose"
weight = 7
+++

## Create Kinesis Firehose
1. Access the **Amazon Management Console**
    - Search for the Firehose service
    - Select **Amazon Data Firehose** from the search results

![alt](/images/preparation/firehose-1.png)

2. In the Kinesis Firehose interface, select **Create Firehose stream**

![alt](/images/preparation/firehose-2.png)

3. In the Create Firehose stream interface:
    - Select **Source** as `Amazon Kinesis Data Stream`
    - Select **Destination** as `Amazon S3`
    - Set **Name** to `fashion-ds-firehose`
    - In source settings, click **Browse** and select the Kinesis Data Stream created in the previous step.
    - In the Destination setting, click **Browse** and select the `fashion-landing-zone` bucket.
    - For **New line delimiter**: Select **Enabled**
    - In the S3 bucket prefix, enter `clickstreams/`
    - Under buffer hints, compression, file extension and encryption:
      - Leave the default buffer size as 5MB
      - Leave the default buffer interval as 300s
    - Click **Create Firehose stream**

![alt](/images/preparation/firehose-3.png)
![alt](/images/preparation/firehose-4.png)
![alt](/images/preparation/firehose-5.png)
