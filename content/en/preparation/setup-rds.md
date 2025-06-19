+++
title = "2.4 Create RDS"
weight = 4
+++

## Setting up Relational Database Service (RDS)
1. Access the **Amazon Management Console**
    - Search for the RDS service
    - Select **Aurora and RDS** from the search results
    - Click **Create database**

![alt](/images/preparation/rds-1.png)

![alt](/images/preparation/rds-2.png)

2. In the Create RDS interface, select **Standard Create**
    - Engine options: `PostgreSQL`
    - Version: `PostgreSQL 17.2-R2`
    - Templates: `Free Tier`
    - DB instance identifier: `fashion-db`
    - Master password: Set your own password
    - DB instance class: `db.t4g.micro`

![alt](/images/preparation/rds-3.png)
![alt](/images/preparation/rds-4.png)
![alt](/images/preparation/rds-5.png)

3. In the Connectivity section, click Edit
    - VPC: `fashion-vpc`
    - Subnet group: `fashion-subnet-group`
    - Public access: `No`
    - VPC security group: Select Create new
        - Security group name: `fashion-db-sg`
    - Availability zone: `ap-southeast-1a`

![alt](/images/preparation/rds-6.png)

4. Leave the remaining settings as default and click **Create database** to complete the RDS creation
