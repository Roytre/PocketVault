import { NavLink } from 'react-router-dom';
import { Home, Layers, Plus, Shield, Ticket, Calendar, FileText, Link2, Lightbulb, Bell, Trash2, HelpCircle, Settings, LogOut } from 'lucide-react';

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-head">
        <button className="profile-btn" title="Profile">A</button>
        <div style={{ minWidth: 0 }}>
          <div className="app-name">My Pocket Vault</div>
          <div className="user-email">alex@example.com</div>
        </div>
      </div>
      <div className="sidebar-nav">
        <NavLink to="/" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
          <span className="ic"><Home size={20} /></span>
          <span className="label">Home</span>
        </NavLink>
        <NavLink to="/all" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
          <span className="ic"><Layers size={20} /></span>
          <span className="label">All Items</span>
          <span className="count">0</span>
        </NavLink>
        
        <div className="section-label">
          <span>Categories</span>
          <button className="icon-tiny" title="New category"><Plus size={14} /></button>
        </div>
        
        <NavLink to="/category/password" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(0 72% 51%)' }}><Shield size={18} /></span>
          <span className="label">Passwords</span>
          <span className="count">0</span>
        </NavLink>
        <NavLink to="/category/ticket" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(280 65% 55%)' }}><Ticket size={18} /></span>
          <span className="label">Tickets</span>
          <span className="count">0</span>
        </NavLink>
        <NavLink to="/category/event" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(38 92% 50%)' }}><Calendar size={18} /></span>
          <span className="label">Events</span>
          <span className="count">0</span>
        </NavLink>
        <NavLink to="/category/note" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(220 70% 50%)' }}><FileText size={18} /></span>
          <span className="label">Notes</span>
          <span className="count">0</span>
        </NavLink>
        <NavLink to="/category/link" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(160 60% 45%)' }}><Link2 size={18} /></span>
          <span className="label">Links</span>
          <span className="count">0</span>
        </NavLink>
        <NavLink to="/category/idea" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(45 93% 47%)' }}><Lightbulb size={18} /></span>
          <span className="label">Ideas</span>
          <span className="count">0</span>
        </NavLink>
        <NavLink to="/category/reminder" className="nav-btn">
          <span className="ic" style={{ color: 'hsl(330 65% 55%)' }}><Bell size={18} /></span>
          <span className="label">Reminders</span>
          <span className="count">0</span>
        </NavLink>
      </div>
      
      <div className="sidebar-footer">
        <NavLink to="/cleanup" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
          <span className="ic"><Trash2 size={16} /></span>
          <span className="label">Cleanup</span>
        </NavLink>
        <NavLink to="/assistant" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
          <span className="ic"><HelpCircle size={16} /></span>
          <span className="label">Help & Assistant</span>
        </NavLink>
        <NavLink to="/settings" className={({ isActive }) => `nav-btn ${isActive ? 'active' : ''}`}>
          <span className="ic"><Settings size={16} /></span>
          <span className="label">Settings</span>
        </NavLink>
        <NavLink to="/auth" className="nav-btn">
          <span className="ic"><LogOut size={16} /></span>
          <span className="label">Sign out</span>
        </NavLink>
      </div>
    </aside>
  );
}
