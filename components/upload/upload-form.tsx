'use client';

import { z } from "zod";

import UploadFormInput from "@/components/upload/upload-form-input"
import { useUploadThing } from "@/utils/uploadthing";
import { toast } from "sonner";

const schema = z.object({
    file: z.instanceof(File, { message: 'Invalid File Type' })
    .refine((file) => file.size <= 15*1024*1024,
        'File size must be less than 15MB',
    )
    .refine(
        (file) => file.type.startsWith('application/pdf'),
        'File must be a PDF'
    ),
})

export default function UploadForm () {

    const { startUpload, routeConfig } = useUploadThing('pdfUploader', {
        onClientUploadComplete: () => {
        console.log("uploaded successfully!");
        },
        onUploadError: (err) => {
        console.error("error occurred while uploading", err);
        toast('‼️ Error occurred while uploading', {
            description: err.message
        })
        },
        onUploadBegin: ({ file }) => {
        console.log("upload has begun for", file);
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Submitted');
        const formData = new FormData(e.currentTarget);
        const file = formData.get('file') as File;

        // Validating Fields
        const validatedFields = schema.safeParse({ file });

        console.log(validatedFields);

        if (!validatedFields.success) {
            toast.error('❌ Something went wrong', {
                description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid File'
            })
            return;
        }

        toast('📄 Uploading your PDF...', {
            description: 'We are uploading your PDF! ✨'
        })

        // Upload file 
        const resp = await startUpload([file]);
        if (!resp) {
            toast.error('Something went wrong', {
                description: 'Please use a different file'
            })
            return;
        }

        toast('📄 Processing PDF', {
            description: 'Hang tight! Our AI is reading through your document! ✨'
        })
    }
     return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput onSubmit={handleSubmit}/>
        </div>
    )
}