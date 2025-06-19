+++
title = "6. Chuyển đổi dữ liệu"
weight = 6
+++

## Các bước thực hiện
Trong phần này chúng ta sẽ sử dụng Glue ETL để thực hiện chuyển đổi dữ liệu
từ S3 bucket `fashion-landing-zone` sang S3 bucket `fashion-clean-zone`.
Với mục đích sẵn sàng cho việc phân tích dữ liệu cũng như lưu trữ dữ liệu.

Phần này sẽ bao gồm các bước sau:
- Tạo Glue Job để chuyển đổi dữ liệu từ S3 bucket `fashion-landing-zone` sang S3 bucket `fashion-clean-zone`
- Tạo Glue Trigger để tự động chạy Glue Job
- Kiểm tra dữ liệu trong S3 bucket `fashion-clean-zone`
- Tạo Glue Crawler để tự động tạo Glue Data Catalog cho dữ liệu trong S3 bucket `fashion-clean-zone`
