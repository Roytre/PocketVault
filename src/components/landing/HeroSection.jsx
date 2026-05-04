export default function HeroSection() {
  return (
    <section style={{
      padding: "6rem 2rem",
      textAlign: "center",
      background: "radial-gradient(circle at 50% 30%, hsl(var(--primary) / 0.15), transparent 60%)"
    }}>
      <h1 style={{
        fontSize: "3.5rem",
        fontWeight: 800,
        letterSpacing: "-0.025em",
        color: "hsl(var(--foreground))",
        marginBottom: "1rem",
        maxWidth: "800px",
        margin: "0 auto 1rem"
      }}>
        Secure everything you care about.
      </h1>
      <p style={{
        fontSize: "1.25rem",
        color: "hsl(var(--muted-foreground))",
        maxWidth: "600px",
        margin: "0 auto 2rem"
      }}>
        PocketVault is the ultimate secure, private space for your passwords, tickets, notes, and ideas.
      </p>
      <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
        <button style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "var(--radius)",
          backgroundColor: "hsl(var(--primary))",
          color: "hsl(var(--primary-foreground))",
          border: "none",
          cursor: "pointer"
        }}>Get Started for Free</button>
        <button style={{
          padding: "0.75rem 1.5rem",
          fontSize: "1rem",
          fontWeight: 600,
          borderRadius: "var(--radius)",
          backgroundColor: "transparent",
          color: "hsl(var(--foreground))",
          border: "1px solid hsl(var(--border))",
          cursor: "pointer"
        }}>View Demo</button>
      </div>
    </section>
  );
}
