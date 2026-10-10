const LINKS = [
  { href: "/#trust", label: "Trust", match: "/" },
  { href: "/about", label: "About", match: "/about" },
  { href: "/contact", label: "Contact", match: "/contact" },
];

const Nav = ({
  dark,
  onToggleTheme,
  path = "/",
}: {
  dark: boolean;
  onToggleTheme: () => void;
  path?: string;
}) => {
  const here = path.replace(/\/+$/, "") || "/";
  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 10,
        background: "color-mix(in srgb,var(--color-bg) 88%,transparent)",
        backdropFilter: "blur(10px)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "14px 24px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          flexWrap: "wrap",
        }}
      >
        <a
          href="/"
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            color: "var(--color-text)",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 24,
          }}
        >
          <span
            style={{ width: 14, height: 14, background: "var(--color-accent)" }}
          />
          B21
        </a>
        <nav
          style={{
            display: "flex",
            gap: 24,
            fontSize: 15,
            flex: 1,
            flexWrap: "wrap",
          }}
        >
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              aria-current={here === l.match ? "page" : undefined}
              style={{
                color:
                  here === l.match && l.match !== "/"
                    ? "var(--color-accent-700)"
                    : "var(--color-text)",
              }}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <div style={{ display: "flex", gap: 8 }}>
          <button className="btn btn-ghost" onClick={onToggleTheme}>
            {dark ? "☀ Light" : "☾ Dark"}
          </button>
          <a
            className="btn btn-primary"
            href="/contact"
            style={{ color: "var(--color-bg)" }}
          >
            Get early access
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
