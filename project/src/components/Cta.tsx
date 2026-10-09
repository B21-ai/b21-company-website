import { Corners, kicker, muted } from "../ui";
import JoinForm from "./JoinForm";

const Cta = () => {
  return (
    <section
      id="start"
      style={{
        maxWidth: 1200,
        margin: "0 auto",
        padding: "0 24px clamp(72px,10vw,128px)",
      }}
    >
      <div
        className="blueprint"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,380px),1fr))",
          gap: "40px 64px",
          padding: "clamp(28px,5vw,56px)",
        }}
      >
        <Corners />
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <span style={kicker}>Get started</span>
          <h2
            style={{ margin: 0, fontSize: "clamp(36px,4.6vw,60px)", lineHeight: 0.95 }}
          >
            Bring your pipeline.{" "}
            <span style={{ color: "var(--color-accent)" }}>
              Leave with your FLO score.
            </span>
          </h2>
          <p style={{ margin: 0, fontSize: 17, color: muted(72) }}>
            Whether you're an SMB running growth on LiquidBronze or a fintech looking for
            LiquidSteel's growth signal — tell us which, and we'll follow up.
          </p>
        </div>
        <JoinForm />
      </div>
    </section>
  );
};

export default Cta;
