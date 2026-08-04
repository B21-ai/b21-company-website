import JoinForm from "./JoinForm";

const Cta = () => {
  return (
    <section className="cta" id="get-started">
      <div className="wrap">
        <div className="eyebrow">Get started</div>
        <h2>Bring your pipeline. Leave with your FLO score.</h2>
        <p>
          Whether you're an SMB running growth on LiquidBronze or a fintech
          looking for LiquidSteel's growth signal — tell us which, and we'll
          follow up.
        </p>
        <div className="cta-form-wrap">
          <JoinForm />
        </div>
      </div>
    </section>
  );
};

export default Cta;