import { muted } from "../ui";

const Hero = () => {
  return (
    <section id="top" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(56px,7vw,104px) 24px clamp(64px,7vw,100px)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: 24,
        }}
      >
        <span
          className="tag tag-outline"
          style={{ display: "inline-flex", alignItems: "center", gap: 8 }}
        >
          <span
            style={{ width: 6, height: 6, background: "var(--color-accent)" }}
          />
          LiquidAlloy · Live today
        </span>
        <h1
          style={{
            margin: 0,
            fontSize: "clamp(48px,8vw,104px)",
            lineHeight: 0.92,
            letterSpacing: "-0.015em",
            maxWidth: 980,
            textWrap: "balance",
          }}
        >
          SMB AI growth. From opaque to{" "}
          <span style={{ color: "var(--color-accent)" }}>transparent.</span>
        </h1>
        <p
          style={{
            margin: 0,
            fontSize: "clamp(17px,1.6vw,19px)",
            maxWidth: 700,
            color: muted(72),
            textWrap: "pretty",
          }}
        >
          <strong style={{ color: "var(--color-text)" }}>LiquidAlloy</strong> is{" "}
          <strong style={{ color: "var(--color-text)" }}>B21</strong>'s
          goal-first agentic foundation.{" "}
          <strong style={{ color: "var(--color-text)" }}>LiquidBronze</strong>{" "}
          runs on it to discover your ideal customers, track product-market fit,
          and grow your sales pipeline autonomously. Every action creates
          insight and feeds{" "}
          <strong style={{ color: "var(--color-text)" }}>FLO</strong>, the
          opportunity model that shows you exactly how things are right now.
        </p>
        <div
          style={{
            display: "flex",
            gap: 12,
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <a
            className="btn btn-primary"
            href="#contact"
            style={{
              fontSize: 17,
              padding: "14px 26px",
              color: "var(--color-bg)",
            }}
          >
            Get early access
          </a>
          <a
            className="btn btn-secondary"
            href="#trust"
            style={{
              fontSize: 17,
              padding: "14px 26px",
              color: "var(--color-text)",
            }}
          >
            See the platform
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
