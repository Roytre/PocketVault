import { Menu, Search, Bell, Plus } from 'lucide-react';

export default function Topbar() {
  return (
    <header className="topbar">
      <button className="btn ghost icon" style={{ display: 'none' }} aria-label="Menu">
        <Menu size={20} />
      </button>
      
      <div className="search-wrap">
        <span className="ic-lead"><Search size={16} /></span>
        <input className="input has-lead" placeholder="Search vault..." />
      </div>
      
      <button className="btn ghost icon" aria-label="Notifications" style={{ position: 'relative' }}>
        <Bell size={20} />
        <span style={{
          position: 'absolute', top: '6px', right: '6px', width: '14px', height: '14px',
          borderRadius: '9999px', background: 'hsl(var(--destructive))',
          color: 'hsl(var(--destructive-foreground))', fontSize: '9px', fontWeight: 700,
          display: 'grid', placeItems: 'center'
        }}>3</span>
      </button>
      
      <button className="btn">
        <Plus size={16} /> Add
      </button>
    </header>
  );
}
