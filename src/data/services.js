// ============================================================
// services.js — フリーランス対応業務
// ============================================================
// 各サービスに proof（実績）を紐づける。
// 守秘配慮: 企業名はぼかし「課題→アプローチ→数値成果」の型で書く。
// 技術スタック・数値成果は出してよい。

export const services = [
  {
    icon: "▶",
    name: { ja: "動画解析・行動認識", en: "Video Analysis & Action Recognition" },
    desc: {
      ja: "映像から人の行動を自動で解析したい——検出・トラッキング・行動認識・異常検知まで一気通貫で対応。",
      en: "Automatically analyze human actions from video — detection, tracking, action recognition, and anomaly detection end to end.",
    },
    proof: {
      ja: "大手製造業の工場監視映像で行動認識＋異常検知モデルを開発。STGCN++をOptunaでチューニングしprecisionとrecallをともに0.9超に。推論〜評価をパイプライン化しシステムへ組み込み。",
      en: "Built an action-recognition + anomaly-detection model on factory surveillance video for a major manufacturer. Tuned STGCN++ with Optuna to reach precision/recall above 0.9, and integrated the full inference-to-evaluation pipeline into their system.",
    },
    stack: ["PyTorch", "OpenMMLab", "STGCN++", "Optuna"],
  },
  {
    icon: "◈",
    name: { ja: "時系列・センサーデータの異常検知 / 予測", en: "Time-Series & Sensor Anomaly Detection / Forecasting" },
    desc: {
      ja: "センサーや時系列データの異常を検知したい・将来を予測したい——特徴量設計からモデル開発・システム組込まで。",
      en: "Detect anomalies or forecast from sensor and time-series data — from feature design to model development and system integration.",
    },
    proof: {
      ja: "電力事業者向けにエリア別ソーラー発電量予測モデルを開発し誤差率20%以下を達成、システムに組込。製造業のセンサー異常検知では複数モデルで予兆を数値化。",
      en: "Developed an area-level solar generation forecasting model for a power company, achieving under 20% error and integrating it into production. For a manufacturer, quantified failure precursors from sensor data with multiple anomaly-detection models.",
    },
    stack: ["LightGBM", "scikit-learn", "tslearn"],
  },
  {
    icon: "◎",
    name: { ja: "LLM/VLM活用・最新手法の調査と実装", en: "LLM/VLM Solutions & Research Implementation" },
    desc: {
      ja: "最新AI手法を調査して自社課題に実装してほしい——論文調査からパイプライン設計・PoCまで。",
      en: "Survey and implement state-of-the-art AI for your problem — from literature review to pipeline design and PoC.",
    },
    proof: {
      ja: "工場の作業手順書を自動生成するため、VLM/LLMを用いた物体検出→行動認識→手順書生成のパイプラインとRAGによる知識補間を設計。論文調査から実装方針まで担当。",
      en: "Designed a VLM/LLM pipeline (object detection → action recognition → procedure generation) with RAG-based knowledge augmentation to automate factory work-instruction creation, covering everything from literature review to implementation strategy.",
    },
    stack: ["YOLOv11", "VLM / LLM", "RAG", "PyTorch"],
  },
  {
    icon: "◻",
    name: { ja: "PoCからシステム組込まで", en: "From PoC to Production" },
    desc: {
      ja: "PoCで終わらせず実システムに組み込みたい——研究レベルのモデルを保守性の高い実装で形にする。",
      en: "Move beyond PoC into real systems — turning research-grade models into maintainable production code.",
    },
    proof: {
      ja: "航空画像処理では大判画像をグリッド分割・並列化し、メモリ使用率50%削減・処理時間40%短縮を実現、社内パイプラインに組込。組込〜アプリ〜AIまで全工程の経験を持つ。",
      en: "For aerial-image processing, parallelized large images via grid splitting to cut memory use by 50% and processing time by 40%, integrated into the in-house pipeline. Experienced across the full stack — embedded, application, and AI.",
    },
    stack: ["Python", "OpenCV", "Docker"],
  },
];
