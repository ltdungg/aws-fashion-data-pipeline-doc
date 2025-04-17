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
4. Sau khi chạy một lúc, hãy bấm `Ctrl + C` để dừng lại. Ta có thể thấy dữ liệu output trên terminal như sau.

![img.png](/images/test-connection/img_2.png)

5. Bạn có thể thấy như sau:
   - Order data insert successfully là dữ liệu order được đẩy vào RDS.
   - Còn lại là dữ liệu tương tác khách hàng được đẩy vào Kinesis stream, với những event như page_view, add_to_cart, product_view.

6. Bạn có thể xem code tạo dữ liệu ở bên dưới (Tùy chọn)

## Code tạo dữ liệu
```python
import faker
import json
import random
from datetime import datetime
import pandas as pd
import psycopg2
from dotenv import load_dotenv
import os
import threading
import base64
import time
import boto3

# RDS Parameters
load_dotenv(".env")
RDS_HOST = os.getenv("RDS_HOST")
RDS_PASSWORD = os.getenv("RDS_PASSWORD")
LAST_ORDER_ID = None

db_params = {
    'dbname': 'postgres',
    'user': 'postgres',
    'password': RDS_PASSWORD,
    'host': RDS_HOST,
    'port': 5432
}

# Kinesis Parameters
STREAM_NAME = os.getenv("KINESIS_STREAM_NAME")
STREAM_ARN = os.getenv("STREAM_ARN")


def get_conn_and_cursor():
    try:
        conn = psycopg2.connect(**db_params)
        cursor = conn.cursor()
        return conn, cursor
    except (Exception) as e:
        return f"Error: {e}"

def get_last_order_id(conn, cursor):
    global LAST_ORDER_ID
    try:
        cursor.execute('SELECT MAX(id) FROM orders')
        result = cursor.fetchone()
        if result[0] is not None:
            LAST_ORDER_ID = result[0]
        else:
            LAST_ORDER_ID = None
    except (Exception) as e:
        raise f"Error: {e}"

def get_rds_user_id(conn, cursor):
    try:
        cursor.execute('SELECT id FROM users')
        result = cursor.fetchall()
        user_id = [row[0] for row in result]
        return user_id
    except (Exception) as e:
        return f"Error: {e}"

def get_rds_product(conn, cursor):
    try:
        cursor.execute('SELECT id, price FROM products')
        result = cursor.fetchall()
        product_id = [(row[0], row[1]) for row in result]
        return product_id
    except (Exception) as e:
        return f"Error: {e}"

def generate_clickstream_data(user_id, product_id):
    event_type_enum = ['page_view', 'add_to_cart', 'product_view']
    event_type = random.choice(event_type_enum)
    clickstream_data = {
        'user_id': random.choice(user_id),
        'timestamp': datetime.now().strftime("%Y-%m-%d %H:%M:%S"),
        'event_type': event_type,
        'product_id': random.choice(product_id) if event_type in ['add_to_cart', 'product_view'] else None
    }
    return clickstream_data

def generate_order_data(user_id, products):
    global LAST_ORDER_ID
    if LAST_ORDER_ID is None:
        LAST_ORDER_ID = 0
    else:
        LAST_ORDER_ID = LAST_ORDER_ID + 1
    user_id = random.choice(user_id)
    order_date = datetime.now()

    numbers_of_product = random.randint(1, 10)
    order_details = []
    random_products = random.sample(products, numbers_of_product)
    total_price = 0
    for i in range(numbers_of_product):
        purchase_product = {
           'order_id': int(LAST_ORDER_ID),
           'product_id': int(random_products[i][0]),
           'quantity': int(random.randint(1, 5)),
           'unit_price': float(random_products[i][1])
        }
        total_price += random_products[i][1] * purchase_product['quantity']
        order_details.append(purchase_product)
    order_data = {
        'id': LAST_ORDER_ID,
        'user_id': user_id,
        'order_date': order_date,
        'total_price': total_price
    }

    order_df = pd.DataFrame(order_data, index=[0])
    order_details_df = pd.DataFrame(order_details)
    return [order_df, order_details_df]

def clickstream_task(user_id, product_id):
    kinesis_client = boto3.client('kinesis', region_name='ap-southeast-1')
    while True:
        clickstream_data = generate_clickstream_data(user_id, product_id)
        print(clickstream_data)
        clickstream_json = json.dumps(clickstream_data)
        kinesis_client.put_record(
            StreamName=STREAM_NAME,
            Data=base64.b64encode(clickstream_json.encode()),
            PartitionKey=str(clickstream_data['user_id']),
            StreamARN=STREAM_ARN
        )
        time.sleep(random.uniform(0, 2))

def order_task(conn, cursor, user_id, products):
    while True:
        order_data = generate_order_data(user_id, products)

        # Insert order data into the database
        orders_tuple = [tuple(row) for row in order_data[0].values]
        order_insert_query = """
            INSERT INTO orders (id, user_id, order_date, total_price) VALUES (%s, %s, %s, %s)
        """
        cursor.executemany(order_insert_query, orders_tuple)

        # Insert order details data into the database
        order_details_tuple = [tuple(row) for row in order_data[1].values]

        for i in range(len(order_details_tuple)):
            order_details_tuple[i] = (int(order_details_tuple[i][0]), int(order_details_tuple[i][1]), int(order_details_tuple[i][2]), float(order_details_tuple[i][3]))

        order_details_insert_query = """
            INSERT INTO order_details (order_id, product_id, quantity, unit_price) VALUES (%s, %s, %s, %s)
        """
        cursor.executemany(order_details_insert_query, order_details_tuple)
        conn.commit()

        print("Order data inserted successfully. Order ID: ", order_data[0]['id'].values[0])
        time.sleep(random.randint(0, 3))

if __name__ == "__main__":
    # Create database connection
    conn, cursor = get_conn_and_cursor()

    # Get last order ID
    get_last_order_id(conn, cursor)

    # Get user and product data
    products = get_rds_product(conn, cursor)
    user_id = get_rds_user_id(conn, cursor)

    product_id = [product[0] for product in products]

    # Start clickstream task
    clickstream_thread = threading.Thread(target=clickstream_task, args=(user_id, product_id))
    clickstream_thread.start()

    # Start order task
    order_thread = threading.Thread(target=order_task, args=(conn, cursor, user_id, products))
    order_thread.start()
```