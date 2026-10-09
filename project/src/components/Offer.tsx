import BronzePhone from "./BronzePhone";
import { Corners, kicker, muted, wrap } from "../ui";

const OFFER = [
  {
    n: "01",
    title: "Ideal Customer Discovery",
    desc: "Analyzes your best existing customers and reverse-engineers who else looks exactly like them — across 90M+ business profiles. Stop guessing who to target.",
    flag: "90M+ business profiles",
  },
  {
    n: "02",
    title: "PMF Intelligence Loop",
    desc: "Continuous feedback analysis from churn signals, usage patterns, and market shifts. Know exactly where your product fits — and where it needs to evolve.",
  },
  {
    n: "03",
    title: "Autonomous Customer Intelligence",
    desc: "Deploy AI agents that handle CSAT, promos, and product-fit insights. Your team stops doing repetitive work and starts doing meaningful work.",
  },
];

const Offer = () => {
  return (
    <section id="bronze" style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ ...wrap, display: "flex", flexDirection: "column", gap: 48 }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 14,
          }}
        >
          <span style={kicker}>LiquidBronze · AI growth, AI sales</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(40px,5.5vw,72px)",
              lineHeight: 0.95,
              maxWidth: 860,
              textWrap: "balance",
            }}
          >
            LiquidBronze finds the customer, the fit, and the fix.
          </h2>
          <p style={{ margin: 0, fontSize: 18, maxWidth: 680, color: muted(72) }}>
            Built on LiquidAlloy, LiquidBronze is the sales and strategy application
            that grows and manages a small business's sales pipeline — three AI
            capabilities that turn guesswork into evidence.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: 16,
          }}
        >
          {OFFER.map((o) => (
            <div
              key={o.n}
              className="blueprint"
              style={{ padding: 32, display: "flex", flexDirection: "column", gap: 14 }}
            >
              <Corners />
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 15,
                  color: "var(--color-accent-700)",
                }}
              >
                {o.n}
              </span>
              <h3 style={{ margin: 0, fontSize: 30, lineHeight: 1 }}>{o.title}</h3>
              <p style={{ margin: 0, flex: 1, color: muted(72) }}>{o.desc}</p>
              {o.flag && (
                <span className="tag tag-accent" style={{ alignSelf: "flex-start" }}>
                  {o.flag}
                </span>
              )}
            </div>
          ))}
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: "32px 64px",
            alignItems: "center",
            paddingTop: 48,
            borderTop: "1px solid var(--color-divider)",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <span style={kicker}>What it looks like day to day</span>
            <h3
              style={{
                margin: 0,
                fontSize: "clamp(30px,3.4vw,44px)",
                lineHeight: 1,
                textWrap: "balance",
              }}
            >
              A scrollable feed, not a dashboard.
            </h3>
            <p style={{ margin: 0, color: muted(72) }}>
              Each card carries one action and the evidence behind it — including the
              revenue, margin and profit impact of a promo before it goes out.
            </p>
            <a
              className="btn btn-primary blueprint"
              href="#start"
              style={{
                alignSelf: "flex-start",
                padding: "12px 20px",
                fontSize: 16,
                color: "var(--color-bg)",
              }}
            >
              See it on your pipeline
              <Corners />
            </a>
          </div>
          <BronzePhone />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 20,
            flexWrap: "wrap",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(24px,3vw,36px)",
          }}
        >
          <span style={{ color: muted(40) }}>Opaque growth</span>
          <span style={{ width: 96, height: 1, background: "var(--color-accent)" }} />
          <span style={{ color: "var(--color-accent)" }}>Transparent growth</span>
        </div>
      </div>
    </section>
  );
};

export default Offer;
