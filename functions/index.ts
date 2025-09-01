// functions/index.ts
import * as functions from 'firebase-functions';
import fetch from 'node-fetch';

type Mode = 'cloud' | 'local';

export const marven = functions.https.onRequest(async (req, res) => {
  res.set('Access-Control-Allow-Origin', '*');
  res.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  res.set('Access-Control-Allow-Methods', 'POST, OPTIONS');
  if (req.method === 'OPTIONS') return res.status(204).send('');

  if (req.method !== 'POST') return res.status(405).send('Method Not Allowed');

  try {
    const { message, sessionId, system, model, mode } = req.body || {};
    const MODE: Mode = (mode === 'local' ? 'local' : (mode === 'cloud' ? 'cloud' : (process.env.MARVEN_MODE as Mode))) || 'cloud';

    res.setHeader('Content-Type', 'text/plain; charset=utf-8');
    res.setHeader('Transfer-Encoding', 'chunked');
    const send = (chunk: any) => res.write(JSON.stringify(chunk) + '\n');

    if (MODE === 'local') {
      const base = process.env.MARVEN_LOCAL_BASE || 'http://localhost:11434';
      const localModel = model || process.env.MARVEN_LOCAL_MODEL || 'llama3.1:8b';
      const url = base.replace(/\/$/, '') + '/api/generate';
      const r = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ model: localModel, prompt: message, stream: true }),
      });
      if (!r.ok || !r.body) {
        send({ type: 'error', error: `Local HTTP ${r.status}` });
        return res.end();
      }
      const reader = (r as any).body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const text = decoder.decode(value, { stream: true });
        text.split('\n').forEach((line: string) => {
          if (!line.trim()) return;
          try {
            const obj = JSON.parse(line);
            if (obj.response) send({ type: 'text', data: obj.response });
          } catch {
            send({ type: 'text', data: line });
          }
        });
      }
      send({ type: 'done' });
      return res.end();
    } else {
      const key = process.env.OPENAI_API_KEY;
      if (!key) {
        send({ type: 'error', error: 'Missing OPENAI_API_KEY on the server.' });
        return res.end();
      }
      const modelName = model || process.env.MARVEN_CLOUD_MODEL || 'gpt-4o-mini';
      const api = 'https://api.openai.com/v1/chat/completions';
      const r = await fetch(api, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${key}` },
        body: JSON.stringify({
          model: modelName,
          stream: true,
          messages: [ ...(system ? [{ role: 'system', content: system }] : []), { role: 'user', content: message } ],
          temperature: 0.7
        }),
      });
      if (!(r as any).ok || !(r as any).body) {
        send({ type: 'error', error: `Cloud HTTP ${(r as any).status}` });
        return res.end();
      }
      const reader = (r as any).body.getReader();
      const decoder = new TextDecoder();
      while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = decoder.decode(value, { stream: true });
        chunk.split('\n\n').forEach((block: string) => {
          const m = block.match(/^data: (.*)$/m);
          if (!m) return;
          const payload = m[1];
          if (payload === '[DONE]') return;
          try {
            const obj = JSON.parse(payload);
            const delta = obj.choices?.[0]?.delta?.content;
            if (delta) send({ type: 'text', data: delta });
          } catch {}
        });
      }
      send({ type: 'done' });
      return res.end();
    }
  } catch (err: any) {
    res.write(JSON.stringify({ type: 'error', error: String(err?.message || err) }) + '\n');
    return res.end();
  }
});
