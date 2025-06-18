'use server';

import { currentUser } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";

import { getDbConnection } from "@/lib/db";
import { _success } from "zod/v4/core";

export async function deleteSummaryAction({summaryId} : {summaryId : string}) {
    try {
        const user = await currentUser();
        const userId = user?.id;

        if (!userId) {
            throw new Error('User not found');
        }

        const sql = await getDbConnection();

        // Delete from DB
        const result = await sql`DELETE from pdf_summaries WHERE id=${summaryId} AND user_id=${userId} RETURNING id;`;

        if (result.length > 0) {
            // Revalidate Path
            revalidatePath('/dashboard');
            return { success: true };
        }
        return { success: false };
    } catch (error) {
        console.error('Error deleting summary', error);
        return { success: false };
    }
}