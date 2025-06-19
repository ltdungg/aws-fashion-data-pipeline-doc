+++
title = "1. Introduction"
weight = 1
+++

## A Data Pipeline for Fashion Store

### Data
This workshop includes the following data:
- Clothing product data sourced from Kaggle
- User, purchase, and clickstream data generated using Python's Faker

### Context
Suppose you are a Data Engineer at an online clothing store. Your manager wants to know which products customers are interested in, as well as analyze current fashion trends.

Your manager has the following requirements:
- When a user clicks on or adds a product to the cart, the event must be sent directly to storage, then transformed and enriched so that ML can predict current fashion trends and provide real-time product recommendations to users. These recommendations for each user are then stored in a place where they can be directly suggested to users on the website.
- The second requirement is that after a user makes a purchase, at the end of the day, the data needs to be aggregated, cleaned, and stored, ready for analysis to determine the direction for the next marketing strategy.

Right after, you come up with an idea to implement this on Amazon Web Services as follows.

### Idea
You devise a system that combines Batch Processing and Real-Time Processing as follows:
1. Deploy a Database system on Amazon RDS to handle user purchase transactions, etc.

2. Deploy a Data Lake system using Amazon S3 on AWS to store the store's aggregated data.
3. Build a Glue Data Catalog to directly analyze data from the Data Lake using Athena or Redshift Spectrum.
4. For the customer interaction (Clickstream) data flow, we will create a **Kinesis Data Stream** with two Consumers:
   - The online data passes through Lambda, and each time a **user interacts**, a Lambda Function is triggered to push product recommendations into **DynamoDB**.
   - The other Consumer feeds into **Kinesis Firehose** every 5 minutes, pushing data into the Data Lake, where **Data Analysis** processes the data to identify fashion trends, sales, etc.
5. Schedule jobs using Amazon EventBridge to automate the data update process:
   - At the end of the day, data from RDS is moved to S3 at 00:01 the next day.

After writing down these ideas, you envision a system on AWS with the following architecture.

### System Architecture
- Note: In this section, we will not deploy QuickSight and Redshift Spectrum services, but will focus on the main services to build the product recommendation system.
![alt](/images/overview/architect.png)
