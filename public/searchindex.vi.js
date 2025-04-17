var relearn_searchindex = [
  {
    "breadcrumb": "AWS Fashion Pipeline",
    "content": "A Data Pipeline for Fashion Store Dữ liệu Workshop này bao gồm những dữ liệu sau:\nCác sản phẩm quần áo được lấy từ Kaggle Dữ liệu người dùng, mua hàng, clickstream tự tạo bằng Faker Python Bối cảnh Giả sử bạn là Data Engineer tại một cửa hàng bán quần áo online, sếp bạn muốn biết sự quan tâm của khách hàng vào những sản phẩm nào cũng như là phân tích xem xu hướng thời trang hiện tại như thế nào.\nSếp của bạn có những yêu cầu sau:\nKhi người dùng bấm vào hoặc thêm vào giỏ hàng một sản phẩm, trực tiếp được chuyển vào kho lưu trữ, đồng thời chuyển đổi và làm giàu để ML có thể dự đoán xu hướng của thời trang hiện tại và đưa ra các gợi ý sản phẩm cho người dùng real-time. Sau đó dữ liệu gợi ý cho từng User được lưu vào nơi để có thể trực tiếp gợi ý cho người dùng ở trên webiste. Yêu cầu thứ 2 là, sau khi người dùng mua hàng, thì kết thúc một ngày, dữ liệu cần được tổng hợp, làm sạch và chuyển vào kho lưu trữ để sẵn sàng cho mục đích phân tích để tìm ra hướng cho chiến lược marketing tiếp theo. Và ngay sau đó bạn nảy ra ý tưởng triển khai trên Amazon Web Service như sau.\nÝ tưởng Bạn nghĩ ra một hệ thống kết hợp giữa Batch Processing và Real-Time Processing như sau:\nTriển khai hệ thống Database trên Amazon RDS, nơi xử lý các giao dịch mua hàng của người dùng,…\nTriển khai hệ thống Data Lake bằng Amazon S3 trên AWS để lưu trữ dữ liệu tổng hợp của cửa hàng.\nXây dựng Glue Data Catalog để có thể trực tiếp phân tích dữ liệu từ Data Lake bằng Athena, hoặc Redshift Spectrum\nĐối với luồng dữ liệu tương tác khách hàng (Clickstream), ta sẽ tạo một Kinesis Data Stream sau đó có 2 Consumer:\nDữ liệu trực tuyến đi qua Lambda, và mỗi 5 phút sẽ tổng hợp dữ liệu Clickstream của người dùng đó rồi đưa ra gợi ý sản phẩm đẩy vào DynamoDB. Consumer còn lại đi vào Kinesis Firehose, để đẩy vào Data Lake, nơi Data Analysis phân tích dữ liệu và đưa ra xu hướng thời trang, cũng như là doanh số,… Lên lịch cho những công việc với Amazon MWAA\nDữ liệu clickstream đi vào Lambda mỗi 5 phút. Sau một ngày dữ liệu từ RDS đi vào S3 vào 00:01 ngày hôm sau. Sau lúc bạn ghi ra những ý tưởng, đầu bạn nảy ra một hệ thống trên AWS có kiến trúc như sau\nKiến trúc hệ thống",
    "description": "A Data Pipeline for Fashion Store Dữ liệu Workshop này bao gồm những dữ liệu sau:\nCác sản phẩm quần áo được lấy từ Kaggle Dữ liệu người dùng, mua hàng, clickstream tự tạo bằng Faker Python Bối cảnh Giả sử bạn là Data Engineer tại một cửa hàng bán quần áo online, sếp bạn muốn biết sự quan tâm của khách hàng vào những sản phẩm nào cũng như là phân tích xem xu hướng thời trang hiện tại như thế nào.",
    "tags": [],
    "title": "1. Giới thiệu",
    "uri": "/vi/overview/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "Tạo role cho Lambda truy cập vào S3 Truy cập vào AWS Console, chọn IAM từ menu dịch vụ. Chọn Roles từ menu bên trái, bấm vào Create role. Tại giao diện Select trusted entity, chọn AWS service, sau đó chọn Lambda từ danh sách dịch vụ. Bấm Next.",
    "description": "Tạo role cho Lambda truy cập vào S3 Truy cập vào AWS Console, chọn IAM từ menu dịch vụ. Chọn Roles từ menu bên trái, bấm vào Create role. Tại giao diện Select trusted entity, chọn AWS service, sau đó chọn Lambda từ danh sách dịch vụ. Bấm Next.",
    "tags": [],
    "title": "2.1 Tạo các Role cần thiết",
    "uri": "/vi/preparation/setup-role/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline",
    "content": "Tổng quan Đầu tiên là tạo một môi trường ảo, coi như đây là môi trường ứng dụng của cửa hàng. EC2 Instance sẽ là máy chủ giả, nơi tạo ra dữ liệu cho lab. RDS Instance sẽ là cơ sở dữ liệu, dành cho các giao dịch… S3 Bucket sẽ là Data Lake, bao gồm các bucket sau: fashion-landing-zone: Nơi lưu trữ dữ liệu thô từ các nguồn khác nhau. fashion-clean-zone: Nơi lưu trữ dữ liệu đã được xử lý và chuẩn bị cho việc phân tích. fashion-logic-zone: Nơi lưu trữ các script Lambda và mã nguồn cho các quy trình ETL (Extract, Transform, Load). Các bước triển khai Đảm bảo để Region là Singapore (ap-southeast-1) trước khi thực hiện các bước sau:\n2.1 Tạo các Role cần thiết\n2.2 Tạo VPC, Subnet, …\n2.3 Tạo EC2 Instance\n2.4 Tạo RDS Instance\n2.5 Tạo S3 Bucket",
    "description": "Tổng quan Đầu tiên là tạo một môi trường ảo, coi như đây là môi trường ứng dụng của cửa hàng. EC2 Instance sẽ là máy chủ giả, nơi tạo ra dữ liệu cho lab. RDS Instance sẽ là cơ sở dữ liệu, dành cho các giao dịch… S3 Bucket sẽ là Data Lake, bao gồm các bucket sau: fashion-landing-zone: Nơi lưu trữ dữ liệu thô từ các nguồn khác nhau. fashion-clean-zone: Nơi lưu trữ dữ liệu đã được xử lý và chuẩn bị cho việc phân tích. fashion-logic-zone: Nơi lưu trữ các script Lambda và mã nguồn cho các quy trình ETL (Extract, Transform, Load). Các bước triển khai Đảm bảo để Region là Singapore (ap-southeast-1) trước khi thực hiện các bước sau:",
    "tags": [],
    "title": "2. Các bước chuẩn bị",
    "uri": "/vi/preparation/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "Tạo VPC (Virtual Private Cloud) Truy cập Amazon Management Console Tìm kiếm dịch vụ VPC Chọn VPC từ kết quả tìm kiếm Trong phần giao diện VPC chọn Create VPC Trong giao diện Create VPC Chọn VPC and more name tag auto-generation ghi: fashion IPv4 CIDR block: 10.10.0.0/16 Còn lại để mặc định, chọn Create VPC ở phía bên dưới màn hình.",
    "description": "Tạo VPC (Virtual Private Cloud) Truy cập Amazon Management Console Tìm kiếm dịch vụ VPC Chọn VPC từ kết quả tìm kiếm Trong phần giao diện VPC chọn Create VPC Trong giao diện Create VPC Chọn VPC and more name tag auto-generation ghi: fashion IPv4 CIDR block: 10.10.0.0/16",
    "tags": [],
    "title": "2.2 Tạo VPC, Subnet, ...",
    "uri": "/vi/preparation/setup-env/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "Tạo Elastic Compute Cloud (EC2) Instance Truy cập Amazon Management Console Tìm kiếm dịch vụ EC2 Chọn EC2 từ kết quả tìm kiếm Chọn Launch Instance Trong giao diện Launch Instance Name: fashion-webapp Amazon Machine Image (AMI): Amazon Linux 2023 AMI Instance Type: t2.micro Tại phần Key pair, chọn Create new key pair\nKey pair name: fashion-keypair Key pair type: RSA, private key file format: .pem Chọn Create key pair Tại phần Network Settings, chọn Edit:\nVPC: fashion-vpc Subnet: fashion-subnet-public1-ap-southeast-1a Auto-assign Public IP: Enable Security Group chọn Create security group security group name: fashion-webapp-sg description: Allow SSH from My IP, and HTTP, HTTPS from everywhere Tại Inbound Security Group Rules, cài đặt như hình sau Còn lại để mặc định, nhấn Launch instance để hoàn tất việc tạo EC2 Instance Cài đặt môi trường bên trong EC2 Instance Kết nối SSH vào EC2 Instance Di chuyển tới thư mục chứa file fashion-keypair.pem Sử dụng terminal, gõ lệnh sau: ssh -i fashion-keypair.pem ec2-user@\u003cPublic IP | Public DNS\u003e Gõ ‘yes’ Nếu không kết nối được, hãy kiểm tra lại Security Group đã cho phép SSH từ IP của bạn chưa nhé. Cài đặt môi trường Python, Git, PostgreSQL cho EC2 Instance Đầu tiên, gõ sudo su để chuyển sang user root Cài đặt các gói cần thiết (quá trình mất khoảng 5-10 phút): dnf install -y git tar gcc \\ zlib-devel bzip2-devel readline-devel \\ sqlite sqlite-devel openssl-devel \\ tk-devel libffi-devel xz-devel curl https://pyenv.run | bash \u0026\u0026 \\ echo 'export PYENV_ROOT=\"$HOME/.pyenv\"' \u003e\u003e ~/.bashrc \u0026\u0026 \\ echo '[[ -d $PYENV_ROOT/bin ]] \u0026\u0026 export PATH=\"$PYENV_ROOT/bin:$PATH\"' \u003e\u003e ~/.bashrc \u0026\u0026 \\ echo 'eval \"$(pyenv init -)\"' \u003e\u003e ~/.bashrc \u0026\u0026 \\ source ~/.bashrc \u0026\u0026 \\ pyenv install 3.12.4 \u0026\u0026 \\ pyenv global 3.12.4 sudo yum install postgresql17-server.x86_64 -y Kiểm tra lại phiên bản Python đã cài đặt python --version Kiểm tra lại phiên bản PostgreSQL đã cài đặt psql --version Clone repository từ github về EC2 Instance git clone --sparse --filter=blob:none https://github.com/ltdungg/aws-fashion-data-pipeline.git project cd project git sparse-checkout init git sparse-checkout set ec2 cd ec2 Cài đặt các thư viện cần thiết pip install -r requirements.txt Sau khi cài đặt xong, giữ nguyên terminal và chuyển tới phần tiếp theo cài đặt RDS.",
    "description": "Tạo Elastic Compute Cloud (EC2) Instance Truy cập Amazon Management Console Tìm kiếm dịch vụ EC2 Chọn EC2 từ kết quả tìm kiếm Chọn Launch Instance Trong giao diện Launch Instance Name: fashion-webapp Amazon Machine Image (AMI): Amazon Linux 2023 AMI Instance Type: t2.micro",
    "tags": [],
    "title": "2.3 Tạo EC2 Instance",
    "uri": "/vi/preparation/setup-ec2/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline",
    "content": "Tổng quan Trong phần này, ta sẽ tạo môi trường ứng dụng cho Data Pipeline. Môi trường bao gồm: EC2 Instance: Nơi tạo ra dữ liệu giả và khởi tạo các table database. RDS: Database PostgreSQL để lưu trữ dữ liệu giả. Mô hình database bao gồm 4 bảng:\nproducts, users, orders và order_details Các bước triển khai Quay lại giao diện RDS Chọn Databases từ menu bên trái Bấm vào fashion-db Tại giao diện fashion-db, lưu lại Endpoint của database vào một nơi nào đó. Kéo xuống phần Connected compute resources Bấm vào Actions Chọn Set up EC2 connection Tại giao diện Set up EC2 connection Phần EC2 Instance, chọn fashion-webapp Chọn continue Tại phần Review and confirm, chọn Set up Khi hoàn tất, bạn sẽ thấy một thông báo như sau: Quay trở lại terminal kết nối với EC2 Instance tại bước 2.3 Tạo EC2 Instance.\nTest kết nối tới database PostgreSQL với DNS Database bạn đã lưu lúc trước:\nDùng lệnh sau để kết nối tới database PostgreSQL, sau đó nhập password database bạn vừa tạo. psql -U postgres -h \u003cYOUR_POSTGRESQL_DNS\u003e -p 5432 -d postgres Nếu bạn thấy thông báo như sau thì bạn đã kết nối thành công tới database PostgreSQL.\nCòn nếu không hiện lên đúng hình ảnh phía dưới, xem lại các bước trên nhé. Gõ \\q để thoát khỏi database PostgreSQL. và trở về terminal.\nTạo môi trường cho việc tạo dữ liệu giả:\nGõ lệnh sau: vim .env Tại vim, bấm i để vào chế độ nhập liệu. Nhập các thông tin sau vào file .env: RDS_HOST: là DNS của database PostgreSQL bạn đã lưu ở bước 2. RDS_PASSWORD: là password của database PostgreSQL bạn đã tạo ở bước 2. KINESIS_STREAM_NAME: fashion-ds STREAM_ARN: Là ARN của Kinesis Stream bạn đã tạo ở bước 2.6 Tạo Kinesis Stream. Bấm Esc để thoát khỏi chế độ nhập liệu. Gõ :wq để lưu lại file .env và thoát khỏi vim. Tạo table cho database : Trong phần này, ta sẽ tạo 4 bảng cho database trên RDS Đồng thời cũng tạo ra dữ liệu giả cho 1000 users và bảng products python initdb.py Nếu bạn thấy thông báo như sau thì bạn đã tạo thành công database và dữ liệu giả cho 1000 users và bảng products. Xem các bảng đã tạo trong database PostgreSQL:\nGõ lệnh tại bước 7 để kết nối với database PostgreSQL. Gõ lệnh sau để xem các bảng đã tạo trong database PostgreSQL: SELECT * FROM information_schema.tables WHERE table_schema = 'public'; Xem tất cả dữ liệu trong bảng (Tùy chọn): SELECT * FROM \u003cTABLE_NAME\u003e; --- Ví dụ: SELECT * FROM users; Bạn đã thành công trong việc tạo môi trường ứng dụng cho Data Pipeline.",
    "description": "Tổng quan Trong phần này, ta sẽ tạo môi trường ứng dụng cho Data Pipeline. Môi trường bao gồm: EC2 Instance: Nơi tạo ra dữ liệu giả và khởi tạo các table database. RDS: Database PostgreSQL để lưu trữ dữ liệu giả. Mô hình database bao gồm 4 bảng:\nproducts, users, orders và order_details Các bước triển khai Quay lại giao diện RDS Chọn Databases từ menu bên trái Bấm vào fashion-db",
    "tags": [],
    "title": "3. Tạo môi trường ứng dụng",
    "uri": "/vi/generate-data/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "Cài đặt Relational Database Service (RDS) Truy cập Amazon Management Console Tìm kiếm dịch vụ RDS Chọn Aurora and RDS từ kết quả tìm kiếm Chọn Create database Tại giao diện tạo RDS, chọn Standard Create Engine options: PostgreSQL Version: PostgreSQL 17.2-R2 Templates: Free Tier DB instance identifier: fashion-db Master password: Tự đặt password cho riêng mình DB instance class: db.t4g.micro Tại phần Connectivity, chọn Edit VPC: fashion-vpc Subnet group: fashion-subnet-group Public access: No VPC security group: Chọn Create new Security group name: fashion-db-sg Availability zone: ap-southeast-1a Còn lại để mặc định và nhấn Create database để hoàn tất việc tạo RDS",
    "description": "Cài đặt Relational Database Service (RDS) Truy cập Amazon Management Console Tìm kiếm dịch vụ RDS Chọn Aurora and RDS từ kết quả tìm kiếm Chọn Create database Tại giao diện tạo RDS, chọn Standard Create Engine options: PostgreSQL Version: PostgreSQL 17.2-R2 Templates: Free Tier DB instance identifier: fashion-db Master password: Tự đặt password cho riêng mình DB instance class: db.t4g.micro",
    "tags": [],
    "title": "2.4 Tạo RDS",
    "uri": "/vi/preparation/setup-rds/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "Giới thiệu Trong phần này, ta sẽ tạo S3 Bucket để làm một Data Lake cho Data Pipeline. Trong phần này ta sẽ tạo các bucket sau:\nfashion-landing-zone: Đây là nơi lưu trữ dữ liệu thô chưa được xử lý. fashion-clean-zone: Đây là nơi lưu trữ dữ liệu đã được chuyển đổi và chuẩn bị sẵn sàng cho các công việc phân tích. fashion-logic-zone: Đây là nơi lưu trữ những Lambda Function và các dags chạy Airflow cho AWS MWAA. Cài đặt Truy cập Amazon Management Console Tìm kiếm dịch vụ S3 Chọn S3 từ kết quả tìm kiếm Sau đó bấm Create bucket Trong giao diện Create bucket Chọn Bucket name là fashion-landing-zone Để mặc định các thông số còn lại Bấm Create bucket Lặp lại bước 2 với các bucket sau: fashion-clean-zone fashion-logic-zone Bạn đang tạo thành công 3 bucket S3.",
    "description": "Giới thiệu Trong phần này, ta sẽ tạo S3 Bucket để làm một Data Lake cho Data Pipeline. Trong phần này ta sẽ tạo các bucket sau:\nfashion-landing-zone: Đây là nơi lưu trữ dữ liệu thô chưa được xử lý. fashion-clean-zone: Đây là nơi lưu trữ dữ liệu đã được chuyển đổi và chuẩn bị sẵn sàng cho các công việc phân tích. fashion-logic-zone: Đây là nơi lưu trữ những Lambda Function và các dags chạy Airflow cho AWS MWAA. Cài đặt Truy cập Amazon Management Console Tìm kiếm dịch vụ S3 Chọn S3 từ kết quả tìm kiếm Sau đó bấm Create bucket",
    "tags": [],
    "title": "2.5 Tạo S3 Bucket",
    "uri": "/vi/preparation/setup-s3/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "Tạo Kinesis Data Stream Truy cập Amazon Management Console Tìm kiếm dịch vụ Kinesis Chọn Kinesis từ kết quả tìm kiếm Trong phần giao diện Kinesis chọn Kinesis Data Streams rồi chọn Create data stream Trong giao diện Create data stream Chọn Name là fashion-ds Chọn Provisioned Phần Provisioned shards nhập 1 Chọn Create data stream Sau khi tạo xong bạn sẽ thấy giao diện như sau, lưu lại ARN của Kinesis Data Stream này để sử dụng trong các bước sau.",
    "description": "Tạo Kinesis Data Stream Truy cập Amazon Management Console Tìm kiếm dịch vụ Kinesis Chọn Kinesis từ kết quả tìm kiếm Trong phần giao diện Kinesis chọn Kinesis Data Streams rồi chọn Create data stream Trong giao diện Create data stream Chọn Name là fashion-ds Chọn Provisioned Phần Provisioned shards nhập 1 Chọn Create data stream",
    "tags": [],
    "title": "2.6 Tạo Kinesis Data Stream",
    "uri": "/vi/preparation/setup-kinesis/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thể loại",
    "uri": "/vi/categories/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Thẻ",
    "uri": "/vi/tags/index.html"
  }
]
