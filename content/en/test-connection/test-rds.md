+++
title = "5.1 Check Data in RDS"
weight = 1
+++

## Check Data in RDS

1. Use the command to access PostgreSQL from the previous step.

```bash
psql -U postgres -h <YOUR_POSTGRESQL_DNS> -p 5432 -d postgres
```

2. If you see a message like the one below, you have successfully connected to the PostgreSQL database.
![alt](/images/generate-data/img_5.png)

3. Run the following command to check data in the `orders` table:

```sql
SELECT * FROM orders;
```

4. Run the following command to check data in the `order_details` table:

```sql
SELECT * FROM order_details;
```

5. Below is an example image of the orders table; your data may differ due to randomness.

![alt](/images/test-connection/img_3.png)

6. Below is an example image of the order_details table; your data may differ due to randomness.

![alt](/images/test-connection/img_4.png)

7. Type `\q` to exit the PostgreSQL database and return to the terminal.

8. You have now completed checking data in RDS. You can use other SQL commands to check data in tables such as `users`, `products`, or perform more complex queries.
