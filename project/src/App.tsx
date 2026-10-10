import { useEffect, useState } from "react";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";

/** Each route is prerendered to its own HTML file, so navigation is a
 *  plain document load — no client router needed. */
function routeFor(path: string) {
  const p = path.replace(/\/+$/, "") || "/";
  if (p === "/about") return <About />;
  if (p === "/contact") return <Contact />;
  return <Home />;
}

function App({ path = "/" }: { path?: string }) {
  const [dark, setDark] = useState(false);

  // Read the stored theme after mount so the server and client agree on the
  // first render; navigating between pages then keeps the chosen theme.
  useEffect(() => {
    if (localStorage.getItem("b21-theme") === "dark") setDark(true);
  }, []);

  const toggle = () => {
    setDark((d) => {
      localStorage.setItem("b21-theme", d ? "light" : "dark");
      return !d;
    });
  };

  return (
    <div
      className={dark ? "th-dark" : "th-light"}
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        background: "var(--color-bg)",
        color: "var(--color-text)",
        fontFamily: "var(--font-body)",
        fontSize: 16,
        lineHeight: 1.55,
        transition: "background .3s,color .3s",
      }}
    >
      <Nav dark={dark} onToggleTheme={toggle} path={path} />
      <main style={{ flex: 1 }}>{routeFor(path)}</main>
      <Footer />
    </div>
  );
}

export default App;
