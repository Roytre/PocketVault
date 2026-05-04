import { Send } from 'lucide-react';

export default function Assistant() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', height: 'calc(100vh - 5rem)', margin: '-1rem -1rem -1rem', maxWidth: 'none' }}>
        <div className="chat-scroll">
          <div className="bubble assistant">
            Hi! I'm your <strong>Vault Helper</strong> 👋<br /><br />
            Ask me anything about how the app works — adding items, organizing categories, sharing, reminders, themes, and more. I can also walk you through tasks step-by-step.<br /><br />
            Try one of the suggestions below, or just type your question.
          </div>
          <div className="bubble user">How do I create a new category?</div>
          <div className="bubble assistant">
            Easy! In the left sidebar, find the <strong>"Categories"</strong> section. Click the small <strong>+</strong> icon next to it, type a name (like "Recipes" or "Work"), and hit Enter. The app will pick a fitting icon automatically — you can change it later by clicking the pencil ✏️ next to the category title.
          </div>
        </div>

        <div className="suggest-row">
          <button className="suggest-btn">How do I add my first item?</button>
          <button className="suggest-btn">How do I share something with someone?</button>
          <button className="suggest-btn">How do I set a reminder?</button>
          <button className="suggest-btn">What features should I try next?</button>
        </div>

        <div className="composer">
          <textarea className="textarea" rows={1} placeholder="Ask anything..." style={{ minHeight: 'auto', height: '2.5rem' }}></textarea>
          <button className="btn icon">
            <Send size={16} />
          </button>
        </div>
      </div>
    </>
  );
}
