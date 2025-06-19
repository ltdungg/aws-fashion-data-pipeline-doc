+++
title = "9. Dọn dẹp các tài nguyên"
weight = 9
+++

## S3
1. Vào dịch vụ S3, chọn các bucket đã tạo trong quá trình thực hiện dự án.
2. Chọn **Empty** để xóa tất cả các đối tượng trong bucket.
3. Sau khi xóa, chọn **Delete** để xóa bucket.

## DynamoDB
1. Vào dịch vụ DynamoDB, chọn **Tables** từ menu bên trái.
2. Chọn bảng `fashion-rcm-table` đã tạo trong quá trình thực hiện dự án.
3. Chọn **Delete** để xóa bảng.
4. Xác nhận việc xóa bảng bằng cách nhập `confirm` và bấm **Delete**.

## Glue 
1. Vào dịch vụ Glue, chọn **ETL jobs** từ menu bên trái.
2. Chọn job `fashion-datalake-etl` rồi bấm vào **Actions** chọn **Delete jobs**.

3. Chọn **Databases** từ thanh menu bên trái.
4. Chọn database `fashion-clean-zone` bấm **Delete**.
5. Chọn **Crawlers** từ menu bên trái.
6. Chọn crawler đã tạo, bấm **Actions** và chọn **Delete crawler**. Gõ `Delete` để xác nhận và bấm **Delete**.

## RDS
1. Vào dịch vụ RDS, chọn **Databases** từ menu bên trái.
2. Chọn database `fashion-db` đã tạo trong quá trình thực hiện dự án. Bấm vào **Actions** và chọn **Delete**.

![image](/images/clean/img.png)

## Lambda 
1. Vào dịch vụ Lambda, chọn **Functions** từ menu bên trái.
2. Chọn các Lambda function đã tạo `fashion-rds-to-s3`, `kinesis-to-dynamodb`.
3. Bấm vào **Actions** và chọn **Delete**. Xác nhận việc xóa bằng cách nhập `confirm` và bấm **Delete**.

## EventBridge
1. Vào dịch vụ EventBridge, chọn **Schedules** từ menu bên trái.
2. Chon rule đã tạo `fashion-rds-to-s3-scheduler`. Bấm **Delete**.

## EC2
1. Vào dịch vụ EC2, chọn **Instances** từ menu bên trái.
2. Chọn instance `fashion-webapp` đã tạo.
3. Bấm vào **Instance state** và chọn **Terminate instance**. Bấm **Terminate (delete)** để xác nhận việc xóa instance.

## ECR 
1. Vào dịch vụ ECR, chọn **Repositories** từ menu bên trái.
2. Chọn repository `fashion-ecr-repository` đã tạo.
3. Bấm **Delete**

## IAM 
1. Vào dịch vụ IAM, chọn **Roles** từ menu bên trái.
2. Chọn các role đã tạo: 
   - AWS-Glue-S3-Full-Access
   - AWSGlueServiceRole-FashionCrawlerRole
   - ec2-kinesis-role
   - lambda-s3-full-access
   - lambda-kinesis-dynamodb-role
   - Xóa các role Kinesis Firehose và EventBridge nếu có.
3. Bấm **Delete** gõ `delete` để xác nhận và bấm **Delete**.

## Network Interfaces
- Các Network Interfaces được tạo ra bởi Lambda Function sẽ được tự động xóa khi Lambda Function bị xóa khoảng 20-40 phút.
- Bạn sẽ không thể xóa VPC nếu vẫn còn Network Interfaces đang hoạt động. Do đó, bạn cần đợi cho đến khi các Network Interfaces này được xóa.
- Nếu bạn muốn xóa Network Interfaces ngay lập tức, hãy xem trên https://repost.aws/knowledge-center/lambda-eni-find-delete

## VPC
1. Sau khi các Network Interfaces đã được xóa, bạn có thể xóa VPC `fashion-vpc` đã tạo trong quá trình thực hiện dự án.
2. Vào dịch vụ VPC, chọn **Your VPCs** từ menu bên trái.
3. Chọn VPC `fashion-vpc` đã tạo.
4. Bấm vào **Actions** và chọn **Delete VPC**. Xác nhận việc xóa bằng cách nhập `delete` và bấm **Delete**.