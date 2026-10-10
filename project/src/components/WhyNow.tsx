import { kicker, muted, wrap } from "../ui";

const PROOF = [
  {
    lead: "SMBs",
    rest: " get growth software that pays for itself, and a transparent view of exactly how the business is progressing.",
  },
  {
    lead: "Banks and fintechs",
    rest: " get a forward-looking growth signal no bureau can produce, so they can see who to fund.",
  },
  {
    lead: "B21 compounds",
    rest: ": every action on the platform strengthens the signal, and the moat, for everyone downstream.",
  },
];

/** Why B21, why now — the body of the About page. */
const WhyNow = () => {
  return (
    <section id="about">
      <div
        style={{
          ...wrap,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(32px,4vw,48px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 14,
          }}
        >
          <span style={kicker}>Why B21, why now</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(40px,5.2vw,68px)",
              lineHeight: 0.95,
              textWrap: "balance",
            }}
          >
            The wedge is software.{" "}
            <span style={{ color: "var(--color-accent)" }}>
              The moat is the signal.
            </span>
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,280px),1fr))",
            gap: "28px 40px",
          }}
        >
          {PROOF.map((p) => (
            <p
              key={p.lead}
              style={{
                margin: 0,
                paddingTop: 18,
                borderTop: "1px solid var(--color-accent)",
                color: muted(78),
              }}
            >
              <strong style={{ color: "var(--color-text)" }}>{p.lead}</strong>
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
            lineHeight: 1.15,
            textAlign: "center",
          }}
        >
          Join us in turning{" "}
          <span style={{ color: "var(--color-accent)" }}>opaque growth</span>{" "}
          into a signal fintechs can finally trust.
        </p>
      </div>
    </section>
  );
};

export default WhyNow;
