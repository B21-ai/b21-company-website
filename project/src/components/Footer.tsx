import logo from "../assets/b21-logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="wrap">
        <div className="fgrid">
          <div>
            <a href="#" className="logo">
              <img src={logo} alt="B21" />
              B21
            </a>
            <p>
              LiquidAlloy is live today. LiquidBronze, FLO and LiquidSteel roll
              out next — turning SMB growth into a signal fintechs can fund.
            </p>
          </div>
          <div className="fcol">
            <h4>Platform</h4>
            <a href="#offer">LiquidBronze</a>
            <a href="#foundation">LiquidAlloy</a>
            <a href="#apps">FLO</a>
            <a href="#apps">LiquidSteel</a>
            <a href="#roadmap">Roadmap</a>
          </div>
          <div className="fcol">
            <h4>Company</h4>
            <a href="#about">About</a>
            <a href="#get-started">Contact</a>
          </div>
          <div className="fcol">
            <h4>Resources</h4>
            <a href="#trust">Trust</a>
            <a href="#get-started">Get early access</a>
          </div>
        </div>
        <div className="fbot">
          <span>© 2026 B21.ai — all rights reserved.</span>
          <span>Privacy · Terms</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;