import { useParams } from 'react-router-dom';
import VaultCard from '../components/ui/VaultCard';
import { Shield, Ticket, Calendar, FileText, Link2, Lightbulb, Bell, Folder } from 'lucide-react';

const CATEGORY_MAP = {
  'password': { title: 'Passwords', icon: Shield, color: 'hsl(0 72% 51%)' },
  'ticket': { title: 'Tickets', icon: Ticket, color: 'hsl(280 65% 55%)' },
  'event': { title: 'Events', icon: Calendar, color: 'hsl(38 92% 50%)' },
  'note': { title: 'Notes', icon: FileText, color: 'hsl(220 70% 50%)' },
  'link': { title: 'Links', icon: Link2, color: 'hsl(160 60% 45%)' },
  'idea': { title: 'Ideas', icon: Lightbulb, color: 'hsl(45 93% 47%)' },
  'reminder': { title: 'Reminders', icon: Bell, color: 'hsl(330 65% 55%)' },
};

export default function CategoryFolder() {
  const { id } = useParams();
  const categoryInfo = CATEGORY_MAP[id] || { title: 'Unknown Category', icon: Folder, color: 'hsl(var(--muted-foreground))' };
  const Icon = categoryInfo.icon;
  
  const items = [];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600, display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <span className="ic" style={{ color: categoryInfo.color }}><Icon size={20} /></span>
          {categoryInfo.title}
        </h1>
        <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>0 items</div>
      </div>
      
      {/* Optional sub-folders could go here */}

      <div style={{ marginTop: '1.5rem' }}>
        {items.length > 0 ? (
          <div className="cards-grid">
            {items.map((item, idx) => (
              <VaultCard key={idx} {...item} color={categoryInfo.color} icon={Icon} />
            ))}
          </div>
        ) : (
          <div style={{ 
            textAlign: 'center', padding: '4rem 1rem', 
            color: 'hsl(var(--muted-foreground))', 
            border: '1px dashed hsl(var(--border))', 
            borderRadius: 'var(--radius)'
          }}>
            <Icon size={32} style={{ margin: '0 auto 1rem', opacity: 0.5, color: categoryInfo.color }} />
            <p>No items in {categoryInfo.title}.</p>
          </div>
        )}
      </div>
    </>
  );
}
