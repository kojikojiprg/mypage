// ============================================================
// App.jsx — タブ切り替えのみ管理するルート
// ============================================================
import { useState } from "react";
import "./styles/tokens.css";
import { useLang } from "./hooks/useLang";
import Header from "./components/layout/Header";
import HomeTab from "./components/tabs/HomeTab";
import ResearchTab from "./components/tabs/ResearchTab";
import ExperienceTab from "./components/tabs/ExperienceTab";
import FreelanceTab from "./components/tabs/FreelanceTab";
import HobbiesTab from "./components/tabs/HobbiesTab";
import ContactTab from "./components/tabs/ContactTab";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");
  const { lang, setLang, t } = useLang();

  const renderTab = () => {
    switch (activeTab) {
      case "home":       return <HomeTab t={t} />;
      case "research":   return <ResearchTab t={t} />;
      case "experience": return <ExperienceTab t={t} />;
      case "freelance":  return <FreelanceTab t={t} setActiveTab={setActiveTab} />;
      case "hobbies":    return <HobbiesTab t={t} />;
      case "contact":    return <ContactTab t={t} />;
      default:           return <HomeTab t={t} />;
    }
  };

  return (
    <>
      <Header
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        lang={lang}
        setLang={setLang}
      />
      <main style={{ paddingTop: 56, minHeight: "100vh" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "48px 24px 80px" }}>
          {renderTab()}
        </div>
      </main>
      <footer style={{ borderTop: "1px solid var(--border)", padding: 24, textAlign: "center", fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--muted)", letterSpacing: "0.04em" }}>
        © 2026 Koji Yokoyama. All rights reserved.
      </footer>
    </>
  );
}
