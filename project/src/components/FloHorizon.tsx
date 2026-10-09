import { useEffect, useRef, useState } from "react";
import { COS } from "../data/flo";
import { fieldLabel, muted } from "../ui";

const ACCENT = "var(--color-accent)";

const FloHorizon = () => {
  const [sel, setSel] = useState(0);
  const [shown, setShown] = useState(0);
  const raf = useRef<number | undefined>(undefined);
  const from = useRef(0);

  // Count the confidence figure up to the selected company's score.
  useEffect(() => {
    const to = COS[sel].conf;
    const start = from.current;
    const t0 = performance.now();
    const step = (now: number) => {
      const p = Math.min(1, (now - t0) / 800);
      const e = 1 - Math.pow(1 - p, 3);
      const v = Math.round(start + (to - start) * e);
      setShown(v);
      from.current = v;
      if (p < 1) raf.current = requestAnimationFrame(step);
    };
    raf.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf.current!);
  }, [sel]);

  const cur = COS[sel];

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          borderRight: "1px solid var(--color-divider)",
        }}
      >
        {COS.map((c, i) => (
          <button
            key={c.name}
            onClick={() => setSel(i)}
            style={{
              all: "unset",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: 10,
              padding: "18px 20px",
              borderBottom: "1px solid var(--color-divider)",
              background:
                i === sel
                  ? "color-mix(in srgb,var(--color-accent) 12%,transparent)"
                  : "transparent",
            }}
          >
            <span
              style={{
                display: "flex",
                justifyContent: "space-between",
                gap: 12,
                fontSize: 16,
                fontWeight: 500,
              }}
            >
              <span>{c.name}</span>
              <span
                style={{
                  fontFamily: "var(--font-heading)",
                  fontWeight: 600,
                  fontSize: 18,
                  color: "var(--color-accent-700)",
                }}
              >
                {c.conf}%
              </span>
            </span>
            <span style={{ display: "block", height: 2, background: "var(--color-divider)" }}>
              <span
                style={{
                  display: "block",
                  height: 2,
                  width: c.conf + "%",
                  background: i === sel ? ACCENT : muted(35),
                }}
              />
            </span>
          </button>
        ))}
      </div>

      <div
        style={{
          padding: "clamp(20px,3vw,36px)",
          display: "flex",
          flexDirection: "column",
          gap: 24,
          gridColumn: "span 2",
          minWidth: 0,
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: 32,
              lineHeight: 1,
            }}
          >
            {cur.name}
          </div>
          <div style={{ marginTop: 6, color: muted(66) }}>{cur.segment}</div>
        </div>

        <div style={{ display: "flex", alignItems: "flex-end", gap: 20, flexWrap: "wrap" }}>
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 600,
              fontSize: "clamp(80px,10vw,128px)",
              lineHeight: 0.8,
              color: ACCENT,
            }}
          >
            {shown}
          </span>
          <div
            style={{
              flex: 1,
              minWidth: 200,
              display: "flex",
              flexDirection: "column",
              gap: 8,
              paddingBottom: 4,
            }}
          >
            <span style={fieldLabel}>% confidence this SMB thrives</span>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(20,1fr)",
                gap: 3,
                height: 14,
              }}
            >
              {Array.from({ length: 20 }, (_, i) => (
                <span
                  key={i}
                  style={{
                    background:
                      i < Math.round(shown / 5) ? ACCENT : "var(--color-divider)",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            borderTop: "1px solid var(--color-divider)",
            borderBottom: "1px solid var(--color-divider)",
          }}
        >
          <div style={{ padding: "14px 0", display: "flex", flexDirection: "column" }}>
            <span style={fieldLabel}>Signal horizon</span>
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 36 }}
            >
              {cur.horizon} days
            </span>
          </div>
          <div
            style={{
              padding: "14px 0 14px 20px",
              borderLeft: "1px solid var(--color-divider)",
              display: "flex",
              flexDirection: "column",
            }}
          >
            <span style={fieldLabel}>Credit signal</span>
            <span
              style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: 36 }}
            >
              {cur.credit}
            </span>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
          <span style={{ ...fieldLabel, color: "var(--color-accent-700)" }}>
            Signals behind this
          </span>
          {cur.signals.map((s) => (
            <div key={s} style={{ display: "flex", gap: 10, fontSize: 15 }}>
              <span style={{ color: ACCENT }}>+</span>
              <span>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FloHorizon;
