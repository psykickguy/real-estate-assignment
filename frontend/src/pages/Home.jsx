import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutProject from "../components/AboutProject";
import Amenities from "../components/Amenities";
import Connectivity from "../components/Connectivity";
import Construction from "../components/Construction";
import FAQ from "../components/FAQ";
import Developer from "../components/Developer";

function Home() {
  const [content, setContent] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("http://localhost:8080/content")
      .then((res) => setContent(res.data))
      .catch((err) => console.log(err));
  }, []);

  if (!content) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <Hero data={content.hero} />
      <AboutProject data={content.aboutProject} />
      <Connectivity />
      <Amenities data={content.amenities} />
      <Developer />
      <Construction data={content.constructionUpdates} />
      <FAQ />

      <button
        className="admin-float-btn"
        onClick={() => navigate("/admin-login")}
      >
        Admin
      </button>
    </>
  );
}

export default Home;
