import { FileText } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function EmptySummaryState() {
    return (
        <div className="py-12 text-center">
            <div className="flex flex-col items-center gap-4">
                <FileText className="w-16 h-16 text-gray-700"/>
                <h3 className="text-xl font-semibold text-gray-600">No summaries yet</h3>
                <p className="text-gray-500 w-max-md">Upload your first PDF to get started with AI-Powered summaries.</p>
                <Link href='/upload'>
                    <Button variant={'link'} className="mt-4 text-white bg-linear-to-r from-orange-500 
                    to-orange-700 hover:from-orange-600 hover:to-orange-800 hover:no-underline"> 
                        Create your first summary
                    </Button>
                </Link>
            </div>
        </div>
    )
}