import { useState } from "react";
import { muted } from "../ui";

const RECIPIENTS = "anil@b21.ai,rajesh@b21.ai";

const JoinForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("SMB");
  const [done, setDone] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("B21 early access request");
    const body = encodeURIComponent(
      `Name: ${name}\nWork email: ${email}\nI'm a: ${role}`,
    );
    window.location.href = `mailto:${RECIPIENTS}?subject=${subject}&body=${body}`;
    setDone(true);
  };

  if (done) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 10,
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-heading)",
            fontWeight: 600,
            fontSize: 36,
          }}
        >
          You're on the list.
        </span>
        <span style={{ color: muted(72) }}>We'll follow up shortly.</span>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: 16 }}
    >
      <div className="field">
        <label htmlFor="jf-name">Name</label>
        <input
          id="jf-name"
          className="input"
          required
          placeholder="Jane Rivera"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="field">
        <label htmlFor="jf-email">Work email</label>
        <input
          id="jf-email"
          className="input"
          type="email"
          required
          placeholder="jane@company.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="field">
        <label>I'm a</label>
        <div className="seg" style={{ display: "flex" }}>
          {["SMB", "Bank / fintech"].map((r) => (
            <label
              key={r}
              className="seg-opt"
              style={{ flex: 1, justifyContent: "center" }}
            >
              <input
                type="radio"
                name="role"
                checked={role === r}
                onChange={() => setRole(r)}
              />
              {r}
            </label>
          ))}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary"
        style={{ padding: 14, fontSize: 17, marginTop: 6 }}
      >
        Request early access
      </button>
    </form>
  );
};

export default JoinForm;
