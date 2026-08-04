import { useState } from "react";

const RECIPIENTS = "anil@b21.ai,rajesh@b21.ai";

const JoinForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent("B21 early access request");
    const body = encodeURIComponent(
      `Name: ${name}\nWork email: ${email}\nI'm a: ${role}`
    );
    window.location.href = `mailto:${RECIPIENTS}?subject=${subject}&body=${body}`;
  };

  return (
    <form className="join-form" onSubmit={handleSubmit}>
      <label>Name</label>
      <input
        type="text"
        placeholder="Your full name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <label>Work email</label>
      <input
        type="email"
        placeholder="you@company.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <label>I'm a</label>
      <input
        type="text"
        placeholder="SMB owner, or fintech partner"
        value={role}
        onChange={(e) => setRole(e.target.value)}
      />

      <button type="submit" className="btn btn-primary">
        Request early access
        <svg className="arrow" width="13" height="13" viewBox="0 0 16 16" fill="none">
          <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </form>
  );
};

export default JoinForm;
