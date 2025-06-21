import type { Variants, TargetAndTransition } from "motion/react"

export const pricingPlans = [
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
        paymentLink: 'https://buy.stripe.com/test_3cI7sN50d3I77L940218c00',
        priceId: 'price_1RbluTRu6wbtiqjLs1TnByiN'
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
        paymentLink: 'https://buy.stripe.com/test_fZu8wR9gt0vVe9xgMO18c01',
        priceId: 'price_1RbltgRu6wbtiqjLm8Hd1jsR'
    }

]

export const containerVariants : Variants = {
    hidden: {opacity: 0},
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.1
        }
    }
}

export const itemVariants : Variants = {
    hidden: {opacity: 0, y: 20},
    visible: {
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 15,
            stiffness: 50,
            duration: 0.8
        }
    }
}

export const buttonVariants : TargetAndTransition = {
    scale: 1.05,
    transition: {
        type: "spring",
        stiffness: 300,
        damping: 10
    }
}

export const listVariants : Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { type: 'spring', damping: 20, stiffness: 100 },
    },
}