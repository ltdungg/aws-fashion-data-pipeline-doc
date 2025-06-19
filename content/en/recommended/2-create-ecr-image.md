+++
title = "7.2 Create ECR Image for Lambda Function"
weight = 2
+++

## Preparation
For this section, your computer must have Docker and AWS CLI installed. You can refer to the Docker installation guide at [Docker Installation](https://docs.docker.com/get-docker/) and AWS CLI at [AWS CLI Installation](https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2.html)[1].

## Steps to Implement

1. Go to the AWS Management Console and search for the Amazon ECR service by typing **ECR**.
![image](/images/recommendation/img_3.png)

2. In the Amazon ECR interface, select **Create** from the left menu.
![image](/images/recommendation/img_4.png)

3. In the repository creation interface, enter the following information:
   - **Repository name**: `fashion-ecr-repository`
   - Then click **Create** to create the repository.
![image](/images/recommendation/img_5.png)

4. In the interface of the newly created repository, select the repository and click **View push commands** to see the necessary commands for pushing a Docker Image to the repository.
![image](/images/recommendation/img_6.png)

5. In the code you cloned from git, navigate to the `lambda/kinesis-to-dynamo-db` directory and open a terminal there.

6. Open Docker Desktop and execute the commands shown in the Push commands section of AWS ECR in your terminal.
   - **Note**: If you are using Windows to build the Docker Image, you need to add the following to the `docker build` command to be compatible with the lambda function: `--platform linux/amd64` and `--provenance=false`
   - **Example**:
      ```bash
      docker build -t fashion-ecr-repository . --platform linux/amd64 --provenance=false
      ```   
![image](/images/recommendation/img_7.png)

![image](/images/recommendation/img_7.png)

7. After completion, you will see the following:
![image](/images/recommendation/img_8.png)

8. In the ECR repository interface, you will see that the Docker Image has been successfully pushed.
![image](/images/recommendation/img_9.png)
