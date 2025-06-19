+++
title = "6.1 Tạo Glue Job"
weight = 1
+++

## Tổng quan
Trong phần này chúng ta sẽ tạo Glue Job để chuyển đổi dữ liệu từ S3 bucket `fashion-landing-zone` sang S3 bucket `fashion-clean-zone`.

## Tạo Glue Job 
1. Đăng nhập vào AWS Management Console và tìm kiếm dịch vụ AWS Glue.

![image](/images/transform/glue-job-1.png)

2. Tại giao diện AWS Glue, chọn "Go to ETL jobs" từ menu bên trái

![image](/images/transform/glue-job-2.png)

3. Tại giao diện ETL jobs, chọn **Create job from a blank graph** hoặc **Visual ETL** để tạo Glue Job mới

![image](/images/transform/glue-job-3.png)

4. Tại giao diện tạo Glue Job mới, bấm vào **Script** sau đó bấm vào **Edit Script** chọn **Confirm**

![image](/images/transform/glue-job-4.png)

5. Sao chép mã từ đường dẫn sau và dán vào ô **Script**: [Glue Job Script](https://github.com/ltdungg/aws-fashion-data-pipeline/blob/main/glue/transform/transform.py)
- Sau đó tại dòng thứ 13, điền tên S3 bucket của bạn vào biến `LANDING_BUCKET`
- Tại dòng thứ 14, điền tên S3 bucket của bạn vào biến `CLEAN_BUCKET`
- Sau đó bấm vào **Job details**. 

![image](/images/transform/glue-job-5.png)

6. Tại giao diện Job details, điền các thông tin sau:
- **Name**: `fashion-datalake-etl`
- **IAM role**: Chọn IAM Role **"AWS-Glue-S3-Full-Access"** mà bạn đã tạo ở phần trước.
- Kéo xuống dưới cùng, bấm vào **Advanced properties**
- Tại **Script path**: Nhập đường dẫn như sau `s3://<YOUR-BUCKET-LOGIC-ZONE>/fashion-datalake-etl/script/`
- Tại **Spark UI logs path**: Nhập đường dẫn như sau `s3://<YOUR-BUCKET-LOGIC-ZONE>/fashion-datalake-etl/sparkHistoryLogs/`
- Tại **Temporary path**: Nhập đường dẫn như sau `s3://<YOUR-BUCKET-LOGIC-ZONE>/fashion-datalake-etl/temporary/`
- Bấm **Save** để lưu lại Glue Job.

![image](/images/transform/glue-job-6.png)
![image](/images/transform/glue-job-6-2.png)
![image](/images/transform/glue-job-6-3.png)

7. Lên lịch chạy Glue Job tự động sau một ngày:
- Tại giao diện Glue Job, chọn **Schedules** từ menu bên trái
- Bấm **Create schedule**

![image](/images/transform/glue-job-7.png)

8. Tại giao diện tạo lịch chạy Glue Job vào 0:00 hằng ngày, điền các thông tin sau:
- **Name**: `fashion-datalake-etl-schedule`
- **Frequency**: Chọn **Daily**
- **Start hour**: Nhập **17** vì lịch chạy theo giờ UTC, nên cần -7 giờ để chạy vào 0:00 giờ theo giờ Việt Nam.
- **Minute of the hour**: Nhập **0**
- Chọn **Create schedule** để tạo lịch chạy Glue Job

![image](/images/transform/glue-job-8.png)

## Chạy Glue Job
1. Tại giao diện Glue Job, chọn **Run**, sau đó chọn **Runs** ở menu bên trái để kiểm tra trạng thái chạy Glue Job.

![image](/images/transform/glue-job-9.png)

![image](/images/transform/glue-job-10.png)

2. Đợi một chút để Glue Job chạy xong, sau đó kiểm tra trạng thái Glue Job đã chạy thành công hay chưa. Nếu trạng thái là **Succeeded** thì Glue Job đã chạy thành công.

![image](/images/transform/glue-job-11.png)

3. Kiểm tra dữ liệu trong S3 bucket `fashion-clean-zone` đã có dữ liệu hay chưa. Nếu có dữ liệu thì Glue Job đã chạy thành công.

4. Kiểm tra output của Glue Job ở trong CloudWatch Logs
- Vào dịch vụ **CloudWatch**, chọn **Log groups**
- Sau đó tìm kiếm log group có tên là `/aws-glue/jobs/output` và bấm vào
- Tại đây bạn sẽ thấy các log của Glue Job mà bạn đã chạy.