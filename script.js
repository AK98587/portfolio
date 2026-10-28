const CONTACT_EMAIL = "";

const projects = [
  {
    id: "house-price-prediction",
    category: {
      vi: "Machine Learning / Hồi quy",
      en: "Machine Learning / Regression"
    },
    title: {
      vi: "Dự đoán giá nhà bằng Machine Learning",
      en: "House Price Prediction Using Machine Learning"
    },
    description: {
      vi: "Xây dựng mô hình Machine Learning dự đoán giá nhà, thực hiện quy trình từ khám phá, tiền xử lý dữ liệu, lựa chọn đặc trưng đến huấn luyện và đánh giá mô hình.",
      en: "Build a Machine Learning model to predict house prices, carrying out the workflow from data exploration, preprocessing, feature selection to model training and evaluation."
    },
    overview: {
      vi: "Dự án tập trung vào việc nghiên cứu và ứng dụng mô hình học máy để dự báo giá trị bất động sản dựa trên các đặc trưng nhà ở, triển khai quy trình từ dữ liệu thô đến mô hình hoàn thiện.",
      en: "This project focuses on researching and applying machine learning models to forecast real estate values based on housing characteristics, establishing an end-to-end pipeline from raw data to a functional model."
    },
    problem: {
      vi: "Giá nhà chịu ảnh hưởng đồng thời của nhiều yếu tố đa dạng (diện tích, vị trí, số phòng, năm xây dựng và tiện ích lân cận). Việc thẩm định giá truyền thống tốn nhiều thời gian và dễ mang tính chủ quan, do đó việc xây dựng mô hình dự đoán có cơ sở dữ liệu giúp ước lượng giá trị khách quan và giảm thiểu rủi ro.",
      en: "Real estate valuation is driven by multiple interrelated variables such as area, location, room count, year built, and neighborhood amenities. The project aims to build an objective predictive model assisting buyers, sellers, and analysts in fair price estimation and risk reduction."
    },
    dataProcessing: {
      vi: [
        "Khám phá và phân tích dữ liệu (EDA) để hiểu cấu trúc phân phối và mối liên hệ giữa các biến.",
        "Làm sạch dữ liệu, xử lý giá trị thiếu (missing values) và dữ liệu bất thường (outliers).",
        "Tiền xử lý dữ liệu và mã hóa biến phân loại (categorical encoding) khi cần thiết."
      ],
      en: [
        "Exploratory Data Analysis (EDA) to understand distributions and variable correlations.",
        "Data cleaning, missing value imputation, and detection/handling of anomalous data and outliers.",
        "Feature preprocessing, numerical scaling, and categorical variable encoding where appropriate."
      ]
    },
    methodology: {
      vi: [
        "Tiếp cận bài toán Học có giám sát (Supervised Learning) với kỹ thuật Hồi quy (Regression).",
        "Phân tích và lựa chọn các đặc trưng ảnh hưởng trực tiếp đến giá nhà.",
        "Phân chia tập dữ liệu huấn luyện và kiểm thử (Train/Test Split) kết hợp đánh giá chéo."
      ],
      en: [
        "Supervised Learning approach focusing on regression methodologies.",
        "Correlation analysis and feature selection for variables most strongly impacting property prices.",
        "Dataset partitioning into training and validation sets (Train/Test Split) with cross-validation."
      ]
    },
    modelDev: {
      vi: [
        "Xây dựng và huấn luyện mô hình Machine Learning hồi quy.",
        "Thử nghiệm và so sánh khả năng dự đoán giữa các mô hình khác nhau.",
        "Đánh giá khả năng dự đoán, tinh chỉnh siêu tham số và hoàn thiện mô hình."
      ],
      en: [
        "Building and training regression-based Machine Learning models.",
        "Comparing predictive performance across candidate model architectures on validation splits.",
        "Evaluating prediction performance, tuning hyperparameters, and finalizing the model pipeline."
      ]
    },
    results: {
      vi: [
        "Xác định được nhóm đặc trưng quan trọng có tác động lớn nhất đến giá bất động sản.",
        "Hoàn thiện luồng tiền xử lý và dự đoán nhất quán từ khâu nhập dữ liệu đến xuất kết quả.",
        "Chỉ số định lượng cụ thể (MAE, RMSE, R²): Chưa cập nhật — sẽ bổ sung khi hoàn tất kiểm thử nghiệm thu trên tập dữ liệu chuẩn."
      ],
      en: [
        "Identified key features with the strongest impact on house prices.",
        "Established an end-to-end, consistent data processing and prediction pipeline.",
        "Quantitative error metrics (MAE, RMSE, R²): Not updated yet — will be published upon benchmark validation."
      ]
    },
    technologies: ["Python", "Machine Learning", "Data Preprocessing", "Regression"],
    github: "https://github.com/namph1377-sketch/Machine-Learning/tree/main/Practise%204",
    thumbnailSvg: `<svg class="project-thumb-svg" viewBox="0 0 340 190" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="House Price Prediction Illustration">
  <defs>
    <linearGradient id="p1-bg" x1="0" y1="0" x2="340" y2="190" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#eff6ff" />
      <stop offset="100%" stop-color="#dbeafe" />
    </linearGradient>
    <linearGradient id="p1-curve" x1="40" y1="150" x2="290" y2="40" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#38bdf8" />
      <stop offset="100%" stop-color="#2563eb" />
    </linearGradient>
    <linearGradient id="p1-area" x1="0" y1="40" x2="0" y2="150" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.18" />
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0.0" />
    </linearGradient>
  </defs>
  <rect width="340" height="190" rx="16" fill="url(#p1-bg)" />
  <line x1="35" y1="150" x2="305" y2="150" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 3" />
  <line x1="35" y1="110" x2="305" y2="110" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="35" y1="70" x2="305" y2="70" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="85" y1="35" x2="85" y2="155" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="170" y1="35" x2="170" y2="155" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="255" y1="35" x2="255" y2="155" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <g class="house-graphic" transform="translate(55, 62)">
    <ellipse cx="46" cy="86" rx="42" ry="7" fill="#2563eb" fill-opacity="0.08" />
    <rect x="62" y="16" width="10" height="20" rx="2" fill="#93c5fd" />
    <circle cx="67" cy="8" r="2.5" fill="#60a5fa" fill-opacity="0.5" />
    <circle cx="70" cy="2" r="1.8" fill="#60a5fa" fill-opacity="0.3" />
    <rect x="18" y="36" width="56" height="48" rx="6" fill="#ffffff" stroke="#2563eb" stroke-width="2" />
    <path d="M12 40 L46 12 L80 40 Z" fill="#3b82f6" stroke="#2563eb" stroke-width="2" stroke-linejoin="round" />
    <path d="M46 16 L74 40 L46 40 Z" fill="#60a5fa" fill-opacity="0.5" />
    <rect x="25" y="44" width="16" height="15" rx="3" fill="#dbeafe" stroke="#2563eb" stroke-width="1.5" />
    <line x1="33" y1="44" x2="33" y2="59" stroke="#2563eb" stroke-width="1" />
    <line x1="25" y1="51.5" x2="41" y2="51.5" stroke="#2563eb" stroke-width="1" />
    <rect x="49" y="52" width="16" height="32" rx="3" fill="#eff6ff" stroke="#2563eb" stroke-width="1.5" />
    <circle cx="61" cy="68" r="1.5" fill="#2563eb" />
  </g>
  <path d="M 40 145 C 95 138, 140 118, 195 86 C 240 60, 275 48, 305 40 L 305 150 L 40 150 Z" fill="url(#p1-area)" />
  <path d="M 40 145 C 95 138, 140 118, 195 86 C 240 60, 275 48, 305 40" stroke="url(#p1-curve)" stroke-width="3.5" stroke-linecap="round" />
  <circle cx="60" cy="138" r="4.5" fill="#60a5fa" stroke="#ffffff" stroke-width="2" />
  <circle cx="95" cy="144" r="3.5" fill="#93c5fd" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="120" cy="122" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
  <circle cx="150" cy="115" r="4" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
  <circle cx="178" cy="92" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
  <circle cx="215" cy="84" r="4" fill="#60a5fa" stroke="#ffffff" stroke-width="2" />
  <circle cx="238" cy="62" r="5.5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
  <circle cx="270" cy="54" r="4" fill="#38bdf8" stroke="#ffffff" stroke-width="2" />
  <circle cx="295" cy="38" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
  <g transform="translate(195, 22)">
    <rect width="98" height="28" rx="8" fill="#ffffff" stroke="#93c5fd" stroke-width="1" />
    <path d="M10 14 L15 9 L20 14" stroke="#2563eb" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none" />
    <line x1="15" y1="9" x2="15" y2="19" stroke="#2563eb" stroke-width="2" stroke-linecap="round" />
    <text x="27" y="18" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="700">Price Model</text>
  </g>
</svg>`
  },
  {
    id: "customer-segmentation",
    category: {
      vi: "Học không giám sát / Phân cụm",
      en: "Unsupervised Learning / Clustering"
    },
    title: {
      vi: "Phân cụm khách hàng và phân tích nhóm tiềm năng",
      en: "Customer Segmentation & Potential Customer Analysis"
    },
    description: {
      vi: "Ứng dụng kỹ thuật Clustering để phân nhóm khách hàng dựa trên đặc điểm dữ liệu, phân tích hành vi và nhận diện các nhóm khách hàng tiềm năng.",
      en: "Apply clustering techniques to segment customers based on behavioral and demographic data, analyzing patterns and identifying high-potential customer groups."
    },
    overview: {
      vi: "Dự án ứng dụng phương pháp phân cụm (Clustering) trong học máy không giám sát để phân chia tệp khách hàng thành các nhóm riêng biệt theo hành vi tiêu dùng và đặc điểm nhân khẩu học, phục vụ tối ưu hóa hoạt động tiếp thị và kinh doanh.",
      en: "This project leverages unsupervised clustering techniques to partition a customer base into distinct segments according to purchasing behavior and demographics, supporting data-driven business decisions."
    },
    problem: {
      vi: "Doanh nghiệp sở hữu lượng lớn dữ liệu người dùng nhưng chưa hiểu rõ từng phân khúc hành vi để cá nhân hóa ưu đãi, dẫn đến chi phí tiếp thị cao nhưng tỷ lệ chuyển đổi chưa tối ưu.",
      en: "Businesses handle large volumes of customer records without clear visibility into behavioral segments, leading to generic marketing campaigns, higher acquisition costs, and missed retention opportunities."
    },
    dataProcessing: {
      vi: [
        "Khám phá và phân tích dữ liệu khách hàng (EDA).",
        "Làm sạch, chuẩn hóa và lựa chọn đặc trưng.",
        "Xử lý giá trị thiếu, loại bỏ ngoại lai và chuẩn hóa thang đo dữ liệu."
      ],
      en: [
        "Multi-dimensional exploratory customer data analysis (EDA).",
        "Data cleaning, feature scaling, and variable selection.",
        "Handling missing records, outlier treatment, and numerical standardization."
      ]
    },
    methodology: {
      vi: [
        "Áp dụng phương pháp phân cụm (Clustering) trong học máy không giám sát.",
        "Phân tích sự khác biệt giữa các cụm khách hàng.",
        "Trực quan hóa kết quả phân nhóm trên không gian đặc trưng đa chiều."
      ],
      en: [
        "Applying unsupervised clustering methodologies.",
        "Analyzing structural and behavioral variance across customer clusters.",
        "Visualizing clustering outcomes in multi-dimensional feature spaces."
      ]
    },
    modelDev: {
      vi: [
        "Triển khai thuật toán phân cụm và gán nhãn cho từng nhóm khách hàng.",
        "Nhận xét đặc điểm của từng nhóm (tần suất mua hàng, giá trị chi tiêu, thâm niên).",
        "Đánh giá tính ổn định và mức độ phân tách giữa các cụm dữ liệu."
      ],
      en: [
        "Implementing clustering algorithms and tagging distinct customer profiles.",
        "Profiling segment attributes (purchase frequency, spending amount, account tenure).",
        "Evaluating cluster cohesion and inter-group separation stability."
      ]
    },
    results: {
      vi: [
        "Xác định các nhóm khách hàng có tiềm năng kinh doanh cao.",
        "Đưa ra nhận định hỗ trợ hoạt động marketing và chăm sóc khách hàng mục tiêu.",
        "Các chỉ số định lượng cụ thể (Silhouette Score, Davies-Bouldin Index): Chưa cập nhật."
      ],
      en: [
        "Identified high-potential customer groups for prioritized business engagement.",
        "Delivered actionable insights to empower targeted marketing campaigns and customer care.",
        "Quantitative cluster metrics (Silhouette Score, Davies-Bouldin Index): Not updated yet."
      ]
    },
    technologies: ["Python", "Clustering", "Customer Segmentation", "Data Analysis"],
    github: "https://github.com/namph1377-sketch/Machine-Learning/tree/main/Practise%203",
    thumbnailSvg: `<svg class="project-thumb-svg" viewBox="0 0 340 190" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Customer Segmentation Illustration">
  <defs>
    <linearGradient id="p2-bg" x1="0" y1="0" x2="340" y2="190" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#f5f3ff" />
      <stop offset="100%" stop-color="#e0e7ff" />
    </linearGradient>
  </defs>
  <rect width="340" height="190" rx="16" fill="url(#p2-bg)" />
  <line x1="30" y1="155" x2="310" y2="155" stroke="#cbd5e1" stroke-width="1.2" stroke-dasharray="3 3" />
  <line x1="30" y1="105" x2="310" y2="105" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="30" y1="55" x2="310" y2="55" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="110" y1="25" x2="110" y2="165" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="210" y1="25" x2="210" y2="165" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <ellipse cx="235" cy="65" rx="52" ry="34" fill="#2563eb" fill-opacity="0.12" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="4 4" />
  <circle cx="215" cy="55" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="238" cy="45" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="255" cy="62" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="225" cy="78" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="260" cy="80" r="4" fill="#2563eb" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="240" cy="68" r="7" fill="#1d4ed8" stroke="#ffffff" stroke-width="2" />
  <path d="M237 65 A 3 3 0 0 1 243 65 A 3 3 0 0 1 237 65 Z M235 72 C235 69.5 245 69.5 245 72" stroke="#ffffff" stroke-width="1.2" fill="none" />
  <ellipse cx="105" cy="85" rx="46" ry="32" fill="#6366f1" fill-opacity="0.12" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="4 4" />
  <circle cx="85" cy="78" r="4.5" fill="#6366f1" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="100" cy="68" r="4" fill="#6366f1" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="120" cy="75" r="4.5" fill="#6366f1" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="92" cy="98" r="4.5" fill="#6366f1" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="124" cy="95" r="4.5" fill="#6366f1" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="108" cy="86" r="6.5" fill="#4f46e5" stroke="#ffffff" stroke-width="2" />
  <path d="M105 83 A 2.8 2.8 0 0 1 111 83 A 2.8 2.8 0 0 1 105 83 Z M103 90 C103 87.8 113 87.8 113 90" stroke="#ffffff" stroke-width="1.2" fill="none" />
  <ellipse cx="175" cy="132" rx="48" ry="26" fill="#06b6d4" fill-opacity="0.14" stroke="#06b6d4" stroke-width="1.5" stroke-dasharray="4 4" />
  <circle cx="152" cy="126" r="4" fill="#06b6d4" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="170" cy="120" r="4.5" fill="#06b6d4" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="192" cy="124" r="4.5" fill="#06b6d4" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="160" cy="138" r="4.5" fill="#06b6d4" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="188" cy="140" r="4.5" fill="#06b6d4" stroke="#ffffff" stroke-width="1.5" />
  <circle cx="175" cy="132" r="6" fill="#0891b2" stroke="#ffffff" stroke-width="2" />
  <path d="M172 129 A 2.6 2.6 0 0 1 178 129 A 2.6 2.6 0 0 1 172 129 Z M170 136 C170 134 180 134 180 136" stroke="#ffffff" stroke-width="1.2" fill="none" />
  <g transform="translate(30, 22)">
    <rect width="112" height="26" rx="8" fill="#ffffff" stroke="#c7d2fe" stroke-width="1" />
    <circle cx="14" cy="13" r="4" fill="#2563eb" />
    <circle cx="24" cy="13" r="4" fill="#6366f1" />
    <circle cx="34" cy="13" r="4" fill="#06b6d4" />
    <text x="46" y="17" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="10.5" font-weight="700">K-Means: k=3</text>
  </g>
</svg>`
  },
  {
    id: "revenue-prediction",
    category: {
      vi: "Phân tích dự đoán / Hồi quy tuyến tính",
      en: "Predictive Analytics / Linear Regression"
    },
    title: {
      vi: "Dự đoán doanh thu và hỗ trợ chiến lược bán hàng",
      en: "Revenue Prediction for Sales Strategy"
    },
    description: {
      vi: "Sử dụng mô hình hồi quy tuyến tính để phân tích và dự đoán doanh thu, từ đó đưa ra nhận xét và đề xuất chiến lược bán hàng dựa trên dữ liệu.",
      en: "Utilize linear regression models to analyze and forecast revenue, providing data-driven insights and actionable sales strategy recommendations."
    },
    overview: {
      vi: "Dự án ứng dụng mô hình hồi quy tuyến tính (Linear Regression) để mô hình hóa mối quan hệ giữa các yếu tố chi phí, kênh bán hàng và doanh thu thu về, cung cấp cơ sở dữ liệu tin cậy cho công tác hoạch định bán hàng.",
      en: "This project applies Linear Regression to model relationships between cost factors, sales channels, and incoming revenue, establishing reliable analytical support for commercial planning."
    },
    problem: {
      vi: "Việc lập kế hoạch doanh thu truyền thống thường phụ thuộc vào trực giác và ước tính định tính, thiếu công cụ dự báo khoa học dẫn đến việc phân bổ ngân sách marketing và nguồn lực bán hàng chưa tối ưu.",
      en: "Conventional revenue planning frequently relies on intuition and subjective estimations without predictive statistical grounding, leading to suboptimal budget allocation and inventory or target misalignment."
    },
    dataProcessing: {
      vi: [
        "Khám phá dữ liệu kinh doanh và doanh thu.",
        "Tiền xử lý và phân tích các yếu tố liên quan đến doanh thu.",
        "Xử lý dữ liệu chuỗi thời gian, giá trị khuyết thiếu và chuẩn hóa dữ liệu."
      ],
      en: [
        "Exploratory commercial and revenue data analysis.",
        "Preprocessing and analyzing revenue-driving variables.",
        "Handling time-series sales records, missing values, and data normalization."
      ]
    },
    methodology: {
      vi: [
        "Xây dựng mô hình Linear Regression.",
        "Phân tích xu hướng và các yếu tố ảnh hưởng đến doanh số.",
        "Đánh giá trọng số tác động của từng biến đầu vào đến chỉ tiêu doanh thu."
      ],
      en: [
        "Developing Linear Regression models.",
        "Analyzing commercial trends and influential sales drivers.",
        "Estimating predictive weights of promotional variables on overall revenue."
      ]
    },
    modelDev: {
      vi: [
        "Huấn luyện và đánh giá mô hình dự đoán.",
        "Trực quan hóa doanh thu thực tế và doanh thu dự đoán (Actual vs Predicted Revenue).",
        "Kiểm định giả định mô hình và đánh giá độ bám sát xu hướng thị trường."
      ],
      en: [
        "Training and evaluating predictive performance.",
        "Visualizing Actual Revenue against Predicted Revenue trajectories.",
        "Testing regression assumptions and trend tracking reliability."
      ]
    },
    results: {
      vi: [
        "Đưa ra nhận xét phục vụ việc lập kế hoạch bán hàng.",
        "Đề xuất định hướng chiến lược sales dựa trên kết quả phân tích (tối ưu kênh tiếp thị, phân bổ ngân sách hiệu quả).",
        "Kết quả định lượng (R², RMSE, MAE): Chưa cập nhật."
      ],
      en: [
        "Formulated data-backed takeaways for actionable sales planning.",
        "Proposed strategic sales directions based on analytical findings (channel optimization, efficient budget allocation).",
        "Quantitative error metrics (R², RMSE, MAE): Not updated yet."
      ]
    },
    technologies: ["Python", "Linear Regression", "Revenue Forecasting", "Data Analytics"],
    github: "https://github.com/namph1377-sketch/Machine-Learning/tree/main/Practice%202",
    thumbnailSvg: `<svg class="project-thumb-svg" viewBox="0 0 340 190" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Revenue Prediction Illustration">
  <defs>
    <linearGradient id="p3-bg" x1="0" y1="0" x2="340" y2="190" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#f0f9ff" />
      <stop offset="100%" stop-color="#e0f2fe" />
    </linearGradient>
    <linearGradient id="p3-act-area" x1="0" y1="50" x2="0" y2="155" gradientUnits="userSpaceOnUse">
      <stop offset="0%" stop-color="#2563eb" stop-opacity="0.16" />
      <stop offset="100%" stop-color="#2563eb" stop-opacity="0.0" />
    </linearGradient>
  </defs>
  <rect width="340" height="190" rx="16" fill="url(#p3-bg)" />
  <rect x="52" y="115" width="18" height="40" rx="4" fill="#bae6fd" fill-opacity="0.6" />
  <rect x="88" y="100" width="18" height="55" rx="4" fill="#bae6fd" fill-opacity="0.6" />
  <rect x="124" y="110" width="18" height="45" rx="4" fill="#bae6fd" fill-opacity="0.6" />
  <rect x="160" y="85" width="18" height="70" rx="4" fill="#bae6fd" fill-opacity="0.6" />
  <rect x="196" y="70" width="18" height="85" rx="4" fill="#bae6fd" fill-opacity="0.6" />
  <rect x="232" y="60" width="18" height="95" rx="4" fill="#bae6fd" fill-opacity="0.6" />
  <rect x="268" y="45" width="18" height="110" rx="4" fill="#93c5fd" fill-opacity="0.7" />
  <line x1="35" y1="155" x2="305" y2="155" stroke="#cbd5e1" stroke-width="1.2" />
  <line x1="35" y1="115" x2="305" y2="115" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <line x1="35" y1="75" x2="305" y2="75" stroke="#e2e8f0" stroke-width="1" stroke-dasharray="3 3" />
  <path d="M 52 125 L 88 108 L 124 116 L 160 92 L 196 74 L 232 66 L 268 48 L 268 155 L 52 155 Z" fill="url(#p3-act-area)" />
  <path d="M 52 125 L 88 108 L 124 116 L 160 92 L 196 74 L 232 66 L 268 48" stroke="#2563eb" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
  <circle cx="52" cy="125" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.8" />
  <circle cx="88" cy="108" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.8" />
  <circle cx="124" cy="116" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.8" />
  <circle cx="160" cy="92" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.8" />
  <circle cx="196" cy="74" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.8" />
  <circle cx="232" cy="66" r="4.5" fill="#2563eb" stroke="#ffffff" stroke-width="1.8" />
  <circle cx="268" cy="48" r="5" fill="#2563eb" stroke="#ffffff" stroke-width="2" />
  <line x1="45" y1="135" x2="295" y2="35" stroke="#0284c7" stroke-width="2.5" stroke-dasharray="6 4" stroke-linecap="round" />
  <circle cx="295" cy="35" r="5" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
  <g transform="translate(42, 20)">
    <rect width="186" height="24" rx="6" fill="#ffffff" fill-opacity="0.92" stroke="#bae6fd" stroke-width="1" />
    <line x1="12" y1="12" x2="24" y2="12" stroke="#2563eb" stroke-width="2.5" />
    <circle cx="18" cy="12" r="2.5" fill="#2563eb" />
    <text x="30" y="15" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700">Actual</text>
    <line x1="88" y1="12" x2="100" y2="12" stroke="#0284c7" stroke-width="2" stroke-dasharray="3 2" />
    <circle cx="94" cy="12" r="2.5" fill="#38bdf8" />
    <text x="106" y="15" fill="#1e293b" font-family="'Plus Jakarta Sans', sans-serif" font-size="9.5" font-weight="700">Predicted (Linear)</text>
  </g>
</svg>`
  }
];

const translations = {
  vi: {
    "skip": "Bỏ qua đến nội dung chính",
    "nav.home": "Trang chủ", "nav.about": "Giới thiệu", "nav.skills": "Kỹ năng", "nav.projects": "Dự án", "nav.education": "Học vấn", "nav.contact": "Liên hệ",
    "hero.hello": "Xin chào, rất vui được gặp bạn!", "hero.titlePrefix": "Hi, mình là",
    "hero.role": "Sinh viên Khoa học dữ liệu · Yêu thích AI & công nghệ",
    "hero.description": "Mình yêu thích lập trình, khám phá dữ liệu và tìm hiểu cách công nghệ có thể giải quyết những vấn đề thực tế.",
    "hero.projects": "Khám phá dự án", "hero.contact": "Liên hệ với mình", "hero.based": "Đang học tập tại", "hero.location": "TP. Hồ Chí Minh, Việt Nam", "hero.caption": "Tò mò hôm nay, tạo nên ngày mai.", "hero.scroll": "Cuộn để khám phá", "hero.artAlt": "Ảnh chân dung Nguyễn Lưu Quỳnh Nghi cùng các nhãn khoa học dữ liệu, Python và AI",
    "about.eyebrow": "MỘT CHÚT VỀ MÌNH", "about.title": "Mình tin vào sức mạnh của sự tò mò.", "about.intro": "Mỗi ngày là một cơ hội để học thêm điều mới và biến ý tưởng thành điều có ích.",
    "about.photoAlt": "Ảnh chân dung Nguyễn Lưu Quỳnh Nghi", "about.photoPlaceholder": "Vị trí ảnh cá nhân", "about.sticker": "Đang học<br>mỗi ngày",
    "about.bio": "Mình là Nguyễn Lưu Quỳnh Nghi, sinh viên năm ba ngành Khoa học dữ liệu tại Trường Đại học Giao thông vận tải Thành phố Hồ Chí Minh. Mình yêu thích lập trình, khám phá dữ liệu và tìm hiểu cách công nghệ có thể giải quyết những vấn đề thực tế. Mình luôn mong muốn học hỏi, phát triển kỹ năng và tham gia những dự án thú vị.",
    "about.quote": "“Learning, creating, and growing — one step at a time.”", "about.birth": "Năm sinh", "about.university": "Trường đại học", "about.year3": "Năm 3", "about.student": "Sinh viên", "about.major": "Chuyên ngành",
    "skills.eyebrow": "BỘ CÔNG CỤ CỦA MÌNH", "skills.title": "Những công nghệ mình sử dụng", "skills.intro": "Những nền tảng mình đang thực hành và tiếp tục trau dồi.",
    "skills.programming": "Ngôn ngữ lập trình", "skills.programmingDesc": "Viết chương trình, giải quyết bài toán và thử nghiệm ý tưởng.", "skills.database": "Cơ sở dữ liệu", "skills.databaseDesc": "Làm quen với việc lưu trữ và tổ chức dữ liệu.", "skills.web": "Phát triển web", "skills.webDesc": "Xây dựng trải nghiệm web thân thiện với HTML, CSS và JavaScript.", "skills.note": "Đây là những công nghệ mình đang học và thực hành — không phải thang đo trình độ.",
    "projects.eyebrow": "DỰ ÁN NỔI BẬT", "projects.title": "Một vài dự án của mình", "projects.intro": "Những dự án và ý tưởng thực tế trên hành trình khám phá Khoa học dữ liệu.", "projects.details": "Xem chi tiết",
    "education.eyebrow": "HÀNH TRÌNH HỌC TẬP", "education.title": "Từng bước một, mình đang tiến về phía trước.", "education.status": "ĐANG THEO HỌC", "education.school": "Trường Đại học Giao thông vận tải Thành phố Hồ Chí Minh (UTH)", "education.majorLabel": "Ngành học", "education.major": "Khoa học dữ liệu", "education.levelLabel": "Trình độ", "education.level": "Đại học · Năm 3", "education.stateLabel": "Trạng thái", "education.state": "Đang theo học",
    "contact.eyebrow": "HÃY CÙNG TRÒ CHUYỆN", "contact.title": "Kết nối với mình nhé!", "contact.intro": "Mình luôn sẵn sàng trò chuyện, trao đổi ý tưởng và học hỏi những điều mới.", "contact.pending": "Chưa cập nhật", "contact.optional": "Tùy chọn", "contact.emailHint": "Khi có email, hãy cập nhật trong script.js để bật form liên hệ.",
    "form.name": "Họ và tên", "form.email": "Email của bạn", "form.message": "Lời nhắn", "form.namePlaceholder": "Tên của bạn", "form.emailPlaceholder": "ban@email.com", "form.messagePlaceholder": "Bạn muốn chia sẻ điều gì?", "form.submit": "Soạn email", "form.disclaimer": "Form sẽ mở ứng dụng email của bạn; website không gửi hay lưu dữ liệu.",
    "form.errorRequired": "Vui lòng điền mục này.", "form.errorEmail": "Vui lòng nhập địa chỉ email hợp lệ.", "form.errorNoRecipient": "Form chưa được kết nối: vui lòng cập nhật email nhận trong script.js.", "form.opening": "Đang mở ứng dụng email của bạn…",
    "footer.tagline": "Learning, building, and growing with technology.", "footer.copyright": "© 2026 Nguyễn Lưu Quỳnh Nghi. All rights reserved.", "footer.top": "Lên đầu trang",
    "modal.close": "Đóng chi tiết dự án", "modal.eyebrow": "CHI TIẾT DỰ ÁN", "modal.overview": "Tổng quan dự án", "modal.problem": "Bài toán đặt ra", "modal.dataProcessing": "Tiền xử lý dữ liệu", "modal.methodology": "Phương pháp thực hiện", "modal.modelDev": "Huấn luyện & Phân tích mô hình", "modal.results": "Kết quả & Nhận định", "modal.technologies": "Công nghệ", "modal.links": "Mã nguồn (GitHub)", "modal.pending": "Chưa cập nhật", "modal.openGithub": "Xem trên GitHub"
  },
  en: {
    "skip": "Skip to main content",
    "nav.home": "Home", "nav.about": "About", "nav.skills": "Skills", "nav.projects": "Projects", "nav.education": "Education", "nav.contact": "Contact",
    "hero.hello": "Hello, it's lovely to meet you!", "hero.titlePrefix": "Hi, I'm",
    "hero.role": "Data Science Student · AI & technology enthusiast",
    "hero.description": "I enjoy programming, exploring data, and learning how technology can solve real-world problems.",
    "hero.projects": "Explore projects", "hero.contact": "Get in touch", "hero.based": "Studying at", "hero.location": "Ho Chi Minh City, Vietnam", "hero.caption": "Curious today, creating tomorrow.", "hero.scroll": "Scroll to explore", "hero.artAlt": "Portrait photo of Nguyen Luu Quynh Nghi with Data Science, Python, and AI badges",
    "about.eyebrow": "A LITTLE ABOUT ME", "about.title": "I believe in the power of curiosity.", "about.intro": "Every day is a chance to learn something new and turn an idea into something useful.",
    "about.photoAlt": "Portrait photo of Nguyen Luu Quynh Nghi", "about.photoPlaceholder": "Personal photo goes here", "about.sticker": "Learning<br>every day",
    "about.bio": "I'm Nguyen Luu Quynh Nghi, a third-year Data Science student at Ho Chi Minh City University of Transport. I enjoy programming, exploring data, and learning how technology can solve real-world problems. I'm always eager to learn, grow my skills, and take part in interesting projects.",
    "about.quote": "“Learning, creating, and growing — one step at a time.”", "about.birth": "Year of birth", "about.university": "University", "about.year3": "Year 3", "about.student": "Student", "about.major": "Major",
    "skills.eyebrow": "MY TOOLKIT", "skills.title": "Technologies I work with", "skills.intro": "Tools I'm practicing and continuing to develop.",
    "skills.programming": "Programming Languages", "skills.programmingDesc": "Writing programs, solving problems, and testing ideas.", "skills.database": "Databases", "skills.databaseDesc": "Learning to store and organize data.", "skills.web": "Web Development", "skills.webDesc": "Building friendly web experiences with HTML, CSS, and JavaScript.", "skills.note": "These are technologies I'm learning and practicing — not proficiency ratings.",
    "projects.eyebrow": "FEATURED PROJECTS", "projects.title": "A few projects", "projects.intro": "Hands-on projects and exploratory ideas from my Data Science journey.", "projects.details": "View details",
    "education.eyebrow": "MY LEARNING JOURNEY", "education.title": "One step at a time, I'm moving forward.", "education.status": "CURRENTLY STUDYING", "education.school": "Ho Chi Minh City University of Transport (UTH)", "education.majorLabel": "Major", "education.major": "Data Science", "education.levelLabel": "Degree", "education.level": "Undergraduate · Year 3", "education.stateLabel": "Status", "education.state": "Currently studying",
    "contact.eyebrow": "LET'S TALK", "contact.title": "Let's connect!", "contact.intro": "I'm always happy to chat, exchange ideas, and learn something new.", "contact.pending": "Not added yet", "contact.optional": "Optional", "contact.emailHint": "Once you have an email address, add it in script.js to enable the contact form.",
    "form.name": "Your name", "form.email": "Your email", "form.message": "Message", "form.namePlaceholder": "Your name", "form.emailPlaceholder": "you@email.com", "form.messagePlaceholder": "What would you like to share?", "form.submit": "Compose email", "form.disclaimer": "This form opens your email app; the website does not send or store your data.",
    "form.errorRequired": "Please complete this field.", "form.errorEmail": "Please enter a valid email address.", "form.errorNoRecipient": "The form isn't connected yet: add a recipient email in script.js.", "form.opening": "Opening your email application…",
    "footer.tagline": "Learning, building, and growing with technology.", "footer.copyright": "© 2026 Nguyen Luu Quynh Nghi. All rights reserved.", "footer.top": "Back to top",
    "modal.close": "Close project details", "modal.eyebrow": "PROJECT DETAILS", "modal.overview": "Project Overview", "modal.problem": "Problem Statement", "modal.dataProcessing": "Data Preprocessing", "modal.methodology": "Methodology", "modal.modelDev": "Model Development & Analysis", "modal.results": "Results & Insights", "modal.technologies": "Technologies", "modal.links": "Source Code (GitHub)", "modal.pending": "Not updated yet", "modal.openGithub": "View on GitHub"
  }
};

const currentLanguageKey = "quynh-nghi-portfolio-language";
const languageToggle = document.querySelector(".language-toggle");
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const siteHeader = document.querySelector(".site-header");
const projectGrid = document.querySelector("#project-grid");
const projectDialog = document.querySelector("#project-dialog");
const closeDialogButton = document.querySelector(".dialog-close");
const contactForm = document.querySelector("#contact-form");
const formStatus = document.querySelector("#form-status");
let currentLanguage = "vi";
let previouslyFocusedElement = null;
let activeProjectId = null;

const translate = (key) => translations[currentLanguage][key] || key;

function applyLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = translate(element.dataset.i18n);
    if (element.dataset.i18n.includes("sticker")) element.innerHTML = value;
    else element.textContent = value;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    element.placeholder = translate(element.dataset.i18nPlaceholder);
  });
  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", translate(element.dataset.i18nAria));
  });
  languageToggle.textContent = language === "vi" ? "EN" : "VI";
  languageToggle.setAttribute("aria-label", language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  renderProjects();
  if (projectDialog.open && activeProjectId) {
    populateProjectDialog(activeProjectId);
  }
  formStatus.textContent = "";
  document.querySelectorAll(".field-error").forEach((error) => { error.textContent = ""; });
  contactForm.querySelectorAll("[aria-invalid='true']").forEach((field) => field.removeAttribute("aria-invalid"));
}

function renderProjects() {
  projectGrid.innerHTML = projects.map((project, index) => `
    <article class="project-card reveal">
      <div class="project-art" aria-hidden="true">
        <span class="project-number">PROJECT 0${index + 1}</span>
        ${project.thumbnailSvg}
      </div>
      <div class="project-content">
        <span class="project-category">${project.category[currentLanguage]}</span>
        <h3 class="project-title">${project.title[currentLanguage]}</h3>
        <p class="project-desc">${project.description[currentLanguage]}</p>
        <div class="tag-list">${project.technologies.map((technology) => `<span class="tag">${technology}</span>`).join("")}</div>
        <div class="project-actions">
          ${project.github ? `<a class="card-github-link" href="${project.github}" target="_blank" rel="noopener noreferrer" aria-label="GitHub Repository"><span class="gh-mini-badge" aria-hidden="true">GH</span><span>GitHub</span><span aria-hidden="true">↗</span></a>` : ''}
          <button class="text-button" type="button" data-project-id="${project.id}">${translate("projects.details")} <span aria-hidden="true">↗</span></button>
        </div>
      </div>
    </article>
  `).join("");
  observeReveals(projectGrid.querySelectorAll(".reveal"));
  projectGrid.querySelectorAll("[data-project-id]").forEach((button) => {
    button.addEventListener("click", () => openProject(button.dataset.projectId, button));
  });
}

function observeReveals(elements = document.querySelectorAll(".reveal")) {
  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("is-visible"));
    return;
  }
  elements.forEach((element) => {
    if (element.classList.contains("is-visible")) return;
    revealObserver.observe(element);
  });
}

const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 })
  : null;

function populateProjectDialog(projectId) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;
  const lang = currentLanguage;
  const projectIndex = projects.indexOf(project) + 1;

  document.querySelector("#dialog-number").textContent = `PROJECT 0${projectIndex}`;
  document.querySelector("#dialog-category").textContent = project.category[lang];
  document.querySelector("#dialog-title").textContent = project.title[lang];
  document.querySelector("#dialog-description").textContent = project.description[lang];
  document.querySelector("#dialog-overview").textContent = project.overview[lang];
  document.querySelector("#dialog-problem").textContent = project.problem[lang];

  document.querySelector("#dialog-data-processing").innerHTML = project.dataProcessing[lang]
    .map((item) => `<li>${item}</li>`).join("");

  document.querySelector("#dialog-methodology").innerHTML = project.methodology[lang]
    .map((item) => `<li>${item}</li>`).join("");

  document.querySelector("#dialog-model-dev").innerHTML = project.modelDev[lang]
    .map((item) => `<li>${item}</li>`).join("");

  document.querySelector("#dialog-results").innerHTML = project.results[lang]
    .map((item) => `<li>${item}</li>`).join("");

  document.querySelector("#dialog-tags").innerHTML = project.technologies
    .map((technology) => `<span class="tag">${technology}</span>`).join("");

  const githubContainer = document.querySelector("#dialog-github");
  if (project.github) {
    githubContainer.innerHTML = `
      <a class="dialog-link-btn" href="${project.github}" target="_blank" rel="noopener noreferrer">
        <span class="dialog-gh-icon" aria-hidden="true">GH</span>
        <span>${translate("modal.openGithub")}</span>
        <span aria-hidden="true">↗</span>
      </a>
    `;
  } else {
    githubContainer.innerHTML = `
      <span class="dialog-pending-badge">
        <span class="status-dot"></span>
        <span>${translate("modal.pending")}</span>
      </span>
    `;
  }
}

function openProject(projectId, trigger) {
  const project = projects.find((item) => item.id === projectId);
  if (!project) return;
  previouslyFocusedElement = trigger;
  activeProjectId = projectId;
  populateProjectDialog(projectId);
  projectDialog.showModal();
  document.body.classList.add("dialog-open");
  closeDialogButton.focus();
}

function closeProjectDialog() {
  if (!projectDialog.open) return;
  projectDialog.close();
  activeProjectId = null;
  document.body.classList.remove("dialog-open");
  previouslyFocusedElement?.focus();
}

languageToggle.addEventListener("click", () => {
  const nextLanguage = currentLanguage === "vi" ? "en" : "vi";
  applyLanguage(nextLanguage);
  try {
    localStorage.setItem(currentLanguageKey, nextLanguage);
  } catch (error) {
    console.warn("Unable to save the selected language.", error);
  }
});

menuToggle.addEventListener("click", () => {
  const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
  menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  menuToggle.setAttribute("aria-label", isExpanded ? translate("nav.home") : (currentLanguage === "vi" ? "Đóng menu" : "Close menu"));
  navLinks.classList.toggle("is-open", !isExpanded);
});

navLinks.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", currentLanguage === "vi" ? "Mở menu" : "Open menu");
  });
});

window.addEventListener("scroll", () => {
  siteHeader.classList.toggle("is-scrolled", window.scrollY > 8);
}, { passive: true });

const sections = [...document.querySelectorAll("main section[id]")];
if ("IntersectionObserver" in window) {
  const activeSectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll(".nav-link").forEach((link) => {
        const isCurrent = link.getAttribute("href") === `#${entry.target.id}`;
        link.classList.toggle("is-active", isCurrent);
        if (isCurrent) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    });
  }, { rootMargin: "-30% 0px -60% 0px" });
  sections.forEach((section) => activeSectionObserver.observe(section));
}

closeDialogButton.addEventListener("click", closeProjectDialog);
projectDialog.addEventListener("click", (event) => {
  if (event.target === projectDialog) closeProjectDialog();
});
projectDialog.addEventListener("close", () => {
  activeProjectId = null;
  document.body.classList.remove("dialog-open");
  previouslyFocusedElement?.focus();
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "";
  const fields = [
    { input: contactForm.elements.name, error: document.querySelector("#name-error") },
    { input: contactForm.elements.email, error: document.querySelector("#email-error") },
    { input: contactForm.elements.message, error: document.querySelector("#message-error") }
  ];
  let firstInvalidField = null;
  fields.forEach(({ input, error }) => {
    error.textContent = "";
    input.removeAttribute("aria-invalid");
    let validationMessage = "";
    if (!input.value.trim()) validationMessage = translate("form.errorRequired");
    else if (input.type === "email" && !input.validity.valid) validationMessage = translate("form.errorEmail");
    if (validationMessage) {
      error.textContent = validationMessage;
      input.setAttribute("aria-invalid", "true");
      firstInvalidField ||= input;
    }
  });
  if (firstInvalidField) {
    firstInvalidField.focus();
    return;
  }
  if (!CONTACT_EMAIL.trim()) {
    formStatus.textContent = translate("form.errorNoRecipient");
    return;
  }
  const subject = encodeURIComponent(`Portfolio contact from ${contactForm.elements.name.value.trim()}`);
  const body = encodeURIComponent(
    `${contactForm.elements.message.value.trim()}\n\nReply to: ${contactForm.elements.email.value.trim()}`
  );
  formStatus.textContent = translate("form.opening");
  window.location.href = `mailto:${encodeURIComponent(CONTACT_EMAIL)}?subject=${subject}&body=${body}`;
});

document.querySelector(".back-to-top").addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

try {
  const savedLanguage = localStorage.getItem(currentLanguageKey);
  if (savedLanguage === "en" || savedLanguage === "vi") currentLanguage = savedLanguage;
} catch (error) {
  console.warn("Unable to read the saved language; using Vietnamese.", error);
}
applyLanguage(currentLanguage);
observeReveals();
