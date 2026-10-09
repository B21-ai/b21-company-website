import type { HeroTab } from "../App";
import { Corners, fieldLabel, muted } from "../ui";
import FloHorizon from "./FloHorizon";
import BronzeFeed from "./BronzeFeed";

const Hero = ({ tab, onTab }: { tab: HeroTab; onTab: (t: HeroTab) => void }) => {
  const tabStyle = (on: boolean) => ({
    all: "unset" as const,
    cursor: "pointer",
    padding: "8px 18px",
    fontFamily: "var(--font-heading)",
    fontWeight: 600,
    fontSize: 16,
    background: on ? "var(--color-accent)" : "transparent",
    color: on ? "var(--color-bg)" : "var(--color-text)",
  });

  return (
    <section id="top" style={{ position: "relative", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(var(--color-divider) 1px,transparent 1px),linear-gradient(90deg,var(--color-divider) 1px,transparent 1px)",
          backgroundSize: "56px 56px",
          WebkitMaskImage:
            "radial-gradient(ellipse 60% 50% at 50% 20%,#000,transparent)",
          maskImage: "radial-gradient(ellipse 60% 50% at 50% 20%,#000,transparent)",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "relative",
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(56px,9vw,112px) 24px 80px",
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
          <span style={{ width: 6, height: 6, background: "var(--color-accent)" }} />
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
          <strong style={{ color: "var(--color-text)" }}>B21</strong>'s goal-first
          agentic foundation.{" "}
          <strong style={{ color: "var(--color-text)" }}>LiquidBronze</strong> runs on
          it to discover your ideal customers, track product-market fit, and grow your
          sales pipeline autonomously. Every action creates insight and feeds{" "}
          <strong style={{ color: "var(--color-text)" }}>FLO</strong>, the opportunity
          model that shows you exactly how things are right now.
        </p>
        <div style={{ display: "flex", gap: 12, flexWrap: "wrap", justifyContent: "center" }}>
          <a
            className="btn btn-primary blueprint"
            href="#start"
            style={{ fontSize: 17, padding: "14px 26px", color: "var(--color-bg)" }}
          >
            Get early access
            <Corners />
          </a>
          <a
            className="btn btn-secondary"
            href="#alloy"
            style={{ fontSize: 17, padding: "14px 26px", color: "var(--color-text)" }}
          >
            See the platform
          </a>
        </div>

        <div
          className="blueprint"
          style={{
            width: "100%",
            marginTop: 40,
            textAlign: "left",
            background: "var(--color-bg)",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <Corners />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 16,
              padding: "12px 16px",
              borderBottom: "1px solid var(--color-divider)",
              flexWrap: "wrap",
            }}
          >
            <div style={{ display: "flex", border: "1px solid var(--color-divider)" }}>
              <button onClick={() => onTab("flo")} style={tabStyle(tab === "flo")}>
                FLO score
              </button>
              <button
                onClick={() => onTab("feed")}
                style={{
                  ...tabStyle(tab === "feed"),
                  borderLeft: "1px solid var(--color-divider)",
                }}
              >
                LiquidBronze feed
              </button>
            </div>
            <span style={fieldLabel}>Phase 1 · B2B · demo data</span>
          </div>

          {tab === "flo" ? <FloHorizon /> : <BronzeFeed />}
        </div>
      </div>
    </section>
  );
};

export default Hero;
