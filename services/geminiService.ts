import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Generates a creative product description based on a title and category.
 * Useful for populating empty product cards later.
 */
export const generateProductDescription = async (title: string, category: string): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: `Write a compelling, short marketing description (max 2 sentences) in Italian for a product titled "${title}" in the category "${category}".`,
    });
    return response.text || "Descrizione non disponibile.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Errore nella generazione della descrizione.";
  }
};