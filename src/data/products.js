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
    id: "product-b",
    status: "beta",
    name: { ja: "プロダクト B（仮）", en: "Product B (placeholder)" },
    tagline: {
      ja: "一行キャッチコピーをここに書く",
      en: "One-line pitch goes here",
    },
    desc: {
      ja: "プロダクトの説明文。解決する課題・ターゲットユーザー・主な機能を2〜3文で。",
      en: "Describe the product: the problem it solves, who it's for, and key features in 2-3 sentences.",
    },
    thumbnail: null,           // 画像を追加する場合: "/mypage/images/products/product-b.png"
    demoUrl: null,
    githubUrl: "https://github.com/kojikojiprg/product-b",
    productHuntUrl: null,
    pricing: { type: "oss" },
    stack: ["Python", "FastAPI"],
    launched: "2026-06",
  },
  {
    id: "product-a",
    status: "live",
    name: { ja: "プロダクト A（仮）", en: "Product A (placeholder)" },
    tagline: {
      ja: "一行キャッチコピーをここに書く",
      en: "One-line pitch goes here",
    },
    desc: {
      ja: "プロダクトの説明文。解決する課題・ターゲットユーザー・主な機能を2〜3文で。",
      en: "Describe the product: the problem it solves, who it's for, and key features in 2-3 sentences.",
    },
    thumbnail: null,           // 画像を追加する場合: "/mypage/images/products/product-a.png"
    demoUrl: "https://example.com/demo",
    githubUrl: null,
    productHuntUrl: null,
    pricing: {
      type: "freemium",
      plans: [
        {
          name: "Free",
          price: { ja: "無料", en: "Free" },
          features: ["機能 A", "機能 B"],
        },
        {
          name: "Pro",
          price: { ja: "¥980/月", en: "$6/mo" },
          features: ["機能 A", "機能 B", "機能 C（Pro限定）"],
        },
      ],
    },
    stack: ["Next.js", "Python", "PostgreSQL"],
    launched: "2026-01",
  },
];
