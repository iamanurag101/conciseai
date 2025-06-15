import Link from "next/link";
import { cn } from "@/lib/utils";
import { ArrowRight, CheckIcon } from "lucide-react";

type Plan = {
    name: string;
    price: number;
    description: string;
    items: string[];
    id: string;
    paymentLink: string;
    priceId: string;
}

const plans: Plan[] = [
    {
        name: 'Basic',
        price: 9,
        description: 'Perfect for occassional use',
        items: [
            '5 PDF summaries per month',
            'Standard Processing Speed',
            'Email Support',
        ],
        id: 'basic',
        paymentLink: '',
        priceId: ''
    }, 
    {
        name: 'Pro',
        price: 19,
        description: 'For professionals and teams',
        items: [
            'Unlimited PDF summaries',
            'Priority processing',
            '24/7 priority support',
            'Markdown Export',
        ],
        id: 'pro',
        paymentLink: '',
        priceId: ''
    }

]

const PricingCard = ({name, price, description, items, id, paymentLink, priceId}: Plan) => {
    return (
        <div className="relative w-full max-x-lg hover:scale-105 hover:transition-all duration-300">
            <div className={cn("relative flex flex-col h-full gap-4 lg:gap-8 z-10 p-8 border-[1px] border-gray-500/20 rounded-2xl",
                id === 'pro' && 'border-orange-500 gap-5 border-2'
            )}>
                <div className="flex justify-between items-center gap-4">
                    <div>
                        <p className="text-lg lg:text-xl font-bold capitalize">{name}</p>
                        <p className="text-base-content/80 mt-2">{description}</p>
                    </div>
                </div>

                <div className="flex gap-2">
                    <p className="text-5xl tracking-tight font-extrabold">${price}</p>
                    <div className="flex flex-col justify-end mb-[4px]">
                        <p className="text-xs uppercase font-semibold">USD</p>
                        <p className="text-xs">/month</p>
                    </div>
                </div>
                <div className="space-y-2.5 leading-relaxed text-base flex-1">
                    {items.map((item,idx) => (
                        <li key={idx} className="flex items-center gap-2">
                            <CheckIcon size={18}/>
                            <span>{item}</span>                           
                        </li>
                    ))}
                </div>
                <div className="space-y-2 flex justify-center w-full">
                    <Link href={paymentLink} className={cn("w-full rounded-full flex items-center justify-center gap-2 bg-linear-to-r from-orange-800 to-orange-500 hover:from-orange-500 hover:to-orange-800 text-white border-2 py-2",
                        id === 'pro' ? 'border-orange-900' : 'border-orange-100 from-orange-400 to-orange-500'
                    )}>
                        Buy Now <ArrowRight size={18}/>
                    </Link>
                </div>
            </div>
        </div>
    )
};

export default function PricingSection(){
    return (
        <section className="relative overflow-hidden" id="pricing">
            <div className="py-12 lg:py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 lg:pt-12">
                <div className="flex justify-center items-center w-full pb-12">
                    <h2 className="font-bold text-xl mb-8 text-orange-500">PRICING</h2>
                </div>
                <div className="relative flex justify-center flex-col lg:flex-row 
                items-center lg:items-stretch gap-8">
                    {plans.map((plan) => 
                        <PricingCard key={plan.id} {...plan}/>
                    )}
                </div>
            </div>
        </section>
    )
}