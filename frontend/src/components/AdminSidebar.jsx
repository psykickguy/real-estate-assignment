function AdminSidebar({ section, setSection }) {
  const items = [
    "hero",
    "aboutProject",
    "amenities",
    "connectivity",
    "constructionUpdates",
    "developer",
    "faqs",
  ];

  return (
    <div className="admin-sidebar">
      <h3>Admin Panel</h3>

      {items.map((item) => (
        <p
          key={item}
          className={section === item ? "active" : ""}
          onClick={() => setSection(item)}
        >
          {item}
        </p>
      ))}
    </div>
  );
}

export default AdminSidebar;
