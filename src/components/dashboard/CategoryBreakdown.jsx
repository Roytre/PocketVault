import CategoryRow from '../ui/CategoryRow';
import { Layers, Shield, Ticket, Calendar, FileText, Link2, Lightbulb, Bell } from 'lucide-react';

export default function CategoryBreakdown() {
  const categories = [
    { name: 'Passwords', count: 0, percent: 0, color: 'hsl(0 72% 51%)', bg: 'hsl(0 72% 51% / 0.4)', icon: Shield },
    { name: 'Tickets', count: 0, percent: 0, color: 'hsl(280 65% 55%)', bg: 'hsl(280 65% 55% / 0.4)', icon: Ticket },
    { name: 'Events', count: 0, percent: 0, color: 'hsl(38 92% 50%)', bg: 'hsl(38 92% 50% / 0.4)', icon: Calendar },
    { name: 'Notes', count: 0, percent: 0, color: 'hsl(220 70% 50%)', bg: 'hsl(220 70% 50% / 0.4)', icon: FileText },
    { name: 'Links', count: 0, percent: 0, color: 'hsl(160 60% 45%)', bg: 'hsl(160 60% 45% / 0.4)', icon: Link2 },
    { name: 'Ideas', count: 0, percent: 0, color: 'hsl(45 93% 47%)', bg: 'hsl(45 93% 47% / 0.4)', icon: Lightbulb },
    { name: 'Reminders', count: 0, percent: 0, color: 'hsl(330 65% 55%)', bg: 'hsl(330 65% 55% / 0.4)', icon: Bell }
  ];

  return (
    <div className="card-block" style={{ marginBottom: '1.25rem' }}>
      <div className="card-block-pad">
        <div className="cb-head">
          <span className="ic"><Layers size={16} /></span>
          Category breakdown
        </div>
        {categories.map((cat, idx) => (
          <CategoryRow 
            key={idx}
            name={cat.name} count={cat.count} percent={cat.percent}
            color={cat.color} bg={cat.bg} icon={cat.icon}
          />
        ))}
      </div>
    </div>
  );
}
