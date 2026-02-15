import mainImg from "../assets/about-main.png";
import smallImg1 from "../assets/about-small1.png";
import smallImg2 from "../assets/about-small2.png";

function AboutProject({ data }) {
  return (
    <section id="overview" className="about-section">
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
          <p>{data?.description}</p>

          <button className="btn brochure-btn">Download Brochure</button>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;
