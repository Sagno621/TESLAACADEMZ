
import React from 'react';
import { Download, FileText, ChevronRight, FileSpreadsheet, FileArchive, FileCode } from 'lucide-react';
import { Document } from '../types';

interface DocumentsProps {
  documents: Document[];
}

const Documents: React.FC<DocumentsProps> = ({ documents }) => {
  const getIcon = (type: string) => {
    const t = type.toLowerCase();
    if (t.includes('xls') || t.includes('spreadsheet')) return <FileSpreadsheet className="text-emerald-500 w-8 h-8 group-hover:text-white transition-colors" />;
    if (t.includes('zip') || t.includes('rar')) return <FileArchive className="text-amber-500 w-8 h-8 group-hover:text-white transition-colors" />;
    if (t.includes('pdf')) return <FileText className="text-rose-500 w-8 h-8 group-hover:text-white transition-colors" />;
    return <FileCode className="text-indigo-600 w-8 h-8 group-hover:text-white transition-colors" />;
  };

  return (
    <section id="documents" className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center space-x-2 bg-gray-100 border border-gray-200 rounded-full px-4 py-2 mb-6">
            <span className="text-[10px] font-black text-gray-500 uppercase tracking-[0.2em]">Espace Téléchargement</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 uppercase tracking-tighter">
            Ressources <span className="text-[#C5A059]">Utiles</span>
          </h2>
          <p className="text-gray-600 text-lg font-medium leading-relaxed">
            Accédez aux documents officiels, modèles Excel et guides techniques intégrés par nos experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documents.map((doc, index) => (
            <div key={index} className="flex items-start p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 hover:border-[#C5A059]/30 hover:bg-white hover:shadow-2xl hover:shadow-gray-200 transition-all duration-500 group">
              <div className="bg-gray-100 p-4 rounded-2xl mr-6 group-hover:bg-[#C5A059] group-hover:rotate-6 transition-all duration-500">
                {getIcon(doc.type)}
              </div>
              <div className="flex-grow">
                <h3 className="text-xl font-black mb-2 text-gray-900 group-hover:text-[#C5A059] transition-colors">{doc.title}</h3>
                <p className="text-sm text-gray-500 mb-6 leading-relaxed font-medium line-clamp-2">{doc.description}</p>
                <div className="flex justify-between items-center pt-4 border-t border-gray-100">
                  <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">{doc.type} • {doc.size}</span>
                  <a 
                    href={doc.link} 
                    className="flex items-center text-[#C5A059] font-black text-xs uppercase tracking-widest hover:translate-x-1 transition-transform"
                    download
                  >
                    Télécharger <Download className="ml-2 w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-24 p-12 bg-black rounded-[3rem] text-white flex flex-col md:flex-row items-center justify-between relative overflow-hidden shadow-2xl">
          <div className="relative z-10 text-center md:text-left">
            <h3 className="text-3xl font-black mb-3">Un besoin spécifique ?</h3>
            <p className="text-gray-400 font-medium">Nos consultants peuvent concevoir des outils sur-mesure pour votre direction financière.</p>
          </div>
          <button className="mt-10 md:mt-0 relative z-10 bg-[#C5A059] text-black px-10 py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 transition-all shadow-xl shadow-[#C5A059]/20 flex items-center">
            Consulter un expert <ChevronRight className="ml-2 w-5 h-5" />
          </button>
          {/* Background Decor */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C5A059]/10 rounded-full -mr-32 -mt-32 filter blur-3xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Documents;
