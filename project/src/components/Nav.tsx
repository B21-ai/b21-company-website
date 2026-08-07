import logo from "../assets/b21-logo.png";

const Nav = () => {
  return (
    <nav>
      <div className="wrap nav-in">
        <a href="#" className="logo">
          <img src={logo} alt="B21" />
        
        </a>
        <div className="nav-links">
          <a href="#offer">LiquidBronze</a>
          <a href="#foundation">LiquidAlloy</a>
          <a href="#apps">Applications</a>
          <a href="#roadmap">Roadmap</a>
          <a href="#trust">Trust</a>
        </div>
        <div className="nav-cta">
          <a href="#get-started" className="btn btn-primary">
            Get early access
            <svg className="arrow" width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;