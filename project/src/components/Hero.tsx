import FloHorizon from "./FloHorizon";

const Hero = () => {
  return (
    <header className="hero">
      <div className="wrap hero-in">
        <div className="eyebrow">LiquidAlloy · Live today</div>
        <h1>
          SMB AI Growth. <span className="fwd">From opaque to transparent.</span>
        </h1>
        <p className="hero-sub">
          LiquidAlloy is B21's goal-first agentic foundation. LiquidBronze runs on
          it to discover your ideal customers, track product-market fit, and grow
          your sales pipeline autonomously. Every action creates insight and feeds
          FLO, the opportunity model that shows you exactly how things are right
          now.
        </p>
        <div className="hero-actions">
          <a href="#get-started" className="btn btn-primary">
            Get early access
            <svg className="arrow" width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
          <a href="#foundation" className="btn btn-ghost">
            See the platform
          </a>
        </div>

        <FloHorizon />
      </div>
    </header>
  );
};

export default Hero;
