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
    "content": "",
    "description": "",
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
    "content": "",
    "description": "",
    "tags": [],
    "title": "2.3 Tạo EC2 Instance",
    "uri": "/vi/preparation/setup-ec2/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "",
    "description": "",
    "tags": [],
    "title": "2.4 Tạo RDS",
    "uri": "/vi/preparation/setup-rds/index.html"
  },
  {
    "breadcrumb": "AWS Fashion Pipeline \u003e  2. Các bước chuẩn bị",
    "content": "a",
    "description": "a",
    "tags": [],
    "title": "2.5 Tạo S3 Bucket",
    "uri": "/vi/preparation/setup-s3/index.html"
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
