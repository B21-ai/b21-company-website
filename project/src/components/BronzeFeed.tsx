import { useEffect, useRef, useState } from "react";
import { FEED, FEED_SECONDS } from "../data/flo";
import { fieldLabel, muted } from "../ui";

const ACCENT = "var(--color-accent)";
const MS = FEED_SECONDS * 1000;

const BronzeFeed = () => {
  const [i, setI] = useState(0);
  const [acted, setActed] = useState<Record<number, boolean>>({});
  // Bumped on every manual interaction so the auto-advance timer restarts.
  const [cycle, setCycle] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  useEffect(() => {
    timer.current = setInterval(() => setI((p) => (p + 1) % FEED.length), MS);
    return () => clearInterval(timer.current);
  }, [cycle]);

  const restart = () => setCycle((c) => c + 1);
  const f = FEED[i];
  const isActed = !!acted[i];
  const next = [1, 2].map((j) => FEED[(i + j) % FEED.length]);

  const col = (first: boolean) => ({
    padding: first ? "14px 0" : "14px 0 14px 16px",
    borderLeft: first ? undefined : "1px solid var(--color-divider)",
    display: "flex",
    flexDirection: "column" as const,
  });

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,340px),1fr))",
      }}
    >
      <div
        style={{
          padding: "clamp(20px,3vw,36px)",
          display: "flex",
          flexDirection: "column",
          gap: 14,
          borderRight: "1px solid var(--color-divider)",
        }}
      >
        <div style={{ height: 2, background: "var(--color-divider)" }}>
          <div
            key={`${i}-${cycle}`}
            style={{
              height: 2,
              background: ACCENT,
              animation: `b21prog ${MS}ms linear forwards`,
            }}
          />
        </div>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
          }}
        >
          {f.kicker}
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: "clamp(30px,3.4vw,44px)",
            lineHeight: 1,
          }}
        >
          {f.title}
        </span>
        <span style={{ color: muted(66) }}>{f.body}</span>
        <button
          className={isActed ? "btn btn-secondary" : "btn btn-primary"}
          onClick={() => {
            setActed((a) => ({ ...a, [i]: true }));
            restart();
          }}
          style={{
            alignSelf: "flex-start",
            marginTop: 8,
            padding: "12px 18px",
            fontSize: 16,
          }}
        >
          {isActed ? "Sent — tracking response" : f.cta}
        </button>
        <div style={{ display: "flex", gap: 6, marginTop: "auto", paddingTop: 16 }}>
          {FEED.map((_, d) => (
            <button
              key={d}
              aria-label={`Show feed card ${d + 1}`}
              onClick={() => {
                setI(d);
                restart();
              }}
              style={{
                all: "unset",
                cursor: "pointer",
                width: 28,
                height: 4,
                background: d === i ? ACCENT : "var(--color-divider)",
              }}
            />
          ))}
        </div>
      </div>

      <div
        style={{
          padding: "clamp(20px,3vw,36px)",
          display: "flex",
          flexDirection: "column",
          gap: 18,
          background: "color-mix(in srgb,var(--color-accent) 6%,transparent)",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 12,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "var(--color-accent-700)",
          }}
        >
          Promo impact · dynamic
        </span>
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 28,
            lineHeight: 1.05,
          }}
        >
          {f.promo}
        </span>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          <div style={col(true)}>
            <span style={{ fontSize: 13, color: muted(62) }}>Revenue</span>
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 30 }}
            >
              {f.rev}
            </span>
          </div>
          <div style={col(false)}>
            <span style={{ fontSize: 13, color: muted(62) }}>Margin</span>
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 30 }}
            >
              {f.margin}
            </span>
          </div>
          <div style={col(false)}>
            <span style={{ fontSize: 13, color: muted(62) }}>Net profit</span>
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                fontSize: 30,
                color: "var(--color-accent-700)",
              }}
            >
              {f.net}
            </span>
          </div>
        </div>
        <span style={fieldLabel}>Up next</span>
        {next.map((n) => (
          <div
            key={n.title}
            style={{
              padding: "12px 14px",
              border: "1px dashed var(--color-divider)",
              fontSize: 14,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                fontSize: 11,
                color: "var(--color-accent-700)",
              }}
            >
              {n.kicker}
            </span>{" "}
            · {n.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BronzeFeed;
