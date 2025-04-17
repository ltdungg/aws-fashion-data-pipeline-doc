+++
title = "5.1 Kiểm tra dữ liệu trong RDS"
weight = 1
+++
## Kiểm tra dữ liệu trong RDS.
1. Sử dụng lệnh truy cập vào PostgreSQL ở bước trước.
```bash
psql -U postgres -h <YOUR_POSTGRESQL_DNS> -p 5432 -d postgres
```
2. Nếu bạn thấy thông báo như sau thì bạn đã kết nối thành công tới database PostgreSQL.
![alt](/images/generate-data/img_5.png)

2. Chạy lệnh sau để kiểm tra dữ liệu trong bảng `orders`:
```sql
SELECT * FROM orders;
```

3. Chạy lệnh sau để kiểm tra dữ liệu trong bảng `order_details`:
```sql
SELECT * FROM order_details;
```

4. Dưới đây là hình ảnh bảng orders ví dụ, có thể dữ liệu sẽ khác nhau do random.

![alt](/images/test-connection/img_3.png)

5. Dưới đây là hình ảnh bảng order_details ví dụ, có thể dữ liệu sẽ khác nhau do random.

![alt](/images/test-connection/img_4.png)

6. Gõ `\q` để thoát khỏi database PostgreSQL. và trở về terminal.
7. Vậy là bạn đã hoàn tất việc kiểm tra dữ liệu trong RDS. Bạn có thể sử dụng các câu lệnh SQL khác để kiểm tra dữ liệu trong các bảng khác như `users`, `products` hoặc thực hiện các truy vấn phức tạp hơn.