const LAYERS = [
  {
    name: "Applications",
    desc: "Customer sentiment management runs live today. LiquidBronze and FLO roll out on the same rails, in two phases.",
    tag: "Live + rolling out",
  },
  {
    name: "Agentic workflow",
    desc: "Insight → evidence → action, executed end-to-end. Agents work backward from a business objective, not a query.",
    tag: "Foundation",
  },
  {
    name: "Multi-agent orchestration",
    desc: "Specialized agents for strategy, GTM and finance coordinate on one plan, escalating to a human when they should.",
    tag: "Foundation",
  },
  {
    name: "Memory & context",
    desc: "Every interaction, document and transaction resolved to the account it belongs to — and remembered.",
    tag: "Foundation",
  },
  {
    name: "Connectors",
    desc: "REST, database and MCP connectors read the business as it actually runs, not as a quarterly export.",
    tag: "Foundation",
    base: true,
  },
];

const TRI = [
  {
    title: "Goal-oriented",
    desc: "Agents work backward from a business objective — not a query.",
  },
  {
    title: "Multi-agent orchestration",
    desc: "Specialized agents for strategy, GTM and finance coordinate on one plan.",
  },
  {
    title: "Agentic workflow",
    desc: "Insight → evidence → action, executed end-to-end on the platform.",
  },
];

const Foundation = () => {
  return (
    <section className="pad foundation" id="foundation">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">LiquidAlloy · Live today</div>
          <h2>One goal-first platform underneath every agent you run.</h2>
          <p>
            LiquidAlloy is B21's goal-first agentic foundation — already live,
            managing customer sentiment across every account it watches.
            LiquidBronze and FLO, the growth and opportunity products rolling out
            next, run on this exact same substrate, and so does anything you build
            yourself.
          </p>
        </div>

        <div className="stack">
          {LAYERS.map((l) => (
            <div className={"layer" + (l.base ? " base" : "")} key={l.name}>
              <div className="lname">{l.name}</div>
              <div className="ldesc">{l.desc}</div>
              <div className="ltag">{l.tag}</div>
            </div>
          ))}
        </div>

        <div className="tri">
          {TRI.map((t) => (
            <div className="tri-item" key={t.title}>
              <div className="ticon2">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#8B8CF0" strokeWidth="1.5" />
                  <circle cx="8" cy="8" r="2" fill="#8B8CF0" />
                </svg>
              </div>
              <h3>{t.title}</h3>
              <p>{t.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Foundation;