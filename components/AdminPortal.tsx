
import React, { useState } from 'react';
import { X, Lock, Plus, FileText, CheckCircle2, ShieldAlert, UploadCloud } from 'lucide-react';
import { Document } from '../types';

interface AdminPortalProps {
  onClose: () => void;
  onAddDocument: (doc: Document) => void;
}

const AdminPortal: React.FC<AdminPortalProps> = ({ onClose, onAddDocument }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  // Form state
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [type, setType] = useState('PDF');
  const [size, setSize] = useState('');
  const [link, setLink] = useState('');
  const [success, setSuccess] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === 'JdSbMH62125@') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Clé de sécurité invalide.');
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newDoc: Document = {
      title,
      description,
      type,
      size,
      link: link || '#'
    };
    onAddDocument(newDoc);
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      setTitle('');
      setDescription('');
      setSize('');
      setLink('');
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-md">
      <div className="w-full max-w-2xl bg-[#080808] border border-white/10 rounded-[3rem] overflow-hidden shadow-2xl relative">
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 text-gray-500 hover:text-white transition-colors p-2 hover:bg-white/5 rounded-full"
        >
          <X className="w-6 h-6" />
        </button>

        {!isAuthenticated ? (
          <div className="p-16 text-center">
            <div className="w-20 h-20 bg-[#C5A059]/10 rounded-full flex items-center justify-center mx-auto mb-10 border border-[#C5A059]/20">
              <Lock className="w-8 h-8 text-[#C5A059]" />
            </div>
            <h2 className="text-3xl font-black text-white mb-4 uppercase tracking-tighter">Portail Administrateur</h2>
            <p className="text-gray-500 font-medium mb-12">Seul l'expert TESLATECHN peut intégrer de nouveaux fichiers.</p>
            
            <form onSubmit={handleLogin} className="max-w-xs mx-auto">
              <input 
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Entrez votre clé de sécurité..."
                className="w-full bg-white/5 border border-white/10 rounded-2xl py-5 px-8 text-white text-center focus:outline-none focus:border-[#C5A059] transition-all font-bold tracking-widest mb-4"
              />
              {error && <p className="text-rose-500 text-xs font-bold uppercase mb-4 flex items-center justify-center gap-2"><ShieldAlert className="w-4 h-4" /> {error}</p>}
              <button 
                type="submit"
                className="w-full bg-[#C5A059] text-black py-5 rounded-2xl font-black text-xs uppercase tracking-widest hover:brightness-110 active:scale-95 transition-all shadow-xl shadow-[#C5A059]/10"
              >
                Vérifier l'Identité
              </button>
            </form>
          </div>
        ) : (
          <div className="p-16">
            <div className="flex items-center space-x-4 mb-12">
              <div className="bg-[#C5A059] p-3 rounded-2xl">
                <UploadCloud className="w-8 h-8 text-black" />
              </div>
              <div>
                <h2 className="text-2xl font-black text-white uppercase tracking-tight">Intégration de Fichiers</h2>
                <p className="text-xs text-[#C5A059] font-black uppercase tracking-widest">Connecté en tant qu'Expert</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Titre du document</label>
                  <input 
                    required
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="ex: Modèle Analyse de Risques"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Format / Type</label>
                  <select 
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all font-bold appearance-none cursor-pointer"
                  >
                    <option value="PDF">Document PDF</option>
                    <option value="XLSX">Excel Spreadsheet</option>
                    <option value="DOCX">Word Document</option>
                    <option value="ZIP">Archive ZIP</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Description courte</label>
                <textarea 
                  required
                  rows={2}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Expliquez l'utilité de ce fichier..."
                  className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all font-medium resize-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Poids du fichier</label>
                  <input 
                    required
                    type="text"
                    value={size}
                    onChange={(e) => setSize(e.target.value)}
                    placeholder="ex: 2.4 MB"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all font-medium"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-black text-gray-500 uppercase tracking-widest mb-3">Lien de téléchargement</label>
                  <input 
                    type="text"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    placeholder="Lien vers le cloud ou serveur"
                    className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 text-white focus:outline-none focus:border-[#C5A059] transition-all font-medium"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={success}
                className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-xl flex items-center justify-center gap-3 ${
                  success 
                    ? 'bg-green-500 text-black' 
                    : 'bg-[#C5A059] text-black hover:brightness-110 active:scale-95 shadow-[#C5A059]/10'
                }`}
              >
                {success ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" /> Fichier Intégré avec Succès
                  </>
                ) : (
                  <>
                    <Plus className="w-5 h-5" /> Publier dans l'Espace Public
                  </>
                )}
              </button>
            </form>
            <p className="mt-8 text-center text-[10px] text-gray-600 font-bold uppercase tracking-[0.2em]">
              Seul vous avez le pouvoir de modifier cette bibliothèque.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminPortal;
