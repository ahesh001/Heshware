// src/lib/marvenClient.ts
export type MarvenMode = 'cloud' | 'local' | 'mock';
const MODE = (import.meta.env.VITE_MARVEN_MODE as MarvenMode) || 'mock';
const API_BASE = import.meta.env.VITE_MARVEN_API_BASE || '';

export interface AskOptions { sessionId?: string; system?: string; model?: string; }
export interface AskResponseChunk { type: 'text' | 'done' | 'error'; data?: string; error?: string; }

export async function* askMarven(prompt: string, opts: AskOptions = {}): AsyncGenerator<AskResponseChunk> {
  if (MODE === 'mock') {
    const demo = "👋 I'm a local mock of Marven. Set VITE_MARVEN_MODE to 'cloud' or 'local' to enable the backend.";
    yield { type: 'text', data: demo };
    yield { type: 'done' };
    return;
  }
  const res = await fetch(`${API_BASE}/api/marven`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ message: prompt, sessionId: opts.sessionId, system: opts.system, model: opts.model, mode: MODE, stream: true }),
  });
  if (!res.ok || !res.body) {
    const err = await res.text().catch(() => res.statusText);
    yield { type: 'error', error: `HTTP ${res.status}: ${err}` };
    return;
  }
  const reader = res.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    let idx;
    while ((idx = buffer.indexOf('\n')) >= 0) {
      const line = buffer.slice(0, idx).trim();
      buffer = buffer.slice(idx + 1);
      if (!line) continue;
      try {
        yield JSON.parse(line) as AskResponseChunk;
      } catch {
        yield { type: 'text', data: line };
      }
    }
  }
}
