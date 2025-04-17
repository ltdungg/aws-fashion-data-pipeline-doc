+++
title = "2.3 Tạo EC2 Instance"
weight = 3
+++

## Tạo Elastic Compute Cloud (EC2) Instance
1. Truy cập **Amazon Management Console**
    - Tìm kiếm dịch vụ EC2
    - Chọn **EC2** từ kết quả tìm kiếm

![alt](/images/preparation/ec2-1.png)

2. Chọn **Launch Instance**

![alt](/images/preparation/ec2-2.png)

3. Trong giao diện Launch Instance
   - Name: `fashion-webapp`
   - Amazon Machine Image (AMI): `Amazon Linux 2023 AMI`
   - Instance Type: `t2.micro`

![alt](/images/preparation/ec2-3.png)

4. Tại phần Key pair, chọn **Create new key pair**
   - Key pair name: `fashion-keypair`
   - Key pair type: `RSA`, private key file format: `.pem`
   - Chọn Create key pair

5. Tại phần Network Settings, chọn Edit:
   - VPC: `fashion-vpc`
   - Subnet: `fashion-subnet-public1-ap-southeast-1a`
   - Auto-assign Public IP: `Enable`
   - Security Group chọn Create security group
     - security group name: `fashion-webapp-sg`
     - description: `Allow SSH from My IP, and HTTP, HTTPS from everywhere`

![alt](/images/preparation/ec2-4.png)

6. Tại Inbound Security Group Rules, cài đặt như hình sau

![alt](/images/preparation/ec2-5.png)

7. Còn lại để mặc định, nhấn **Launch instance** để hoàn tất việc tạo EC2 Instance

## Cài đặt môi trường bên trong EC2 Instance
1. Kết nối SSH vào EC2 Instance
   - Di chuyển tới thư mục chứa file `fashion-keypair.pem`
   - Sử dụng terminal, gõ lệnh sau:
     ```bash
     ssh -i fashion-keypair.pem ec2-user@<Public IP | Public DNS>
     ```
   - Gõ 'yes'
   - Nếu không kết nối được, hãy kiểm tra lại Security Group đã cho phép SSH từ IP của bạn chưa nhé.

![alt](/images/preparation/ec2-6.png)

2. Cài đặt môi trường Python, Git, PostgreSQL cho EC2 Instance 
- Đầu tiên, gõ `sudo su` để chuyển sang user root
- Cài đặt các gói cần thiết (quá trình mất khoảng 5-10 phút):
```bash
dnf install -y git tar gcc \
                   zlib-devel bzip2-devel readline-devel \
                   sqlite sqlite-devel openssl-devel \
                   tk-devel libffi-devel xz-devel

curl https://pyenv.run | bash && \
    echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc && \
    echo '[[ -d $PYENV_ROOT/bin ]] && export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc && \
    echo 'eval "$(pyenv init -)"' >> ~/.bashrc && \
    source ~/.bashrc && \
    pyenv install 3.12.4 && \
    pyenv global 3.12.4
 
sudo yum install postgresql17-server.x86_64 -y
```

- Kiểm tra lại phiên bản Python đã cài đặt
```bash
python --version
```

- Kiểm tra lại phiên bản PostgreSQL đã cài đặt
```bash
psql --version
```

3. Clone repository từ github về EC2 Instance
```bash
git clone --sparse --filter=blob:none https://github.com/ltdungg/aws-fashion-data-pipeline.git project
cd project
git sparse-checkout init
git sparse-checkout set ec2
cd ec2
```

4. Cài đặt các thư viện cần thiết
```bash
pip install -r requirements.txt
```

## Gắn role cho EC2 để ghi vào Kinesis Data Stream
1. Về giao diện EC2 Instances bấm vào `fashion-webapp`, chọn Actions, Security, Modify IAM role.

![img.png](/images/test-connection/img.png)

2. Chọn `ec2-kinesis-role` mà chúng ta đã tạo ở phần trước.

![img.png](/images/test-connection/img_1.png)

3. Bấm **Update IAM role**.
