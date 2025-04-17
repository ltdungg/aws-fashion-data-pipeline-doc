+++
title = "2.6 Tạo Kinesis Data Stream"
weight = 6
+++

## Tạo Kinesis Data Stream
1. Truy cập **Amazon Management Console**
    - Tìm kiếm dịch vụ Kinesis
    - Chọn **Kinesis** từ kết quả tìm kiếm

![alt](/images/preparation/kinesis-1.png)

2. Trong phần giao diện Kinesis chọn **Kinesis Data Streams** rồi chọn **Create data stream**

![alt](/images/preparation/kinesis-2.png)

3. Trong giao diện Create data stream
    - Chọn **Name** là `fashion-ds`
    - Chọn **Provisioned**
    - Phần Provisioned shards nhập 1
    - Chọn **Create data stream**

![alt](/images/preparation/kinesis-3.png)

4. Sau khi tạo xong bạn sẽ thấy giao diện như sau, lưu lại ARN của Kinesis Data Stream này để sử dụng trong các bước sau.

![alt](/images/preparation/kinesis-4.png)