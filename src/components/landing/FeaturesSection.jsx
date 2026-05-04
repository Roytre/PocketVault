import FeatureCard from "../ui/FeatureCard";

export default function FeaturesSection() {
  return (
    <section id="features" style={{ padding: "4rem 2rem", backgroundColor: "hsl(var(--secondary) / 0.3)" }}>
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: 700, textAlign: "center", marginBottom: "3rem", color: "hsl(var(--foreground))" }}>
          Everything you need in one vault
        </h2>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem"
        }}>
          <FeatureCard 
            title="Secure Passwords" 
            description="Store your credentials with military-grade encryption and autofill them instantly." 
            colorVar="--primary" 
          />
          <FeatureCard 
            title="Event Tickets" 
            description="Keep all your concert and flight tickets organized and accessible offline." 
            colorVar="--accent" 
          />
          <FeatureCard 
            title="Smart Notes" 
            description="Jot down quick ideas or long-form notes with rich text and instant search." 
            colorVar="--destructive" 
          />
        </div>
      </div>
    </section>
  );
}
