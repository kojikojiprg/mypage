// ============================================================
// products.js — 自作プロダクト一覧
// 新しいプロダクトは配列の先頭に追加する。
//
// pricing フィールドの使い方:
//   null                          → 料金表示なし
//   { type: "free" }              → "Free" バッジのみ
//   { type: "oss" }               → "OSS" バッジのみ
//   { type: "freemium", plans: [...] } → カード下部に料金表を展開
//   { type: "paid",     plans: [...] } → 同上
//
// plans の型:
//   { name: string, price: { ja, en }, features: string[] }
//
// status: "live" | "beta" | "wip" | "archived"
// ============================================================

export const products = [
  {
    id: "easy-inc",
    status: "live",
    name: { ja: "EASY.INC", en: "EASY.INC" },
    tagline: {
      ja: "「イージー」を哲学に昇華したコーポレートサイト",
      en: "A corporate site that elevates 'easy' to a philosophy",
    },
    desc: {
      ja: "Make It Easy. ——すべての複雑さをシンプルへと変換することを使命とした架空企業 EASY.INC のコーポレートサイト。哲学・事業・チーム・採用・宗教まで、「イージー」の世界観を一貫したデザインで表現した実験的なWebサイト。\n'Easy, of the people, by the people, for the people.'",
      en: "Make It Easy. — A corporate site for the fictional company EASY.INC, whose mission is to transform complexity into simplicity. An experimental site that expresses the 'easy' worldview across philosophy, services, team, careers, and even religion — with a unified design.\n'Easy, of the people, by the people, for the people.'",
    },
    thumbnail: "/mypage/images/thumbnails/easy-inc.jpg",
    demoUrl: "https://kojikojiprg.github.io/easy-inc/",
    githubUrl: "https://github.com/kojikojiprg/easy-inc",
    productHuntUrl: null,
    pricing: { type: "free" },
    stack: ["React", "Vite", "React Router", "GitHub Pages"],
    launched: "2024-12",
  },
];
