import { useState } from "react";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Trust from "./components/Trust";
import About from "./components/About";
import Cta from "./components/Cta";
import Footer from "./components/Footer";

function App() {
  const [dark, setDark] = useState(false);

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
      <Hero />
      <Trust />
      <About />
      <Cta />
      <Footer />
    </div>
  );
}

export default App;
