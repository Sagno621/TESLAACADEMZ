
import { GoogleGenAI, Type } from "@google/genai";
import { NewsItem } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const askTeslaIA = async (question: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: question,
      config: {
        systemInstruction: `Tu es TESLA-IA, l'assistant intelligent de TESLATECHN Academy en Guinée. 
        Ton rôle est de répondre avec expertise, courtoisie et précision aux questions des visiteurs. 
        Contexte de l'académie :
        - Spécialités : Audit, Finance, Comptabilité, Informatique de gestion, Réseaux, Bureautique (Excel, Sage, Odoo, Dolibarr).
        - Localisation : Guinée (Conakry).
        - Valeur ajoutée : Expertise locale avec standards internationaux.
        - Certifications : Délivrance d'attestations de réussite et Attestations Or pour les niveaux Maîtrise.
        - Public : Étudiants, professionnels, entreprises.
        Réponds toujours en français, de manière concise et professionnelle. Si tu ne connais pas une info spécifique sur les prix ou horaires exacts, invite-les à contacter le +224 621 25 43 48 ou par mail à jsphsagno@gmail.com.`,
      },
    });

    return response.text || "Je n'ai pas pu générer de réponse. Veuillez réessayer ou contacter notre support.";
  } catch (error) {
    console.error("Error with Tesla-IA:", error);
    return "Désolé, je rencontre une petite difficulté technique. Vous pouvez nous joindre directement au +224 621 25 43 48.";
  }
};

export const fetchLatestNews = async (): Promise<NewsItem[]> => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: "Génère 3 actualités prestigieuses et récentes (2024/2025) pour l'académie TESLATECHN. Le domaine est la haute finance, l'audit international et l'informatique de gestion. Chaque actualité doit avoir un titre percutant, une date, une catégorie (Comptabilité, Informatique, Finance, ou Audit) et un résumé qui souligne l'excellence technologique. Langue : Français.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              date: { type: Type.STRING },
              category: { type: Type.STRING },
              summary: { type: Type.STRING },
              imageKeywords: { type: Type.STRING }
            },
            required: ["title", "date", "category", "summary", "imageKeywords"]
          }
        }
      }
    });

    const newsData = JSON.parse(response.text || "[]");
    
    return newsData.map((item: any, index: number) => ({
      ...item,
      image: `https://picsum.photos/seed/teslatechn${index + Math.random()}/640/360`
    }));
  } catch (error) {
    console.error("Error fetching AI news:", error);
    return [
      {
        title: "TESLATECHN : Partenariat Global 2025",
        date: "Aujourd'hui",
        category: "Finance",
        summary: "L'académie annonce un accord stratégique avec les Big Four pour certifier ses alumni au niveau mondial.",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=640&auto=format&fit=crop"
      },
      {
        title: "Intelligence Artificielle & Audit",
        date: "Hier",
        category: "Audit",
        summary: "Nouvelle masterclass exclusive sur l'automatisation des flux d'audit via nos nouveaux algorithmes propriétaires.",
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=640&auto=format&fit=crop"
      },
      {
        title: "Le futur de la Gestion en Cloud",
        date: "Cette semaine",
        category: "Informatique",
        summary: "TESLATECHN déploie son propre environnement ERP cloud pour les travaux pratiques des étudiants.",
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=640&auto=format&fit=crop"
      }
    ];
  }
};
