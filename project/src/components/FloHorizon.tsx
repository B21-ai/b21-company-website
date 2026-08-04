import { useState } from "react";
import { FLO_OPPORTUNITIES } from "../data/flo";

const FloHorizon = () => {
  const [active, setActive] = useState(0);
  const current = FLO_OPPORTUNITIES[active];

  return (
    <div className="horizon">
      <div className="hz-head">
        <div className="hz-title">
          <span className="live" /> FLO — Forward Looking Opportunity
        </div>
        <div className="hz-note">phase 1 · b2b · demo data</div>
      </div>

      <div className="hz-body">
        <div className="hz-plot">
          <div className="hz-track">
            {FLO_OPPORTUNITIES.map((o, i) => (
              <button
                key={o.acct}
                className={"node" + (i === active ? " active" : "")}
                data-tier={o.tier}
                style={{ left: o.x + "%", bottom: o.y + "%" }}
                aria-label={`${o.acct} — ${o.opp}`}
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
              >
                <span className="tag">
                  {o.acct} · {o.conf}
                </span>
                <span
                  className="dot"
                  style={{ width: o.r * 2, height: o.r * 2 }}
                />
              </button>
            ))}
          </div>
          <div className="hz-axis">
            <span>NOW</span>
            <span>90D</span>
            <span>180D</span>
            <span>270D</span>
            <span>360D</span>
          </div>
        </div>

        <div className="hz-card">
          <div className="acct">{current.acct}</div>
          <div className="opp">{current.opp}</div>
          <div className="hz-meta">
            <div>
              <div className="k">Confidence</div>
              <div className="v g">{current.conf}</div>
            </div>
            <div>
              <div className="k">Signal horizon</div>
              <div className="v">{current.horizon}</div>
            </div>
            <div>
              <div className="k">Credit signal</div>
              <div className="v">{current.val}</div>
            </div>
          </div>
          <div className="why-label">Signals behind this</div>
          <ul className="why">
            {current.why.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FloHorizon;