import { Corners, fieldLabel, kicker, muted, wrap } from "../ui";

const chip = {
  padding: "6px 14px",
  border: "1px solid var(--color-divider)",
} as const;

const Problem = () => {
  return (
    <section
      id="about"
      style={{ ...wrap, display: "flex", flexDirection: "column", gap: 48 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "32px 64px",
          alignItems: "end",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <span style={kicker}>Why we started B21</span>
          <h2
            style={{
              margin: 0,
              fontSize: "clamp(40px,5.5vw,72px)",
              lineHeight: 0.95,
            }}
          >
            Growth-ready.{" "}
            <span style={{ color: "var(--color-accent)" }}>Credit-invisible.</span>
          </h2>
        </div>
        <p style={{ margin: 0, fontSize: 18, color: muted(72) }}>
          Most small businesses with real product-market fit still can't get funded —
          because every credit model underwriting them only looks backward.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,250px),1fr))",
          gap: 16,
        }}
      >
        {[
          { n: "66%", l: "of SMBs struggle despite product-market fit" },
          { n: "54%", l: "can't finance their cash-flow and CapEx needs" },
        ].map((s) => (
          <div
            key={s.n}
            className="blueprint"
            style={{ padding: 28, display: "flex", flexDirection: "column", gap: 6 }}
          >
            <Corners />
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 88,
                lineHeight: 1,
              }}
            >
              {s.n}
            </span>
            <span style={{ color: muted(72) }}>{s.l}</span>
          </div>
        ))}

        <div
          className="blueprint"
          style={{ padding: 28, display: "flex", flexDirection: "column", gap: 10 }}
        >
          <Corners />
          <span style={fieldLabel}>Today — backward-looking risk</span>
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
          className="blueprint"
          style={{
            padding: 28,
            display: "flex",
            flexDirection: "column",
            gap: 10,
            borderColor: "var(--color-accent)",
          }}
        >
          <Corners />
          <span style={{ ...fieldLabel, color: "var(--color-accent-700)" }}>
            With B21 — forward-looking opportunity
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

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "16px 32px",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            flexWrap: "wrap",
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 22,
          }}
        >
          <span style={chip}>PMF</span>
          <span style={{ color: "var(--color-accent)" }}>+</span>
          <span style={chip}>Pipeline</span>
          <span style={{ color: "var(--color-accent)" }}>+</span>
          <span style={chip}>AR evidence</span>
          <span style={{ color: "var(--color-accent)" }}>=</span>
          <span
            style={{
              padding: "6px 14px",
              background: "var(--color-accent)",
              color: "var(--color-bg)",
            }}
          >
            Creditworthy
          </span>
        </div>
        <span style={{ fontSize: 13, color: muted(55) }}>
          2025 Fed Small Business Credit Survey — a $1M-revenue SMB is routinely
          declined.
        </span>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
          gap: "24px 56px",
          paddingTop: 48,
          borderTop: "1px solid var(--color-divider)",
        }}
      >
        <h3
          style={{
            margin: 0,
            fontSize: "clamp(28px,3vw,40px)",
            lineHeight: 1.05,
            textWrap: "balance",
          }}
        >
          We've seen this data before. Just never used for small business.
        </h3>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, color: muted(78) }}>
          <p style={{ margin: 0 }}>
            We spoke with small businesses — 2 to 25 employees — in San Jose, and found
            that the way they use AI today isn't giving them a real advantage. That
            matched exactly what the data above shows: most risk systems are
            backward-looking by design.
          </p>
          <p style={{ margin: 0 }}>
            Our domain expertise comes from having spent over a decade building commerce
            and payments infrastructure together at Apple, on the App Store platform.
            That's given us a deep understanding of how transaction data, demand, and
            trust translate into real financial decisions at scale.
          </p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, color: muted(78) }}>
          <p style={{ margin: 0 }}>
            We started B21 to put that experience to work for small businesses: using AI
            to drive their growth, and using the demand signal that growth creates as
            the basis to fund them.
          </p>
          <p style={{ margin: 0 }}>
            That's what LiquidBronze, built on LiquidAlloy — our goal-first foundation —
            does. It takes small businesses that are opaque to banks and fintechs today,
            and makes them transparent.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Problem;
