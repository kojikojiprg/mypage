// ============================================================
// ExperienceTab.jsx — Experience タブ
// ============================================================
import { education, jobs } from "../../data/jobs";
import { skills } from "../../data/skills";

export default function ExperienceTab({ t }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>EXPERIENCE</p>
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 36, lineHeight: 1.25 }}>
        {t({ ja: "経歴", en: "Career" })}
      </h2>

      {/* Education */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>
        {t({ ja: "学歴", en: "EDUCATION" })}
      </p>
      <div style={{ marginBottom: 44 }}>
        {education.map((e, i) => (
          <TimelineRow key={i} period={e.period} title={t(e.role)} sub={t(e.detail)} />
        ))}
      </div>

      {/* Work */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>
        {t({ ja: "職歴", en: "WORK" })}
      </p>
      <div style={{ marginBottom: 52 }}>
        {jobs.map((j, i) => (
          <div key={i} style={{ display: "grid", gridTemplateColumns: "120px 1fr", gap: 16, padding: "16px 0", borderBottom: "1px solid var(--border)" }}>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)", paddingTop: 3 }}>{j.period}</span>
            <div>
              <p style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>{t(j.role)}</p>
              <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 10, lineHeight: 1.6 }}>{t(j.detail)}</p>
              <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                {j.stack.map(s => (
                  <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", color: "var(--mint)", border: "1px solid rgba(110,231,183,0.25)", borderRadius: 2, padding: "2px 8px" }}>{s}</span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skills */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>
        {t({ ja: "スキル", en: "SKILLS" })}
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px,1fr))", gap: 20 }}>
        {skills.map(g => (
          <div key={g.cat.en}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 10 }}>{t(g.cat).toUpperCase()}</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
              {g.items.map(s => (
                <span key={s} style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 2, padding: "3px 10px", color: "var(--text)" }}>{s}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function SubLabel({ children }) {
  return <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.12em", color: "var(--muted)", marginBottom: 12 }}>{children.toUpperCase()}</p>;
}

function TimelineRow({ period, title, sub }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "80px 1fr", gap: 16, padding: "14px 0", borderBottom: "1px solid var(--border)" }}>
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--muted)", paddingTop: 2 }}>{period}</span>
      <div>
        <p style={{ fontSize: "0.92rem", fontWeight: 500, color: "var(--text)", marginBottom: 2 }}>{title}</p>
        <p style={{ fontSize: "0.83rem", color: "var(--muted)" }}>{sub}</p>
      </div>
    </div>
  );
}
