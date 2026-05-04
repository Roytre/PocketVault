import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Eye } from 'lucide-react';

export default function Auth() {
  const [view, setView] = useState('login'); // 'login', 'signup', or 'reset'
  const canvasRef = useRef(null);
  const navigate = useNavigate();

  // Subtle binary rain effect
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    
    const resize = () => { 
      c.width = c.clientWidth; 
      c.height = c.clientHeight; 
    };
    resize(); 
    window.addEventListener('resize', resize);
    
    const cols = Math.floor(c.width / 16);
    const drops = Array(cols).fill(0).map(() => Math.random() * -50);
    
    const interval = setInterval(() => {
      ctx.fillStyle = 'hsla(220,25%,8%,0.18)';
      ctx.fillRect(0, 0, c.width, c.height);
      ctx.font = '14px ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace';
      
      for (let i = 0; i < drops.length; i++) {
        const t = Math.random() > 0.5 ? '1' : '0';
        ctx.fillStyle = 'hsla(220,70%,55%,0.85)';
        ctx.fillText(t, i * 16, drops[i] * 16);
        
        if (drops[i] * 16 > c.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    }, 80);
    
    return () => {
      window.removeEventListener('resize', resize);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (view === 'login') {
      navigate('/'); // Route to dashboard on success
    } else {
      setView('login');
    }
  };

  return (
    <div className="auth-wrap">
      <div className="auth-canvas"></div>
      <canvas 
        ref={canvasRef} 
        className="auth-rain" 
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', opacity: 0.18 }}
      ></canvas>
      
      <div className="auth-inner">
        <div className="auth-title"><h1>My Pocket Vault</h1></div>
        
        <div className="auth-card">
          <div className="card-head">
            <div>
              <h2>{view === 'reset' ? 'Reset password' : 'Welcome back'}</h2>
              <div className="desc">
                {view === 'reset' 
                  ? "We'll send a recovery link to your email." 
                  : "Sign in from your phone and pick up where you left off."}
              </div>
            </div>
            {view !== 'reset' && (
              <div className="tabs">
                <div className={`tab ${view === 'login' ? 'active' : ''}`} onClick={() => setView('login')}>Sign In</div>
                <div className={`tab ${view === 'signup' ? 'active' : ''}`} onClick={() => setView('signup')}>Sign Up</div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleSubmit} className="card-body">
            <div className="field">
              <label className="label">Email</label>
              <input type="email" className="input auth-input" placeholder="you@example.com" required />
            </div>
            
            {view !== 'reset' && (
              <div className="field">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <label className="label">Password</label>
                  {view === 'login' && (
                    <button type="button" onClick={() => setView('reset')} style={{ fontSize: '0.75rem', color: 'hsl(var(--primary))', fontWeight: 500, background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}>
                      Forgot password?
                    </button>
                  )}
                </div>
                <div style={{ position: 'relative' }}>
                  <input className="input auth-input" style={{ paddingRight: '3rem' }} type="password" placeholder="••••••••" required />
                  <button type="button" className="btn ghost icon" style={{ position: 'absolute', right: '0.25rem', top: '50%', transform: 'translateY(-50%)', height: '2.5rem', width: '2.5rem' }}>
                    <Eye size={16} />
                  </button>
                </div>
              </div>
            )}
            
            <button type="submit" className="btn auth-input full" style={{ borderRadius: 'var(--radius)', background: 'hsl(var(--primary))', color: 'hsl(var(--primary-foreground))', justifyContent: 'center' }}>
              {view === 'reset' ? 'Send Recovery Link' : view === 'signup' ? 'Create Account' : 'Sign In'}
            </button>
            
            {view === 'reset' && (
              <div style={{ textAlign: 'center', marginTop: '1rem' }}>
                <button type="button" onClick={() => setView('login')} style={{ background: 'none', border: 'none', color: 'hsl(var(--muted-foreground))', cursor: 'pointer', fontSize: '0.875rem' }}>
                  Back to Login
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
