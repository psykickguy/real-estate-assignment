function Hero() {
  return (
    <section className="hero section">
      <div className="container hero-grid">
        <div className="hero-image">
          <img src="/building.jpg" alt="Project" />
        </div>

        <div className="hero-content">
          <p className="highlight">THINKING OF A FANTASTIC VICINITY?</p>
          <h1>INFINITY</h1>

          <div className="price-boxes">
            <div className="price-card">
              <p>SMART 1 BHK</p>
              <h3>₹ 69.99 Lacs*</h3>
            </div>

            <div className="price-card">
              <p>PREMIUM 2 BHK</p>
              <h3>₹ 96.99 Lacs*</h3>
            </div>
          </div>

          <p className="location">Kandivali West, Mumbai</p>
          <button className="btn">Enquire Now</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
