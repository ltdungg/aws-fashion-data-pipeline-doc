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

5. Chọn nguồn dữ liệu
    - Chọn **S3** rồi chọn **Browse**
    - Chọn bucket `fashion-clean-zone` rồi chọn **Add**
    - Chọn **Next**