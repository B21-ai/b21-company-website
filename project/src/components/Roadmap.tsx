const Roadmap = () => {
  return (
    <section className="pad" id="roadmap" style={{ background: "var(--cream)" }}>
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Rollout</div>
          <h2>Live today. Rolling out in two phases.</h2>
          <p>
            LiquidAlloy, the foundation, is already in production. LiquidBronze,
            FLO, and LiquidSteel roll out for B2B businesses first, then extend to
            B2C.
          </p>
        </div>

        <div className="road-track">
          <div className="road-card is-live">
            <span className="road-badge is-live">
              <span className="dot2" /> Live today
            </span>
            <h3>LiquidAlloy</h3>
            <p>
              Already in production, managing customer sentiment across every
              account it watches — the same substrate LiquidBronze and FLO roll
              out on next.
            </p>
          </div>

          <div className="road-card">
            <span className="road-badge phase1">Phase 1 · B2B</span>
            <h3>LiquidBronze + FLO</h3>
            <p>
              Blue Ocean growth nudges and dynamic promos, plus FLO's
              forward-looking opportunity model projecting demand 180 and 360 days
              out from pipeline and AR evidence — surfaced to banks and fintechs
              through LiquidSteel.
            </p>
          </div>

          <div className="road-card">
            <span className="road-badge phase2">Phase 2 · B2C</span>
            <h3>Extending to consumer businesses</h3>
            <p>
              The same LiquidBronze nudges, dynamic promos, and FLO opportunity
              model, extended to B2C businesses and their customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
