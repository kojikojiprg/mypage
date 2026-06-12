// ============================================================
// jobs.js — 職歴・学歴
// 新しい職歴は先頭に追加してください（新しい順）
// ============================================================

export const education = [
  {
    period: "2025",
    role: { ja: "博士（情報学）", en: "Ph.D. in Computer Science" },
    detail: { ja: "京都大学大学院 — 情報学研究科 — 社会情報学専攻", en: "Graduate School of Informatics, Kyoto University - Social Informatics" },
  },
  {
    period: "2022",
    role: { ja: "修士（情報学）", en: "M.S. in Computer Science" },
    detail: { ja: "京都大学大学院 — 情報学研究科 — 社会情報学専攻", en: "Graduate School of Informatics, Kyoto University - Social Informatics" },
  },
  {
    period: "2017",
    role: { ja: "学士（機械工学）", en: "B.S. in Machine Engineering" },
    detail: { ja: "豊橋技術科学大学 — 機械工学課程", en: "Dept. Mechanical Engineering, Toyota Institution of Technology" },
  },
  {
    period: "2015",
    role: { ja: "準学士（工学）", en: "A.S. in Computer Science" },
    detail: { ja: "岐阜工業高等専門学校 — 電子制御工学科", en: "Dept. Electronic Control Engineering, Gifu National College of Technology" },
  },
];

export const jobs = [
  {
    period: "2026.04 – 2026.06",
    role: { ja: "データサイエンティスト（大手自動車メーカー）", en: "Data Scientist (Major Automotive Manufacturer)" },
    detail: {
      ja: "車向け遠隔操作アプリのログ解析と海外子会社向けスキルトランスファー。GA4・BigQuery・Amplitude を用いたアプリのログ解析と改善提案を行い、SQL構文自動生成プログラムで業務効率化。データポイントの設計仕様の検討・作成も行い、設計・解析手順を海外子会社のメンバーへ移管した。",
      en: "Log analysis of a vehicle remote-control app and skill transfer to an overseas subsidiary. Analyzed app logs with GA4, BigQuery and Amplitude, proposed improvements, and built an SQL auto-generation tool to streamline work. Designed and created the analysis workflow specifications, and transferred the design and analysis workflow to overseas members.",
    },
    stack: ["Python", "SQL", "GA4", "BigQuery", "Amplitude"],
  },
  {
    period: "2026.01 – 2026.03",
    role: { ja: "データサイエンティスト（大手自動車メーカー）", en: "Data Scientist (Major Automotive Manufacturer)" },
    detail: {
      ja: "工場の作業監視カメラ映像に対する行動認識・異常検知モデルの開発・評価、および手順書作成自動化AIの検討。STGCN++ を Optuna で最適化し precision/recall を 0.9 以上に向上、推論から評価までをパイプライン化してシステムへ組み込んだ。LLM/VLM を用いた手順書生成パイプラインの設計も実施。",
      en: "Developed and evaluated action recognition and anomaly detection models for factory surveillance video, and studied an AI pipeline to automate work-instruction generation. Optimized STGCN++ with Optuna to exceed 0.9 precision/recall, and built an inference-to-evaluation pipeline integrated into the system. Designed an LLM/VLM-based pipeline for procedure generation.",
    },
    stack: ["Python", "PyTorch", "OpenMMLab", "Optuna", "OpenCV", "YOLOv11"],
  },
  {
    period: "2025.08 – 2025.12",
    role: { ja: "特別研究員（大手自動車メーカー）", en: "Research Fellow (Major Automotive Manufacturer)" },
    detail: {
      ja: "俯瞰カメラ映像から歩行を解析し健康診断を行うシステムの開発。YOLOv11 による検出・トラッキング・ポーズ推定と、足首高さの時間推移へのウェーブレット変換で歩行者を抽出。協調動作不全に関わる特徴量を抽出し、検出モデルの正答率は90%を超えた。",
      en: "Built a system that performs health screening from gait captured by overhead cameras. Detected, tracked, and pose-estimated people with YOLOv11, extracting walkers via wavelet transform of ankle-height time series. Extracted gait coordination features and achieved over 90% accuracy in the detection model.",
    },
    stack: ["Python", "PyTorch", "YOLOv11", "OpenCV", "AWS"],
  },
  {
    period: "2025.04 – 2025.07",
    role: { ja: "特別研究員（国立研究機関）", en: "Research Fellow (National Research Institute)" },
    detail: {
      ja: "行動認識に関する理論研究。24時間撮影したマウスの動画を用い、AIによる新たな行動特性の発見を試みた。また VLM を用いて新しい人流モデルの作成と、その言語特性を活かした人流の言語化に取り組んだ。",
      en: "Theoretical research on action recognition. Used 24-hour mouse video to discover novel behavioral characteristics via AI, and built a new crowd-flow model with a VLM, leveraging its language capabilities to verbalize crowd dynamics.",
    },
    stack: ["Python", "CUDA", "VLM"],
  },
  {
    period: "2024.04 – 2025.03",
    role: { ja: "リサーチ・アシスタント（国立大学大学院）", en: "Research Assistant (National University)" },
    detail: {
      ja: "化学実験の手元映像から手順推定・目的推定を行う研究。YOLOv8 で実験器具の認識・トラッキングを行い、LLaVA と組み合わせることでファインチューニングなしに特殊な実験器具を認識。認識結果を用いて手順推定モデルを学習した。",
      en: "Research on estimating procedures and goals from first-person video of chemistry experiments. Recognized and tracked lab equipment with YOLOv8, combined with LLaVA to identify specialized apparatus without fine-tuning, and trained a procedure-estimation model from the results.",
    },
    stack: ["Python", "PyTorch", "YOLOv8", "LLaVA", "OpenCV"],
  },
  {
    period: "2022.12 – 2023.12",
    role: { ja: "データサイエンティスト（電力ソリューション企業）", en: "Data Scientist (Energy Solutions Company)" },
    detail: {
      ja: "電力分野の予測モデル開発（業務委託）。エリア別ソーラー発電量予測（誤差率20%以下）、EVの充電・放電予測（誤差率10%以下）を LightGBM で開発しシステムへ組み込んだ。家庭の電力需要時系列を k-means でクラスタリングし、5パターンの利用傾向を分析した。",
      en: "Developed forecasting models in the energy sector (contract). Built area-level solar generation forecasting (error <20%) and EV charge/discharge prediction (error <10%) with LightGBM, integrated into the system. Clustered household electricity demand time series with k-means, identifying five usage patterns.",
    },
    stack: ["Python", "LightGBM", "tslearn", "AWS"],
  },
  {
    period: "2021.10 – 2022.11",
    role: { ja: "フリーランス / インターン（航空画像解析企業）", en: "Freelance / Intern (Aerial Image Analysis Company)" },
    detail: {
      ja: "ドローン航空画像の前処理アルゴリズム開発。大サイズ画像をグリッド分割・並列化した分散型透視投影でメモリ使用率50%削減・処理時間40%短縮。GPS情報を用いた高精度スティッチングアルゴリズムを開発し社内パイプラインへ組み込み、3Dモデリング手法の調査も実施した。",
      en: "Developed preprocessing algorithms for drone aerial imagery. Built a distributed perspective-projection method via grid splitting and parallelization, cutting memory use by 50% and processing time by 40%. Developed a high-accuracy GPS-based stitching algorithm integrated into the internal pipeline, and surveyed 3D modeling methods.",
    },
    stack: ["Python", "OpenCV", "Docker"],
  },
  {
    period: "2020.04 – 2022.02",
    role: { ja: "インターン（AIソリューション企業）", en: "Intern (AI Solutions Company)" },
    detail: {
      ja: "製造業向け案件を中心に多様なAI開発を担当。センサー時系列・エンジン音からの異常検知モデル、監視カメラ映像の密集検出、細胞動画からの細胞競合解析（成果は論文化）など、データ観察から特徴量抽出・モデル開発まで一連の工程を実施した。",
      en: "Worked on diverse AI projects, mainly for manufacturing clients. Built anomaly detection models from sensor time series and engine sounds, crowd-density detection from surveillance video, and cell-competition analysis from microscopy video (published as a paper), covering everything from data observation to feature extraction and modeling.",
    },
    stack: ["Python", "scikit-learn", "OpenCV", "librosa", "scikit-image"],
  },
  {
    period: "2017.04 – 2019.08",
    role: { ja: "組み込み・アプリケーションエンジニア（医療機器メーカー）", en: "Embedded and Application Engineer (Medical Device Manufacturer)" },
    detail: {
      ja: "医療機器の組み込み開発および連携アプリケーション開発。C言語によるリアルタイムOS・モータ制御・通信モジュールの実装を、仕様設計からテストまで一貫して担当。WPF/MVVM を用いた .NET アプリケーションも開発し、非同期処理による複数装置との通信を実装した。",
      en: "Embedded development of medical devices and companion applications. Handled the full cycle from specification to testing, implementing real-time OS, motor control, and communication modules in C. Also developed .NET applications with WPF/MVVM, implementing asynchronous communication with multiple devices.",
    },
    stack: ["C", "C#", ".NET", "WPF", "MySQL"],
  },
];
