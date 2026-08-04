const WhyNow = () => {
  return (
    <section className="pad whynow">
      <div className="wrap">
        <div className="eyebrow">Why B21, why now</div>
        <h2>
          The wedge is software.
          <br />
          <span className="g">The moat is the signal.</span>
        </h2>

        <div className="whynow-body">
          <div className="why-list">
            <div className="why-row">
              <div className="wic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M9 1L3 9h4l-1 6 6-8H8l1-6z"
                    stroke="#12B886"
                    strokeWidth="1.4"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>
                <b>SMBs</b> get LiquidBronze — growth software that pays for
                itself, and a transparent view of exactly how the business is
                progressing.
              </p>
            </div>
            <div className="why-row">
              <div className="wic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <path
                    d="M2 13l4-5 3 3 5-7"
                    stroke="#12B886"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <p>
                <b>Banks and fintechs</b> get LiquidSteel — a forward-looking
                growth signal no bureau can produce, so they can see who to fund.
              </p>
            </div>
            <div className="why-row">
              <div className="wic">
                <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
                  <circle cx="8" cy="8" r="6" stroke="#8B8CF0" strokeWidth="1.4" />
                  <path d="M8 4v4l3 2" stroke="#8B8CF0" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </div>
              <p>
                <b>B21 compounds</b> — every action on LiquidAlloy strengthens the
                signal, and the moat, for everyone downstream.
              </p>
            </div>
          </div>

          <div className="why-callout">
            Join us in turning <b>opaque growth</b> into a signal fintechs can
            finally trust.
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyNow;