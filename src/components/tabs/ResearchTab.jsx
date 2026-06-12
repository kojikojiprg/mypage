// ============================================================
// ResearchTab.jsx — Research タブ
// ============================================================
import { papers } from "../../data/papers";

export default function ResearchTab({ t }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>RESEARCH</p>
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 28, lineHeight: 1.25 }}>
        {t({ ja: "動画から、行動を理解する", en: "Understanding Action from Video" })}
      </h2>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: 40, maxWidth: 600 }}>
        {t({
          ja: "人間の動作・行動をビデオ映像から自動認識・モデル化することを研究しています。手術映像における工程認識を起点に、日常行動・スポーツ・産業現場へと応用を広げています。",
          en: "My research focuses on automatically recognizing and modeling human actions from video. Starting from surgical workflow recognition, I extend to everyday activities, sports, and industrial settings.",
        })}
      </p>
      <div>
        {papers.map((p, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "52px 88px 1fr auto", gap: 16, padding: "16px 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--mint)", paddingTop: 2 }}>{p.year}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 2, padding: "3px 8px", alignSelf: "start", textAlign: "center" }}>{p.venue}</span>
            <span style={{ fontSize: "0.92rem", color: "var(--text)", lineHeight: 1.5 }}>{t(p.title)}</span>
            {p.url && (
              <a href={p.url} target="_blank" rel="noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", textDecoration: "none", paddingTop: 2, whiteSpace: "nowrap" }}
                onMouseEnter={e => e.currentTarget.style.color = "var(--mint)"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}>
                ↗
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
