function Amenities() {
  const amenities = [
    "Gymnasium",
    "Kids Play Area",
    "Jogging Track",
    "Yoga Deck",
    "Rooftop Garden",
    "Club House",
  ];

  return (
    <section id="amenities" className="section amenities">
      <div className="container amenities-grid">
        <div>
          <img src="/amenities.jpg" alt="Amenities" />
        </div>

        <div>
          <h2>Amenities</h2>
          <div className="amenities-list">
            {amenities.map((item, i) => (
              <div key={i} className="amenity-card">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Amenities;
