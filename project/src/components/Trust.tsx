const ITEMS = [
  {
    title: "Nothing is a black box",
    desc: "Every FLO score and every LiquidBronze nudge traces back to the pipeline and AR signals that produced it.",
    icon: (
      <path
        d="M8 1.5l5.5 2.2v3.9c0 3.3-2.3 5.9-5.5 6.9-3.2-1-5.5-3.6-5.5-6.9V3.7L8 1.5z"
        stroke="#12B886"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Your data stays yours",
    desc: "Pipeline, AR and customer data are read to build the signal — never sold, never used to train against you.",
    icon: (
      <>
        <rect x="3" y="7" width="10" height="7" rx="1.5" stroke="#12B886" strokeWidth="1.5" />
        <path d="M5.5 7V5a2.5 2.5 0 015 0v2" stroke="#12B886" strokeWidth="1.5" />
      </>
    ),
  },
  {
    title: "Goals, not autopilot",
    desc: "Agents act toward the objective you set, with approval gates on anything that touches money or a customer relationship.",
    icon: (
      <path
        d="M4 2.5h8v11l-4-2-4 2v-11z"
        stroke="#12B886"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Built for LiquidSteel underwriting",
    desc: "FLO's signal is structured for credit decisioning from day one — evidence-backed, auditable, and consistent across accounts.",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" stroke="#12B886" strokeWidth="1.5" />
        <path d="M5.5 8.2l1.8 1.8L11 6.3" stroke="#12B886" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

const Trust = () => {
  return (
    <section className="pad trust" id="trust">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Built to earn trust on both sides</div>
          <h2>Signal an SMB can stand behind and LiquidSteel can underwrite on.</h2>
        </div>
        <div className="tgrid">
          {ITEMS.map((it) => (
            <div className="titem" key={it.title}>
              <div className="ticon">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  {it.icon}
                </svg>
              </div>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trust;