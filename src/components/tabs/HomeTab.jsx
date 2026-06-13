// ============================================================
// HomeTab.jsx — Home タブ
// ============================================================
import { profile } from "../../data/profile";
import { snsLinks, xUsername } from "../../data/sns";
import { news } from "../../data/news";
import { changelog, changelogTypeColors } from "../../data/changelog";

export default function HomeTab({ t }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>

      {/* ── Profile ── */}
      <div style={{ display: "flex", gap: 32, alignItems: "flex-start", marginBottom: 52, flexWrap: "wrap" }}>
        <div style={{
          width: 200, height: 200, flexShrink: 0,
          background: "var(--surface)", border: "2px solid var(--border)",
          display: "flex", alignItems: "center", justifyContent: "center",
          overflow: "hidden",
        }}>
          {profile.avatar
            ? <img src={profile.avatar} alt="avatar" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : <span style={{ fontSize: "2.4rem" }}>👤</span>
          }
        </div>
        <div style={{ flex: 1, minWidth: 220 }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 6 }}>
            {t(profile.title)}
          </p>
          <h1 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.6rem,4vw,2.4rem)", fontWeight: 700, color: "var(--text)", marginBottom: 12, letterSpacing: "-0.02em" }}>
            {t(profile.name)}
          </h1>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 20, maxWidth: 480 }}>
            {t(profile.bio)}
          </p>
        </div>
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
          {snsLinks.map(s => (
            <a key={s.label} href={s.href} target="_blank" rel="noreferrer" title={s.label}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 3, padding: "4px 10px", textDecoration: "none", transition: "color .15s, border-color .15s" }}
              onMouseEnter={e => { e.currentTarget.style.color = "var(--mint)"; e.currentTarget.style.borderColor = "var(--mint)"; e.currentTarget.querySelector("svg").style.opacity = "1"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "var(--muted)"; e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.querySelector("svg").style.opacity = "0.5"; }}>
              <svg viewBox="0 0 24 24" width={14} height={14} fill="currentColor" style={{ opacity: 0.5, transition: "opacity .15s", flexShrink: 0 }}>
                <path d={s.svgPath} />
              </svg>
              {s.label}
            </a>
          ))}
        </div>
      </div>

      {/* ── X Timeline ── */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>X TIMELINE</p>
      <div style={{ marginBottom: 52, maxWidth: 550 }}>
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 4, padding: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, minHeight: 200, opacity: 0.5 }}>
          <a className="twitter-timeline"
            data-theme="dark"
            data-chrome="noheader nofooter noborders transparent"
            data-tweet-limit="5"
            href={`https://x.com/${xUsername}`}
          >
            Posts by @{xUsername}
          </a>
        </div>
      </div>


      {/* ── News ── */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>NEWS & UPDATES</p>
      <div style={{ marginBottom: 52 }}>
        {news.map((n, i) => (
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

      {/* ── Changelog ── */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>CHANGELOG</p>
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
