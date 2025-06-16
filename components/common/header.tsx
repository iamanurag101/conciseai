"use client";

import Image from "next/image";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

import Navlink from "./nav-link";

export default function Header(){

    return <nav className="container flex items-center justify-between py-4 lg:px-8 px-2 mx-auto">
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
                <Navlink href="/dashboard">Your Summaries</Navlink>
            </SignedIn>
        </div>

        <div className="flex lg:justify-end lg:flex-1">
            <SignedIn>
                <div className="flex gap-2 lg:gap-4 items-center">
                    <Navlink href="/upload">Upload a PDF</Navlink>
                    <div>Pro</div>
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