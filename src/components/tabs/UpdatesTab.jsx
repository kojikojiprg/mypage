// ============================================================
// UpdatesTab.jsx — News & Changelog 全件リスト
// ============================================================
import { news } from "../../data/news";
import { changelog, changelogTypeColors } from "../../data/changelog";

export default function UpdatesTab({ t }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>

      {/* ── News (all) ── */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>
        NEWS & UPDATES
      </p>
      <div style={{ marginBottom: 56 }}>
        {news.length === 0 ? (
          <p style={{ color: "var(--muted)", fontSize: "0.88rem", padding: "16px 0" }}>
            {t({ ja: "まだ記事がありません。", en: "No articles yet." })}
          </p>
        ) : news.map((n, i) => (
          <a key={i} href={n.url || "#"} target="_blank" rel="noreferrer"
            style={{ display: "grid", gridTemplateColumns: "88px 60px 1fr", gap: 16, alignItems: "center", padding: "13px 0", borderBottom: "1px solid var(--border)", textDecoration: "none" }}
            onMouseEnter={e => e.currentTarget.style.opacity = "0.75"}
            onMouseLeave={e => e.currentTarget.style.opacity = "1"}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>{n.date}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", color: n.source === "Zenn" ? "#4A9EFF" : "#1D9BF0", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 2, padding: "2px 6px", textAlign: "center" }}>{n.source}</span>
            <span style={{ fontSize: "0.88rem", color: "var(--text)" }}>{t(n.title)}</span>
          </a>
        ))}
      </div>

      {/* ── Changelog (all) ── */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>
        CHANGELOG
      </p>
      <div>
        {changelog.map((c, i) => {
          const typeStyle = changelogTypeColors[c.type] || changelogTypeColors.content;
          return (
            <div key={i} style={{ display: "grid", gridTemplateColumns: "88px 68px 1fr", gap: 16, alignItems: "center", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)" }}>{c.date}</span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.66rem", letterSpacing: "0.06em", color: typeStyle.color, border: `1px solid ${typeStyle.color}40`, borderRadius: 2, padding: "2px 6px", textAlign: "center" }}>{typeStyle.label}</span>
              <span style={{ fontSize: "0.88rem", color: "var(--text)" }}>{t(c.desc)}</span>
            </div>
          );
        })}
      </div>

    </div>
  );
}
