+++
title = "7.4 Test the Product Recommendation System"
weight = 4
+++

## Run the Product Recommendation System Test

1. Connect to the `fashion-webapp` EC2 instance created in the previous steps. Then run the following command:
   - **Note**: Ensure you are the `root user` by running `sudo su` before executing the above command.

```bash
python data-generator.py
```

2. Go to the **CloudWatch** service, select **Log groups**, and choose `/aws/lambda/kinesis-to-dynamodb` to view the logs of the `kinesis-to-dynamodb` Lambda Function.

![image](/images/recommendation/img_16.png)

3. Go to the **DynamoDB** service, click on **Tables** in the left sidebar, and select **fashion-rcm-table**.
   - In the table interface, select **Explore table items** to view the stored product recommendations.

![image](/images/recommendation/img_17.png)

![image](/images/recommendation/img_18.png)

**You have completed building the product recommendation system for an online fashion store**
