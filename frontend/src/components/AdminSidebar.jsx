function AdminSidebar({ setSection }) {
  return (
    <div style={{ width: "200px", background: "#f2f2f2", padding: "20px" }}>
      <p onClick={() => setSection("hero")}>Hero</p>
      <p onClick={() => setSection("aboutProject")}>About</p>
      <p onClick={() => setSection("amenities")}>Amenities</p>
      <p onClick={() => setSection("connectivity")}>Connectivity</p>
      <p onClick={() => setSection("constructionUpdates")}>Construction</p>
      <p onClick={() => setSection("developer")}>Developer</p>
      <p onClick={() => setSection("faqs")}>FAQ</p>
    </div>
  );
}

export default AdminSidebar;
