import { useState, useEffect } from "react";
import axios from "axios";
import AdminSidebar from "../components/AdminSidebar";

function AdminDashboard() {
  const [section, setSection] = useState("hero");
  const [content, setContent] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/content")
      .then((res) => setContent(res.data || {}));
  }, []);

  const handleSave = async () => {
    await axios.put("http://localhost:5000/api/content", content);
    alert("Content Updated!");
  };

  return (
    <div style={{ display: "flex" }}>
      <AdminSidebar setSection={setSection} />

      <div style={{ padding: "20px", flex: 1 }}>
        <h2>Edit {section}</h2>

        {section === "hero" && (
          <>
            <input
              value={content?.hero?.title || ""}
              onChange={(e) =>
                setContent({
                  ...content,
                  hero: { ...content.hero, title: e.target.value },
                })
              }
            />
          </>
        )}

        <button onClick={handleSave} className="btn">
          Save Changes
        </button>
      </div>
    </div>
  );
}

export default AdminDashboard;
