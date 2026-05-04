export default function Footer() {
  return (
    <footer style={{
      padding: "2rem",
      textAlign: "center",
      borderTop: "1px solid hsl(var(--border))",
      backgroundColor: "hsl(var(--card))",
      color: "hsl(var(--muted-foreground))",
      fontSize: "0.875rem"
    }}>
      <p>&copy; {new Date().getFullYear()} My Pocket Vault. All rights reserved.</p>
    </footer>
  );
}
