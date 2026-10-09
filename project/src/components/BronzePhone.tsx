import { Corners, muted } from "../ui";

const kicker = {
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 11,
  letterSpacing: "0.12em",
  textTransform: "uppercase" as const,
  color: "var(--color-accent-700)",
};

const metric = (first: boolean, accent?: boolean) => ({
  padding: first ? "10px 0" : "10px 0 10px 12px",
  borderLeft: first ? undefined : "1px solid var(--color-divider)",
  display: "flex",
  flexDirection: "column" as const,
  gap: 2,
  ...(accent ? { color: "var(--color-accent-700)" } : {}),
});

/**
 * The LiquidBronze feed as it reaches an owner — drawn as a wireframe device
 * rather than a rendered screenshot, per the Industry figure treatment.
 */
const BronzePhone = () => {
  return (
    <figure style={{ margin: "8px auto 0", width: "min(100%,300px)" }}>
      <div
        className="blueprint"
        style={{ padding: 12, display: "flex", flexDirection: "column", gap: 10 }}
      >
        <Corners />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 8,
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          <span
            style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 16 }}
          >
            LiquidBronze
          </span>
          <span style={{ width: 7, height: 7, background: "var(--color-accent)" }} />
        </div>

        <div
          style={{
            border: "1px solid var(--color-divider)",
            padding: 14,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <span style={kicker}>New segment</span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 19,
              lineHeight: 1.1,
            }}
          >
            Property managers rebook you 3× more.
          </span>
          <span style={{ fontSize: 13, color: muted(62) }}>
            12 of your last 40 jobs.
          </span>
          <span
            style={{
              marginTop: 6,
              padding: "8px 0",
              textAlign: "center",
              background: "var(--color-accent)",
              color: "var(--color-bg)",
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 14,
            }}
          >
            Send intro offer
          </span>
        </div>

        <div
          style={{
            border: "1px solid var(--color-divider)",
            padding: 14,
            display: "flex",
            flexDirection: "column",
            gap: 6,
          }}
        >
          <span style={kicker}>Promo impact · dynamic</span>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 1.1,
            }}
          >
            10% off, first job — 3 months
          </span>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3,1fr)",
              borderTop: "1px solid var(--color-divider)",
              marginTop: 4,
            }}
          >
            <div style={metric(true)}>
              <span style={{ fontSize: 11, color: muted(62) }}>Revenue</span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                +$1,240
              </span>
            </div>
            <div style={metric(false)}>
              <span style={{ fontSize: 11, color: muted(62) }}>Margin</span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                −1.8pt
              </span>
            </div>
            <div style={metric(false, true)}>
              <span style={{ fontSize: 11, color: muted(62) }}>Net profit</span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 18,
                }}
              >
                +$860
              </span>
            </div>
          </div>
        </div>
      </div>
      <figcaption style={{ marginTop: 10, textAlign: "center" }}>
        One action, one piece of evidence — as the owner sees it.
      </figcaption>
    </figure>
  );
};

export default BronzePhone;
