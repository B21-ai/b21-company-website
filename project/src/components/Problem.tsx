const Problem = () => {
  return (
    <section className="pad" id="about">
      <div className="wrap">
        <div className="sec-head">
          <div className="eyebrow">Why we started B21</div>
          <h2>Growth-ready. Credit-invisible.</h2>
          <p>
            Most small businesses with real product-market fit still can't get funded
            — because every credit model underwriting them only looks backward.
          </p>
        </div>

        <div className="problem2">
          <div className="problem2-stats">
            <div className="stat-card">
              <div className="big">66%</div>
              <p>of SMBs struggle despite product-market fit</p>
            </div>
            <div className="stat-card">
              <div className="big violet">54%</div>
              <p>can't finance their cash-flow and CapEx needs</p>
            </div>
          </div>

          <div className="compare-stack">
            <div className="compare-card before">
              <div className="tag">Today — backward-looking risk</div>
              <div className="q">"Will this SMB default?"</div>
              <div className="d">History and balance sheets only.</div>
            </div>
            <div className="compare-card after">
              <div className="tag">With B21 — forward-looking opportunity</div>
              <div className="q">"Will this SMB thrive?"</div>
              <div className="d">Pipeline + AR project demand 180 and 360 days out.</div>
            </div>
          </div>
        </div>

        <div className="formula-bar">
          <span>PMF</span>
          <span className="op">+</span>
          <span>pipeline</span>
          <span className="op">+</span>
          <span>AR evidence</span>
          <span className="op">=</span>
          <span className="res">creditworthy</span>
        </div>
        <p className="source-note">
          2025 Fed Small Business Credit Survey — a $1M-revenue SMB is routinely
          declined.
        </p>

        <div className="about-body">
          <h3>We've seen this data before. Just never used for small business.</h3>
          <p>
            We spoke with small businesses — 2 to 25 employees — in San Jose, and
            found that the way they use AI today isn't giving them a real
            advantage. That matched exactly what the data above shows: most risk
            systems are backward-looking by design.
          </p>
          <p>
            Our domain expertise comes from having spent over a decade building
            commerce and payments infrastructure together at Apple, on the App
            Store platform. That's given us a deep understanding of how
            transaction data, demand, and trust translate into real financial
            decisions at scale.
          </p>
          <p>
            We started B21 to put that experience to work for small businesses:
            using AI to drive their growth, and using the demand signal that
            growth creates as the basis to fund them.
          </p>
          <p>
            That's what LiquidBronze, built on LiquidAlloy — our goal-first
            foundation — does. It takes small businesses that are opaque to banks
            and fintechs today, and makes them transparent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
