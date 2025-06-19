+++
title = "2.1 Tạo các Role cần thiết"
weight = 1
+++
## Tổng quan
Trong phần này chúng ta sẽ tạo các IAM Role cần thiết cho các dịch vụ AWS mà chúng ta sẽ sử dụng trong dự án này. Các role này sẽ cho phép các dịch vụ AWS truy cập vào các tài nguyên khác nhau trong tài khoản AWS.

Các role này sẽ bao gồm:
- Role cho Lambda truy cập vào S3
- Role cho EC2 truy cập vào Kinesis
- Role cho Lambda truy cập vào Kinesis và DynamoDB
- Role cho Glue truy cập vào S3

## Tạo role cho Lambda truy cập vào S3
1. Truy cập vào AWS Console, chọn **IAM** từ menu dịch vụ.

![img.png](/images/preparation/iam-1.png)

2. Chọn **Roles** từ menu bên trái, bấm vào **Create role**.

![img.png](/images/preparation/iam-2.png)

3. Tại giao diện **Select trusted entity**, chọn **AWS service**, sau đó chọn **Lambda** từ danh sách dịch vụ. Bấm **Next**.

![img.png](/images/preparation/iam-3.png)

4. Tại phần Add permissions
    - Tìm kiếm và chọn **AmazonS3FullAccess** từ danh sách chính sách.
    - Tìm kiếm và chọn **AWSLambdaENIManagementAccess** từ danh sách chính sách.
    - Bấm **Next**.


5. Tại phần Name, review, and create
   - Nhập tên cho role là `lambda-s3-full-access`.
   - Phần description nhập `Allow Lambda access S3 with Full Access`.
   - Bấm **Create role**.

![img.png](/images/preparation/iam-5.png)

## Tạo role cho EC2 truy cập vào Kinesis
1. Truy cập vào AWS Console, chọn **IAM** từ menu dịch vụ.

![img.png](/images/preparation/iam-1.png)

2. Chọn **Roles** từ menu bên trái, bấm vào **Create role**.

![img.png](/images/preparation/iam-2.png)

3. Tại giao diện **Select trusted entity**, chọn **AWS service**, sau đó chọn **EC2** từ danh sách dịch vụ. Bấm **Next**.

![img.png](/images/preparation/iam-6.png)

4. Tại phần Add permissions
    - Tìm kiếm và chọn **AmazonKinesisFullAccess** từ danh sách chính sách.
    - Bấm **Next**.

![img.png](/images/preparation/iam-7.png)

5. Tại phần Name, review, and create
   - Nhập tên cho role là `ec2-kinesis-role`.
   - Phần description nhập `Allow EC2 access Kinesis with Full Access`.
   - Bấm **Create role**.

![img.png](/images/preparation/iam-8.png)

## Tạo role cho Lambda truy cập vào Kinesis và DynamoDB
1. Tương tự như cách tạo role cho các bước trên, tạo role với use case là **Lambda**.
2. Tại phần Add permissions
    - Tìm kiếm và chọn **AmazonKinesisFullAccess** từ danh sách chính sách.
    - Tìm kiếm và chọn **AmazonDynamoDBFullAccess** từ danh sách chính sách.
    - Tìm kiếm và chọn **AmazonAthenaFullAccess** từ danh sách chính sách
    - Tìm kiếm và chọn **AWSLambdaBasicExecutionRole** từ danh sách chính sách.
    - Tim kiếm và chọn **AmazonS3FullAccess** từ danh sách chính sách.
    - Bấm **Next**.
3. Tại phần Name, review, and create
   - Nhập tên cho role là `lambda-kinesis-dynamodb-role`.
   - Phần description nhập `Allow Lambda access Kinesis and DynamoDB and S3 with Full Access`.
   - Bấm **Create role**.

## Tạo role cho Glue truy cập vào S3
1. Tương tự như cách tạo role cho các bước trên, tạo role với use case là **Glue**.
2. Tại phần Add permissions
    - Tìm kiếm và chọn **AmazonS3FullAccess** từ danh sách chính sách.
    - Tìm kiếm và chọn **AWSGlueServiceRole** từ danh sách chính sách.
    - Bấm **Next**.
3. Tại phần Name, review, and create
   - Nhập tên cho role là `AWS-Glue-S3-Full-Access `.
   - Phần description nhập `Allow Glue access to S3 with Full Access` .
   - Bấm **Create role**.