import { Corners, kicker, muted } from "../ui";

const LAYERS = [
  {
    name: "Agentic workflow",
    desc: "Insight → evidence → action, executed end-to-end on the platform.",
  },
  {
    name: "Multi-agent orchestration",
    desc: "Specialized agents for strategy, GTM and finance coordinate on one plan, escalating to a human when they should.",
  },
  {
    name: "Memory & context",
    desc: "Every interaction, document and transaction resolved to the account it belongs to — and remembered.",
  },
  {
    name: "Connectors",
    desc: "REST, database and MCP connectors read the business as it actually runs, not as a quarterly export.",
  },
];

const Foundation = () => {
  return (
    <section id="alloy" style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "clamp(72px,10vw,128px) 24px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "48px 64px",
          alignItems: "start",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "sticky",
            top: 96,
          }}
        >
          <span style={kicker}>LiquidAlloy · Live today</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(40px,5vw,64px)",
              lineHeight: 0.95,
              textWrap: "balance",
            }}
          >
            One goal-first platform underneath every agent you run.
          </h2>
          <p style={{ margin: 0, fontSize: 17, color: muted(72) }}>
            LiquidAlloy is B21's goal-first agentic foundation — already live, managing
            customer sentiment across every account it watches. LiquidBronze and FLO,
            the growth and opportunity products rolling out next, run on this exact same
            substrate, and so does anything you build yourself.
          </p>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <div
            className="blueprint"
            style={{
              padding: "24px 28px",
              display: "flex",
              flexDirection: "column",
              gap: 8,
              borderColor: "var(--color-accent)",
              background: "color-mix(in srgb,var(--color-accent) 8%,transparent)",
            }}
          >
            <Corners />
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: 12,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 28 }}>Applications</h3>
              <span className="tag tag-outline">Live + rolling out</span>
            </div>
            <p style={{ margin: 0, fontSize: 15, color: muted(72) }}>
              Customer sentiment management runs live today. LiquidBronze and FLO roll
              out on the same rails, in two phases.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              fontFamily: "var(--font-heading)",
              fontSize: 12,
              letterSpacing: "0.12em",
              color: muted(50),
            }}
          >
            ▲ runs on ▲
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              border: "1px solid var(--color-divider)",
            }}
          >
            <div
              style={{
                gridColumn: "1 / -1",
                padding: 24,
                borderBottom: "1px solid var(--color-divider)",
                display: "flex",
                flexDirection: "column",
                gap: 6,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontSize: 11,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "var(--color-accent-700)",
                }}
              >
                The principle
              </span>
              <h4 style={{ margin: 0, fontSize: 22 }}>Goal-oriented</h4>
              <p style={{ margin: 0, fontSize: 14, color: muted(72) }}>
                Agents work backward from a business objective — not a query. It is the
                goal, not the prompt, that the four capabilities below serve.
              </p>
            </div>

            {LAYERS.map((l, i) => (
              <div
                key={l.name}
                style={{
                  padding: 24,
                  borderRight:
                    i % 2 === 0 ? "1px solid var(--color-divider)" : undefined,
                  borderBottom: i < 2 ? "1px solid var(--color-divider)" : undefined,
                  display: "flex",
                  flexDirection: "column",
                  gap: 6,
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: 11,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: muted(55),
                  }}
                >
                  Foundation
                </span>
                <h4 style={{ margin: 0, fontSize: 22 }}>{l.name}</h4>
                <p style={{ margin: 0, fontSize: 14, color: muted(72) }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Foundation;
