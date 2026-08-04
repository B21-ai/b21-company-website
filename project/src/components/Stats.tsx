const STATS = [
  { n: "LiquidAlloy", l: "Goal-first foundation, live in production" },
  { n: "180d & 360d", l: "FLO's forward-looking demand horizons" },
  { n: "Two-sided", l: "LiquidBronze for SMBs, LiquidSteel for fintechs" },
  { n: "Transparent", l: "The organization every action builds" },
];

const Stats = () => {
  return (
    <div className="stats">
      <div className="wrap">
        <div className="stats-in">
          {STATS.map((s) => (
            <div className="stat" key={s.l}>
              <div className="n">{s.n}</div>
              <div className="l">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;