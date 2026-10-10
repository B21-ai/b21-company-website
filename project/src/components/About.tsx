import { fieldLabel, kicker, muted, sectionRule, wrap } from "../ui";

const STATS = [
  { n: "66%", l: "of SMBs struggle despite product-market fit" },
  { n: "54%", l: "can't finance their cash-flow and CapEx needs" },
];

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

/** About — why we started B21, and why now, as one section. */
const About = () => {
  return (
    <section id="about" style={sectionRule}>
      <div
        style={{
          ...wrap,
          display: "flex",
          flexDirection: "column",
          gap: "clamp(56px,6vw,80px)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 16,
          }}
        >
          <span style={kicker}>Why we started B21</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(34px,4.4vw,60px)",
              lineHeight: 1.05,
            }}
          >
            Growth-ready.{" "}
            <span style={{ color: "var(--color-accent)" }}>
              Credit-invisible.
            </span>
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: 18,
              maxWidth: 720,
              color: muted(72),
              textWrap: "pretty",
            }}
          >
            Most small businesses with real product-market fit still can't get
            funded, because every credit model underwriting them only looks
            backward.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))",
            gap: 20,
          }}
        >
          {STATS.map((s) => (
            <div
              key={s.n}
              style={{
                border: "1px solid var(--color-divider)",
                padding: 28,
                display: "flex",
                flexDirection: "column",
                gap: 8,
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 80,
                  lineHeight: 1,
                }}
              >
                {s.n}
              </span>
              <span style={{ color: muted(72) }}>{s.l}</span>
            </div>
          ))}

          <div
            style={{
              border: "1px solid var(--color-divider)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <span style={fieldLabel}>Today: backward-looking risk</span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 30,
                lineHeight: 1.05,
                color: muted(55),
                textDecoration: "line-through",
                textDecorationThickness: 1,
              }}
            >
              "Will this SMB default?"
            </span>
            <span style={{ fontSize: 14, color: muted(62) }}>
              History and balance sheets only.
            </span>
          </div>

          <div
            style={{
              border: "1px solid var(--color-accent)",
              padding: 28,
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            <span style={{ ...fieldLabel, color: "var(--color-accent-700)" }}>
              With B21: forward-looking opportunity
            </span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 30,
                lineHeight: 1.05,
              }}
            >
              "Will this SMB thrive?"
            </span>
            <span style={{ fontSize: 14, color: muted(62) }}>
              Pipeline + AR project demand 180 and 360 days out.
            </span>
          </div>
        </div>

        {/* Why now — folded in from the former standalone band. */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "clamp(32px,4vw,48px)",
            paddingTop: "clamp(48px,5vw,72px)",
            borderTop: "1px solid var(--color-divider)",
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
              gridTemplateColumns:
                "repeat(auto-fit,minmax(min(100%,280px),1fr))",
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
      </div>
    </section>
  );
};

export default About;
