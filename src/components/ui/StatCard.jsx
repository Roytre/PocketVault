export default function StatCard({ number, label, color, bg, icon: Icon }) {
  return (
    <div className="stat-card">
      <div className="icon-bubble" style={{ background: bg, color: color }}>
        <Icon size={18} />
      </div>
      <div>
        <div className="num">{number}</div>
        <div className="lab">{label}</div>
      </div>
    </div>
  );
}
