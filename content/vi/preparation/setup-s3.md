+++
title = "2.5 Tạo S3 Bucket"
weight = 5
+++

## Giới thiệu
Trong phần này, ta sẽ tạo S3 Bucket để làm một Data Lake cho Data Pipeline. 
Trong phần này ta sẽ tạo các bucket sau:
- fashion-landing-zone: Đây là nơi lưu trữ dữ liệu thô chưa được xử lý.
- fashion-clean-zone: Đây là nơi lưu trữ dữ liệu đã được chuyển đổi và chuẩn bị sẵn sàng cho các công việc phân tích.
- fashion-logic-zone: Đây là nơi lưu trữ những Lambda Function và các dags chạy Airflow cho AWS MWAA.

## Cài đặt
1. Truy cập **Amazon Management Console**
    - Tìm kiếm dịch vụ S3
    - Chọn **S3** từ kết quả tìm kiếm
    - Sau đó bấm **Create bucket**

![alt](/images/preparation/s3-1.png)
![alt](/images/preparation/s3-2.png)

2. Trong giao diện Create bucket
    - Chọn **Bucket name** là `fashion-landing-zone`
    - Để mặc định các thông số còn lại
    - Bấm **Create bucket**

![alt](/images/preparation/s3-3.png)

3. Lặp lại bước 2 với các bucket sau:
    - `fashion-clean-zone`
    - `fashion-logic-zone`

![alt](/images/preparation/s3-4.png)

Bạn đang tạo thành công 3 bucket S3.