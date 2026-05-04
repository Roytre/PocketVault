export default function FeatureCard({ title, description, colorVar }) {
  return (
    <div style={{
      backgroundColor: "hsl(var(--card))",
      color: "hsl(var(--card-foreground))",
      border: "1px solid hsl(var(--border))",
      borderLeftWidth: "4px",
      borderLeftColor: `hsl(var(${colorVar}))`,
      borderRadius: "var(--radius)",
      padding: "1.5rem",
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      boxShadow: "0 4px 12px hsl(220 25% 5% / 0.1)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
        <div style={{
          width: "40px", height: "40px", borderRadius: "8px",
          display: "grid", placeItems: "center",
          backgroundColor: `hsl(var(${colorVar}) / 0.2)`,
          color: `hsl(var(${colorVar}))`,
          fontWeight: "bold",
          fontSize: "1.25rem"
        }}>
          ?
        </div>
        <h3 style={{ fontSize: "1.125rem", fontWeight: 600, margin: 0 }}>{title}</h3>
      </div>
      <p style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))", margin: 0, lineHeight: 1.5 }}>
        {description}
      </p>
    </div>
  );
}
