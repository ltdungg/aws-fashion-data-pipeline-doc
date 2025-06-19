+++
title = "7. Tạo hệ thống gợi ý sản phẩm"
weight = 7
+++

## Giới thiệu
Trong phần này, chúng ta sẽ xây dựng một hệ thống gợi ý sản phẩm dựa trên dữ liệu đã được chuyển đổi và lưu trữ trong S3 bucket `fashion-clean-zone`. Hệ thống này sẽ sử dụng Amazon DynamoDB để lưu trữ các gợi ý sản phẩm cho người dùng.

Hệ thống này hoạt động dựa trên phân tích dữ liệu người dùng theo gần thời gian thực, bằng cách mỗi khi nguười dùng thao tác với sản phẩm như xem, thêm vaào giỏ hàng thì hệ thống sẽ ghi nhận và đưa ra những gợi ý cho các sản phẩm liên quan

## Các bước thực hiện
1. Tạo DynamoDB Table để hiện gợi ý sản phẩm cho người dùng
2. Tạo Amazon ECR để lưu trữ Docker Image cho Lambda Function
3. Tạo Lambda Function để xử lý các sự kiện từ S3 bucket `fashion-clean-zone` và cập nhật gợi ý sản phẩm vào DynamoDB
4. Kiểm tra hệ thống gợi ý sản phẩm hoạt động
