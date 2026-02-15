import c1 from "../assets/construction1.png";
import c2 from "../assets/construction2.png";
import c3 from "../assets/construction3.png";

function Construction() {
  const updates = [
    { title: "Under Construction", tower: "Tower A", img: c1 },
    { title: "Completed", tower: "Tower B", img: c2 },
    { title: "Completed", tower: "Tower C", img: c3 },
  ];

  return (
    <section className="construction-section">
      <div className="container">
        <h2>Construction Updates</h2>

        <div className="construction-grid">
          {updates.map((item, i) => (
            <div key={i} className="construction-card">
              <img src={item.img} alt={item.tower} />
              <div className="construction-overlay">
                <h4>{item.title}</h4>
                <p>{item.tower}</p>
                <span>Know More</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Construction;
