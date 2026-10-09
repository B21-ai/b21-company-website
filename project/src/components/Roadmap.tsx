import { kicker, muted, wrap } from "../ui";

const PHASES = [
  {
    tagClass: "tag tag-accent",
    tag: "Live today",
    title: "LiquidAlloy",
    desc: "Already in production, managing customer sentiment across every account it watches — the same substrate LiquidBronze and FLO roll out on next.",
    rule: "3px solid var(--color-accent)",
  },
  {
    tagClass: "tag tag-outline",
    tag: "Phase 1 · B2B",
    title: "LiquidBronze + FLO",
    desc: "Blue Ocean growth nudges and dynamic promos, plus FLO's forward-looking opportunity model projecting demand 180 and 360 days out from pipeline and AR evidence — surfaced to banks and fintechs through LiquidSteel.",
    rule: "3px solid color-mix(in srgb,var(--color-accent) 50%,transparent)",
  },
  {
    tagClass: "tag tag-neutral",
    tag: "Phase 2 · B2C",
    title: "Extending to consumer businesses",
    desc: "The same LiquidBronze nudges, dynamic promos, and FLO opportunity model, extended to B2C businesses and their customers.",
    rule: "3px dashed var(--color-divider)",
  },
];

const Roadmap = () => {
  return (
    <section id="roadmap" style={{ borderTop: "1px solid var(--color-divider)" }}>
      <div style={{ ...wrap, display: "flex", flexDirection: "column", gap: 48 }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
            gap: "24px 64px",
            alignItems: "end",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <span style={kicker}>Rollout</span>
            <h2
              style={{ margin: 0, fontSize: "clamp(40px,5.5vw,72px)", lineHeight: 0.95 }}
            >
              Live today. Rolling out in two phases.
            </h2>
          </div>
          <p style={{ margin: 0, fontSize: 17, color: muted(72) }}>
            LiquidAlloy, the foundation, is already in production. LiquidBronze, FLO, and
            LiquidSteel roll out for B2B businesses first, then extend to B2C.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,300px),1fr))",
            gap: 32,
            borderTop: "1px solid var(--color-divider)",
          }}
        >
          {PHASES.map((p) => (
            <div
              key={p.title}
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                paddingTop: 28,
                borderTop: p.rule,
                marginTop: -2,
              }}
            >
              <span className={p.tagClass} style={{ alignSelf: "flex-start" }}>
                {p.tag}
              </span>
              <h3 style={{ margin: 0, fontSize: 32 }}>{p.title}</h3>
              <p style={{ margin: 0, color: muted(72) }}>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
