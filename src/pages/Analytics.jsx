import { Layers, Star, Folder, Calendar } from 'lucide-react';

export default function Analytics() {
  return (
    <>
      <div className="page-title">
        <div>
          <h1>Analytics</h1>
          <div className="meta">Insights into your vault</div>
        </div>
      </div>

      <div className="stats-grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
        <div className="stat-card">
          <div className="icon-bubble" style={{ background: 'hsl(var(--primary)/0.1)', color: 'hsl(var(--primary))' }}>
            <Layers size={18} />
          </div>
          <div><div className="num">0</div><div className="lab">All items</div></div>
        </div>
        <div className="stat-card">
          <div className="icon-bubble" style={{ background: 'hsl(var(--accent)/0.15)', color: 'hsl(var(--accent))' }}>
            <Star size={18} />
          </div>
          <div><div className="num">0</div><div className="lab">Favorites</div></div>
        </div>
        <div className="stat-card">
          <div className="icon-bubble" style={{ background: 'hsl(var(--muted))', color: 'hsl(var(--muted-foreground))' }}>
            <Folder size={18} />
          </div>
          <div><div className="num">0</div><div className="lab">Folders</div></div>
        </div>
        <div className="stat-card">
          <div className="icon-bubble" style={{ background: 'hsl(var(--primary)/0.1)', color: 'hsl(var(--primary))' }}>
            <Calendar size={18} />
          </div>
          <div><div className="num">0</div><div className="lab">This week</div></div>
        </div>
      </div>

      <div className="analytics-grid two" style={{ marginTop: '1rem' }}>
        <div className="card-block">
          <div className="card-block-pad">
            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>By category</div>
          </div>
          {/* Empty donut state */}
          <div className="donut" style={{ background: 'var(--muted)', opacity: 0.2 }}></div>
          <div className="card-block-pad" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', paddingTop: 0 }}>
            {[
              { name: 'Passwords', color: 'hsl(0 72% 51%)' },
              { name: 'Tickets', color: 'hsl(280 65% 55%)' },
              { name: 'Events', color: 'hsl(38 92% 50%)' },
              { name: 'Notes', color: 'hsl(220 70% 50%)' },
              { name: 'Links', color: 'hsl(160 60% 45%)' },
              { name: 'Ideas', color: 'hsl(45 93% 47%)' },
              { name: 'Reminders', color: 'hsl(330 65% 55%)' }
            ].map((cat, idx) => (
              <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.75rem', color: 'hsl(var(--muted-foreground))' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: cat.color, opacity: 0.5 }}></span>
                {cat.name} (0)
              </div>
            ))}
          </div>
        </div>
        <div className="card-block">
          <div className="card-block-pad">
            <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Activity (last 30 days)</div>
          </div>
          <div className="line-chart">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100%', color: 'hsl(var(--muted-foreground))', fontSize: '0.875rem' }}>
              Not enough data
            </div>
          </div>
        </div>
      </div>

      <div className="card-block" style={{ marginTop: '1rem' }}>
        <div className="card-block-pad">
          <div style={{ fontSize: '0.875rem', fontWeight: 600 }}>Distribution</div>
        </div>
        <div className="bar-chart" style={{ height: '120px' }}>
          {[
            'hsl(0 72% 51%)', 'hsl(280 65% 55%)', 'hsl(38 92% 50%)', 
            'hsl(220 70% 50%)', 'hsl(160 60% 45%)', 'hsl(45 93% 47%)', 'hsl(330 65% 55%)'
          ].map((color, idx) => (
            <div key={idx} className="bar" style={{ height: '0%', background: color }}></div>
          ))}
        </div>
        <div className="card-block-pad" style={{ paddingTop: '0.5rem', display: 'flex', gap: '0.75rem', flexWrap: 'wrap', justifyContent: 'space-around', fontSize: '0.7rem', color: 'hsl(var(--muted-foreground))' }}>
          <span>Passwords</span><span>Tickets</span><span>Events</span><span>Notes</span><span>Links</span><span>Ideas</span><span>Reminders</span>
        </div>
      </div>
    </>
  );
}
