import VaultCard from '../ui/VaultCard';
import { Shield, Ticket, Calendar, FileText, Link2, Lightbulb } from 'lucide-react';

export default function RecentItems() {
  const items = [];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', margin: '1rem 0 0.75rem' }}>
        <h2 style={{ fontSize: '1rem', fontWeight: 600 }}>Recent items</h2>
      </div>
      {items.length > 0 ? (
        <div className="cards-grid">
          {items.map((item, idx) => (
            <VaultCard key={idx} {...item} />
          ))}
        </div>
      ) : (
        <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'hsl(var(--muted-foreground))', border: '1px dashed hsl(var(--border))', borderRadius: 'var(--radius)' }}>
          <p>No recent items found.</p>
        </div>
      )}
    </>
  );
}
