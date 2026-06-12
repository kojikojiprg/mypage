// ============================================================
// useLang.js — 日英切り替えフック
// ============================================================
import { useState } from "react";

export function useLang() {
  const [lang, setLang] = useState("ja");
  // テキストを言語に応じて返すヘルパー
  const t = (obj) => (obj ? obj[lang] ?? obj.ja : "");
  return { lang, setLang, t };
}
