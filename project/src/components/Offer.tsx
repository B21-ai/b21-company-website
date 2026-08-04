const OFFER = [
  {
    title: "Ideal Customer Discovery",
    desc: "Analyzes your best existing customers and reverse-engineers who else looks exactly like them — across 90M+ business profiles. Stop guessing who to target.",
    flag: "90M+ business profiles",
    icon: (
      <>
        <circle cx="8" cy="8" r="6" stroke="#8B8CF0" strokeWidth="1.5" />
        <circle cx="8" cy="8" r="2.5" stroke="#8B8CF0" strokeWidth="1.5" />
        <path d="M8 1v2.2M8 12.8V15M1 8h2.2M12.8 8H15" stroke="#8B8CF0" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "PMF Intelligence Loop",
    desc: "Continuous feedback analysis from churn signals, usage patterns, and market shifts. Know exactly where your product fits — and where it needs to evolve.",
    icon: (
      <path
        d="M3 8a5 5 0 018.5-3.5L13 6M13 8a5 5 0 01-8.5 3.5L3 10M11 3v3h-3M5 13v-3h3"
        stroke="#8B8CF0"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Autonomous Customer Intelligence",
    desc: "Deploy AI agents that handle CSAT, promos, and product-fit insights. Your team stops doing repetitive work and starts doing meaningful work.",
    icon: (
      <>
        <rect x="3" y="4.5" width="10" height="8" rx="2" stroke="#8B8CF0" strokeWidth="1.5" />
        <circle cx="6" cy="8.5" r="1" fill="#8B8CF0" />
        <circle cx="10" cy="8.5" r="1" fill="#8B8CF0" />
        <path d="M8 4.5V2.5" stroke="#8B8CF0" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ),
  },
];

const Offer = () => {
  return (
    <section className="pad" id="offer" style={{ background: "var(--cream)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">LiquidBronze · AI growth, AI sales</div>
          <h2>LiquidBronze finds the customer, the fit, and the fix.</h2>
          <p>
            Built on LiquidAlloy, LiquidBronze is the sales and strategy
            application that grows and manages a small business's sales pipeline —
            three AI capabilities that turn guesswork into evidence.
          </p>
        </div>

        <div className="offer-grid">
          {OFFER.map((o) => (
            <div className="offer-card" key={o.title}>
              <div className="oicon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  {o.icon}
                </svg>
              </div>
              <h3>{o.title}</h3>
              <p>{o.desc}</p>
              {o.flag && <span className="oflag">{o.flag}</span>}
            </div>
          ))}
        </div>

        <div className="offer-tag">
          <span className="ot-before">Opaque growth</span>
          <span className="ot-arrow">→</span>
          <span className="ot-after">Transparent growth</span>
        </div>
      </div>
    </section>
  );
};

export default Offer;
