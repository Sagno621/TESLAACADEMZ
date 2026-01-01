
import React, { useState, useRef, useEffect } from 'react';
import { Send, Sparkles, User, Bot, Loader2, MessageSquareText } from 'lucide-react';
import { askTeslaIA } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', content: "Bonjour ! Je suis TESLA-IA. Comment puis-je vous éclairer sur nos formations en audit, finance ou informatique de gestion aujourd'hui ?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    const response = await askTeslaIA(userMessage);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <section id="ai-chat" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Visual background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-indigo-500 rounded-full blur-[150px]"></div>
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C5A059] rounded-full blur-[150px]"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-indigo-500/10 border border-indigo-500/20 rounded-full px-4 py-2 mb-6">
              <Sparkles className="w-4 h-4 text-indigo-400" />
              <span className="text-[10px] font-black text-indigo-300 uppercase tracking-[0.2em]">IA de Nouvelle Génération</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase leading-none">
              AI pour <span className="text-[#C5A059]">Tous</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium leading-relaxed max-w-2xl mx-auto">
              Posez vos questions à notre intelligence artificielle sur les métiers de l'audit, de la finance et les technologies de gestion en Guinée.
            </p>
          </div>

          <div className="bg-white/[0.03] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl backdrop-blur-xl flex flex-col h-[650px]">
            {/* Chat Header */}
            <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-[#C5A059] flex items-center justify-center">
                  <Bot className="text-black w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-white font-black uppercase tracking-widest text-sm">TESLA-IA Assistant</h3>
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">En ligne</span>
                  </div>
                </div>
              </div>
              <MessageSquareText className="text-gray-700 w-6 h-6" />
            </div>

            {/* Messages Area */}
            <div 
              ref={scrollRef}
              className="flex-grow overflow-y-auto p-8 space-y-8 scrollbar-hide"
            >
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex max-w-[85%] ${m.role === 'user' ? 'flex-row-reverse' : 'flex-row'} gap-4`}>
                    <div className={`flex-shrink-0 w-10 h-10 rounded-xl flex items-center justify-center ${m.role === 'user' ? 'bg-indigo-600' : 'bg-white/10 border border-white/10'}`}>
                      {m.role === 'user' ? <User className="w-5 h-5 text-white" /> : <Bot className="w-5 h-5 text-[#C5A059]" />}
                    </div>
                    <div className={`p-6 rounded-[2rem] text-sm md:text-base leading-relaxed font-medium ${
                      m.role === 'user' 
                        ? 'bg-indigo-600 text-white rounded-tr-none shadow-xl shadow-indigo-900/20' 
                        : 'bg-white/5 text-gray-300 border border-white/5 rounded-tl-none'
                    }`}>
                      {m.content}
                    </div>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex flex-row gap-4 items-center bg-white/5 border border-white/5 p-6 rounded-[2rem] rounded-tl-none">
                    <Loader2 className="w-5 h-5 text-[#C5A059] animate-spin" />
                    <span className="text-gray-500 font-bold text-xs uppercase tracking-widest">TESLA-IA réfléchit...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-8 bg-black/40 border-t border-white/5">
              <form onSubmit={handleSubmit} className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Posez votre question ici..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 pr-16 text-white placeholder-gray-600 focus:outline-none focus:border-[#C5A059]/50 focus:bg-white/10 transition-all font-medium"
                />
                <button 
                  type="submit"
                  disabled={isLoading || !input.trim()}
                  className="absolute right-3 top-1/2 -translate-y-1/2 w-12 h-12 rounded-xl bg-[#C5A059] flex items-center justify-center text-black hover:brightness-110 active:scale-95 disabled:opacity-30 disabled:grayscale transition-all shadow-lg shadow-[#C5A059]/20"
                >
                  <Send className="w-5 h-5" />
                </button>
              </form>
              <p className="mt-4 text-center text-[10px] text-gray-700 font-bold uppercase tracking-[0.2em]">
                Technologie de pointe basée sur Gemini AI
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIChat;
