+++
title = "7.3 Tạo Lambda Function"
weight = 3
+++

## Các bước thực hiện
1. Truy cập vào AWS Management Console và tìm kiếm dịch vụ **Lambda** bằng cách gõ **Lambda**.
![image](/images/recommendation/img_10.png)
2. Trong giao diện Lambda, chọn **Create function**.

3. Tại giao diện Create function, chọn **Container image**.
    - **Function name**: `kinesis-to-dynamodb`
    - **Container image URI**: Chọn Browse images và chọn kho chứa ECR `fashion-ecr-repository` và Docker Image đã tạo ở bước trước. Nhớ chọn image vơới tag là `lastest`. ![image](/images/recommendation/img_11.png)
    - **Execution role**: Chọn **Use an existing role** và chọn role `lambda-kinesis-dynamodb-role` đã tạo ở bước trước.
    - Chọn **Create function** để tạo Lambda Function.

![image](/images/recommendation/img_12.png)

4. Sau khi tạo xong, vào Configuration của Lambda Function, trong phần **VPC** chọn **Edit** và cấu hình như sau:
    - Chọn General configuration, chọn **Edit** và cấu hình timeout là 5 phút và Memory là 512MB.
    - Xuống phần **Environment** chọn Edit và thêm các biến môi trường sau:
      - `KINESIS_DATA_STREAM_NAME`: `fashion-ds`
      - `KINESIS_DATA_STREAM_ARN`: Lấy ARN của Kinesis Data Stream `fashion-ds` từ AWS Kinesis Data Streams.
      - `DYNAMODB_TABLE_NAME`: `fashion-rcm-table`
      - `CLEAN_ZONE_DATABASE_CATALOG`: `fashion-clean-zone`
    ![image](/images/recommendation/img_13.png)

5. Tạo Trigger cho Lambda Function:
   - Mục đích: Kết nối Lambda Function với Kinesis Data Stream để nhận dữ liệu từ stream mỗi khi có sự kiện mới.
   - Trong giao diện chính của Lambda Function, chọn **Add trigger**.
   ![image](/images/recommendation/img_14.png)

   - Chọn **Kinesis** từ danh sách dịch vụ. Chọn Kinesis Data Stream `fashion-ds` đã tạo ở bước trước.
   - Chọn **Batch size** là 1 (số lượng bản ghi tối đa mà Lambda sẽ xử lý trong một lần gọi).
   - Chọn **Add**
   ![image](/images/recommendation/img_15.png)

