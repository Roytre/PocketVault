import StatCard from '../ui/StatCard';
import { Layers, Star, Calendar, Users } from 'lucide-react';

export default function StatsGrid() {
  return (
    <div className="stats-grid">
      <StatCard 
        number="0" label="All items" 
        icon={Layers} color="hsl(var(--primary))" bg="hsl(var(--primary) / 0.1)" 
      />
      <StatCard 
        number="0" label="Favorites" 
        icon={Star} color="hsl(var(--accent))" bg="hsl(var(--accent) / 0.15)" 
      />
      <StatCard 
        number="0" label="Upcoming" 
        icon={Calendar} color="hsl(var(--destructive))" bg="hsl(var(--destructive) / 0.15)" 
      />
      <StatCard 
        number="0" label="Shared" 
        icon={Users} color="hsl(var(--primary))" bg="hsl(var(--primary) / 0.1)" 
      />
    </div>
  );
}
