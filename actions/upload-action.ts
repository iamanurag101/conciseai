'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generatePdfSummaryFromOpenAI } from "@/lib/openai";
import { generatePdfSummaryFromGemini } from "@/lib/geminiai";
import { _success } from "zod/v4/core";

export async function generatePdfSummary(uploadResponse: [{
    serverData: {
        userId: string;
        file: {
            url: string;
            name: string;
        }
    }
}]
) {
    if (!uploadResponse) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    const { serverData: {
            userId,
            file: { url: pdfUrl,name: fileName },
        }
    } = uploadResponse[0];

    if (!pdfUrl) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }

    try {
        const pdfText = await fetchAndExtractPdfText(pdfUrl);
        console.log(pdfText);

        let summary;
        try {
            summary = await generatePdfSummaryFromOpenAI(pdfText);
            console.log({ summary });
        } catch (err) { 
            console.log(err);
            // Call Gemini
            if (err instanceof Error && err.message === 'RATE_LIMIT_EXCEEDED') {
                try {
                    summary = await generatePdfSummaryFromGemini(pdfText);
                } catch (geminiErr) {
                    console.error('Gemini API Failed after OpenAI quota exceeded', geminiErr);
                    throw new Error('Failed to generate summary with available AI Providers');
                }
            }
        }

        if (!summary) {
            return {
                success: false,
                message: 'Failed to generate summary',
                data: null,
            };
        }

        return {
            success: true,
            message: 'Summary generated successfully',
            data: {
                summary,
            }
        }
    } catch (err) {
        return {
            success: false,
            message: 'File upload failed',
            data: null,
        };
    }
};