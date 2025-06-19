+++
title = "6.2 Create Catalog for Clean Zone"
weight = 2
+++

## Create Glue Data Catalog for Clean Zone

1. Access the **Amazon Management Console**
    - Search for the Glue service
    - Select **Glue** from the search results

![alt](/images/transform/catalog-1.png)

2. Create a Database for the Glue Data Catalog
    - In the Glue Data Catalog section, select **Databases** then choose **Add database**
    - Enter the database name as `fashion-clean-zone`
    - Click **Create**

![alt](/images/transform/catalog-2.png)

![alt](/images/transform/catalog-3.png)

3. Create a table for the Glue Data Catalog
    - Click on the `fashion-clean-zone` database you just created
    - Select **Add table** then choose **Add tables using a crawler**

![alt](/images/transform/catalog-4.png)

4. In the crawler properties section
    - Enter the crawler name as `fashion-clean-zone-crawler`
    - Click **Next**

![alt](/images/transform/catalog-5.png)

5. Select the data source and click **Add a data source**
    - Choose **S3** then click **Browse**
    - Select the `fashion-clean-zone` bucket then click **Add**
    - Click **Next**

![alt](/images/transform/catalog-6.png)
![alt](/images/transform/catalog-7.png)

6. In the IAM role section
    - Select **Create an IAM role**
    - Enter the role name as `AWSGlueServiceRole-FashionCrawlerRole`
    - Click **Next**

![alt](/images/transform/catalog-8.png)

7. In the Set output and scheduling section
   - Target database: Select the `fashion-clean-zone` database
   - **Frequency**: choose Daily and enter 17:00 (UTC is 00:00 Vietnam time)
   - Click **Next**

![alt](/images/transform/catalog-9.png)

8. In the Review section
   - Click **Finish**

![alt](/images/transform/catalog-10.png)

9. Select **Run Crawler** and wait for the crawler process to complete. This process will take about 1 minute.

## Check Results with Athena

1. Access the **Athena** service from the AWS Management Console.
![alt](/images/transform/athena-1.png)

2. Click **Launch Query Editor**

![alt](/images/transform/athena-2.png)

3. In the Query Editor interface, click **Settings** and then **Manage**
   - Under **Location of query result**, click **Browse S3** and select the `fashion-logic-zone` bucket
   - Click **Save**

![alt](/images/transform/athena-3.png)

4. Return to the **Editor** section
   - On the left, select Data Source as AwsDataCatalog
   - Select the Database as `fashion-clean-zone`
   - You can now enter SQL queries to query the data. For example:
   ```sql
   SELECT * FROM "fashion-clean-zone"."clickstreams" limit 10;
   ```

![alt](/images/transform/athena-4.png)