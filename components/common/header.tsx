import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Navlink from "./nav-link";
import PlanBadge from "./plan-badge";

export default function Header(){

    return <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto text-xs">
        <div className="flex lg:flex-1">
            <Navlink href="/">
                <Image
                    src="/images/ConciseAi.svg"
                    alt="Concise.ai"
                    height={1500}
                    width={500}
                    className="h-3 w-auto"
                />
            </Navlink>
        </div> 

        <div className="flex lg:justify-center gap-4 lg:gap-12 lg:items-center">
            <Navlink href="/#pricing">Pricing</Navlink>
            <SignedIn>
                <Navlink href="/dashboard">Dashboard</Navlink>
            </SignedIn>
        </div>

        <div className="flex lg:justify-end lg:flex-1">
            <SignedIn>
                <div className="flex gap-2 lg:gap-4 items-center">
                    <Navlink href="/upload">Upload PDF</Navlink>
                    <PlanBadge />
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
            </SignedIn>
            
            <SignedOut>
                <Navlink href="/sign-in">Sign In</Navlink>
            </SignedOut>
        </div>
    </nav>
}