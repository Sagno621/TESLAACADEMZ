
import React, { useState } from 'react';
import { 
  FileText, FileSpreadsheet, FileEdit, Download, 
  Search, FolderOpen, ChevronRight, FileCheck 
} from 'lucide-react';

interface CourseFile {
  id: number;
  label: string;
  category: 'Audit & Contrôle' | 'Comptabilité & Finance' | 'Informatique & Réseaux' | 'Bureautique Pro';
  type: 'PDF' | 'XLSX' | 'DOCX';
  size: string;
  path: string;
}

const DownloadableCourses: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('Tous');

  const courseFiles: CourseFile[] = [
    // Section Audit (Basé sur le doc)
    { id: 1, label: "Fondamentaux de l'Audit Interne", category: 'Audit & Contrôle', type: 'PDF', size: '2.8 MB', path: '#' },
    { id: 2, label: "Canevas de Plan de Mission", category: 'Audit & Contrôle', type: 'DOCX', size: '1.2 MB', path: '#' },
    { id: 3, label: "Questionnaire de Contrôle Interne", category: 'Audit & Contrôle', type: 'XLSX', size: '850 KB', path: '#' },
    
    // Section Comptabilité
    { id: 4, label: "Comptabilité Générale : Système OHADA", category: 'Comptabilité & Finance', type: 'PDF', size: '4.5 MB', path: '#' },
    { id: 5, label: "Modèle de Bilan et Compte de Résultat", category: 'Comptabilité & Finance', type: 'XLSX', size: '2.1 MB', path: '#' },
    
    // Section Informatique
    { id: 6, label: "Architecture des Réseaux Informatiques", category: 'Informatique & Réseaux', type: 'PDF', size: '5.2 MB', path: '#' },
    { id: 7, label: "Guide de Configuration Routeurs Cisco", category: 'Informatique & Réseaux', type: 'PDF', size: '3.1 MB', path: '#' },
    
    // Section Bureautique
    { id: 8, label: "Maîtrise Excel : Fonctions Avancées", category: 'Bureautique Pro', type: 'XLSX', size: '1.9 MB', path: '#' },
    { id: 9, label: "Standard de Rédaction Administrative", category: 'Bureautique Pro', type: 'DOCX', size: '1.4 MB', path: '#' }
  ];

  const categories = ['Tous', 'Audit & Contrôle', 'Comptabilité & Finance', 'Informatique & Réseaux', 'Bureautique Pro'];

  const filteredFiles = activeCategory === 'Tous' 
    ? courseFiles 
    : courseFiles.filter(f => f.category === activeCategory);

  const getFileStyle = (type: string) => {
    switch(type) {
      case 'PDF': return { icon: <FileText className="text-rose-500" />, bg: 'bg-rose-50' };
      case 'XLSX': return { icon: <FileSpreadsheet className="text-emerald-500" />, bg: 'bg-emerald-50' };
      case 'DOCX': return { icon: <FileEdit className="text-blue-500" />, bg: 'bg-blue-50' };
      default: return { icon: <FileCheck className="text-gray-500" />, bg: 'bg-gray-50' };
    }
  };

  return (
    <section id="cours-telechargement" className="py-24 bg-white border-y border-gray-100">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-2 mb-6">
            <FolderOpen className="w-4 h-4 text-blue-600" />
            <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest">Supports de cours officiels</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 uppercase tracking-tighter">
            Cours à <span className="text-blue-600">télécharger</span>
          </h2>
          <p className="text-lg text-slate-500 font-medium max-w-2xl mx-auto">
            Accédez à vos cours en version électronique. Téléchargez les supports officiels, guides et matrices Excel de TeslaTechn Academy.
          </p>
        </div>

        {/* Navigation des catégories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-blue-600 text-white shadow-xl shadow-blue-200 scale-105'
                  : 'bg-gray-50 text-slate-400 border border-gray-100 hover:border-blue-200 hover:text-blue-600'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grille des fichiers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredFiles.map((file) => {
            const style = getFileStyle(file.type);
            return (
              <div 
                key={file.id} 
                className="group bg-white border border-gray-100 rounded-3xl p-6 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/5 hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`${style.bg} p-4 rounded-2xl transition-colors`}>
                    {style.icon}
                  </div>
                  <div className="text-right">
                    <span className="block text-[8px] font-black text-slate-300 uppercase tracking-widest mb-1">Poids</span>
                    <span className="text-[10px] font-bold text-slate-500">{file.size}</span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-800 mb-2 group-hover:text-blue-600 transition-colors">
                  {file.label}
                </h3>
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">
                  {file.category}
                </p>

                <div className="flex items-center justify-between pt-5 border-t border-gray-50">
                  <span className="inline-flex items-center text-[10px] font-bold text-slate-400 bg-gray-50 px-2 py-1 rounded">
                    Format {file.type}
                  </span>
                  <a 
                    href={file.path} 
                    className="bg-slate-900 hover:bg-blue-600 text-white flex items-center space-x-2 px-5 py-3 rounded-xl transition-all duration-300 active:scale-95 shadow-lg hover:shadow-blue-200"
                    download
                  >
                    <span className="text-[10px] font-black uppercase tracking-widest">Télécharger</span>
                    <Download className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Note de pied de section */}
        <div className="mt-16 flex justify-center">
          <div className="bg-slate-900 rounded-[2rem] p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between w-full max-w-5xl shadow-2xl relative overflow-hidden">
            <div className="relative z-10 text-center md:text-left mb-8 md:mb-0">
              <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">Ressource manquante ?</h3>
              <p className="text-slate-400 text-sm font-medium">Contactez votre formateur ou l'administration pour obtenir des supports spécifiques.</p>
            </div>
            <a href="#contact" className="relative z-10 bg-white text-slate-900 px-8 py-4 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-50 transition-all flex items-center group">
              Demander un fichier <ChevronRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            {/* Décoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full -mr-32 -mt-32 blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadableCourses;
