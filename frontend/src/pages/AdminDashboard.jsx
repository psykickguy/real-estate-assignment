import { useState, useEffect } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  const [section, setSection] = useState("hero");
  const [content, setContent] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://real-estate-assignment.onrender.com/content")
      .then((res) => setContent(res.data || {}));
  }, []);

  const handleSave = async () => {
    await axios.put(
      "https://real-estate-assignment.onrender.com/content",
      content,
    );
    alert("Content Updated!");
  };

  return (
    <div className="admin-layout">
      <AdminSidebar section={section} setSection={setSection} />

      <div className="admin-content">
        <div className="admin-header">
          <h2>Edit {section}</h2>
          <button onClick={handleSave} className="save-btn">
            Save Changes
          </button>
        </div>

        <div className="admin-form">
          {/* HERO */}
          {section === "hero" && (
            <>
              <input
                placeholder="Title"
                value={content?.hero?.title || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, title: e.target.value },
                  })
                }
              />

              <input
                placeholder="Tagline"
                value={content?.hero?.tagline || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, tagline: e.target.value },
                  })
                }
              />

              <input
                placeholder="Price 1"
                value={content?.hero?.price1 || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, price1: e.target.value },
                  })
                }
              />

              <input
                placeholder="Price 2"
                value={content?.hero?.price2 || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, price2: e.target.value },
                  })
                }
              />

              <input
                placeholder="Location"
                value={content?.hero?.location || ""}
                onChange={(e) =>
                  setContent({
                    ...content,
                    hero: { ...content.hero, location: e.target.value },
                  })
                }
              />
            </>
          )}

          {/* ABOUT */}
          {section === "aboutProject" && (
            <textarea
              rows="6"
              placeholder="About Description"
              value={content?.aboutProject?.description || ""}
              onChange={(e) =>
                setContent({
                  ...content,
                  aboutProject: {
                    ...content.aboutProject,
                    description: e.target.value,
                  },
                })
              }
            />
          )}

          {/* AMENITIES */}
          {section === "amenities" &&
            content?.amenities?.items?.map((item, i) => (
              <input
                key={i}
                value={item.title}
                onChange={(e) => {
                  const updatedItems = [...content.amenities.items];
                  updatedItems[i].title = e.target.value;

                  setContent({
                    ...content,
                    amenities: {
                      ...content.amenities,
                      items: updatedItems,
                    },
                  });
                }}
              />
            ))}

          {/* CONSTRUCTION */}
          {section === "constructionUpdates" &&
            content?.constructionUpdates?.map((item, i) => (
              <div key={i} className="double-input">
                <input
                  value={item.phase}
                  onChange={(e) => {
                    const updated = [...content.constructionUpdates];
                    updated[i].phase = e.target.value;
                    setContent({ ...content, constructionUpdates: updated });
                  }}
                />

                <input
                  value={item.status}
                  onChange={(e) => {
                    const updated = [...content.constructionUpdates];
                    updated[i].status = e.target.value;
                    setContent({ ...content, constructionUpdates: updated });
                  }}
                />
              </div>
            ))}

          {/* FAQ */}
          {section === "faqs" &&
            content?.faqs?.map((item, i) => (
              <div key={i} className="faq-block">
                <input
                  value={item.question}
                  onChange={(e) => {
                    const updated = [...content.faqs];
                    updated[i].question = e.target.value;
                    setContent({ ...content, faqs: updated });
                  }}
                />

                <textarea
                  rows="3"
                  value={item.answer}
                  onChange={(e) => {
                    const updated = [...content.faqs];
                    updated[i].answer = e.target.value;
                    setContent({ ...content, faqs: updated });
                  }}
                />
              </div>
            ))}
        </div>
      </div>
      <button className="admin-float-btn" onClick={() => navigate("/")}>
        View Changes
      </button>
    </div>
  );
}

export default AdminDashboard;
