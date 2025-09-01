// src/components/MarvenChatPage.tsx
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Send, ArrowLeft, Bot, User, Sparkles, Brain, Heart, ChevronLeft, ChevronRight, HelpCircle } from 'lucide-react';
import { askMarven } from '../lib/marvenClient';

interface Message {
  id: string;
  content: string;
  sender: 'user' | 'marven';
  timestamp: Date;
  emotion?: 'helpful' | 'excited' | 'thoughtful' | 'empathetic' | 'neutral';
}

export default function MarvenChatPage() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', content: "Hello! I'm Marven, Heshware's AI partner. How can I assist you today?", sender: 'marven', timestamp: new Date(), emotion: 'excited' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSampleQuestions, setShowSampleQuestions] = useState(true);
  const [sessionId] = useState(() => Math.random().toString(36).slice(2));
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => { messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' }); };
  useEffect(() => { scrollToBottom(); }, [messages]);
  useEffect(() => { inputRef.current?.focus(); }, []);

  const appendMarvenStreaming = async (userText: string) => {
    setIsTyping(true);
    const id = String(Date.now() + 1);
    setMessages(prev => [...prev, { id, content: '', sender: 'marven', timestamp: new Date(), emotion: 'neutral' }]);

    let acc = '';
    try {
      for await (const chunk of askMarven(userText, { sessionId })) {
        if (chunk.type === 'text' && chunk.data) {
          acc += chunk.data;
          setMessages(prev => prev.map(m => m.id === id ? { ...m, content: acc } : m));
        } else if (chunk.type === 'error') {
          setMessages(prev => prev.map(m => m.id === id ? { ...m, content: `⚠️ ${chunk.error}` } : m));
        }
      }
    } catch (e: any) {
      setMessages(prev => prev.map(m => m.id === id ? { ...m, content: `⚠️ ${String(e)}` } : m));
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;
    const text = inputValue;
    setMessages(prev => [...prev, { id: Date.now().toString(), content: text, sender: 'user', timestamp: new Date() }]);
    setInputValue('');
    await appendMarvenStreaming(text);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const getEmotionIcon = (emotion?: Message['emotion']) => {
    switch (emotion) {
      case 'excited': return <Sparkles className="w-4 h-4 text-yellow-400" />;
      case 'thoughtful': return <Brain className="w-4 h-4 text-blue-400" />;
      case 'empathetic': return <Heart className="w-4 h-4 text-pink-400" />;
      case 'helpful': return <Bot className="w-4 h-4 text-green-400" />;
      default: return <Bot className="w-4 h-4 text-teal-400" />;
    }
  };

  const sampleQuestions = [
    { category: "About Marven", questions: ["How do you learn and adapt?", "What makes you emotionally intelligent?", "How do you provide predictive guidance?"] },
    { category: "Heshware Technologies", questions: ["Tell me about Heshware's mission", "How are you integrated across applications?", "What is Labor Tracker?"] },
    { category: "AI Partnership", questions: ["How can you help my business?", "What's the future of AI collaboration?", "How do you handle complex problems?"] },
    { category: "Getting Started", questions: ["What should I ask you first?", "How can you assist me today?", "What are your main capabilities?"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-black flex flex-col" data-scroll-reset>
      <header className="bg-slate-800/50 border-b border-slate-700 p-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button onClick={() => navigate('/marven')} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Marven AI
            </button>
            <div className="w-8 h-8 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg flex items-center justify-center">
              <Bot className="w-5 h-5 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-semibold text-white">Marven AI Chat</h1>
              <p className="text-sm text-slate-400">Beta Access</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowSampleQuestions(!showSampleQuestions)} className="text-slate-300 hover:text-white transition-colors duration-300 flex items-center gap-2 px-3 py-1 rounded-lg border border-slate-600 hover:border-slate-500">
              <HelpCircle className="w-4 h-4" />
              <span className="hidden sm:inline">Sample Questions</span>
              {showSampleQuestions ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span>Online</span>
            </div>
          </div>
        </div>
      </header>

      <div className="flex-1 flex overflow-hidden">
        <div className="flex-1 overflow-y-auto p-4">
          <div className={`mx-auto space-y-6 transition-all duration-300 ${showSampleQuestions ? 'max-w-4xl' : 'max-w-6xl'}`}>
            {messages.map((m) => (
              <div key={m.id} className={`flex gap-4 ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                {m.sender === 'marven' && (
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-white" />
                  </div>
                )}
                <div className={`max-w-2xl ${m.sender === 'user' ? 'order-2' : ''}`}>
                  <div className={`p-4 rounded-2xl ${m.sender === 'user' ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' : 'bg-slate-800/50 border border-slate-700 text-slate-100'}`}>
                    {m.sender === 'marven' && (
                      <div className="flex items-center gap-2 mb-2 text-sm text-slate-400">
                        {getEmotionIcon(m.emotion)}
                        <span className="capitalize">{m.emotion || 'neutral'} response</span>
                      </div>
                    )}
                    <p className="leading-relaxed whitespace-pre-wrap">{m.content}</p>
                  </div>
                  <div className={`text-xs text-slate-500 mt-1 ${m.sender === 'user' ? 'text-right' : 'text-left'}`}>
                    {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
                {m.sender === 'user' && (
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <User className="w-6 h-6 text-white" />
                  </div>
                )}
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-4 justify-start">
                <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <Bot className="w-6 h-6 text-white" />
                </div>
                <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-4">
                  <div className="flex items-center gap-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-teal-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                    <span className="text-slate-400 text-sm">Marven is thinking...</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
        </div>

        <div className={`transition-all duration-300 border-l border-slate-700 bg-slate-800/30 overflow-y-auto ${showSampleQuestions ? 'w-80 opacity-100' : 'w-0 opacity-0'}`}>
          {showSampleQuestions && (
            <div className="p-6">
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
                  <HelpCircle className="w-5 h-5 text-teal-400" />
                  Sample Questions
                </h3>
                <p className="text-sm text-slate-400">Click any question to start a conversation with Marven AI</p>
              </div>
              <div className="space-y-6">
                {sampleQuestions.map((cat, i) => (
                  <div key={i} className="space-y-3">
                    <h4 className="text-sm font-medium text-teal-300 uppercase tracking-wide">{cat.category}</h4>
                    <div className="space-y-2">
                      {cat.questions.map((q, qi) => (
                        <button key={qi} onClick={() => { setInputValue(q); inputRef.current?.focus(); }} className="w-full text-left p-3 rounded-lg bg-slate-700/50 hover:bg-slate-700 text-slate-300 hover:text-white transition-all duration-200 text-sm border border-slate-600 hover:border-slate-500">
                          <div className="flex items-start gap-2">
                            <span className="text-teal-400 mt-0.5">•</span>
                            <span>{q}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border border-green-700/30">
                <div className="flex items-center gap-2 mb-2">
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                  <span className="text-sm font-medium text-white">Pro Tip</span>
                </div>
                <p className="text-xs text-slate-300">Marven learns from each conversation. The more you chat, the better I understand your preferences and needs!</p>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-slate-800/50 border-t border-slate-700 p-4">
        <div className={`mx-auto transition-all duration-300 ${showSampleQuestions ? 'max-w-4xl' : 'max-w-6xl'}`}>
          <div className="flex gap-4 items-end">
            <div className="flex-1 relative">
              <input id="marven-input" ref={inputRef} type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={handleKeyDown} placeholder="Chat with Marven AI... (Press Enter to send)" className="w-full p-4 bg-slate-900/50 border border-slate-600 rounded-xl text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent" disabled={isTyping} autoComplete="off" />
            </div>
            <button onClick={handleSendMessage} disabled={!inputValue.trim() || isTyping} className="p-4 bg-gradient-to-r from-green-600 to-teal-600 text-white rounded-xl hover:from-green-700 hover:to-teal-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
              <Send className="w-5 h-5" />
            </button>
          </div>
          <div className="mt-2 text-xs text-slate-500 text-center">🤖 Marven AI Beta</div>
        </div>
      </div>
    </div>
  );
}
