import { Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link";

import { Button } from "@/components/ui/button";
import BgGradient from "./bg-gradient";

export default function UpgradeRequired() {
    return (
        <div className="relative min-h-[50vh]">
            <BgGradient />
            <div className="container px-8 py-16">
                <div className="flex flex-col items-center justify-center gap-8 text-center max-w-2xl mx-auto">
                <div className="flex items-center gap-2 text-orange-500">
                    <Sparkles className="w-6 h-6" />
                    <span className="text-sm font-medium uppercase tracking-wider">
                    Premium Feature
                    </span>
                </div>

                <h1 className="text-4xl font-bold tracking-tight bg-gradient-to-r from-gray-900 
                to-gray-600 bg-clip-text text-transparent">
                Subscription Required
                </h1>

                <p className="text-lg leading-8 text-gray-600 border-2 border-orange-200 
                bg-white/50 backdrop-blur-xs rounded-lg p-6 border-dashed max-w-xl">
                You need to upgrade to the Basic Plan or the Pro Plan to access this feature 💖
                </p>


                <Button
                asChild
                className="bg-linear-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white"
                >
                    <Link href="/#pricing" className="flex gap-2 items-center">
                        View Pricing Plans
                        <ArrowRight className="w-4 h-4" />
                    </Link>
                </Button>

                </div>
            </div>
        </div>

    )
}