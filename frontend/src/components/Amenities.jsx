import amenitiesImg from "../assets/amenities.png";
import { FaDumbbell, FaRunning } from "react-icons/fa";
import { GiKidSlide, GiMeditation } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";

function Amenities() {
  const amenities = [
    { title: "Gymnasium", icon: <FaDumbbell /> },
    { title: "Kids Play Area", icon: <GiKidSlide /> },
    { title: "Jogging Track", icon: <FaRunning /> },
    { title: "Yoga Deck", icon: <GiMeditation /> },
    { title: "Rooftop Garden", icon: <MdRoofing /> },
    { title: "Club House", icon: <BsHouseDoor /> },
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        <h2 className="amenities-title">Amenities</h2>
        <p className="amenities-subtitle">
          Thoughtfully crafted surroundings that reflect tradition, comfort, and
          a human-centered design approach.
        </p>

        <div className="amenities-wrapper">
          {/* LEFT IMAGE */}
          <div className="amenities-image">
            <img src={amenitiesImg} alt="Amenities" />
          </div>

          {/* RIGHT GRID */}
          <div className="amenities-grid">
            {amenities.map((item, i) => (
              <div key={i} className="amenity-card">
                <div className="icon-circle">{item.icon}</div>
                <p>{item.title}</p>
              </div>
            ))}

            <button className="view-btn">View more</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
