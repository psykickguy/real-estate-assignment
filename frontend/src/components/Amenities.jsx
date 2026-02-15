import amenitiesImg from "../assets/amenities.png";

import { FaDumbbell, FaRunning } from "react-icons/fa";
import { GiKidSlide, GiMeditation } from "react-icons/gi";
import { MdRoofing } from "react-icons/md";
import { BsHouseDoor } from "react-icons/bs";

function Amenities({ data }) {
  const icons = [
    <FaDumbbell />,
    <GiKidSlide />,
    <FaRunning />,
    <GiMeditation />,
    <MdRoofing />,
    <BsHouseDoor />,
  ];

  return (
    <section id="amenities" className="amenities-section">
      <div className="container">
        <h2 className="amenities-title">{data.heading}</h2>

        <p className="amenities-subtitle">{data.subtitle}</p>

        <div className="amenities-wrapper">
          {/* LEFT IMAGE */}
          <div className="amenities-image">
            <img src={amenitiesImg} alt="Amenities" />
          </div>

          {/* RIGHT GRID */}
          <div className="amenities-grid">
            {data.items.map((item, i) => (
              <div key={i} className="amenity-card">
                <div className="icon-circle">{icons[i]}</div>
                <p>{item.title}</p>
              </div>
            ))}

            <button className="view-btn">{data.buttonText}</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
