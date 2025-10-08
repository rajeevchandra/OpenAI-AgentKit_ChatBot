'use client';
import { useState } from 'react';
import { sendToBackend, type ChatMessage } from '../lib/chatkit';

export default function Page() {
  const [thread, setThread] = useState<ChatMessage[]>([
    { role: 'system', content: 'You are connected to local Ollama via FastAPI.' }
  ]);

  async function handleSend(text: string) {
    const next = [...thread, { role: 'user', content: text }];
    setThread(next);
    const assistant = await sendToBackend(next);
    setThread([...next, assistant]);
  }

  return (
    <div style={{ height:'100vh', display:'grid', placeItems:'center', background:'#f6f7fb' }}>
      <div style={{ width:800, maxWidth:'90vw', height:'80vh', background:'#fff', borderRadius:16, overflow:'hidden', boxShadow:'0 10px 30px rgba(0,0,0,.08)', display:'flex', flexDirection:'column' }}>
        <div style={{ padding:'12px 16px', borderBottom:'1px solid #eee', fontWeight:600 }}>Local Ollama Chat</div>
        <div style={{ flex:1, overflow:'auto', padding:'12px 16px' }}>
          {thread.filter(m => m.role !== 'system').map((m, i) => (
            <div key={i} style={{ margin:'8px 0', background: m.role==='user' ? '#e8efff' : '#e8ffe8', padding:'10px 12px', borderRadius:10 }}>
              <b>{m.role}:</b> {m.content}
            </div>
          ))}
        </div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const input = (e.currentTarget.elements.namedItem('q') as HTMLInputElement);
            const text = input.value.trim();
            if (!text) return;
            input.value = '';
            await handleSend(text);
          }}
          style={{ display:'flex', gap:10, padding:12, borderTop:'1px solid #eee' }}
        >
          <input name="q" placeholder="Type a message…" style={{ flex:1, padding:'10px 12px', border:'1px solid #ddd', borderRadius:10 }} />
          <button style={{ padding:'10px 14px', border:0, borderRadius:10, background:'#111827', color:'#fff', fontWeight:600, cursor:'pointer' }}>Send</button>
        </form>
      </div>
    </div>
  );
}
