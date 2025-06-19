+++
title = "2.7 Tạo Kinesis Firehose"
weight = 7
+++

## Tạo Kinesis Firehose
1. Truy cập **Amazon Management Console**
    - Tìm kiếm dịch vụ Firehose
    - Chọn **Amazon Data Firehose** từ kết quả tìm kiếm

![alt](/images/preparation/firehose-1.png)

2. Trong phần giao diện Kinesis Firehose chọn **Create Firehose stream**

![alt](/images/preparation/firehose-2.png)

3. Trong giao diện Create Firehose stream
    - Chọn **Source** là `Amazon Kinesis Data Stream`
    - Chọn **Destination** là `Amazon S3`
    - Chọn **Name** là `fashion-ds-firehose`
    - Trong source settings chọn **browse** và chọn Kinesis Data Stream đã tạo ở bước trước.
    - Trong phần Destination setting chọn **Browse** và chọn bucket `fashion-landing-zone`.
    - Phần **New line delimiter**: Chọn **Enabled**
    - Tại S3 bucket prefix nhập `clickstreams/` 
    - Dưới buffer hints, compression, file extension and encryption:
      - Để mặc định bufer size là 5MB
      - Để mặc định bufer interval là 300s 
    - Chọn **Create Firehose stream**

![alt](/images/preparation/firehose-3.png)
![alt](/images/preparation/firehose-4.png)
![alt](/images/preparation/firehose-5.png)


