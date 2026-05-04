export default function CategoryRow({ name, count, percent, color, bg, icon: Icon }) {
  return (
    <button className="breakdown-row">
      <span style={{ color: color }}>
        <Icon size={16} />
      </span>
      <span className="name">{name}</span>
      <div className="bar-wrap">
        <div className="bar" style={{ width: `${percent}%`, background: bg }}></div>
      </div>
      <span className="num">{count}</span>
    </button>
  );
}
