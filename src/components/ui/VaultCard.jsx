import { Star } from 'lucide-react';

export default function VaultCard({ title, category, content, type, color, icon: Icon, isStarred, date, location }) {
  return (
    <div className="vault-card" style={{ borderLeftColor: color }} onClick={() => {}}>
      <div className="vc-head">
        <div className="vc-icon" style={{ background: `${color}26`, color: color }}>
          <Icon size={16} />
        </div>
        <div className="vc-title">{title}</div>
      </div>
      <div className="vc-body">
        <div className="vc-cat">{category}</div>
        
        {type === 'password' && <div className="vc-pwd">••••••••••••</div>}
        {type === 'note' && <div className="vc-content">{content}</div>}
        {type === 'link' && <div className="vc-content">{content}</div>}
        {type === 'idea' && <div className="vc-content">{content}</div>}
        
        {(date || location || isStarred) && (
          <>
            {date && <div className="vc-meta-row"><span>{date}</span></div>}
            {location && <div className="vc-meta-row"><span>{location}</span></div>}
            {isStarred && <div className="vc-meta-row"><Star size={14} className="star-fill" /></div>}
          </>
        )}
      </div>
    </div>
  );
}
