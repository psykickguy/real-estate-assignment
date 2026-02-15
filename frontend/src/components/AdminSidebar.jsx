function AdminSidebar({ setSection }) {
  return (
    <div style={{ width: "200px", background: "#f2f2f2", padding: "20px" }}>
      <p onClick={() => setSection("hero")}>Hero</p>
      <p onClick={() => setSection("about")}>About</p>
      <p onClick={() => setSection("amenities")}>Amenities</p>
      <p onClick={() => setSection("connectivity")}>Connectivity</p>
      <p onClick={() => setSection("construction")}>Construction</p>
      <p onClick={() => setSection("developer")}>Developer</p>
      <p onClick={() => setSection("faq")}>FAQ</p>
    </div>
  );
}

export default AdminSidebar;
