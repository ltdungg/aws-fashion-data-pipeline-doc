+++
title = "7.2 Tạo ECR Image cho Lambda Function"
weight = 2
+++
## Chuẩn bị
Trong phần này yêu cầu trên máy tính của bạn đã cài đặt Docker và AWS CLI. Bạn có thể tham khảo hướng dẫn cài đặt Docker tại [Docker Installation](https://docs.docker.com/get-docker/) và AWS CLI tại [AWS CLI Installation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html).

## Các bước thực hiện
1. Truy cập vào AWS Management Console và tìm kiếm dịch vụ Amazon ECR bằng cách gõ **ECR**.
![image](/images/recommendation/img_3.png)
2. Trong giao diện Amazon ECR, chọn **Create** từ menu bên trái.
![image](/images/recommendation/img_4.png)
3. Tại giao diện tạo kho chứa (repository), điền các thông tin sau:
   - **Repository name**: `fashion-ecr-repository`
   - Sau đó bấm **Create** để tạo kho chứa.
![image](/images/recommendation/img_5.png)
4. Tại giao diện kho chứa vừa tạo, chọn repository vừa tạo và bấm vào **View push commands** để xem các lệnh cần thiết để đẩy Docker Image lên kho chứa.

![image](/images/recommendation/img_6.png)

5. Trong đoạn code đã clone từ git, bạn cần vào thư mục `lambda/kinesis-to-dynamo-db` và mở terminal tại đó

   6. Mở Docker Desktop và thực hiện các lệnh như trên hiển thị trong giao diện Push commands của AWS ECR trên terminal.
      - **Lưu ý**: Nếu sử dụng Windows để thực hiện build Docker Image, bạn cần thêm lệnh sau vào lệnh `docker build` để phù hợp với lambda function `--platform linux/amd64` và `--provenance=false`
      - **Ví dụ**: 
      ```bash
      docker build -t fashion-ecr-repository . --platform linux/amd64 --provenance=false
      ```   
![image](/images/recommendation/img_7.png)

7. Sau khi thực hiện xong sẽ hiển thị như sau

![image](/images/recommendation/img_8.png)

8. Trong giao diện kho chứa ECR, bạn sẽ thấy Docker Image đã được đẩy lên thành công.

![image](/images/recommendation/img_9.png)

