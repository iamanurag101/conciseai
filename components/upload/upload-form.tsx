'use client';

import { z } from "zod";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { toast } from "sonner";
import UploadFormInput from "@/components/upload/upload-form-input"
import { LoadingSkeleton } from "./loading-skeleton";
import { generatePdfSummary, generatePdfText, storePdfSummaryAction } from "@/actions/upload-action";
import { useUploadThing } from "@/utils/uploadthing";
import { formatFileNameAsTitle } from "@/utils/format-utils";

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
    const formRef = useRef<HTMLFormElement>(null);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

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
        onUploadBegin: (fileName : string) => {
        console.log("upload has begun for", fileName);
        },
    });

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try {
            setIsLoading(true);
            const formData = new FormData(e.currentTarget);
            const file = formData.get('file') as File;
    
            // Validating Fields
            const validatedFields = schema.safeParse({ file });
    
            console.log(validatedFields);
    
            if (!validatedFields.success) {
                toast.error('❌ Something went wrong', {
                    description: validatedFields.error.flatten().fieldErrors.file?.[0] ?? 'Invalid File'
                })
                setIsLoading(false);
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
                setIsLoading(false);
                return;
            }
    
            toast('📄 Processing PDF...', {
                description: 'Hang tight! Our AI is reading through your document! ✨'
            })
    
            
            let storedResult: any;
            const formattedFileName = formatFileNameAsTitle(file.name);
            
            // Parse the PDF using LangChain
            const result = await generatePdfText({
                fileUrl: resp[0].serverData.file.url, 
            })
            
            toast('📄 Generating PDF Summary', {
                description: 'Hang tight! Our AI is generating your PDF Summary! ✨'
            })
            
            // Call AI Service
            const summaryResult = await generatePdfSummary({
                pdfText: result?.data?.pdfText ?? '',
                fileName: formattedFileName
            });

            toast('📄 Saving PDF Summary', {
                description: 'Hang tight! Your summary is being saved! ✨'
            })

            const { data = null, message = null } = summaryResult || {};

            if (data?.summary) {
                storedResult = await storePdfSummaryAction({
                    summary: data.summary,
                    fileUrl: resp[0].serverData.file.url,
                    title: formattedFileName,
                    fileName: file.name
                })
            toast('✨ Summary Generated', {
                description: 'Your PDF has been successfully summarized and saved! ✨'
            });
            formRef.current?.reset();
            router.push(`/summaries/${storedResult.data.id}`);
            }
        } catch (err) {
            setIsLoading(false);
            console.error('Error occurred', err);
            formRef.current?.reset();
        } finally {
            setIsLoading(false);
        }
    }
     return (
        <div className="flex flex-col gap-8 w-full max-w-2xl mx-auto">
            <UploadFormInput isLoading={isLoading} ref={formRef} onSubmit={handleSubmit}/>
            {isLoading && (
                <>              
                <div className="relative">
                <div
                    className="absolute inset-0 flex items-center"
                    aria-hidden="true"
                >
                    <div className="w-full border-t border-gray-200 dark:border-gray-800" />
                </div>
                <div className="relative flex justify-center">
                    <span className="bg-background px-3 text-muted-foreground text-sm">
                    Processing
                    </span>
                </div>
                </div>
                <LoadingSkeleton />
                </>
            )}
        </div>
    )
}