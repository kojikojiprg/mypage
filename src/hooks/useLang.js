// ============================================================
// useLang.js — 日英切り替えフック
// ============================================================
import { useState } from "react";

export function useLang() {
  const [lang, setLang] = useState("en");
  // テキストを言語に応じて返すヘルパー
  const t = (obj) => (obj ? obj[lang] ?? obj.en : "");
  return { lang, setLang, t };
}
