// ============================================================
// ProductTab.jsx — Product タブ
// ============================================================
import { products } from "../../data/products";

function StatusBadge({ status }) {
  const map = {
    live:     { symbol: "●", label: "LIVE",     style: { color: "var(--mint)" } },
    beta:     { symbol: "●", label: "BETA",     style: { color: "#FBBF24" } },
    wip:      { symbol: "◌", label: "WIP",      style: { color: "var(--muted)" } },
    archived: { symbol: "",  label: "ARCHIVED", style: { color: "var(--muted)" } },
  };
  const { symbol, label, style } = map[status] ?? map.wip;
  return (
    <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", ...style }}>
      {symbol}{symbol ? " " : ""}{label}
    </span>
  );
}

function PricingBadge({ pricing }) {
  if (!pricing) return null;
  if (pricing.type === "free") {
    return (
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", color: "var(--mint)", border: "1px solid var(--mint)", borderRadius: 2, padding: "1px 6px" }}>
        FREE
      </span>
    );
  }
  if (pricing.type === "oss") {
    return (
      <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", letterSpacing: "0.06em", color: "var(--mint)", border: "1px solid var(--mint)", borderRadius: 2, padding: "1px 6px" }}>
        OSS
      </span>
    );
  }
  return null;
}

function PricingTable({ pricing, t }) {
  if (!pricing || !pricing.plans || pricing.plans.length === 0) return null;
  return (
    <div style={{ borderTop: "1px solid var(--border)", paddingTop: 16, marginTop: 16 }}>
      <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
        {pricing.plans.map(plan => (
          <div key={plan.name} style={{ flex: "1 1 140px", minWidth: 120 }}>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>{plan.name}</p>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.85rem", color: "var(--mint)", marginBottom: 8 }}>{t(plan.price)}</p>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {plan.features.map(f => (
                <li key={f} style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.7 }}>— {f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function ProductCard({ product, t }) {
  const hasPlans = product.pricing?.plans?.length > 0;

  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderLeft: "2px solid var(--mint)", borderRadius: 4, padding: "20px 24px" }}>
      <div style={{ display: "flex", gap: 20, alignItems: "flex-start" }}>
        {/* Thumbnail — hidden on mobile via inline media query workaround */}
        <div className="product-thumb" style={{ flexShrink: 0, width: 160, height: 100, borderRadius: 2, overflow: "hidden", background: "var(--border)" }}>
          {product.thumbnail
            ? <img src={product.thumbnail} alt={t(product.name)} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
            : null}
        </div>

        {/* Content */}
        <div style={{ flex: 1, minWidth: 0 }}>
          {/* Badges row */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8, flexWrap: "wrap" }}>
            <StatusBadge status={product.status} />
            <PricingBadge pricing={product.pricing} />
          </div>

          {/* Name */}
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "1rem", fontWeight: 500, color: "var(--text)", marginBottom: 4 }}>
            {t(product.name)}
          </p>

          {/* Tagline */}
          <p style={{ fontSize: "0.85rem", color: "var(--muted)", marginBottom: 10 }}>
            {t(product.tagline)}
          </p>

          {/* Desc */}
          <p style={{ fontSize: "0.84rem", color: "var(--text)", lineHeight: 1.75, marginBottom: 14 }}>
            {t(product.desc)}
          </p>

          {/* Stack */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 14 }}>
            {product.stack.map(tag => (
              <span key={tag} style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--muted)", border: "1px solid var(--border)", borderRadius: 2, padding: "2px 8px" }}>{tag}</span>
            ))}
          </div>

          {/* Links */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {product.demoUrl && (
              <a href={product.demoUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", background: "var(--mint)", color: "#0A0E17", padding: "6px 16px", borderRadius: 2, border: "none", cursor: "pointer", fontWeight: 600, letterSpacing: "0.04em", textDecoration: "none" }}>
                Demo →
              </a>
            )}
            {product.githubUrl && (
              <a href={product.githubUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text)", padding: "6px 16px", borderRadius: 2, border: "1px solid var(--border)", cursor: "pointer", letterSpacing: "0.04em", textDecoration: "none" }}>
                GitHub
              </a>
            )}
            {product.productHuntUrl && (
              <a href={product.productHuntUrl} target="_blank" rel="noopener noreferrer"
                style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text)", padding: "6px 16px", borderRadius: 2, border: "1px solid var(--border)", cursor: "pointer", letterSpacing: "0.04em", textDecoration: "none" }}>
                Product Hunt ↗
              </a>
            )}
          </div>
        </div>
      </div>

      {/* Pricing table (only for freemium/paid with plans) */}
      {hasPlans && <PricingTable pricing={product.pricing} t={t} />}
    </div>
  );
}

export default function ProductTab({ t }) {
  return (
    <>
      <style>{`
        @media (max-width: 600px) {
          .product-thumb { display: none !important; }
        }
      `}</style>
      <div style={{ maxWidth: 760, margin: "0 auto" }}>
        <p style={{ fontFamily: "var(--font-mono)", fontSize: "1.0rem", letterSpacing: "0.16em", color: "var(--mint)", marginBottom: 12 }}>PRODUCTS</p>
        <h2 style={{ fontFamily: "var(--font-mono)", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 600, color: "var(--text)", marginBottom: 32, lineHeight: 1.25 }}>
          {t({ ja: "プロダクト", en: "Products" })}
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} t={t} />
          ))}
        </div>
      </div>
    </>
  );
}
