+++
title = "3. Create Application Environment"
weight = 3
+++

## Overview
- In this section, we will create the application environment for the Data Pipeline.
- The environment includes:
  - EC2 Instance: Where mock data is generated and database tables are initialized.
  - RDS: PostgreSQL database for storing mock data.

The database model consists of 4 tables:
- products, users, orders, and order_details

![alt](/images/generate-data/1.png)

## Deployment Steps
1. Return to the RDS interface
   - Select **Databases** from the left menu
   - Click on **fashion-db**

![alt](/images/generate-data/img.png)

2. In the fashion-db interface, save the **Endpoint** of the database somewhere safe.

![alt](/images/generate-data/img_1.png)

3. Scroll down to the Connected compute resources section
   - Click on **Actions**
   - Select **Set up EC2 connection**

![alt](/images/generate-data/img_2.png)

4. In the Set up EC2 connection interface
   - For EC2 Instance, select **fashion-webapp**
   - Click continue
   - In the Review and confirm section, select Set up

![alt](/images/generate-data/img_3.png)

5. When finished, you will see a notification like this:

![alt](/images/generate-data/img_4.png)

6. Return to the terminal connected to the EC2 Instance from step [2.3 Create EC2 Instance](../preparation/setup-ec2.md).

7. Test the connection to the PostgreSQL database using the Database DNS you saved earlier:
    - Use the following command to connect to the PostgreSQL database, then enter the database password you created.

```bash
psql -U postgres -h <YOUR_POSTGRESQL_DNS> -p 5432 -d postgres
```
8. If you see a notification like the following, you have successfully connected to the PostgreSQL database.
    - If the image below does not appear, please review the above steps.
![alt](/images/generate-data/img_5.png)

9. Type `\q` to exit PostgreSQL and return to the terminal.

10. Set up the environment for generating mock data:
    - Enter the following command: `vim .env`
    - In vim, press **i** to enter insert mode.
    - Enter the following information into the `.env` file:
      - RDS_HOST: The DNS of the PostgreSQL database you saved in step 2.
      - RDS_PASSWORD: The password of the PostgreSQL database you created in step 2.
      - KINESIS_STREAM_NAME: `fashion-ds`
      - STREAM_ARN: The ARN of the Kinesis Stream you created in step [2.6 Create Kinesis Stream](../preparation/setup-kinesis.md).
    - Press **Esc** to exit insert mode.
    - Type `:wq` to save the `.env` file and exit vim.

![alt](/images/generate-data/img_6.png)

11. Create tables for the database:
    - In this step, we will create 4 tables for the database on RDS
    - At the same time, mock data for 1000 users and the products table will be generated

```bash
python initdb.py
```


12. If you see a notification like the following, you have successfully created the database and mock data for 1000 users and the products table.
![alt](/images/generate-data/img_7.png)

13. View the tables created in the PostgreSQL database:
    - Use the command from step 7 to connect to the PostgreSQL database.
    - Enter the following command to view the tables created in the PostgreSQL database:

```sql
    SELECT * FROM information_schema.tables WHERE table_schema = 'public';
```

![alt](/images/generate-data/img_8.png)

14. View all data in a table (Optional):
```sql
    SELECT * FROM <TABLE_NAME>;
--- Ví dụ:
    SELECT * FROM users;
```

15. You have successfully created the application environment for the Data Pipeline.
