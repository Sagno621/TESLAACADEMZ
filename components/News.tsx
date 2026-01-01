
import React, { useState, useEffect } from 'react';
import { RefreshCw, Calendar, Tag, ChevronRight, Loader2, Zap } from 'lucide-react';
import { fetchLatestNews } from '../services/geminiService';
import { NewsItem } from '../types';

const News: React.FC = () => {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  const loadNews = async () => {
    setLoading(true);
    const data = await fetchLatestNews();
    setNews(data);
    setLoading(false);
  };

  useEffect(() => {
    loadNews();
  }, []);

  return (
    <section id="actualites" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center mb-20 gap-8">
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-2 text-indigo-400 font-bold uppercase tracking-widest text-xs mb-4">
              <Zap className="w-4 h-4 fill-indigo-400" />
              <span>Intelligence Artificielle en Direct</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white">Focus <span className="text-indigo-500">Industry</span></h2>
          </div>
          <button 
            onClick={loadNews}
            disabled={loading}
            className="group flex items-center space-x-3 bg-white hover:bg-indigo-50 text-indigo-900 px-8 py-4 rounded-2xl font-black transition-all shadow-2xl active:scale-95 disabled:opacity-50"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <RefreshCw className="w-5 h-5 group-hover:rotate-180 transition-transform duration-500" />}
            <span>Actualiser par IA</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {loading ? (
            Array(3).fill(0).map((_, i) => (
              <div key={i} className="animate-pulse bg-white/5 rounded-[2.5rem] h-[500px] border border-white/5"></div>
            ))
          ) : (
            news.map((item, index) => (
              <article key={index} className="flex flex-col bg-white/[0.02] border border-white/10 rounded-[2.5rem] overflow-hidden hover:bg-white/[0.05] hover:border-indigo-500/30 transition-all duration-500 group">
                <div className="relative h-64 overflow-hidden">
                  <img src={item.image} alt={item.title} className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105" />
                  <div className="absolute bottom-6 left-6">
                    <span className="bg-indigo-600/90 backdrop-blur-md text-white text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg">
                      {item.category}
                    </span>
                  </div>
                </div>
                <div className="p-10 flex flex-col flex-grow">
                  <div className="flex items-center text-gray-500 text-xs font-bold mb-6">
                    <Calendar className="w-4 h-4 mr-2" /> {item.date}
                  </div>
                  <h3 className="text-2xl font-bold mb-6 text-white group-hover:text-indigo-400 transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-base leading-relaxed mb-10 flex-grow font-medium">
                    {item.summary}
                  </p>
                  <div className="flex items-center justify-between pt-8 border-t border-white/5">
                    <span className="text-sm font-black text-indigo-400 uppercase tracking-tighter cursor-pointer hover:underline">Lire la suite</span>
                    <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-indigo-600 transition-colors">
                      <ChevronRight className="w-5 h-5 text-white" />
                    </div>
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default News;
