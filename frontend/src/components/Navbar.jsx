function Navbar() {
  return (
    <nav className="navbar">
      <div className="container nav-content">
        <h2>INFINITY</h2>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#amenities">Amenities</a>
          <a href="#construction">Updates</a>
          <a href="#faq">FAQ</a>
        </div>
        <button className="btn">Enquire</button>
      </div>
    </nav>
  );
}

export default Navbar;
