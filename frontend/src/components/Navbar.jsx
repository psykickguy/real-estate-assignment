import logoImg from "../assets/main-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>

        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Overview</a>
          <a href="#">Connectivities</a>
          <a href="#">Amenities</a>
          <a href="#">Floor Plans</a>
          <a href="#">Developer</a>
          <a href="#">Contact</a>
        </div>

        <button className="btn enquiry-btn">Enquiry Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
