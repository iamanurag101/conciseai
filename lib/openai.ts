import OpenAI from "openai";
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

export async function generatePdfSummaryFromOpenAI(pdfText: string) {
    try {
        const response = await client.chat.completions.create({
            model: "gpt-4.1",
            messages: [
                {
                    role: "system",
                    content: SUMMARY_SYSTEM_PROMPT
                },
                {
                    role: "user",
                    content: `Transform this document into an engaging, 
                    easy-to-read summary with contextually relevant emojis and
                    proper markdown formatting:\n\n${pdfText}`,
                },
            ],
            temperature: 0.7,
            max_tokens: 2500,
        });
        return response.choices[0].message.content;
    } catch (err: any) {
        if (err?.status === 429) {
            throw new Error('RATE_LIMIT_EXCEEDED');
        }
        throw err;
    }
}
