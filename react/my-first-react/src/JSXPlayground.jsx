import './App.css'

export default function JSXPlayground() {
  const logoUrl = "https://dummyimage.com/64x64/000/fff.png&text=R";
  const isLoggedIn = true;
  const theme = "dark"; // try "light"
  const users = [
    { id: 101, name: "Apurva", role: "Beginner" },
  ];

  function handleClick() {
    alert("Clicked!");
  }

  const boxStyle = {
    padding: 12,
    borderRadius: 12,
    border: "1px solid #e5e7eb",
    backgroundColor: theme === "dark" ? "#0f172a" : "#f8fafc",
    color: theme === "dark" ? "#e2e8f0" : "#0f172a",
  };

  return (
    <>
      {/* attributes, expressions, inline styles */}
      <div style={boxStyle}>
        <img alt="logo" src={logoUrl} width={48} height={48} />
        <h2 style={{ margin: "8px 0 0" }}>
          {`Welcome, ${isLoggedIn ? "back" : "guest"}!`}
        </h2>
        <p>Theme: <strong>{theme}</strong></p>
        <button onClick={handleClick} style={{ marginTop: 8 }}>
          Say Hi
        </button>
      </div>

      {/* list + keys */}
      <section style={{ marginTop: 16 }}>
        <h3>Users</h3>
        <ul>
          {users.map(u => (
            <li key={u.id}>
              <UserCard {...u} highlight={u.role === "PM"} />
            </li>
          ))}
        </ul>
      </section>

      {/* conditional rendering (ternary & &&) */}
      <section style={{ marginTop: 16 }}>
        <h3>Conditional</h3>
        {isLoggedIn ? <p>You're in 🎉</p> : <p>Please log in</p>}
        {users.length > 0 && <p>Total users: {users.length}</p>}
      </section>
    </>
  );
}

function UserCard({ id, name, role, highlight }) {
  return (
    <article
      className="user-card"
      aria-current={highlight ? "true" : "false"}
      style={{
        padding: 10,
        border: "1px solid #e5e7eb",
        borderRadius: 10,
        margin: "6px 0",
        boxShadow: highlight ? "0 0 0 2px #60a5fa" : "none",
      }}
      title={`User #${id}`}
    >
      <strong>{name}</strong> — <em>{role}</em>
      {highlight && <span style={{ marginLeft: 8 }}>⭐</span>}
    </article>
  );
}
