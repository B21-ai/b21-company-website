import type { HeroTab } from "../App";
import { COS } from "../data/flo";
import { Corners, fieldLabel, kicker, muted, wrap } from "../ui";

const BRONZE_POINTS = [
  "Predefined goals rooted in Blue Ocean Strategy fine-tune the offering and surface uncontested customers and markets",
  "One scrollable feed — one action, one piece of evidence per card, built for an owner with five minutes",
  "Promos are dynamic — drafted and priced by the agent, not the owner",
  "Full visibility into the profit and revenue impact of every promo before it goes out",
];

// How a FLO score is built — the signal's path from pipeline to credit decision.
const FLO_STEPS = [
  {
    n: "01",
    title: "Pipeline signal",
    desc: "Sales pipeline forms around a specific ICP on the B21 platform.",
  },
  {
    n: "02",
    title: "AR evidence",
    desc: "Receivables invoicing confirms the pipeline actually converts.",
  },
  {
    n: "03",
    title: "180 & 360-day projection",
    desc: "FLO projects the receivables forward across rolling 180 and 360-day horizons.",
  },
  {
    n: "04",
    title: "Opportunity score",
    desc: "The demand signal and its AR evidence go to LiquidSteel, where banks and fintechs make credit decisions.",
    last: true,
  },
];

const cardFoot = {
  marginTop: "auto",
  paddingTop: 8,
  display: "flex",
  alignItems: "center",
  gap: 20,
  flexWrap: "wrap" as const,
};

const inlineLink = {
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 17,
};

const Applications = ({ onTab }: { onTab: (t: HeroTab) => void }) => {
  return (
    <section id="phases" style={{ borderTop: "1px solid var(--color-divider)" }}>
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
          <span style={kicker}>LiquidBronze &amp; FLO</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(40px,5.5vw,72px)",
              lineHeight: 0.95,
              maxWidth: 920,
              textWrap: "balance",
            }}
          >
            One platform. Two phases. Growth, and the credit to fund it.
          </h2>
          <p style={{ margin: 0, fontSize: 17, maxWidth: 760, color: muted(72) }}>
            LiquidBronze runs on predefined goals rooted in Blue Ocean Strategy —
            nudging a business toward the right offer, customer and market. Every action
            taken strengthens the same pipeline and AR signal that FLO turns into a
            forward-looking opportunity score for LiquidSteel.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
            gap: 16,
          }}
        >
          <div
            className="blueprint"
            style={{
              padding: "clamp(24px,3vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <Corners />
            <span style={kicker}>LiquidBronze · Phase 1</span>
            <h3 style={{ margin: 0, fontSize: 36, lineHeight: 1 }}>
              A scrollable feed, not a dashboard.
            </h3>
            <p style={{ margin: 0, color: muted(72) }}>
              After onboarding, an intuitive feed delivers the actions a business can
              take right now — reach a new market, adjust an offer for a new customer —
              each one grounded in a predefined goal from Blue Ocean Strategy.
            </p>
            <div style={{ display: "flex", flexDirection: "column", fontSize: 15 }}>
              {BRONZE_POINTS.map((p) => (
                <div
                  key={p}
                  style={{
                    display: "flex",
                    gap: 12,
                    padding: "12px 0",
                    borderTop: "1px solid var(--color-divider)",
                  }}
                >
                  <span style={{ color: "var(--color-accent)" }}>+</span>
                  {p}
                </div>
              ))}
            </div>

            <div style={cardFoot}>
              <a href="#top" onClick={() => onTab("feed")} style={inlineLink}>
                Try the feed above →
              </a>
            </div>
          </div>

          <div
            className="blueprint"
            style={{
              padding: "clamp(24px,3vw,40px)",
              display: "flex",
              flexDirection: "column",
              gap: 16,
            }}
          >
            <Corners />
            <span style={kicker}>FLO · Phase 1</span>
            <h3 style={{ margin: 0, fontSize: 36, lineHeight: 1 }}>
              Forward-looking opportunity, scored.
            </h3>
            <p style={{ margin: 0, color: muted(72) }}>
              FLO's forward-looking opportunity model projects demand 180 and 360 days
              out from pipeline and AR evidence — surfaced to banks and fintechs through
              LiquidSteel.
            </p>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {COS.map((c) => (
                <div
                  key={c.name}
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr minmax(80px,140px) 48px",
                    gap: 12,
                    alignItems: "center",
                    padding: "12px 0",
                    borderTop: "1px solid var(--color-divider)",
                    fontSize: 15,
                  }}
                >
                  <span>{c.name}</span>
                  <span
                    style={{
                      display: "block",
                      height: 6,
                      border: "1px solid var(--color-divider)",
                    }}
                  >
                    <span
                      style={{
                        display: "block",
                        height: "100%",
                        width: (c.horizon / 360) * 100 + "%",
                        background: "var(--color-accent)",
                      }}
                    />
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontWeight: 600,
                      textAlign: "right",
                    }}
                  >
                    {c.horizon}d
                  </span>
                </div>
              ))}
            </div>

            <div style={cardFoot}>
              <a
                className="btn btn-primary blueprint"
                href="#start"
                style={{ padding: "12px 20px", fontSize: 16, color: "var(--color-bg)" }}
              >
                Get early access
                <Corners />
              </a>
              <a href="#top" onClick={() => onTab("flo")} style={inlineLink}>
                Explore FLO scores above →
              </a>
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 24,
            paddingTop: 48,
            borderTop: "1px solid var(--color-divider)",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "baseline",
              gap: "8px 32px",
              flexWrap: "wrap",
            }}
          >
            <span style={kicker}>How a FLO score gets built</span>
            <span style={{ fontSize: 15, color: muted(62) }}>
              Pipeline → AR → projection → credit decision
            </span>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,240px),1fr))",
              gap: 16,
            }}
          >
            {FLO_STEPS.map((s) => (
              <div
                key={s.n}
                className="blueprint"
                style={{
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  ...(s.last
                    ? {
                        borderColor: "var(--color-accent)",
                        background: "color-mix(in srgb,var(--color-accent) 8%,transparent)",
                      }
                    : {}),
                }}
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
                  {s.n}
                </span>
                <h4 style={{ margin: 0, fontSize: 24, lineHeight: 1.05 }}>{s.title}</h4>
                <p style={{ margin: 0, fontSize: 14, color: muted(72) }}>{s.desc}</p>
              </div>
            ))}
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              flexWrap: "wrap",
              padding: "18px 24px",
              border: "1px solid var(--color-accent)",
              background: "color-mix(in srgb,var(--color-accent) 6%,transparent)",
            }}
          >
            <span style={{ ...fieldLabel, color: "var(--color-accent-700)" }}>
              Traceable
            </span>
            <span style={{ fontSize: 16 }}>
              Every score traces back to the signals that produced it.{" "}
              <strong
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 19,
                }}
              >
                Nothing is a black box.
              </strong>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Applications;
