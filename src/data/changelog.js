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
