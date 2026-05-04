import { NavLink } from 'react-router-dom';
import { Home, Layers, Plus, Trash2, Settings } from 'lucide-react';

export default function BottomNav() {
  return (
    <nav className="bottom-nav">
      <NavLink to="/" className={({ isActive }) => `bn-item ${isActive ? 'active' : ''}`}>
        <Home size={20} />
        <span className="lab">Home</span>
      </NavLink>
      <NavLink to="/all" className={({ isActive }) => `bn-item ${isActive ? 'active' : ''}`}>
        <Layers size={20} />
        <span className="lab">All</span>
      </NavLink>
      
      <button className="bn-fab">
        <Plus size={22} />
      </button>
      
      <NavLink to="/cleanup" className={({ isActive }) => `bn-item ${isActive ? 'active' : ''}`}>
        <Trash2 size={20} />
        <span className="lab">Cleanup</span>
      </NavLink>
      <NavLink to="/settings" className={({ isActive }) => `bn-item ${isActive ? 'active' : ''}`}>
        <Settings size={20} />
        <span className="lab">Settings</span>
      </NavLink>
    </nav>
  );
}
