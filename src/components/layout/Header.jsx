// ============================================================
// Header.jsx — タブバー（PC）/ ハンバーガー（モバイル）
// ============================================================
import { useState } from "react";

const TABS = [
  { id: "home",       label: { ja: "Home",       en: "Home" } },
  { id: "research",   label: { ja: "Research",   en: "Research" } },
  { id: "experience", label: { ja: "Experience", en: "Experience" } },
  { id: "freelance",  label: { ja: "Freelance",  en: "Freelance" } },
  { id: "hobbies",    label: { ja: "Hobbies",    en: "Hobbies" } },
  { id: "contact",    label: { ja: "Contact",    en: "Contact" } },
];

export default function Header({ activeTab, setActiveTab, lang, setLang }) {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleTabClick = (id) => {
    setActiveTab(id);
    setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .header {
          position: fixed; top: 0; left: 0; right: 0; z-index: 100;
          height: 56px;
          background: rgba(10,14,23,0.92);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid var(--border);
          display: flex; align-items: center;
        }
        .header-inner {
          width: 100%; max-width: 1100px; margin: 0 auto;
          padding: 0 24px;
          display: flex; align-items: center; justify-content: space-between;
        }
        .logo {
          font-family: var(--font-mono); font-size: 0.9rem; font-weight: 500;
          color: var(--text); cursor: pointer; letter-spacing: 0.04em;
          background: none; border: none;
        }
        .logo span { color: var(--mint); }
        .tabbar { display: flex; align-items: center; gap: 2px; }
        .tab-btn {
          font-family: var(--font-mono); font-size: 0.78rem; letter-spacing: 0.06em;
          background: none; border: none; color: var(--muted);
          cursor: pointer; padding: 6px 14px; position: relative; transition: color .15s;
        }
        .tab-btn:hover { color: var(--text); }
        .tab-btn.active { color: var(--mint); }
        .tab-btn.active::after {
          content: ''; position: absolute; bottom: -1px; left: 14px; right: 14px;
          height: 2px; background: var(--mint);
          animation: blink-bar 1.2s step-end infinite;
        }
        .lang-toggle {
          display: flex; border: 1px solid var(--border);
          border-radius: 3px; overflow: hidden; margin-left: 20px;
        }
        .lang-btn {
          font-family: var(--font-mono); font-size: 0.7rem;
          background: none; border: none; color: var(--muted);
          cursor: pointer; padding: 4px 10px; transition: background .15s, color .15s;
        }
        .lang-btn.active { background: var(--mint); color: #0A0E17; font-weight: 500; }
        .hamburger {
          display: none; background: none; border: none;
          cursor: pointer; color: var(--text); font-size: 1.3rem; padding: 4px;
        }
        /* Sidebar */
        .sidebar-overlay {
          display: none; position: fixed; inset: 0; z-index: 200;
          background: rgba(0,0,0,0.6);
        }
        .sidebar-overlay.open { display: block; }
        .sidebar {
          position: fixed; top: 0; left: 0; bottom: 0; z-index: 201;
          width: 240px; background: var(--surface);
          border-right: 1px solid var(--border);
          display: flex; flex-direction: column;
          transform: translateX(-100%); transition: transform .25s ease;
          padding: 24px 0;
        }
        .sidebar.open { transform: translateX(0); }
        .sidebar-logo {
          font-family: var(--font-mono); font-size: 0.9rem; color: var(--text);
          padding: 0 24px 24px; border-bottom: 1px solid var(--border); margin-bottom: 12px;
        }
        .sidebar-logo span { color: var(--mint); }
        .sidebar-tab {
          font-family: var(--font-mono); font-size: 0.85rem;
          background: none; border: none; cursor: pointer;
          color: var(--muted); text-align: left;
          padding: 13px 24px; width: 100%;
          transition: color .15s, background .15s; letter-spacing: 0.04em;
        }
        .sidebar-tab:hover { color: var(--text); background: rgba(255,255,255,0.03); }
        .sidebar-tab.active { color: var(--mint); }
        .sidebar-tab.active::before { content: '▸ '; }
        .sidebar-lang {
          margin-top: auto; padding: 16px 24px 0;
          border-top: 1px solid var(--border); display: flex; gap: 8px;
        }
        .sidebar-lang-btn {
          font-family: var(--font-mono); font-size: 0.7rem;
          background: none; border: 1px solid var(--border); border-radius: 2px;
          color: var(--muted); cursor: pointer; padding: 4px 12px;
          transition: background .15s, color .15s;
        }
        .sidebar-lang-btn.active { background: var(--mint); color: #0A0E17; font-weight: 500; border-color: var(--mint); }
        @media (max-width: 768px) {
          .tabbar { display: none; }
          .hamburger { display: block; }
          .lang-toggle { display: none; }
        }
        @media (prefers-reduced-motion: reduce) {
          .tab-btn.active::after { animation: none; }
        }
      `}</style>

      <header className="header">
        <div className="header-inner">
          <button className="logo" onClick={() => handleTabClick("home")}>
            <span>Koji Yokoyama</span>, Ph.D.
          </button>
          <nav className="tabbar">
            {TABS.map(tab => (
              <button
                key={tab.id}
                className={`tab-btn ${activeTab === tab.id ? "active" : ""}`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label[lang]}
              </button>
            ))}
            <div className="lang-toggle">
              <button className={`lang-btn ${lang === "ja" ? "active" : ""}`} onClick={() => setLang("ja")}>JA</button>
              <button className={`lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
            </div>
          </nav>
          <button className="hamburger" onClick={() => setMenuOpen(true)}>☰</button>
        </div>
      </header>

      <div className={`sidebar-overlay ${menuOpen ? "open" : ""}`} onClick={() => setMenuOpen(false)} />
      <aside className={`sidebar ${menuOpen ? "open" : ""}`}>
        <div className="sidebar-logo">YN<span>.</span></div>
        {TABS.map(tab => (
          <button
            key={tab.id}
            className={`sidebar-tab ${activeTab === tab.id ? "active" : ""}`}
            onClick={() => handleTabClick(tab.id)}
          >
            {tab.label[lang]}
          </button>
        ))}
        <div className="sidebar-lang">
          <button className={`sidebar-lang-btn ${lang === "ja" ? "active" : ""}`} onClick={() => setLang("ja")}>JA</button>
          <button className={`sidebar-lang-btn ${lang === "en" ? "active" : ""}`} onClick={() => setLang("en")}>EN</button>
        </div>
      </aside>
    </>
  );
}
