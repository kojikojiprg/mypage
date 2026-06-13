// ============================================================
// FreelanceTab.jsx — Freelance タブ
// ============================================================
import { services } from "../../data/services";

export default function FreelanceTab({ t, setActiveTab }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>FREELANCE</p>
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 24, lineHeight: 1.25 }}>
        {t({ ja: "お仕事募集中", en: "Available for Work" })}
      </h2>
      <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.9, marginBottom: 40, maxWidth: 580 }}>
        {t({
          ja: "動画解析・機械学習に関わるプロジェクトに参加しています。業務委託・請負どちらも対応可。フルコミットから複数案件の並走まで柔軟に相談できます。",
          en: "Available for projects involving video analysis and machine learning. Open to both contract and project-based work, from full commitment to running multiple projects in parallel.",
        })}
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px,1fr))", gap: 12, marginBottom: 40 }}>
        {services.map(s => (
          <div key={s.name.en} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "2px solid var(--mint)", borderRadius: 4, padding: "20px 24px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--mint)", marginBottom: 10 }}>{s.icon}</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>{t(s.name)}</p>
            <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.7 }}>{t(s.desc)}</p>
          </div>
        ))}
      </div>

      {/* Conditions */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 4, padding: "20px 24px", marginBottom: 40 }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px,1fr))", gap: 20 }}>
          {[
            { label: t({ ja: "契約形態", en: "Contract" }), value: t({ ja: "業務委託・請負", en: "Contract / Project" }) },
            { label: t({ ja: "稼働量", en: "Availability" }), value: t({ ja: "要相談（フルコミット可）", en: "Flexible (Full-time ok)" }) },
            { label: t({ ja: "料金", en: "Rate" }), value: t({ ja: "要相談", en: "On request" }) },
            { label: t({ ja: "対応言語", en: "Languages" }), value: "日本語 / English" },
          ].map(item => (
            <div key={item.label}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--muted)", marginBottom: 6 }}>{item.label.toUpperCase()}</p>
              <p style={{ fontSize: "0.9rem", color: "var(--text)" }}>{item.value}</p>
            </div>
          ))}
        </div>
      </div>

      <button onClick={() => setActiveTab("contact")}
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", background: "var(--mint)", color: "#0A0E17", padding: "12px 28px", borderRadius: 2, border: "none", cursor: "pointer", fontWeight: 600, letterSpacing: "0.04em" }}>
        {t({ ja: "問い合わせる →", en: "Get in touch →" })}
      </button>
    </div>
  );
}
