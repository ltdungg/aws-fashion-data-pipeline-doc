+++
title = "5. Test Data"
weight = 5
+++

## Generate Data for Testing
1. Return to the terminal connected to your EC2 Instance.
2. Run the following command to navigate to the directory containing the data generation script:

```bash
cd /home/ec2-user/project/ec2
```
3. Run the following command to generate data:

```bash
python data-generator.py
```
4. After running for a while (about 5 minutes), press `Ctrl + C` to stop. You should see output data in the terminal as shown below.

![img.png](/images/test-connection/img_2.png)

5. You may observe the following:
   - "Order data insert successfully" indicates that order data has been pushed to RDS.
   - The remaining output shows customer interaction data being pushed to the Kinesis stream, with events such as page_view, add_to_cart, and product_view.
