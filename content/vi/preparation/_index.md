+++
title = "2. Các bước chuẩn bị"
weight = 2
+++

## Tổng quan
- Đầu tiên là tạo một môi trường ảo, coi như đây là môi trường ứng dụng của cửa hàng.
- EC2 Instance sẽ là máy chủ giả, nơi tạo ra dữ liệu cho lab.
- RDS Instance sẽ là cơ sở dữ liệu, dành cho các giao dịch...
- S3 Bucket sẽ là Data Lake, bao gồm các bucket sau:
  - **fashion-landing-zone**: Nơi lưu trữ dữ liệu thô từ các nguồn khác nhau.
  - **fashion-clean-zone**: Nơi lưu trữ dữ liệu đã được xử lý và chuẩn bị cho việc phân tích.
  - **fashion-logic-zone**: Nơi lưu trữ các script Lambda và mã nguồn cho các quy trình ETL (Extract, Transform, Load).

## Các bước triển khai
Đảm bảo để Region là Singapore (ap-southeast-1) trước khi thực hiện các bước sau:

[2.1 Tạo các Role cần thiết](setup-role.md)

[2.2 Tạo VPC, Subnet, ...](setup-env.md)

[2.3 Tạo EC2 Instance](setup-ec2.md)

[2.4 Tạo RDS Instance](setup-rds.md)

[2.5 Tạo S3 Bucket](setup-s3.md)
