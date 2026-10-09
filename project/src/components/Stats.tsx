import { muted } from "../ui";

const STATS = [
  { n: "LiquidAlloy", l: "Goal-first foundation, live in production" },
  { n: "180d & 360d", l: "FLO's forward-looking demand horizons" },
  { n: "Two-sided", l: "LiquidBronze for SMBs, LiquidSteel for fintechs" },
  { n: "Transparent", l: "The organization every action builds" },
];

const Stats = () => {
  return (
    <section
      style={{
        borderTop: "1px solid var(--color-divider)",
        borderBottom: "1px solid var(--color-divider)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
        }}
      >
        {STATS.map((s, i) => (
          <div
            key={s.l}
            style={{
              padding: 24,
              borderLeft: i === 0 ? undefined : "1px solid var(--color-divider)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 26 }}
            >
              {s.n}
            </span>
            <span style={{ fontSize: 14, color: muted(62) }}>{s.l}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
