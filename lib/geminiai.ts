import { GoogleGenAI } from "@google/genai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

const genAI = new GoogleGenAI({apiKey: process.env.GEMINI_API_KEY || ''});

export const generatePdfSummaryFromGemini = async (pdfText: string) => {
    try {
        const response = await genAI.models.generateContent({
            model: "gemini-2.0-flash-001",
            contents: [
                {
                    role: "user",
                    parts: [
                        { text: SUMMARY_SYSTEM_PROMPT },
                        {
                            text: `Transform this document into an engaging, 
                            easy-to-read summary with contextually relevant emojis and
                            proper markdown formatting:\n\n${pdfText}`
                        }
                    ],
                }
            ],
            config : {
                maxOutputTokens: 1500,
                temperature: 0.7
            }
        })
        const output = await response.text;

        if (!output) {
            throw new Error('Empty Response from Gemini API');
        }

        return output;
        } catch (error: any) {

        console.error("Gemini API Error:", error);
        throw error;
     }
}