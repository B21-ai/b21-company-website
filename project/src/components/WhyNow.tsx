import { wrap } from "../ui";

const POINTS = [
  {
    lead: "SMBs",
    rest: " get LiquidBronze — growth software that pays for itself, and a transparent view of exactly how the business is progressing.",
  },
  {
    lead: "Banks and fintechs",
    rest: " get LiquidSteel — a forward-looking growth signal no bureau can produce, so they can see who to fund.",
  },
  {
    lead: "B21 compounds",
    rest: " — every action on LiquidAlloy strengthens the signal, and the moat, for everyone downstream.",
  },
];

const WhyNow = () => {
  return (
    <section style={{ background: "var(--color-accent-900)", color: "#f2f2f3" }}>
      <div style={{ ...wrap, display: "flex", flexDirection: "column", gap: 48 }}>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 13,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "#b5d9fd",
            }}
          >
            Why B21, why now
          </span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(44px,7vw,96px)",
              lineHeight: 0.9,
              color: "#f2f2f3",
            }}
          >
            The wedge is software.
            <br />
            <span style={{ color: "#94bce3" }}>The moat is the signal.</span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: 32,
          }}
        >
          {POINTS.map((p) => (
            <p
              key={p.lead}
              style={{
                margin: 0,
                paddingTop: 16,
                borderTop: "1px solid #94bce3",
                color: "#d4d4d7",
              }}
            >
              <strong style={{ color: "#fff" }}>{p.lead}</strong>
              {p.rest}
            </p>
          ))}
        </div>

        <p
          style={{
            margin: 0,
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(22px,2.4vw,30px)",
          }}
        >
          Join us in turning <span style={{ color: "#94bce3" }}>opaque growth</span> into
          a signal fintechs can finally trust.
        </p>
      </div>
    </section>
  );
};

export default WhyNow;
