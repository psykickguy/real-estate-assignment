function Developer() {
  const stats = [
    { number: "6", label: "Projects" },
    { number: "1.32 LAC", label: "sq. ft. area developed" },
    { number: "449+", label: "Happy Families" },
    { number: "3.77 LAC", label: "sq. ft. ongoing" },
    { number: "2.7 LAC", label: "sq. ft. upcoming" },
  ];

  return (
    <section id="aboutus" className="developer-section">
      <div className="container">
        <h2>About Developer</h2>

        <p className="developer-desc">
          Vighnaharta Developers is more than just a real estate company — we
          are dream weavers, committed to building not just homes, but better
          lives. With a legacy of craftsmanship and forward-thinking approach,
          every project blends creativity, functionality, and sustainability.
        </p>

        <div className="developer-stats">
          {stats.map((item, i) => (
            <div key={i} className="stat-card">
              <h3>{item.number}</h3>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Developer;
