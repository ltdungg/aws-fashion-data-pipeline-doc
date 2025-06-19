+++
title = "2.6 Create Kinesis Data Stream"
weight = 6
+++

## Create Kinesis Data Stream
1. Access the **Amazon Management Console**
    - Search for the Kinesis service
    - Select **Kinesis** from the search results

![alt](/images/preparation/kinesis-1.png)

2. In the Kinesis interface, select **Kinesis Data Streams** and then choose **Create data stream**

![alt](/images/preparation/kinesis-2.png)

3. In the Create data stream interface
    - Set **Name** to `fashion-ds`
    - Select **Provisioned**
    - For Provisioned shards, enter 1
    - Click **Create data stream**

![alt](/images/preparation/kinesis-3.png)

4. After creation, you will see the following interface. Save the ARN of this Kinesis Data Stream for use in later steps.

![alt](/images/preparation/kinesis-4.png)
