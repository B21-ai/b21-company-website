import { muted } from "../ui";

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "56px 24px 32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))",
          gap: 32,
          fontSize: 14,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 12,
            gridColumn: "span 2",
            minWidth: 0,
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 24,
            }}
          >
            <span style={{ width: 14, height: 14, background: "var(--color-accent)" }} />
            B21
          </span>
          <span style={{ maxWidth: 360, color: muted(65) }}>
            LiquidAlloy is live today. LiquidBronze, FLO and LiquidSteel roll out next —
            turning SMB growth into a signal fintechs can fund.
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h6 style={{ margin: "0 0 4px" }}>Platform</h6>
          <a href="#bronze">LiquidBronze</a>
          <a href="#alloy">LiquidAlloy</a>
          <a href="#phases">FLO</a>
          <a href="#phases">LiquidSteel</a>
          <a href="#roadmap">Roadmap</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h6 style={{ margin: "0 0 4px" }}>Company</h6>
          <a href="#about">About</a>
          <a href="#start">Contact</a>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <h6 style={{ margin: "0 0 4px" }}>Resources</h6>
          <a href="#trust">Trust</a>
          <a href="#start">Get early access</a>
        </div>

        <div
          style={{
            gridColumn: "1 / -1",
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            paddingTop: 24,
            borderTop: "1px solid var(--color-divider)",
            color: muted(55),
          }}
        >
          <span>© 2026 B21.ai — all rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
