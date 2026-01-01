
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQ_ITEMS } from '../constants';

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-32 bg-[#080808]">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-4xl font-black text-white text-center mb-20 uppercase tracking-tighter">Questions <span className="text-[#C5A059]">Fréquentes</span></h2>
        
        <div className="space-y-6">
          {FAQ_ITEMS.map((item, i) => (
            <div 
              key={i} 
              className={`rounded-3xl border transition-all duration-300 ${openIndex === i ? 'bg-white/[0.05] border-[#C5A059]/30' : 'bg-transparent border-white/10 hover:border-white/20'}`}
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-10 py-8 flex justify-between items-center text-left"
              >
                <span className="text-xl font-bold text-white">{item.question}</span>
                {openIndex === i ? <Minus className="text-[#C5A059]" /> : <Plus className="text-[#C5A059]" />}
              </button>
              {openIndex === i && (
                <div className="px-10 pb-8 animate-in fade-in slide-in-from-top-2 duration-300">
                  <p className="text-gray-400 leading-relaxed font-medium">
                    {item.answer.replace(/certificat/g, 'attestation').replace(/certification/g, 'attestation')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
