import c1 from "../assets/construction1.png";
import c2 from "../assets/construction2.png";
import c3 from "../assets/construction3.png";

function Construction({ data }) {
  // Static images (images are not editable via CMS)
  const images = [c1, c2, c3];

  if (!data) return null;

  return (
    <section id="constructionupdates" className="construction-section">
      <div className="container">
        <h2>Construction Updates</h2>

        <div className="construction-grid">
          {data.map((item, i) => (
            <div key={item._id} className="construction-card">
              <img src={images[i]} alt={item.phase} />
              <div className="construction-overlay">
                <h4>{item.status}</h4>
                <p>{item.phase}</p>
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
