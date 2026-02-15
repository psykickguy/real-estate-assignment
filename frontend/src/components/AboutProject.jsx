import mainImg from "../assets/about-main.png";
import smallImg1 from "../assets/about-small1.png";
import smallImg2 from "../assets/about-small2.png";

function AboutProject() {
  return (
    <section id="about" className="about-section">
      <div className="container about-wrapper">
        {/* LEFT IMAGE SIDE */}
        <div className="about-visual">
          <div className="circle-main">
            <img src={mainImg} alt="Main" />
          </div>

          <div className="circle-small top">
            <img src={smallImg1} alt="Interior" />
          </div>

          <div className="circle-small bottom">
            <img src={smallImg2} alt="Gym" />
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="about-content">
          <h2>About Project</h2>

          <p>
            At Vighnaharta Enclave, every detail reflects the grandest gesture
            of life in the most authentic and desirable home. Guided by a
            humanist approach, the architecture places people at the heart of
            the space. Built on the foundations of comfort, it evokes a true
            sense of freedom, protection, and belonging.
          </p>

          <p>
            “The moment I entered the house, it felt welcomed” — this feeling
            defines the privilege Vighnaharta Enclave offers. Thoughtfully
            designed with crafted amenities and timeless choices, the space
            resonates with the warmth and authenticity that you and your family
            truly deserve. It’s the place your soul has long been searching for.
          </p>

          <button className="btn brochure-btn">Download Brochure</button>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
