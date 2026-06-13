// ============================================================
// papers.js — 論文一覧
// 新しい論文は先頭に追加してください（新しい順）
// category: "journal" | "international" | "domestic"
// ============================================================

export const papers = [
  // ── 2025 ──
  {
    year: 2025,
    category: "international",
    venue: "7th International Conference on Activity and Behavior Computing (ABC 2025)",
    award: { ja: "Best Paper Award", en: "Best Paper Award" },
    title: {
      ja: "手術チームの術中状況理解のための手術室監視映像からの半教師あり役割分類",
      en: "Semi-Supervised Role Classification from Operating Room Surveillance Videos for Intraoperative Situation Analysis",
    },
  },
  {
    year: 2025,
    category: "journal",
    venue: "Applied Intelligence (採択済み)",
    title: {
      ja: "手術室映像における時空間的な教師なし個人クラスタリング",
      en: "Spatio-Temporal Unsupervised Individual Clustering for Operating Room Videos",
    },
  },
  // ── 2024 ──
  {
    year: 2024,
    category: "domestic",
    venue: "第44回医療情報学連合大会",
    title: {
      ja: "手術室監視映像と個人行動認識モデルを用いた手術状況の理解",
      en: "Understanding Surgical Situation Using Operating Room Surveillance Videos and an Individual Activity Recognition Model",
    },
  },
  {
    year: 2024,
    category: "domestic",
    venue: "MIRU 2024",
    title: {
      ja: "変分オートエンコーダを用いた手術室監視映像からの個人行動の異常推定とクラスタリング",
      en: "Anomaly Estimation and Clustering in Individual Activity from Operating Room Surveillance Videos Using Variational Autoencoder",
    },
  },
  // ── 2023 ──
  {
    year: 2023,
    category: "journal",
    venue: "Advanced Biomedical Engineering",
    title: {
      ja: "グループ行動認識のための手術室監視映像解析",
      en: "Operating Room Surveillance Video Analysis for Group Activity Recognition",
    },
  },
  {
    year: 2023,
    category: "international",
    venue: "MEDINFO 2023",
    award: { ja: "Best Student Paper Award (第2位)", en: "Best Student Paper Award (Second Place)" },
    title: {
      ja: "時系列予測に基づく手術室での個人行動異常推定",
      en: "Individual Activity Anomaly Estimation in Operating Rooms Based on Time-Sequential Prediction",
    },
  },
  // ── 2022 ──
  {
    year: 2022,
    category: "journal",
    venue: "Advanced Biomedical Engineering",
    title: {
      ja: "手術チームの術中状態理解のための器具受け渡しとグループ注意の認識",
      en: "Recognition of Instrument Passing and Group Attention for Understanding Intraoperative State of Surgical Team",
    },
  },
  {
    year: 2022,
    category: "domestic",
    venue: "医療情報学連合大会",
    title: {
      ja: "手術室監視映像を用いたグループ行動認識の有効性調査",
      en: "Investigation of Group Activity Recognition Effectiveness Using Operating Room Surveillance Videos",
    },
  },
  // ── 2021 ──
  {
    year: 2021,
    category: "domestic",
    venue: "生体医工学シンポジウム",
    title: {
      ja: "グループ行動認識のための手術室監視映像解析",
      en: "Operating Room Surveillance Video Analysis for Group Activity Recognition",
    },
  },
  {
    year: 2021,
    category: "domestic",
    venue: "生体医工学シンポジウム",
    title: {
      ja: "手術チームの術中状態理解のための器具受け渡しとグループ注意の認識",
      en: "Recognition of Instrument Passing and Group Attention for Understanding Intraoperative State of Surgical Team",
    },
  },
  {
    year: 2021,
    category: "domestic",
    venue: "SCI'21",
    title: {
      ja: "複数人動作解析に基づく手術室の状況理解の試み",
      en: "Attempt at Understanding Operating Room Situations Based on Multi-Person Activity Analysis",
    },
  },
];

// カテゴリの表示ラベルと色
export const paperCategoryStyles = {
  journal:       { label: { ja: "学術雑誌", en: "Journal" },       color: "#6EE7B7" },
  international: { label: { ja: "国際学会", en: "International" }, color: "#60A5FA" },
  domestic:      { label: { ja: "国内学会", en: "Domestic" },      color: "#94A3B8" },
};
