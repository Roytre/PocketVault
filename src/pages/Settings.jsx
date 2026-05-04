import { User, Palette, Monitor, Globe, Bell, Trash2, HardDrive, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Settings() {
  const navigate = useNavigate();

  return (
    <>
      <div className="page-title">
        <div>
          <h1>Settings</h1>
          <div className="meta">Customize your experience</div>
        </div>
      </div>
      <div style={{ maxWidth: '42rem' }}>
        
        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><User size={18} /></span>
            <div className="grow"><div className="ttl">Profile</div><div className="sub">Display name, email, avatar</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><Palette size={18} /></span>
            <div className="grow"><div className="ttl">Appearance</div><div className="sub">Theme, accent color, dark mode</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><Monitor size={18} /></span>
            <div className="grow"><div className="ttl">UI scale</div><div className="sub">Adjust interface size (75–150%)</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><Globe size={18} /></span>
            <div className="grow"><div className="ttl">Language</div><div className="sub">Interface language & RTL support</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><Bell size={18} /></span>
            <div className="grow"><div className="ttl">Notifications</div><div className="sub">Push reminders & share alerts</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><Trash2 size={18} /></span>
            <div className="grow"><div className="ttl">Cleanup</div><div className="sub">Auto-delete obsolete items</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div className="set-section">
          <button className="set-trigger">
            <span className="ic"><HardDrive size={18} /></span>
            <div className="grow"><div className="ttl">Import / Export</div><div className="sub">JSON, CSV backup & restore</div></div>
            <span className="chev"><ChevronRight size={18} /></span>
          </button>
        </div>

        <div style={{ marginTop: '1rem' }}>
          <button className="btn destructive" onClick={() => navigate('/auth')}>Sign out</button>
        </div>
      </div>
    </>
  );
}
