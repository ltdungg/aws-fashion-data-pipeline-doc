+++
title = "2.4 Tạo RDS"
weight = 4
+++

## Cài đặt Relational Database Service (RDS) 
1. Truy cập **Amazon Management Console**
    - Tìm kiếm dịch vụ RDS
    - Chọn **Aurora and RDS** từ kết quả tìm kiếm
    - Chọn **Create database**

![alt](/images/preparation/rds-1.png) 

![alt](/images/preparation/rds-2.png)

2. Tại giao diện tạo RDS, chọn **Standard Create**
    - Engine options: `PostgreSQL`
    - Version: `PostgreSQL 17.2-R2`
    - Templates: `Free Tier`
    - DB instance identifier: `fashion-db`
    - Master password: Tự đặt password cho riêng mình
    - DB instance class: `db.t4g.micro`
    
![alt](/images/preparation/rds-3.png)
![alt](/images/preparation/rds-4.png)
![alt](/images/preparation/rds-5.png)

3. Tại phần Connectivity, chọn Edit
    - VPC: `fashion-vpc`
    - Subnet group: `fashion-subnet-group`
    - Public access: `No`
    - VPC security group: Chọn Create new
        - Security group name: `fashion-db-sg`
    - Availability zone: `ap-southeast-1a`

![alt](/images/preparation/rds-6.png)

4. Còn lại để mặc định và nhấn **Create database** để hoàn tất việc tạo RDS