+++
title = "5.2 Check Data in Kinesis Data Stream"
weight = 2
+++

## Check Data in Kinesis Data Stream

1. Return to the terminal connected to your EC2 Instance from step [2.3 Create EC2 Instance](../preparation/setup-ec2.md).
2. Run the following command to describe the Kinesis Data Stream:
```bash
aws kinesis describe-stream --stream-name fashion-ds
```
![alt](/images/test-connection/img_5.png)

3. Run the following command to get the shard iterator for the shard in the Kinesis Data Stream:
```bash
aws kinesis get-shard-iterator --stream-name fashion-ds --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON
```

![alt](/images/test-connection/img_6.png)

4. Copy the `ShardIterator` from the result of the previous command and run the following command to retrieve data from the Kinesis Data Stream:
```bash
aws kinesis get-records --shard-iterator <YOUR_SHARD_ITERATOR>
```
![alt](/images/test-connection/img_7.png)

5. In the Records section:
   - PartitionKey is the user ID
   - Data contains JSON data encoded in the stream

6. To check the data, copy one of the Data fields inside Records. Go to [Base64 Decode](https://www.base64decode.org/) to decode the copied data.
    - Decode as UTF-8

![alt](/images/test-connection/img_8.png)