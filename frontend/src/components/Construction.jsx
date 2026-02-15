function Construction() {
  const updates = ["Foundation", "Structure", "Finishing"];

  return (
    <section id="construction" className="section construction">
      <div className="container">
        <h2>Construction Updates</h2>

        <div className="construction-grid">
          {updates.map((item, i) => (
            <div key={i} className="construction-card">
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Construction;
