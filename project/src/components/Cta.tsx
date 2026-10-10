import { kicker, sectionRule, wrap } from "../ui";
import JoinForm from "./JoinForm";

const Cta = () => {
  return (
    <section id="contact" style={sectionRule}>
      <div style={wrap}>
        <div
          style={{
            border: "1px solid var(--color-divider)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            gap: 32,
            padding: "clamp(28px,5vw,56px)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 16,
            }}
          >
            <span style={kicker}>Get started</span>
            <h2
              style={{
                margin: 0,
                fontSize: "clamp(32px,4.4vw,58px)",
                lineHeight: 1.05,
              }}
            >
              Bring your pipeline.{" "}
              <span style={{ color: "var(--color-accent)" }}>
                We will build it.
              </span>
            </h2>
          </div>
          {/* Form sits below the heading, centred, but keeps its labels left-aligned. */}
          <div style={{ width: "100%", maxWidth: 460, textAlign: "left" }}>
            <JoinForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Cta;
