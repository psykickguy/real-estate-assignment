import logoImg from "../assets/main-logo.png";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <div className="logo">
          <img src={logoImg} alt="Logo" />
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#overview">Overview</a>
          <a href="#connectivities">Connectivities</a>
          <a href="#amenities">Amenities</a>
          <a href="#aboutus">About Us</a>
          <a href="#constructionupdates">Construction Updates</a>
          <a href="#faq">FAQ</a>
        </div>

        <button className="btn enquiry-btn">Enquiry Now</button>
      </div>
    </nav>
  );
}

export default Navbar;
