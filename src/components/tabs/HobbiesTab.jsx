// ============================================================
// HobbiesTab.jsx — Hobbies タブ
// ============================================================
import { hobbies } from "../../data/hobbies";

export default function HobbiesTab({ t }) {
  return (
    <div style={{ maxWidth: 760, margin: "0 auto" }}>
      <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>HOBBIES</p>
      <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 36, lineHeight: 1.25 }}>
        {t({ ja: "研究室の外", en: "Outside the Lab" })}
      </h2>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))", gap: 16 }}>
        {hobbies.map(h => (
          <div key={h.name.en} style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 4, overflow: "hidden" }}>
            {h.photo ? (
              <img src={h.photo} alt={h.name.en} style={{ width: "100%", height: 160, objectFit: "cover", display: "block" }} />
            ) : (
              <div style={{ height: h.name.en === "Photography" ? 160 : 80, display: "flex", alignItems: "center", justifyContent: "center", background: "var(--bg)", fontSize: h.name.en === "Photography" ? "1rem" : "2.4rem" }}>
                {h.name.en === "Photography"
                  ? <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--muted)" }}>{t({ ja: "作例写真（後で追加）", en: "Photo sample (to be added)" })}</span>
                  : h.icon
                }
              </div>
            )}
            <div style={{ padding: "16px 20px" }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.88rem", fontWeight: 500, color: "var(--text)", marginBottom: 6 }}>{t(h.name)}</p>
              <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.7 }}>{t(h.desc)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
