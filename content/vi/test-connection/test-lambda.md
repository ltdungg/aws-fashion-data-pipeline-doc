+++
title = "5.3 Test Lambda Function"
weight = 3
+++

## Chạy thử Lambda Function

1. Vào trang của Lambda Function `lambda-rds-to-s3` trong AWS Console của bạn.
2. Bấm vào **Test**

![img.png](/images/test-connection/img_9.png)

3. Vì mục đích của Lambda theo yêu cầu của sếp là sau một ngày thì sẽ chạy một lần, nên đoạn code sẽ chạy vào đầu ngày hôm sau
tức là lúc 00:01 ngày hôm sau. 
   - Nên muốn test thì phải thêm Event JSON và `DATE_EXECUTION` là ngày bạn chạy lab theo định dạng `Năm-Tháng-Ngày`. Ví dụ "2025-17-04"
   - Trong phần Test:
     - Chọn **Create new event**
     - Nhập tên cho event là `test`
     - Event JSON như sau:
     ```python
        {
          "DATE_EXECUTION": "<Ngày chạy workshop>"
        }
     ```
![img.png](/images/test-connection/img_10.png)

4. Bấm **Test**

5. Bạn đã thành công chạy test 

![alt](/images/test-connection/img_11.png)

6. Vào lại S3 bucket `fashion-landing-zone` và kiểm tra xem đã có dữ liệu chưa nhé.

![alt](/images/test-connection/img_12.png)

