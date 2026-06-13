// ============================================================
// FreelanceTab.jsx — Freelance タブ
// ============================================================
import { services } from "../../data/services";
import { cases } from "../../data/cases";

const processSteps = [
  {
    label: { ja: "相談（無料）", en: "Inquiry (Free)" },
    desc: { ja: "「こんなことはできる？」だけでもOK。まずは気軽にご連絡ください。", en: "Just ask whether something is feasible — reach out casually first." },
  },
  {
    label: { ja: "課題ヒアリング", en: "Discovery" },
    desc: { ja: "解決したい課題・データの状況・ゴールを伺い、実現可能性を一緒に整理します。", en: "We discuss your challenge, data situation, and goals, and assess feasibility together." },
  },
  {
    label: { ja: "提案・お見積り", en: "Proposal & Quote" },
    desc: { ja: "アプローチ・スコープ・期間・費用を提案。進め方の認識をすり合わせます。", en: "I propose an approach, scope, timeline, and cost, and align on how to proceed." },
  },
  {
    label: { ja: "契約", en: "Agreement" },
    desc: { ja: "業務委託・請負など、案件に合った形で契約を締結します。", en: "We sign a contract suited to the project — contract or project-based." },
  },
  {
    label: { ja: "着手・納品", en: "Delivery" },
    desc: { ja: "進捗を共有しながら開発。PoCで終わらせず、システム組み込みまで対応可能です。", en: "I develop while sharing progress — able to go beyond PoC into production integration." },
  },
];

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

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 12, marginBottom: 40 }}>
        {services.map(s => (
          <div key={s.name.en} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "2px solid var(--mint)", borderRadius: 4, padding: "20px 24px", display: "flex", flexDirection: "column" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", color: "var(--mint)", marginBottom: 10 }}>{s.icon}</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 500, color: "var(--text)", marginBottom: 8 }}>{t(s.name)}</p>
            <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: s.proof ? 14 : 0 }}>{t(s.desc)}</p>
            {s.proof && (
              <div style={{ borderTop: "1px solid var(--border)", paddingTop: 12, marginTop: "auto" }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em", color: "var(--mint)", marginBottom: 6 }}>{t({ ja: "実績", en: "CASE" }).toUpperCase()}</p>
                <p style={{ fontSize: "0.8rem", color: "var(--text)", lineHeight: 1.7, marginBottom: s.stack ? 10 : 0 }}>{t(s.proof)}</p>
                {s.stack && (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {s.stack.map(tag => (
                      <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 2, padding: "2px 8px" }}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>

      <button onClick={() => setActiveTab("contact")}
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", background: "var(--mint)", color: "#0A0E17", padding: "12px 28px", borderRadius: 2, border: "none", cursor: "pointer", fontWeight: 600, letterSpacing: "0.04em" , marginBottom: 40}}>
        {t({ ja: "相談する →", en: "Get in touch →" })}
      </button>

      {/* Case Studies */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 4 }}>CASE STUDIES</p>
      <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: 8 }}>
        {t({ ja: "代表的な実績", en: "Representative Work" })}
      </h3>
      <p style={{ color: "var(--muted)", fontSize: "0.85rem", lineHeight: 1.8, marginBottom: 20, maxWidth: 580 }}>
        {t({
          ja: "守秘義務のため企業名は伏せていますが、課題・アプローチ・成果の形でご紹介します。",
          en: "Company names are withheld for confidentiality, but here is the work framed as challenge, approach, and result.",
        })}
      </p>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 40 }}>
        {cases.map(c => (
          <div key={c.title.en} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "2px solid var(--mint)", borderRadius: 4, padding: "20px 24px" }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.1em", color: "var(--mint)", marginBottom: 6 }}>{t(c.field).toUpperCase()}</p>
            <p style={{ fontSize: "0.98rem", fontWeight: 600, color: "var(--text)", lineHeight: 1.5, marginBottom: 14 }}>{t(c.title)}</p>
            {[
              { label: { ja: "課題", en: "Challenge" }, body: c.challenge },
              { label: { ja: "アプローチ", en: "Approach" }, body: c.approach },
              { label: { ja: "成果", en: "Result" }, body: c.result },
            ].map(row => (
              <div key={row.label.en} style={{ display: "grid", gridTemplateColumns: "minmax(72px, 88px) 1fr", gap: 12, marginBottom: 8 }}>
                <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", letterSpacing: "0.08em", color: "var(--muted)", paddingTop: 2 }}>{t(row.label).toUpperCase()}</p>
                <p style={{ fontSize: "0.84rem", color: "var(--text)", lineHeight: 1.7 }}>{t(row.body)}</p>
              </div>
            ))}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
              {c.stack.map(tag => (
                <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 2, padding: "2px 8px" }}>{tag}</span>
              ))}
            </div>
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
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", background: "var(--mint)", color: "#0A0E17", padding: "12px 28px", borderRadius: 2, border: "none", cursor: "pointer", fontWeight: 600, letterSpacing: "0.04em" , marginBottom: 40}}>
        {t({ ja: "相談する →", en: "Get in touch →" })}
      </button>

      {/* Process */}
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 4 }}>PROCESS</p>
      <h3 style={{ fontFamily: "var(--font-mono)", fontSize: "1.1rem", fontWeight: 600, color: "var(--text)", marginBottom: 20 }}>
        {t({ ja: "相談から発注までの流れ", en: "From Inquiry to Engagement" })}
      </h3>
      <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: 40 }}>
        {processSteps.map((step, i) => (
          <div key={step.label.en} style={{ display: "grid", gridTemplateColumns: "auto 1fr", gap: 16 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.8rem", color: "#0A0E17", background: "var(--mint)", width: 28, height: 28, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontWeight: 600, flexShrink: 0 }}>{i + 1}</span>
              {i < processSteps.length - 1 && <span style={{ width: 1, flex: 1, background: "var(--border)", margin: "4px 0" }} />}
            </div>
            <div style={{ paddingBottom: i < processSteps.length - 1 ? 20 : 0 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem", fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>{t(step.label)}</p>
              <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.7 }}>{t(step.desc)}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <p style={{ color: "var(--muted)", fontSize: "0.9rem", lineHeight: 1.8, marginBottom: 16, maxWidth: 580 }}>
        {t({
          ja: "「こんなことはできる？」というご相談だけでも歓迎です。まずは課題をお聞かせください。",
          en: "Feel free to reach out even just to ask whether something is feasible — tell me about your challenge first.",
        })}
      </p> */}
      <button onClick={() => setActiveTab("contact")}
        style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", background: "var(--mint)", color: "#0A0E17", padding: "12px 28px", borderRadius: 2, border: "none", cursor: "pointer", fontWeight: 600, letterSpacing: "0.04em" }}>
        {t({ ja: "相談する →", en: "Get in touch →" })}
      </button>
    </div>
  );
}
