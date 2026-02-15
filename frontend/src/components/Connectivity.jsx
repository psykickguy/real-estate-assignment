function Connectivity() {
  const connectivityData = [
    { place: "Eastern Express Highway", distance: "2 mins" },
    { place: "Vikhroli Railway Station", distance: "5 mins" },
    { place: "R City Mall", distance: "10 mins" },
    { place: "International Airport", distance: "25 mins" },
    { place: "Powai Business Hub", distance: "12 mins" },
    { place: "Metro Station", distance: "7 mins" },
  ];

  return (
    <section id="connectivity" className="connectivity-section">
      <div className="container">
        <h2 className="connectivity-title">Nearby Connectivity</h2>
        <p className="connectivity-subtitle">
          Strategically located with seamless access to major roads, transport
          hubs, and lifestyle destinations.
        </p>

        <div className="connectivity-grid">
          {connectivityData.map((item, index) => (
            <div key={index} className="connectivity-card">
              <h4>{item.place}</h4>
              <span>{item.distance}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Connectivity;
