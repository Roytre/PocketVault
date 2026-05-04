export default function Navbar() {
  return (
    <header style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "1rem 2rem",
      backgroundColor: "hsl(var(--background) / 0.8)",
      backdropFilter: "blur(16px)",
      borderBottom: "1px solid hsl(var(--border))",
      position: "sticky",
      top: 0,
      zIndex: 50
    }}>
      <div style={{ fontWeight: 800, fontSize: "1.25rem", color: "hsl(var(--foreground))" }}>
        <span style={{ color: "hsl(var(--primary))" }}>Pocket</span>Vault
      </div>
      <nav style={{ display: "flex", gap: "1.5rem" }}>
        <a href="#features" style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>Features</a>
        <a href="#testimonials" style={{ color: "hsl(var(--muted-foreground))", fontSize: "0.875rem", fontWeight: 500, textDecoration: "none" }}>Testimonials</a>
      </nav>
      <div>
        <button style={{
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          border: "none",
          padding: "0.5rem 1rem",
          borderRadius: "calc(var(--radius) - 2px)",
          fontWeight: 600,
          cursor: "pointer"
        }}>Sign In</button>
      </div>
    </header>
  );
}
