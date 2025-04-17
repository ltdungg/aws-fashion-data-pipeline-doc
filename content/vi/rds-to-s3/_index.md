+++
title = "4. Trích xuất dữ liệu từ RDS vào S3"
weight = 4
+++

## Tổng quan
- Trong phần này, chúng ta sẽ sử dụng AWS Lambda để trích xuất dữ liệu từ Amazon RDS và lưu vào Amazon S3. Chúng ta sẽ sử dụng một hàm Lambda đơn giản để thực hiện việc này.
- Hàm Lambda sẽ được kích hoạt sẽ kết nối đến Amazon RDS, thực hiện truy vấn SQL để lấy dữ liệu và sau đó lưu dữ liệu vào Amazon S3 dưới dạng file CSV.
- Đầu tiên tải zip file Lambda function [tại đây](https://github.com/ltdungg/aws-fashion-data-pipeline/blob/main/lambda/rds-to-s3/rds-to-s3-lambda.zip), bấm nút **download raw file** góc bên phải màn hình để tải xuống.
- Đây là code của hàm Lambda, chúng ta sẽ không đi sâu vào chi tiết code trong phần này. Chúng ta chỉ cần biết rằng hàm Lambda này sẽ kết nối đến Amazon RDS, thực hiện truy vấn SQL và lưu dữ liệu vào Amazon S3.

```python
import psycopg2
from datetime import datetime, timedelta
import boto3
import os
import pandas as pd

# Variables
RDS_HOST = os.getenv("RDS_HOST")
RDS_PASSWORD = os.getenv("RDS_PASSWORD")

db_params = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': RDS_PASSWORD,
    'host': RDS_HOST,
    'port': 5432
}
DATE_EXECUTION = None

# S3
RAW_BUCKET = os.getenv("S3_BUCKET")
s3 = boto3.client('s3')

def get_table_data(table_name, query):
    conn = psycopg2.connect(**db_params)
    cursor = conn.cursor()
    print(f"Getting table {table_name} data...")
    # Execute the query
    cursor.execute(query)
    # Fetch all records
    records = cursor.fetchall()
    # Get column names
    col_names = [desc[0] for desc in cursor.description]
    # Convert to DataFrame
    df = pd.DataFrame(records, columns=col_names)

    print(f"Successfully retrieved records from {table_name} table.")
    return df

def put_csv_to_s3(df, bucket_name, file_name):
    # Convert DataFrame to CSV
    csv_data = df.to_csv(index=False)
    # Upload to S3
    s3.put_object(Bucket=bucket_name, Key=file_name, Body=csv_data)
    print(f"File {file_name} uploaded to S3 bucket {bucket_name}")

def lambda_handler(event, context):
    try:
        DATE_EXECUTION = event["DATE_EXECUTION"]
    except Exception as e:
        DATE_EXECUTION = (datetime.now() - timedelta(days=1)).strftime("%Y-%m-%d")

    # Orders Table
    table_name = "orders"
    orders_query = f"""
            SELECT * FROM orders
            WHERE order_date >= '{DATE_EXECUTION} 00:00:00'
            AND order_date <= '{DATE_EXECUTION} 23:59:59'
    """
    orders_df = get_table_data(table_name, orders_query)
    orders_file_name = f"orders/orders_{DATE_EXECUTION}.csv"
    put_csv_to_s3(orders_df, RAW_BUCKET, orders_file_name)

    # Order Details Table
    table_name = "order_details"
    order_details_query = f"""
            SELECT * FROM order_details
            WHERE order_id IN 
                (SELECT id FROM orders
                WHERE order_date >= '{DATE_EXECUTION} 00:00:00'
                AND order_date <= '{DATE_EXECUTION} 23:59:59')
    """
    order_details_df = get_table_data(table_name, order_details_query)
    order_details_file_name = f"order_details/order_details_{DATE_EXECUTION}.csv"
    put_csv_to_s3(order_details_df, RAW_BUCKET, order_details_file_name)

    # Users Table
    table_name = "users"
    users_query = f"""
            SELECT * FROM users
    """
    users_df = get_table_data(table_name, users_query)
    users_file_name = f"users/users_{DATE_EXECUTION}.csv"
    put_csv_to_s3(users_df, RAW_BUCKET, users_file_name)

    # Products Table
    table_name = "products"
    products_query = f"""
            SELECT * FROM products
    """
    products_df = get_table_data(table_name, products_query)
    products_file_name = f"products/products_{DATE_EXECUTION}.csv"
    put_csv_to_s3(products_df, RAW_BUCKET, products_file_name)


    print("All data has been successfully uploaded to S3.")
```
## Truy cập vào S3
1. Truy cập vào AWS Console, tìm kiếm và chọn **S3** từ menu dịch vụ.
2. Bấm vào bucket `fashion-logic-zone` mà chúng ta đã tạo ở phần trước.
3. Tại giao diện bucket, bấm **Upload**

![img.png](/images/rds-to-s3/img_3.png)
4. Tại giao diện **Upload**:
   - Bấm **Add files**, chọn file `rds-to-s3-lambda.zip` mà chúng ta đã tải xuống ở trên.
   - Bấm **Upload**.

![img.png](/images/rds-to-s3/img_4.png)

5. Sau khi upload thành công, chúng ta sẽ thấy file `rds-to-s3-lambda.zip` trong bucket. Lưu lại Object URL của file này, chúng ta sẽ sử dụng nó trong hàm Lambda.

## Tạo Lambda function
1. Truy cập vào AWS Console, tìm kiếm và chọn **Lambda** từ menu dịch vụ.
![img.png](/images/rds-to-s3/img.png)

2. Bấm vào **Create function**.

![img.png](/images/rds-to-s3/img_1.png)

3. Tại giao diện **Create function**
   - Chọn **Author from scratch**.
   - Nhập tên cho function là `lambda-rds-to-s3`.
   - Chọn **Python 3.13** cho Runtime.
   - Bấm Change default execution role.
     - Chọn **Use an existing role**.
     - Chọn role `lambda-s3-full-access` mà chúng ta đã tạo ở phần trước.
   - Bấm **Create function**.

![img.png](/images/rds-to-s3/img_2.png)

4. Tại giao diện **Function code**:
   - Tại phần **Code source**, bấm vào **Upload from** và chọn **Amazon S3 location**.
   - Nhập đường dẫn đến file `rds-to-s3-lambda.zip` mà chúng ta đã upload lên S3 ở phần trước.
   - Bấm **Save**.

![img.png](/images/rds-to-s3/img_5.png)

![img.png](/images/rds-to-s3/img_6.png)

5. Sau khi upload thành công, bấm vào **Configuration**
   - Ở phần **General configuration**, bấm **Edit**.
   - Tại phần **Memory** tăng giá trị lên `512 MB`.
   - Tại phần **Timeout**, nhập giá trị là `5 minutes`.
   - Bấm **Save**.

![img.png](/images/rds-to-s3/img_7.png)

6. Tại giao diện **Configuration**, bấm vào **Environment variables**.
   - Bấm **Edit**.
   - Bấm **Add environment variable**.
   - Nhập các biến môi trường sau:
     - `RDS_HOST`: Địa chỉ endpoint của Amazon RDS mà chúng ta đã tạo ở phần trước.
     - `RDS_PASSWORD`: Mật khẩu của user `postgres` mà chúng ta đã tạo ở phần trước.
     - `S3_BUCKET`: `fashion-landing-zone`.
   - Bấm **Save**.

![img.png](/images/rds-to-s3/img_8.png)

7. Tại giao diện **Configuration**, bấm vào **VPC**.
   - Chọn **Edit**
   - Tại phần **VPC**, chọn VPC mà chúng ta đã tạo ở phần trước.
   - Tại phần **Subnets**, chọn 2 subnet private mà chúng ta đã tạo ở phần trước.
     - fashion-subnet-private1-ap-southeast-1a
     - fashion-subnet-private2-ap-southeast-1b
   - Select **Security groups** chọn default security group của VPC.
   - Bấm **Save**.

![img.png](/images/rds-to-s3/img_9.png)

## Cho phép Lambda truy cập vào RDS
1. Quay lại giao diện fashion-db tại phần **Databases** tại giao diện RDS.
2. Kéo xuống phần **Connected compute resources**, bấm vào **Acion**, chọn **Set up Lambda connection**

![img.png](/images/rds-to-s3/img_10.png)

3. Trong giao diện Set up Lambda connection
   - Chọn choosing existing function
   - Chọn hàm `lambda-rds-to-s3` mà chúng ta đã tạo ở phần trước.
   - Tắt tùy chọn **Connect using Proxy**
   - Bấm **Set up**

![img.png](/images/rds-to-s3/img_11.png)