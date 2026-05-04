import VaultCard from '../ui/VaultCard';

export default function CategorySection({ title, icon: Icon, color, items = [] }) {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <div className="cat-section-head">
        <div className="sh-title">
          <span className="ic" style={{ color }}><Icon size={18} /></span> 
          {title}
        </div>
        <div className="sh-count">{items.length}</div>
      </div>
      
      {items.length > 0 ? (
        <div className="cards-grid">
          {items.map((item, idx) => (
            <VaultCard key={idx} {...item} />
          ))}
        </div>
      ) : (
        <div style={{ 
          textAlign: 'center', padding: '2rem 1rem', 
          color: 'hsl(var(--muted-foreground))', 
          border: '1px dashed hsl(var(--border))', 
          borderRadius: 'var(--radius)',
          fontSize: '0.875rem'
        }}>
          No items in this category.
        </div>
      )}
    </div>
  );
}
