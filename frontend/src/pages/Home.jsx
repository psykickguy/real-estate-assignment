import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutProject from "../components/AboutProject";
import Amenities from "../components/Amenities";
import Connectivity from "../components/Connectivity";
import Construction from "../components/Construction";
// import FAQ from "../components/FAQ";
// import Developer from "../components/Developer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutProject />
      <Connectivity />
      <Amenities />
      <Construction />
      {/* <Developer /> */}
      {/* <FAQ /> */}
    </>
  );
}

export default Home;
