
import React, { useState, useRef } from 'react';
import { Lock, Unlock, ShieldCheck, FileUp, Zap, Key, FileText, FileSpreadsheet, FileEdit, UploadCloud, X } from 'lucide-react';
import { Document } from '../types';

interface ExpertVaultProps {
  onAddDocument: (doc: Document) => void;
  isAuthenticated: boolean;
  onAuthenticate: (password: string) => boolean;
}

const ExpertVault: React.FC<ExpertVaultProps> = ({ onAddDocument, isAuthenticated, onAuthenticate }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  // Form State
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    type: 'PDF',
    size: '',
    link: ''
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (onAuthenticate(password)) {
      setError(false);
    } else {
      setError(true);
      setTimeout(() => setError(false), 2000);
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleFileChange = (file: File) => {
    const extension = file.name.split('.').pop()?.toUpperCase() || 'PDF';
    let type = 'PDF';
    if (['XLS', 'XLSX'].includes(extension)) type = 'XLSX';
    if (['DOC', 'DOCX'].includes(extension)) type = 'DOCX';

    setSelectedFile(file);
    setFormData({
      ...formData,
      title: file.name.replace(/\.[^/.]+$/, ""), // Remove extension for title
      type: type,
      size: formatFileSize(file.size),
      link: URL.createObjectURL(file) // Create a local URL for "download" simulation
    });
  };

  const onFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const onDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const onDragLeave = () => {
    setIsDragging(false);
  };

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  const handleImport = (e: React.FormEvent) => {
    e.preventDefault();
    onAddDocument({ ...formData, link: formData.link || '#' });
    setIsSuccess(true);
    setFormData({ title: '', description: '', type: 'PDF', size: '', link: '' });
    setSelectedFile(null);
    setTimeout(() => setIsSuccess(false), 3000);
  };

  const removeSelectedFile = () => {
    setSelectedFile(null);
    setFormData({ ...formData, title: '', size: '', link: '' });
  };

  return (
    <section id="casier-expert" className="py-32 bg-[#050505] relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(197,160,89,0.05)_0%,transparent_70%)] opacity-50"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          <div className="mb-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2 mb-6">
              <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
              <span className="text-[10px] font-black text-[#C5A059] uppercase tracking-[0.2em]">Espace de Haute Sécurité</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter uppercase">
              Le Casier <span className="text-[#C5A059]">Expert</span>
            </h2>
            <p className="text-xl text-gray-500 font-medium max-w-2xl mx-auto italic">
              "L'importation de ressources critiques (PDF, Word, Excel) est réservée à l'administrateur."
            </p>
          </div>

          <div className="relative group">
            <div className={`transition-all duration-1000 p-1 bg-[#080808] border-2 rounded-[4rem] overflow-hidden shadow-2xl ${
              isAuthenticated ? 'border-[#C5A059]/50 shadow-[#C5A059]/10' : 'border-white/5'
            }`}>
              
              {!isAuthenticated ? (
                <div className="p-16 text-center flex flex-col items-center">
                  <div className="relative mb-12">
                    <div className="w-32 h-32 bg-white/5 rounded-full flex items-center justify-center border border-white/10 animate-pulse">
                      <Lock className="w-12 h-12 text-gray-700" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 bg-red-600 p-2 rounded-xl border-4 border-black">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-2xl font-black text-white mb-4 uppercase">Casier Verrouillé</h3>
                  <p className="text-gray-600 font-bold mb-10 text-sm uppercase tracking-widest">Entrez la clé maîtresse pour importer des fichiers</p>
                  
                  <form onSubmit={handleLogin} className="w-full max-w-sm flex flex-col gap-4">
                    <div className="relative">
                      <input 
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="••••••••"
                        className={`w-full bg-white/[0.03] border ${error ? 'border-red-500' : 'border-white/10'} rounded-2xl py-5 px-8 text-white text-center text-xl focus:outline-none focus:border-[#C5A059] transition-all tracking-[0.5em]`}
                      />
                      <Key className="absolute right-6 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-700" />
                    </div>
                    <button 
                      type="submit"
                      className="bg-white text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-all shadow-xl active:scale-95"
                    >
                      Déverrouiller l'Interface
                    </button>
                  </form>
                </div>
              ) : (
                <div className="p-16 animate-in fade-in zoom-in duration-500">
                  <div className="flex items-center justify-between mb-12 border-b border-white/5 pb-10">
                    <div className="flex items-center space-x-6">
                      <div className="w-20 h-20 bg-[#C5A059] rounded-3xl flex items-center justify-center shadow-lg shadow-[#C5A059]/20">
                        <Unlock className="w-10 h-10 text-black" />
                      </div>
                      <div>
                        <h3 className="text-3xl font-black text-white uppercase tracking-tighter">Accès Autorisé</h3>
                        <p className="text-[#C5A059] font-black text-[10px] uppercase tracking-[0.3em]">Module d'Importation TeslaTechn</p>
                      </div>
                    </div>
                  </div>

                  {/* Drag and Drop Area */}
                  {!selectedFile ? (
                    <div 
                      onDragOver={onDragOver}
                      onDragLeave={onDragLeave}
                      onDrop={onDrop}
                      onClick={() => fileInputRef.current?.click()}
                      className={`mb-12 border-2 border-dashed rounded-[3rem] p-16 text-center transition-all cursor-pointer ${
                        isDragging ? 'border-[#C5A059] bg-[#C5A059]/5 scale-95' : 'border-white/10 hover:border-white/20 bg-white/[0.02]'
                      }`}
                    >
                      <input 
                        type="file" 
                        ref={fileInputRef} 
                        onChange={onFileSelect} 
                        className="hidden" 
                        accept=".pdf,.docx,.xlsx,.doc,.xls"
                      />
                      <div className="bg-white/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <UploadCloud className="w-10 h-10 text-gray-500" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2 uppercase tracking-wide">Déposez votre fichier ici</h4>
                      <p className="text-gray-500 text-sm font-medium">Ou cliquez pour parcourir vos dossiers (PDF, Excel, Word)</p>
                    </div>
                  ) : (
                    <div className="mb-12 bg-[#C5A059]/10 border border-[#C5A059]/20 rounded-3xl p-8 flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="bg-[#C5A059] p-4 rounded-2xl">
                          {formData.type === 'XLSX' ? <FileSpreadsheet className="w-8 h-8 text-black" /> : 
                           formData.type === 'DOCX' ? <FileEdit className="w-8 h-8 text-black" /> : 
                           <FileText className="w-8 h-8 text-black" />}
                        </div>
                        <div>
                          <p className="text-white font-black uppercase tracking-tight text-lg">{selectedFile.name}</p>
                          <p className="text-[#C5A059] text-[10px] font-black uppercase tracking-widest">{formData.size} • {formData.type}</p>
                        </div>
                      </div>
                      <button 
                        onClick={removeSelectedFile}
                        className="text-gray-500 hover:text-white p-2 transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>
                  )}

                  <form onSubmit={handleImport} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Titre d'affichage</label>
                        <input 
                          required
                          type="text"
                          value={formData.title}
                          onChange={(e) => setFormData({...formData, title: e.target.value})}
                          placeholder="Titre de la ressource"
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Type de Fichier</label>
                        <select 
                          value={formData.type}
                          onChange={(e) => setFormData({...formData, type: e.target.value})}
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all appearance-none cursor-pointer font-bold"
                        >
                          <option value="PDF">Document PDF</option>
                          <option value="XLSX">Excel Spreadsheet</option>
                          <option value="DOCX">Word Document</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Description</label>
                        <textarea 
                          required
                          rows={4}
                          value={formData.description}
                          onChange={(e) => setFormData({...formData, description: e.target.value})}
                          placeholder="Expliquez brièvement l'intérêt du fichier..."
                          className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all resize-none"
                        />
                      </div>
                    </div>

                    <div className="md:col-span-2 mt-6">
                      <button 
                        type="submit"
                        disabled={isSuccess || !selectedFile}
                        className={`w-full py-6 rounded-3xl font-black text-sm uppercase tracking-widest flex items-center justify-center gap-4 transition-all shadow-xl ${
                          isSuccess 
                            ? 'bg-emerald-500 text-black' 
                            : 'bg-[#C5A059] text-black hover:brightness-110 active:scale-95 disabled:opacity-20 disabled:grayscale'
                        }`}
                      >
                        {isSuccess ? (
                          <>Fichier Importé avec Succès <ShieldCheck className="w-5 h-5" /></>
                        ) : (
                          <>Lancer l'Importation TeslaTechn <FileUp className="w-5 h-5" /></>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              )}
            </div>

            <div className="absolute top-8 left-8 w-4 h-4 rounded-full bg-white/10 shadow-inner"></div>
            <div className="absolute top-8 right-8 w-4 h-4 rounded-full bg-white/10 shadow-inner"></div>
            <div className="absolute bottom-8 left-8 w-4 h-4 rounded-full bg-white/10 shadow-inner"></div>
            <div className="absolute bottom-8 right-8 w-4 h-4 rounded-full bg-white/10 shadow-inner"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertVault;
