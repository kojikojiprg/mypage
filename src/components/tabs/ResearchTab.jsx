// ============================================================
// ResearchTab.jsx — Research タブ
// ============================================================
import { researchConcept, researchThemes } from "../../data/research";
import { papers } from "../../data/papers";

export default function ResearchTab({ t }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>

      {/* ---- ラベル ---- */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>
        RESEARCH
      </p>

      {/* ---- 見出し ---- */}
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 20, lineHeight: 1.25 }}>
        {t(researchConcept.heading)}
      </h2>

      {/* ---- 概念説明 ---- */}
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: 56, maxWidth: 640 }}>
        {t(researchConcept.body)}
      </p>

      {/* ---- 研究テーマ ---- */}
      <SubLabel>{t({ ja: "研究テーマ", en: "THEMES" })}</SubLabel>

      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {researchThemes.map((theme, i) => (
          <ThemeCard key={i} theme={theme} t={t} />
        ))}
      </div>

      {/* ---- 論文リスト ---- */}
      {papers.length > 0 && (
        <>
          <SubLabel style={{ marginTop: 56 }}>{t({ ja: "論文", en: "PUBLICATIONS" })}</SubLabel>
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
        </>
      )}

    </div>
  );
}

// ---- テーマカード ----
function ThemeCard({ theme, t }) {
  return (
    <div style={{ padding: "28px 0", borderBottom: "1px solid var(--border)" }}>

      {/* レベルバッジ + タイトル */}
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.68rem",
          letterSpacing: "0.1em",
          color: "var(--mint)",
          border: "1px solid rgba(110,231,183,0.35)",
          borderRadius: 2,
          padding: "2px 10px",
        }}>
          {t(theme.level).toUpperCase()}
        </span>
        <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 600, color: "var(--text)", margin: 0 }}>
          {t(theme.title)}
        </h3>
      </div>

      {/* 概要 */}
      <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.85, marginBottom: 20, maxWidth: 620 }}>
        {t(theme.overview)}
      </p>

      {/* RQ リスト */}
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 20 }}>
        {theme.questions.map((q, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "36px 1fr", gap: 12, alignItems: "start" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--mint)", paddingTop: 2 }}>
              {q.label}
            </span>
            <span style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.65 }}>
              {t(q.text)}
            </span>
          </div>
        ))}
      </div>

      {/* タグ */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
        {theme.tags.map(tag => (
          <span key={tag} style={{
            fontFamily: "var(--font-mono)",
            fontSize: "0.7rem",
            background: "var(--surface)",
            border: "1px solid var(--border)",
            borderRadius: 2,
            padding: "2px 10px",
            color: "var(--text)",
          }}>
            {tag}
          </span>
        ))}
      </div>

    </div>
  );
}

// ---- セクションラベル ----
function SubLabel({ children }) {
  return (
    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 12 }}>
      {typeof children === "string" ? children.toUpperCase() : children}
    </p>
  );
}
