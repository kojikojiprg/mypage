// ============================================================
// changelog.js — サイト更新履歴
// 更新するたびに先頭に1行追加してください
//
// type の種類（表示ラベルの色が変わります）:
//   "paper"      論文追加
//   "job"        職歴追加
//   "feature"    サイト機能追加・変更
//   "content"    コンテンツ更新
//   "fix"        修正
// ============================================================

export const changelog = [
  // ↓ 更新するたびにここに追加してください（新しい順）
  {
    date: "2026-06-17",
    type: "content",
    desc: {
      ja: "News に EASY.INC 公開のお知らせを追加",
      en: "Added EASY.INC launch announcement to News",
    },
  },
  {
    date: "2026-06-17",
    type: "feature",
    desc: {
      ja: "Product タブに EASY.INC を追加",
      en: "Added EASY.INC to Product tab",
    },
  },
  {
    date: "2026-06-15",
    type: "feature",
    desc: {
      ja: "Product タブを新規追加",
      en: "Added Product tab",
    },
  },
  {
    date: "2026-06-13",
    type: "content",
    desc: {
      ja: "Home の自己紹介文を更新（行動認識研究への姿勢とフリーランス実績を明記）",
      en: "Updated Home bio (life's research theme in action recognition + freelance achievements)",
    },
  },
  {
    date: "2026-06-13",
    type: "feature",
    desc: {
      ja: "News・Changelog を最新3件プレビュー表示に変更し、全件表示用の Updates タブを追加",
      en: "News and Changelog now show a 3-item preview on Home; added Updates tab for full history",
    },
  },
  {
    date: "2026-06-13",
    type: "feature",
    desc: {
      ja: "Freelance ページに代表事例3件と相談〜発注の5ステップを追加",
      en: "Added 3 representative case studies and a 5-step inquiry-to-engagement flow to the Freelance page",
    },
  },
  {
    date: "2026-06-13",
    type: "feature",
    desc: {
      ja: "Freelance ページの対応業務に数値成果ベースの実績と技術スタックを追加、相談導線を強化",
      en: "Added results-backed case examples and tech stacks to Freelance services, and strengthened the consultation CTA",
    },
  },
  {
    date: "2026-06-13",
    type: "job",
    desc: {
      ja: "職務経歴書をもとに職歴・学歴・スキルを更新（Experience ページ）",
      en: "Updated work history, education, and skills based on resume (Experience page)",
    },
  },
  {
    date: "2026-06-13",
    type: "content",
    desc: {
      ja: "Research ページに研究概念と2つの研究テーマ（個人行動モデル・チーム協調モデル）を追加",
      en: "Added research concept and two research themes (individual behavior model, team coordination model) to Research page",
    },
  },
  // {
  //   date: "2025-07-01",
  //   type: "paper",
  //   desc: {
  //     ja: "論文「○○」を追加しました（MICCAI 2025）",
  //     en: "Added paper '○○' (MICCAI 2025)",
  //   },
  // },
];

// type ごとのラベルスタイル
export const changelogTypeColors = {
  paper:   { label: "paper",   color: "#6EE7B7" },  // mint
  job:     { label: "job",     color: "#93C5FD" },  // blue
  feature: { label: "feature", color: "#C4B5FD" },  // purple
  content: { label: "content", color: "#FCD34D" },  // yellow
  fix:     { label: "fix",     color: "#64748B" },  // gray
};
