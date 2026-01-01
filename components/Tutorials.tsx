
import React from 'react';
import { PlayCircle, ExternalLink, Youtube } from 'lucide-react';
import { TUTORIALS } from '../constants';

const Tutorials: React.FC = () => {
  const YOUTUBE_URL = "http://www.youtube.com/@JosephSagno-s7f";

  return (
    <section id="tutoriels" className="py-32 bg-[#080808] relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-red-600 p-1.5 rounded-lg">
                <Youtube className="w-5 h-5 text-white" />
              </div>
              <span className="text-red-500 font-black uppercase tracking-[0.3em] text-xs">Contenu Vidéo</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Masterclass <span className="text-[#C5A059]">Gratuites</span></h2>
            <p className="text-gray-400 text-lg font-medium leading-relaxed">
              Accédez à notre bibliothèque de savoir sur YouTube. Des centaines de vidéos pour booster vos compétences.
            </p>
          </div>
          <a 
            href={YOUTUBE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-widest transition-all flex items-center group"
          >
            S'abonner à la chaîne <ExternalLink className="ml-3 w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {TUTORIALS.map((tutorial, index) => (
            <a 
              key={index} 
              href={YOUTUBE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-black border border-white/5 rounded-[2.5rem] overflow-hidden hover:border-[#C5A059]/30 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(197,160,89,0.1)]"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-60" 
                  src={tutorial.image} 
                  alt={tutorial.title} 
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center group-hover:bg-[#C5A059] group-hover:scale-110 transition-all duration-500">
                    <PlayCircle className="text-white w-10 h-10 group-hover:text-black" />
                  </div>
                </div>
              </div>
              <div className="p-10">
                <h3 className="text-2xl font-black mb-4 text-white group-hover:text-[#C5A059] transition-colors">{tutorial.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 font-medium line-clamp-2">{tutorial.description}</p>
                <div className="flex items-center text-[#C5A059] font-black text-xs uppercase tracking-widest">
                  Regarder sur YouTube <ExternalLink className="ml-2 w-3 h-3" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tutorials;
