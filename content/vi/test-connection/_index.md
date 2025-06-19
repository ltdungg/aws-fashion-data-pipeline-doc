+++
title = "5. Test dữ liệu"
weight = 5
+++

## Tạo dữ liệu để test.
1. Vào lại terminal kết nối với EC2 Instances.
2. Chạy lệnh sau đi đến thư mục chứa file tạo dữ liệu:
```bash
cd /home/ec2-user/project/ec2
```
3. Chạy lệnh sau để tạo dữ liệu:
```bash
python data-generator.py
```
4. Sau khi chạy một lúc (để khoảng 5 phút), hãy bấm `Ctrl + C` để dừng lại. Ta có thể thấy dữ liệu output trên terminal như sau.

![img.png](/images/test-connection/img_2.png)

5. Bạn có thể thấy như sau:
   - Order data insert successfully là dữ liệu order được đẩy vào RDS.
   - Còn lại là dữ liệu tương tác khách hàng được đẩy vào Kinesis stream, với những event như page_view, add_to_cart, product_view.
