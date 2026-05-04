export default function TestimonialsSection() {
  return (
    <section id="testimonials" style={{ padding: "5rem 2rem", textAlign: "center" }}>
      <h2 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "3rem", color: "hsl(var(--foreground))" }}>
        Loved by thousands
      </h2>
      <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
        {[
          { name: "Sarah K.", role: "Designer", text: "PocketVault completely changed how I organize my digital life." },
          { name: "James L.", role: "Developer", text: "The cleanest, fastest vault app I have ever used. Simply incredible." }
        ].map((t, i) => (
          <div key={i} style={{
            backgroundColor: "hsl(var(--card))",
            padding: "2rem",
            borderRadius: "var(--radius)",
            border: "1px solid hsl(var(--border))",
            maxWidth: "350px",
            textAlign: "left"
          }}>
            <p style={{ color: "hsl(var(--card-foreground))", fontSize: "1rem", fontStyle: "italic", marginBottom: "1.5rem", lineHeight: 1.6 }}>
              "{t.text}"
            </p>
            <div>
              <div style={{ fontWeight: 600, color: "hsl(var(--foreground))" }}>{t.name}</div>
              <div style={{ fontSize: "0.875rem", color: "hsl(var(--muted-foreground))" }}>{t.role}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
