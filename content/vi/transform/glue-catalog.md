+++
title = "6.2 Tạo Catalog cho Clean Zone"
weight = 2
+++

## Tạo Glue Data Catalog cho Landing Zone
1. Truy cập **Amazon Management Console**
    - Tìm kiếm dịch vụ Glue
    - Chọn **Glue** từ kết quả tìm kiếm

![alt](/images/transform/catalog-1.png)

2. Tạo Database cho Glue Data Catalog
    - Trong phần Glue Data Catalog chọn **Databases** rồi chọn **Add database**
    - Nhập tên database là `fashion-clean-zone`
    - Chọn **Create**

![alt](/images/transform/catalog-2.png)

![alt](/images/transform/catalog-3.png)

3. Tạo table cho Glue Data Catalog
    - Bấm vào database `fashion-clean-zone` vừa tạo
    - Chọn **Add table** rồi chọn **Add tables using a crawler**

![alt](/images/transform/catalog-4.png)

4. Trong phần crawler properties
    - Nhập tên crawler là `fashion-clean-zone-crawler`
    - Chọn **Next**

![alt](/images/transform/catalog-5.png)

5. Chọn nguồn dữ liệu bấm vào **Add a data source**
    - Chọn **S3** rồi chọn **Browse**
    - Chọn bucket `fashion-clean-zone` rồi chọn **Add**
    - Chọn **Next**

![alt](/images/transform/catalog-6.png)
![alt](/images/transform/catalog-7.png)

6. Trong phần IAM role
    - Chọn **Create an IAM role**
    - Nhập tên role là `AWSGlueServiceRole-FashionCrawlerRole`
    - Chọn **Next**

![alt](/images/transform/catalog-8.png)

7. Trong phần Set output and scheduling
   - Target database: Chọn database `fashion-clean-zone`
   - **Frequency** chọn Daily và nhập 17:00 (UTC là 00:00 giờ Việt Nam)
   - Chọn **Next**

![alt](/images/transform/catalog-9.png)

8. Trong phần Review
   - Chọn **Finish**

![alt](/images/transform/catalog-10.png)

9. Chọn **Run Crawler** và đợi quá trình crawler hoàn thành. Quá trình này sẽ mất khoảng 1 phút.

## Kiểm tra kết quả với Athena
1. Truy cập dịch vụ **Athena** từ AWS Management Console.
![alt](/images/transform/athena-1.png)

2. Bấm vào **Launch Query Editor**

![alt](/images/transform/athena-2.png)

3. Trong giao diện Query Editor, bấm vào **Settings** bấm **Manage**
   - Bên dưới phần **Location of query result** bấm **Browse S3** và chọn bucket `fashion-logic-zone`
   - Chọn **Save**

![alt](/images/transform/athena-3.png)

4. Quay lại phần **Editor**
   - Phía bên trái, chọn Data Source là AwsDataCatalog
   - Chọn Database là `fashion-clean-zone`
   - Sau đó có thể gõ câu lệnh SQL để truy vấn dữ liệu. Ví dụ:
   ```sql
   SELECT * FROM "fashion-clean-zone"."clickstreams" limit 10;
   ```

![alt](/images/transform/athena-4.png)