"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navlink(
    {
        href, 
        children, 
        className}
    :
    {
        href: string; 
        children: React.ReactNode; 
        className?: string
    }) {
        const pathname = usePathname();
        const isActive = (pathname === href || pathname.startsWith(href))

        return <Link href={href} className={cn("transition-colors text-sm duration-200 text-gray-600 hover:text-orange-500", className, isActive && "text-orange-500")}>{children}</Link>
}