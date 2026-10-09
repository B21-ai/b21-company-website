import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Problem from "./components/Problem";
import Offer from "./components/Offer";
import Foundation from "./components/Foundation";
import Applications from "./components/Applications";
import Roadmap from "./components/Roadmap";
import WhyNow from "./components/WhyNow";
import Trust from "./components/Trust";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

export type HeroTab = "flo" | "feed";

function App() {
  const [dark, setDark] = useState(false);
  const [tab, setTab] = useState<HeroTab>("flo");

  return (
    <div
      className={dark ? "th-dark" : "th-light"}
      style={{
        minHeight: "100vh",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: 1.55,
        transition: "background .3s,color .3s",
      }}
    >
      <Nav dark={dark} onToggleTheme={() => setDark((d) => !d)} />
      <Hero tab={tab} onTab={setTab} />
      <Stats />
      <Problem />
      <Offer />
      <Foundation />
      <Applications onTab={setTab} />
      <Roadmap />
      <WhyNow />
      <Trust />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
