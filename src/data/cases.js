// ============================================================
// cases.js — Freelance 代表事例（ケーススタディ）
// ============================================================
// 守秘配慮: 企業名はぼかし「課題 → アプローチ → 成果」の型で書く。
// 選定基準: ①注力領域に合致 ②数値成果が明確 ③守秘上出しやすい
// 新しい/目立たせたい順に並べる。代表は3件に厳選。

export const cases = [
  {
    field: { ja: "動画解析・異常検知", en: "Video Analysis & Anomaly Detection" },
    title: {
      ja: "工場の作業監視映像から異常作業を自動検出",
      en: "Automatic detection of abnormal work from factory surveillance video",
    },
    challenge: {
      ja: "大手製造業の工場で、作業監視カメラ映像から異常な作業サイクルを自動で検出したい。",
      en: "A major manufacturer needed to automatically detect abnormal work cycles from factory surveillance footage.",
    },
    approach: {
      ja: "STGCN++による行動認識をOptunaで最適化し、その結果をもとに異常検知アルゴリズムを実装。推論から評価までをパイプライン化して既存システムに組み込んだ。",
      en: "Optimized STGCN++ action recognition with Optuna, implemented an anomaly-detection algorithm on top, and integrated the full inference-to-evaluation pipeline into the existing system.",
    },
    result: {
      ja: "行動認識・異常検知ともに precision / recall を 0.9 以上に。PoCで終わらせず実システムへの組み込みまで完了。",
      en: "Achieved precision/recall above 0.9 for both action recognition and anomaly detection, and delivered all the way to production integration.",
    },
    stack: ["PyTorch", "OpenMMLab", "STGCN++", "Optuna"],
  },
  {
    field: { ja: "動画解析・ヘルスケア", en: "Video Analysis & Healthcare" },
    title: {
      ja: "俯瞰カメラ映像から歩行を解析し健康状態を推定",
      en: "Estimating health condition from gait in overhead camera video",
    },
    challenge: {
      ja: "施設に設置したカメラの映像から、歩いているだけで歩行の協調動作不全を定量的に捉えたい。",
      en: "Detect gait coordination disorders quantitatively, just from people walking past installed cameras.",
    },
    approach: {
      ja: "YOLOによる検出・トラッキング・ポーズ推定の結果にウェーブレット変換を適用して歩行者を抽出し、協調動作不全に関わる特徴量を設計して検出モデルを開発した。",
      en: "Extracted walkers via wavelet analysis on YOLO-based detection, tracking, and pose estimation, then designed coordination-disorder features and built a detection model.",
    },
    result: {
      ja: "協調動作不全の検出モデルで正答率90%超を達成。連携組織へのプレゼンからデータ取得・モデル開発まで一気通貫で担当。",
      en: "Reached over 90% accuracy in detecting coordination disorders, owning everything from partner presentations and data acquisition to model development.",
    },
    stack: ["YOLOv11", "OpenCV", "scikit-learn", "PyTorch"],
  },
  {
    field: { ja: "データ分析・予測", en: "Data Science & Forecasting" },
    title: {
      ja: "エリア別のソーラー発電量予測モデルを開発",
      en: "Area-level solar power generation forecasting model",
    },
    challenge: {
      ja: "電力事業者が、エリアごとの代表地のソーラー発電量を予測したい。新設拠点でも予測できる汎用性が必要。",
      en: "A power company needed area-level solar generation forecasts that also work for newly built sites.",
    },
    approach: {
      ja: "気象情報や太陽の動きを特徴量とし、過去実績のラグ変数に依存しないLightGBMモデルを設計。複数拠点の特徴量・発電量を集約するアルゴリズムも検討した。",
      en: "Designed a LightGBM model using weather and solar-position features without relying on past-output lag variables, plus an algorithm to aggregate features and output across multiple sites.",
    },
    result: {
      ja: "誤差率20%以下を達成。データ読み込みから特徴量生成・学習・予測までを実装し、開発したモデルはシステムに組み込まれた。",
      en: "Achieved under 20% error. Implemented the full pipeline from data loading to feature generation, training, and prediction, with the model integrated into production.",
    },
    stack: ["LightGBM", "Python", "AWS"],
  },
];
