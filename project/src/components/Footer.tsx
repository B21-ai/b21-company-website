import { muted } from "../ui";

const col = {
  display: "flex",
  flexDirection: "column" as const,
  gap: 8,
  minWidth: 140,
};

const Footer = () => {
  return (
    <footer style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(48px,5vw,72px) 24px 32px",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(40px,5vw,64px)",
          fontSize: 14,
        }}
      >
        {/* Brand left, link columns right — balanced now that the blurb is gone. */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: 40,
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
            <span
              style={{ width: 14, height: 14, background: "var(--color-accent)" }}
            />
            B21
          </span>

          <div style={{ display: "flex", gap: "32px 72px", flexWrap: "wrap" }}>
            <div style={col}>
              <h6 style={{ margin: "0 0 4px" }}>Company</h6>
              <a href="#about">About</a>
              <a href="#contact">Contact</a>
            </div>
            <div style={col}>
              <h6 style={{ margin: "0 0 4px" }}>Resources</h6>
              <a href="#trust">Trust</a>
              <a href="#contact">Get early access</a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            gap: 16,
            flexWrap: "wrap",
            paddingTop: 24,
            borderTop: "1px solid var(--color-divider)",
            color: muted(55),
          }}
        >
          <span>© 2026 B21.ai, all rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
