import { notFound } from "next/navigation";
import { FileText } from "lucide-react";

import BgGradient from "@/components/common/bg-gradient";
import SummaryHeader from "@/components/summaries/summary-header";
import SourceInfo from "@/components/summaries/source-info";
import SummaryViewer from "@/components/summaries/summary-viewer";
import { getSummaryById } from "@/lib/summaries";

export default async function SummaryPage(props: {params: Promise<{id: string}>}) {

    const params = await props.params;
    const id = params.id;

    const summary = await getSummaryById(id);

    if (!summary) {
        notFound();
    }

    const { title, summary_text, original_file_url, file_name, word_count, created_at } = summary;

    const reading_time = Math.ceil((word_count || 0)/200);

    return (
        <div className="relative isolate min-h-screen bg-linear-to-b from-orange-50/40 to-white">
            <BgGradient/>
            <div className="container mx-auto flex flex-col gap-4">
                <div className="px-4 sm:px-6 lg:px-8 py-6 sm:py12 lg:py-24">
                    <div className="flex flex-col">
                        <SummaryHeader title={title} createdAt={created_at} readingTime={reading_time}/>
                    </div>
                    {file_name && <SourceInfo file_name={file_name} original_file_url={original_file_url} title={title} summary_text={summary_text} created_at={created_at}/>}
                    <div className="relative mt-4 sm:mt-6 lg:mt-8">
                            <div className="relative p-4 sm:p-6 lg:p-8 bg-white/80 
                            backdrop-blur-md rounded-2xl sm:rounded-3xl shadow-xl border 
                            border-rose-100 transition-all duration-300 hover:shadow-2xl
                            hover:bg-white/90 max-w-4xl mx-auto">   
                                <div className="absolute inset-0 bg-linear-to-br from-rose-50/50 
                                via-orange-50 to-transparent opacity-50 rounded-2xl sm:rounded-3xl" />                               
                                <div className="absolute top-2 sm:top-4 right-2 sm:right-4 flex 
                                items-center gap-1.5 sm:gap-2 text-xs sm:text-sm text-muted-foreground 
                                bg-white/90 px-2 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-xs">
                                <FileText className="h-3 w-3 sm:h-4 sm:w-4 text-orange-400" />
                                {summary.word_count?.toLocaleString()}{' '} words
                                </div>
                                
                                <div className="relative mt-8 sm:mt-6 flex justify-center">
                                    <SummaryViewer summary={summary.summary_text} />
                                </div>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    )
}