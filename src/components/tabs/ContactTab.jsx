// ============================================================
// ContactTab.jsx — Contact タブ
// ============================================================
import { profile } from "../../data/profile";
import { snsLinks } from "../../data/sns";

export default function ContactTab({ t }) {
  return (
    <div style={{ maxWidth: 520, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>CONTACT</p>
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 24, lineHeight: 1.25 }}>
        {t({ ja: "ご連絡お待ちしています", en: "Let's Talk" })}
      </h2>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: 40 }}>
        {t({ ja: "研究の話でも、仕事の話でも、シーシャの話でも。気軽にどうぞ。", en: "Research, work, or shisha — feel free to reach out." })}
      </p>

      {/* Email */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 24px", marginBottom: 40 }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 10 }}>EMAIL</p>
        <a href={`mailto:${profile.email}`}
          style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--mint)", textDecoration: "none", letterSpacing: "0.02em" }}>
          {profile.email}
        </a>
      </div>

      {/* SNS links */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 16 }}>LINKS</p>
      <div>
        {snsLinks.map(s => (
          <a key={s.label} href={s.href} target="_blank" rel="noreferrer"
            style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "14px 0", borderBottom: "1px solid var(--border)", textDecoration: "none", color: "var(--text)", fontSize: "0.92rem", transition: "color .15s" }}
            onMouseEnter={e => e.currentTarget.style.color = "var(--mint)"}
            onMouseLeave={e => e.currentTarget.style.color = "var(--text)"}>
            <span>{s.label}</span>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "var(--muted)" }}>↗</span>
          </a>
        ))}
      </div>
    </div>
  );
}
