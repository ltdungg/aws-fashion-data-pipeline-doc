+++
title = "3. Tạo môi trường ứng dụng"
weight = 3
+++

## Tổng quan
- Trong phần này, ta sẽ tạo môi trường ứng dụng cho Data Pipeline.
- Môi trường bao gồm:
  - EC2 Instance: Nơi tạo ra dữ liệu giả và khởi tạo các table database.
  - RDS: Database PostgreSQL để lưu trữ dữ liệu giả.

Mô hình database bao gồm 4 bảng:
- products, users, orders và order_details

![alt](/images/generate-data/1.png)

## Các bước triển khai
1. Quay lại giao diện RDS
   - Chọn **Databases** từ menu bên trái
   - Bấm vào **fashion-db**

![alt](/images/generate-data/img.png)

2. Tại giao diện fashion-db, lưu lại **Endpoint** của database vào một nơi nào đó.

![alt](/images/generate-data/img_1.png)

3. Kéo xuống phần Connected compute resources
   - Bấm vào **Actions**
   - Chọn **Set up EC2 connection**

![alt](/images/generate-data/img_2.png)

4. Tại giao diện Set up EC2 connection
   - Phần EC2 Instance, chọn **fashion-webapp**
   - Chọn continue
   - Tại phần Review and confirm, chọn Set up

![alt](/images/generate-data/img_3.png)

5. Khi hoàn tất, bạn sẽ thấy một thông báo như sau:

![alt](/images/generate-data/img_4.png)

6. Quay trở lại terminal kết nối với EC2 Instance tại bước [2.3 Tạo EC2 Instance](../preparation/setup-ec2.md).

7. Test kết nối tới database PostgreSQL với DNS Database bạn đã lưu lúc trước:
    - Dùng lệnh sau để kết nối tới database PostgreSQL, sau đó nhập password database bạn vừa tạo.

```bash
psql -U postgres -h <YOUR_POSTGRESQL_DNS> -p 5432 -d postgres
```
8. Nếu bạn thấy thông báo như sau thì bạn đã kết nối thành công tới database PostgreSQL.
    - Còn nếu không hiện lên đúng hình ảnh phía dưới, xem lại các bước trên nhé.
![alt](/images/generate-data/img_5.png)

9. Gõ `\q` để thoát khỏi database PostgreSQL. và trở về terminal.

10. Tạo môi trường cho việc tạo dữ liệu giả:
    - Gõ lệnh sau: `vim .env`
    - Tại vim, bấm **i** để vào chế độ nhập liệu.
    - Nhập các thông tin sau vào file `.env`:
      - RDS_HOST: là DNS của database PostgreSQL bạn đã lưu ở bước 2.
      - RDS_PASSWORD: là password của database PostgreSQL bạn đã tạo ở bước 2.
      - KINESIS_STREAM_NAME: `fashion-ds`
      - STREAM_ARN: Là ARN của Kinesis Stream bạn đã tạo ở bước [2.6 Tạo Kinesis Stream](../preparation/setup-kinesis.md).
    - Bấm **Esc** để thoát khỏi chế độ nhập liệu.
    - Gõ `:wq` để lưu lại file `.env` và thoát khỏi vim.

![alt](/images/generate-data/img_6.png)

11. Tạo table cho database :
    - Trong phần này, ta sẽ tạo 4 bảng cho database trên RDS
    - Đồng thời cũng tạo ra dữ liệu giả cho 1000 users và bảng products

```bash
python initdb.py
```

12. Nếu bạn thấy thông báo như sau thì bạn đã tạo thành công database và dữ liệu giả cho 1000 users và bảng products.
![alt](/images/generate-data/img_7.png)

13. Xem các bảng đã tạo trong database PostgreSQL:
    - Gõ lệnh tại bước 7 để kết nối với database PostgreSQL.
    - Gõ lệnh sau để xem các bảng đã tạo trong database PostgreSQL:
```sql
    SELECT * FROM information_schema.tables WHERE table_schema = 'public';
```

![alt](/images/generate-data/img_8.png)

14. Xem tất cả dữ liệu trong bảng (Tùy chọn):
```sql
    SELECT * FROM <TABLE_NAME>;
--- Ví dụ:
    SELECT * FROM users;
```

15. Bạn đã thành công trong việc tạo môi trường ứng dụng cho Data Pipeline.
