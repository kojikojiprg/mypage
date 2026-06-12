// ============================================================
// jobs.js — 職歴・学歴
// 新しい職歴は先頭に追加してください（新しい順）
// ============================================================

export const education = [
  {
    period: "20XX",
    role: { ja: "博士（工学）", en: "Ph.D. in Engineering" },
    detail: { ja: "○○大学大学院 — 情報工学専攻", en: "Dept. of Computer Science, XX University" },
  },
  {
    period: "20XX",
    role: { ja: "修士（工学）", en: "M.Eng." },
    detail: { ja: "○○大学大学院 — 情報工学専攻", en: "Dept. of Computer Science, XX University" },
  },
];

export const jobs = [
  {
    period: "2023 – present",
    role: { ja: "研究員 / MLエンジニア", en: "Research Engineer" },
    detail: {
      ja: "動画解析基盤の設計・実装。社内研究チームのリード。",
      en: "Designed and implemented video analysis infrastructure. Led internal research team.",
    },
    stack: ["PyTorch", "Python", "AWS", "Docker"],
  },
  {
    period: "2022 – 2023",
    role: { ja: "機械学習エンジニア", en: "Machine Learning Engineer" },
    detail: {
      ja: "推薦システムの改善。A/Bテスト設計・運用。",
      en: "Improved recommendation systems. Designed and operated A/B tests.",
    },
    stack: ["TensorFlow", "GCP", "Spark"],
  },
  {
    period: "2020 – 2022",
    role: { ja: "リサーチインターン", en: "Research Intern" },
    detail: {
      ja: "行動認識モデルの実装・評価。論文執筆補助。",
      en: "Implemented and evaluated action recognition models. Assisted in paper writing.",
    },
    stack: ["PyTorch", "OpenCV", "MATLAB"],
  },
  {
    period: "2019",
    role: { ja: "ソフトウェアエンジニア（インターン）", en: "Software Engineer (Intern)" },
    detail: {
      ja: "Webアプリケーションのバックエンド開発。",
      en: "Backend development for web applications.",
    },
    stack: ["Python", "Django", "PostgreSQL"],
  },
];
