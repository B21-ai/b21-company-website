import { fieldLabel, kicker, muted, sectionRule, wrap } from "../ui";

const STATS = [
  { n: "66%", l: "of SMBs struggle despite product-market fit" },
  { n: "54%", l: "can't finance their cash-flow and CapEx needs" },
];

const card = {
  border: "1px solid var(--color-divider)",
  padding: 28,
  display: "flex",
  flexDirection: "column" as const,
};

/** The problem framing that opens the home page. */
const AboutIntro = () => {
  return (
    <section id="about-intro" style={sectionRule}>
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
            <div key={s.n} style={{ ...card, gap: 8 }}>
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

          <div style={{ ...card, gap: 10 }}>
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
            style={{ ...card, gap: 10, border: "1px solid var(--color-accent)" }}
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
      </div>
    </section>
  );
};

export default AboutIntro;
