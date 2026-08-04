import { useState } from "react";

const Check = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
    <path
      d="M3 8.5l3.2 3.2L13 5"
      stroke="#12B886"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

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

const Applications = () => {
  const [tab, setTab] = useState<"growth" | "flo">("growth");

  return (
    <section className="pad" id="apps">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">LiquidBronze &amp; FLO</div>
          <h2>One platform. Two phases. Growth, and the credit to fund it.</h2>
          <p>
            LiquidBronze runs on predefined goals rooted in Blue Ocean Strategy —
            nudging a business toward the right offer, customer and market. Every
            action taken strengthens the same pipeline and AR signal that FLO turns
            into a forward-looking opportunity score for LiquidSteel.
          </p>
        </div>

        <div className="tabs" role="tablist">
          <button
            className={"tab" + (tab === "growth" ? " active" : "")}
            role="tab"
            aria-selected={tab === "growth"}
            onClick={() => setTab("growth")}
          >
            LiquidBronze
          </button>
          <button
            className={"tab" + (tab === "flo" ? " active" : "")}
            role="tab"
            aria-selected={tab === "flo"}
            onClick={() => setTab("flo")}
          >
            FLO
          </button>
        </div>

        {tab === "growth" && (
          <div className="panel active" role="tabpanel">
            <div>
              <span className="badge">LiquidBronze · Phase 1</span>
              <h3>A scrollable feed, not a dashboard.</h3>
              <p>
                After onboarding, an intuitive feed delivers the actions a business
                can take right now — reach a new market, adjust an offer for a new
                customer — each one grounded in a predefined goal from Blue Ocean
                Strategy.
              </p>
              <ul className="flist">
                <li>
                  <Check /> Predefined goals rooted in Blue Ocean Strategy fine-tune
                  the offering and surface uncontested customers and markets
                </li>
                <li>
                  <Check /> One scrollable feed — one action, one piece of evidence
                  per card, built for an owner with five minutes
                </li>
                <li>
                  <Check /> Promos are dynamic — drafted and priced by the agent,
                  not the owner
                </li>
                <li>
                  <Check /> Full visibility into the profit and revenue impact of
                  every promo before it goes out
                </li>
              </ul>
              <a href="#get-started" className="btn btn-dark">
                See it on your pipeline
              </a>
            </div>

            <div className="phone">
              <div className="phone-head">
                <span className="phone-brand">LiquidBronze</span>
                <span className="phone-dot" />
              </div>
              <div className="phone-card">
                <div className="pk">New segment</div>
                <h4>Property managers rebook you 3× more.</h4>
                <div className="sub">12 of your last 40 jobs.</div>
                <div className="phone-cta">Send intro offer</div>
              </div>
              <div className="phone-card">
                <div className="pk">Promo impact · dynamic</div>
                <h4 style={{ marginBottom: 10 }}>10% off, first job — 3 months</h4>
                <div className="hz-meta" style={{ margin: 0, padding: "12px 0 0", borderTop: "1px solid var(--line-dark)", borderBottom: "none" }}>
                  <div>
                    <div className="k">Revenue</div>
                    <div className="v g" style={{ fontSize: 15 }}>+$1,240</div>
                  </div>
                  <div>
                    <div className="k">Margin</div>
                    <div className="v" style={{ fontSize: 15 }}>-1.8pt</div>
                  </div>
                  <div>
                    <div className="k">Net profit</div>
                    <div className="v g" style={{ fontSize: 15 }}>+$860</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {tab === "flo" && (
          <div className="panel active" role="tabpanel">
            <div>
              <span className="badge partner">FLO · Phase 1, B2B</span>
              <h3>FLO projects demand 180 and 360 days out.</h3>
              <p>
                For B2B businesses, LiquidBronze's pipeline and AR evidence feed
                FLO — projecting demand signals 180 and 360 days out. That signal
                goes straight to LiquidSteel, where banks and fintechs see the
                growth already happening.
              </p>
              <a href="#get-started" className="btn btn-dark">
                Get early access
              </a>
            </div>

            <div>
              <div className="flo-steps">
                {FLO_STEPS.map((s) => (
                  <div className={"flo-step" + (s.last ? " last" : "")} key={s.n}>
                    <div className="fn">{s.n}</div>
                    <div className="ic">
                      <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                        <path
                          d="M2 12l3.5-4.5L9 10l5-6.5"
                          stroke="#8B8CF0"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                    <h4>{s.title}</h4>
                    <p>{s.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flo-note">
                Every score traces back to the signals that produced it.{" "}
                <b>Nothing is a black box.</b>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Applications;