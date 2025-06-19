+++
title = "5.2 Kiểm tra dữ liệu trong Kinesis Data Stream"
weight = 2
+++

## Kiểm tra dữ liệu trong Kinesis Data Stream

1. Quay trở lại terminal kết nối với EC2 Instance tại bước [2.3 Tạo EC2 Instance](../preparation/setup-ec2.md).
2. Chạy lệnh sau để mô tả luồng Kinesis Data Stream:
```bash
aws kinesis describe-stream --stream-name fashion-ds
```
![alt](/images/test-connection/img_5.png)

3. Chạy lệnh sau để lấy iterator của shard trong luồng Kinesis Data Stream:
```bash
aws kinesis get-shard-iterator --stream-name fashion-ds --shard-id shardId-000000000000 --shard-iterator-type TRIM_HORIZON
```

![alt](/images/test-connection/img_6.png)

4. Copy `ShardIterator` trong kết quả trả về của lệnh trên và chạy lệnh sau để lấy dữ liệu trong luồng Kinesis Data Stream:
```bash
aws kinesis get-records --shard-iterator <YOUR_SHARD_ITERATOR>
```
![alt](/images/test-connection/img_7.png)

5. Trong phần Records:
   - PartitionKey là user ID
   - Data là những dữ liệu JSON được encode trong luồng

6. Kiểm tra dữ liệu, copy một Data bên trong Records. Vào trang [Base64 Decode](https://www.base64decode.org/) để decode dữ liệu vừa copy.
    - Decode UTF-8

![alt](/images/test-connection/img_8.png)