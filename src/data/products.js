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
    id: "taskmandala",
    status: "live",
    name: { ja: "TaskMandala", en: "TaskMandala" },
    tagline: {
      ja: "カンバンボードとマインドマップでタスクとアイデアを整理する",
      en: "Organize tasks and ideas with kanban boards and mind maps",
    },
    desc: {
      ja: "タスク管理とアイデア整理を1つのアプリで。カンバンボードで進捗を管理しながら、マインドマップでアイデアを構造化・可視化できる。",
      en: "Task management and idea organization in one app. Track progress with kanban boards while structuring and visualizing ideas with mind maps.",
    },
    thumbnail: "/mypage/images/thumbnails/taskmandala.png",
    demoUrl: "https://taskmandala.vercel.app",
    githubUrl: null,
    productHuntUrl: "https://www.producthunt.com/products/taskmandala",
    pricing: {
      type: "freemium",
      plans: [
        {
          name: "Free",
          price: { ja: "無料", en: "Free" },
          features: ["最大3ボードまで"],
        },
        {
          name: "Pro",
          price: { ja: "$4.99/月", en: "$4.99/mo" },
          features: ["ボード無制限"],
        },
        {
          name: "Team",
          price: { ja: "$9.99/月・1人あたり", en: "$9.99/mo per user" },
          features: ["ボード無制限", "チームで共有・共同編集"],
        },
      ],
    },
    stack: ["Next.js", "Supabase", "React"],
    launched: "2026-07",
  },
  {
    id: "easy-inc",
    status: "live",
    name: { ja: "EASY.INC", en: "EASY.INC" },
    tagline: {
      ja: "「イージー」を哲学に昇華したコーポレートサイト",
      en: "A corporate site that elevates 'easy' to a philosophy",
    },
    desc: {
      ja: "Make It Easy. ——すべての複雑さをシンプルへと変換することを使命とした架空企業 EASY.INC のコーポレートサイト。哲学・事業・チーム・採用・宗教まで、「イージー」の世界観を一貫したデザインで表現した実験的なWebサイト。'Easy, of the people, by the people, for the people.' ※webデザイン・コーディングの練習ようのダミーサイト。",
      en: "Make It Easy. — A corporate site for the fictional company EASY.INC, whose mission is to transform complexity into simplicity. An experimental site that expresses the 'easy' worldview across philosophy, services, team, careers, and even religion — with a unified design. 'Easy, of the people, by the people, for the people.' Note: This is a dummy site for web design and coding practice.",
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
