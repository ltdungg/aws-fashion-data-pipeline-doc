+++
title = "8. Lên lịch cho các nhiệm vụ định kỳ"
weight = 8
+++

## Giới thiệu
Trong phần này, chúng ta sẽ thiết lập các nhiệm vụ định kỳ để tự động hóa quá trình cập nhật dữ liệu và gợi ý sản phẩm trong hệ thống. Chúng ta sẽ sử dụng Amazon EventBridge để lên lịch cho các nhiệm vụ này.

## Các bước thực hiện
1. Trong AWS Management Console, tìm kiếm và chọn dịch vụ **EventBridge**.

![image](/images/event-bridge/img.png)

2. Chọn **EventBridge Schedule** rồi chọn **Create rules** ở thanh bên trái.

![image](/images/event-bridge/img_1.png)

3. Tại giao diện **Create rule**, điền các thông tin sau:
   - **Name**: `fashion-rds-to-s3-scheduler`
   - **Description**: `Rule to trigger Lambda function for ETL process`
   - Dưới phần **Schedule Pattern** chọn **Recurring schedule**
   - Timezone: `(UTC +07:00) Asia/Saigon`
   - Cron expression: `cron(0 0 * * ? *)` (điều này có nghĩa là nhiệm vụ sẽ chạy mỗi ngày lúc 00:00 giờ Việt Nam)
   - Flexible time window: Để 5 phút (5 minutes)
   - Chọn **Next**

![image](/images/event-bridge/img_2.png)

4. Trong phần **Select targets**, chọn **AWS Lambda** và chọn Lambda Function `fashion-rds-to-s3` đã tạo ở bước trước.

![image](/images/event-bridge/img_3.png)

5. Bấm **Next** để xem lại cấu hình và sau đó bấm **Create schedule** để hoàn tất việc tạo rule.