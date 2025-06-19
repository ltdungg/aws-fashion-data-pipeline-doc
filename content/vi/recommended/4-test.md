+++
title = "7.4 Kiểm tra hệ thống gợi ý sản phẩm"
weight = 4
+++

## Chạy thử hệ thống gợi ý sản phẩm
1. Kết nối với EC2 instance `fashion-webapp` đã tạo ở bước trước. Và chạy lệnh sau: 
```bash
python data-generator.py
```
**Lưu ý**: Đảm bảo người dùng là `root user` bằng cách dùng `sudo su` trước khi chạy lệnh trên.

2. Chọn dịch vụ **CloudWatch** chọn **Log groups** chọn `/aws/lambda/kinesis-to-dynamodb` để xem log của Lambda Function `kinesis-to-dynamodb`. 

![image](/images/recommendation/img_16.png)

3. Chọn dịch vụ **DynamoDB** bấm chọn **Tables** bên góc trái màn hình và bấm vào **fashion-rcm-table**
    - Trong giao diện của bảng, chọn Explore table items để xem các gợi ý sản phẩm đã được lưu trữ.

![image](/images/recommendation/img_17.png)

![image](/images/recommendation/img_18.png)

**Bạn đã hoàn tất xây dựng hệ thống gợi ý sản phẩm cho một cửa hàng thời trang online**