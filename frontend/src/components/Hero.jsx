import buildingImg from "../assets/building.png";
import logoImg from "../assets/logo.png";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid">
        {/* LEFT IMAGE */}
        <div className="hero-image">
          <img src={buildingImg} alt="Project" />
        </div>

        {/* RIGHT CONTENT */}
        <div className="hero-content">
          {/* <h3 className="hero-tagline">
            THINKING
            <br />
            <span>OF A FANTASTIC VICINITY?</span>
          </h3> */}

          {/* LOGO */}
          <div className="project-logo">
            <img src={logoImg} alt="Logo" />
          </div>

          {/* TITLE */}
          {/* <div className="project-title">
            <h1>INFINITY</h1>
            <div className="title-line"></div>
          </div> */}

          {/* PRICE SECTION */}
          <div className="price-section">
            <div className="price-block">
              <p>SMART 1 BHK</p>
              <h2>
                <span className="old-price">74.99 Lacs</span>₹ 69.99 Lacs*
              </h2>
              <span>onwards</span>
            </div>

            <div className="divider"></div>

            <div className="price-block">
              <p>PREMIUM 2 BHK</p>
              <h2>
                <span className="old-price">1.05 Cr</span>₹ 96.99 Lacs*
              </h2>
              <span>onwards</span>
            </div>
          </div>

          {/* LOCATION */}
          <div className="location-wrapper">
            <div className="location-row">
              <svg
                className="location-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="#e63946"
              >
                <path
                  d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 
               7-13c0-3.87-3.13-7-7-7zm0 
               9.5c-1.38 0-2.5-1.12-2.5-2.5S10.62 
               6.5 12 6.5s2.5 1.12 2.5 
               2.5-1.12 2.5-2.5 2.5z"
                />
              </svg>

              <div className="location-text">
                <div className="address-line1">BLDG. NO. 223/224,</div>
                <div className="address-line2">
                  CIRCLE - KANNAMWAR NAGAR 1, VIKHROLI (EAST)
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
