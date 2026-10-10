import { kicker, muted, sectionRule, wrap } from "../ui";

const ITEMS = [
  {
    title: "Nothing is a black box",
    desc: "Every score and every nudge traces back to the pipeline and AR signals that produced it.",
  },
  {
    title: "Your data stays yours",
    desc: "Pipeline, AR and customer data are read to build the signal. Never sold, never used to train against you.",
  },
  {
    title: "Goals, not autopilot",
    desc: "Agents act toward the objective you set, with approval gates on anything that touches money or a customer relationship.",
  },
  {
    title: "Built for lender underwriting",
    desc: "The signal is structured for credit decisioning from day one: evidence-backed, auditable, and consistent across accounts.",
  },
];

const Trust = () => {
  return (
    <section id="trust" style={sectionRule}>
      <div
        style={{ ...wrap, display: "flex", flexDirection: "column", gap: 48 }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 14,
          }}
        >
          <span style={kicker}>Built to earn trust on both sides</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(36px,5vw,64px)",
              lineHeight: 0.95,
              maxWidth: 900,
              textWrap: "balance",
            }}
          >
            Signal an SMB can stand behind and lenders can underwrite on.
          </h2>
        </div>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))",
            border: "1px solid var(--color-divider)",
          }}
        >
          {ITEMS.map((it, i) => (
            <div
              key={it.title}
              style={{
                padding: 28,
                borderRight:
                  i < ITEMS.length - 1
                    ? "1px solid var(--color-divider)"
                    : undefined,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <h3 style={{ margin: 0, fontSize: 24 }}>{it.title}</h3>
              <p style={{ margin: 0, fontSize: 15, color: muted(72) }}>
                {it.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;
