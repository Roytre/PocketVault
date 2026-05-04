import CategorySection from '../components/items/CategorySection';
import { Shield, Ticket, Calendar, FileText, Link2, Lightbulb, Bell } from 'lucide-react';

export default function AllItems() {
  const sections = [
    { title: 'Passwords', icon: Shield, color: 'hsl(0 72% 51%)', items: [] },
    { title: 'Tickets', icon: Ticket, color: 'hsl(280 65% 55%)', items: [] },
    { title: 'Events', icon: Calendar, color: 'hsl(38 92% 50%)', items: [] },
    { title: 'Notes', icon: FileText, color: 'hsl(220 70% 50%)', items: [] },
    { title: 'Links', icon: Link2, color: 'hsl(160 60% 45%)', items: [] },
    { title: 'Ideas', icon: Lightbulb, color: 'hsl(45 93% 47%)', items: [] },
    { title: 'Reminders', icon: Bell, color: 'hsl(330 65% 55%)', items: [] }
  ];

  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
        <h1 style={{ fontSize: '1.25rem', fontWeight: 600 }}>All items</h1>
        <div style={{ fontSize: '0.875rem', color: 'hsl(var(--muted-foreground))' }}>0 total</div>
      </div>
      
      {sections.map((section, idx) => (
        <CategorySection key={idx} {...section} />
      ))}
    </>
  );
}
