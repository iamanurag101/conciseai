import { currentUser } from "@clerk/nextjs/server";
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";

const f = createUploadthing();

export const ourFileRouter = {
    pdfUploader: f({
        pdf: {
            maxFileSize: '16MB',
            maxFileCount: 1
        }
    }).middleware(async ({ req }) => {
        // Get user info
        const user = await currentUser();
        console.log(user);

        if (!user) throw new UploadThingError('Unauthorized');

        return { userId: user.id };
    }).onUploadComplete(async ({ metadata,file }) => {
        console.log("Upload complete for user id:", metadata.userId);
        console.log("File URL", file.ufsUrl);
        return { userId: metadata.userId, file: file.ufsUrl };
    })
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;