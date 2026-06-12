// ============================================================
// hobbies.js — 趣味
// photo: 写真のパスを指定すると画像が表示されます（任意）
// 例: photo: "/images/hobbies/camera1.jpg"
// ============================================================

export const hobbies = [
  {
    icon: "🎹",
    name: { ja: "ピアノ", en: "Piano" },
    desc: {
      ja: "クラシックとジャズを中心に。音楽もパターン認識だと思っている。",
      en: "Mainly classical and jazz. Music is pattern recognition, too.",
    },
    photo: null,
  },
  {
    icon: "💨",
    name: { ja: "シーシャ", en: "Shisha" },
    desc: {
      ja: "ゆっくりした時間と深い会話のために。",
      en: "For slow time and deep conversations.",
    },
    photo: null,
  },
  {
    icon: "🥃",
    name: { ja: "お酒", en: "Whisky & Sake" },
    desc: {
      ja: "ウイスキーと日本酒。産地による違いを探るのが好き。",
      en: "Whisky and sake. I enjoy exploring regional differences.",
    },
    photo: null,
  },
  {
    icon: "📷",
    name: { ja: "カメラ", en: "Photography" },
    desc: {
      ja: "動画を研究する者が切り取る、静止した一瞬。",
      en: "Still moments captured by someone who studies motion.",
    },
    // カメラ作例を追加するときはここに画像パスを入れてください
    photo: null, // 例: "/images/hobbies/photo1.jpg"
  },
  {
    icon: "🔧",
    name: { ja: "日曜エンジニア", en: "Sunday Engineering" },
    desc: {
      ja: "週末の自作・改造・スクリプト。動けばそれでいい。",
      en: "Weekend builds, hacks, and scripts. If it works, it's done.",
    },
    photo: null,
  },
];
