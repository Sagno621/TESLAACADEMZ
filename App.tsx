
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Tutorials from './components/Tutorials';
import Courses from './components/Courses';
import DownloadableCourses from './components/DownloadableCourses';
import Software from './components/Software';
import AIChat from './components/AIChat';
import FAQ from './components/FAQ';
import Documents from './components/Documents';
import ExpertVault from './components/ExpertVault';
import Footer from './components/Footer';
import AdminPortal from './components/AdminPortal';
import { DOCUMENTS as INITIAL_DOCS } from './constants';
import { Document } from './types';

function App() {
  const [documents, setDocuments] = useState<Document[]>(INITIAL_DOCS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isExpertAuthenticated, setIsExpertAuthenticated] = useState(false);

  const handleAddDocument = (newDoc: Document) => {
    setDocuments(prev => [newDoc, ...prev]);
  };

  const handleExpertAuth = (password: string) => {
    if (password === 'JdSbMH62125@') {
      setIsExpertAuthenticated(true);
      return true;
    }
    return false;
  };

  return (
    <div className="min-h-screen bg-[#050505]">
      <Navbar />
      <main>
        {/* L'impact visuel immédiat */}
        <Hero />
        
        {/* Le savoir gratuit (Redirection YouTube) */}
        <Tutorials />
        
        {/* L'offre de formation d'élite avec Attestation */}
        <Courses />

        {/* NOUVELLE SECTION: Cours à télécharger */}
        <DownloadableCourses />
        
        {/* La boîte à outils technologique */}
        <Software />
        
        {/* L'intelligence artificielle en action - Question des visiteurs */}
        <AIChat />
        
        {/* Répondre aux interrogations */}
        <FAQ />
        
        {/* Ressources téléchargeables (VISITEURS) */}
        <Documents documents={documents} />

        {/* LE CASIER EXPERT (ADMINISTRATION PRIVÉE) */}
        <ExpertVault 
          onAddDocument={handleAddDocument} 
          isAuthenticated={isExpertAuthenticated}
          onAuthenticate={handleExpertAuth}
        />
      </main>
      
      <Footer onAdminClick={() => setIsAdminOpen(true)} />

      {/* Portail d'administration rapide */}
      {isAdminOpen && (
        <AdminPortal 
          onClose={() => setIsAdminOpen(false)} 
          onAddDocument={handleAddDocument}
        />
      )}
    </div>
  );
}

export default App;
