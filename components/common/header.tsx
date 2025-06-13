import Image from "next/image";
import { Button } from "../ui/button";
import Navlink from "./nav-link";

export default function Header(){
    const isLoggedIn = false;

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
            {isLoggedIn && <Navlink href="/dashboard">Your Summaries</Navlink>}
        </div>

        <div className="flex lg:justify-end lg:flex-1">
            {isLoggedIn ? ( <div className="flex gap-2 items-center">
                <Navlink href="/upload">Upload a PDF</Navlink>
                <div>Pro</div>
                <Button>Sign Out</Button>
            </div>
            ) : (
            <div>
                <Navlink href="/sign-in">Sign In</Navlink>
            </div>
            )}
        </div>
    </nav>
}