import type { CSSProperties } from "react";

/** The four registration marks every blueprint-framed element wears. */
export const Corners = () => (
  <>
    <i className="corner tl" />
    <i className="corner tr" />
    <i className="corner bl" />
    <i className="corner br" />
  </>
);

/** Text at `pct` opacity against the current ground. */
export const muted = (pct: number) =>
  `color-mix(in srgb,var(--color-text) ${pct}%,transparent)`;

/** Section eyebrow — condensed, tracked-out, accent. */
export const kicker: CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontWeight: 600,
  fontSize: 13,
  letterSpacing: "0.14em",
  textTransform: "uppercase",
  color: "var(--color-accent-700)",
};

/** Small all-caps label used on figure fields. */
export const fieldLabel: CSSProperties = {
  fontFamily: "var(--font-heading)",
  fontSize: 12,
  letterSpacing: "0.12em",
  textTransform: "uppercase",
  color: muted(55),
};

export const wrap: CSSProperties = {
  maxWidth: 1200,
  margin: "0 auto",
  padding: "clamp(72px,10vw,128px) 24px",
};
