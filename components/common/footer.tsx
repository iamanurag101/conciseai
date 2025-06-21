import { SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Footer(){
    return (
    <footer className="pt-8 pb-4">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex flex-col gap-2 md:flex-row justify-around items-start">
          {/* Logo Section */}
          <div className="flex flex-col gap-2 mb-6">
            <Image
              src="/images/ConciseAi.svg"
              alt="Concise.ai"
              height={500}
              width={500}
              className="h-10 w-20"
            />
            <p className="text-xs w-full md:w-60">
              {
                "Turn your PDF’s into beautiful AI generated summaries in seconds! ✨"
              }
            </p>
          </div>

          {/* Contact Information */}
          <div className="text-left mb-4 lg:mb-0">
            <p className="text-md mb-2">Contact Info</p>
            {/* <p className="text-xs">1234 Street Name, City, State, 56789</p> */}
            <a href={`mailto:iamanuragdey005@gmail.com?subject=Reaching%20out%20from%20Concise.ai`} className="text-sm no-underline hover:text-orange-500">Email: iamanuragdey@gmail.com</a>
            {/* <p className="text-xs">Phone: (123) 456-7890</p> */}
          </div>

          {/* Social Media Links */}
          {/* {/* <div className="mb-0"> */}
            <div className="flex flex-col gap-1 mb-4 lg:mb-0">
              <p className="text-md mb-2">Socials</p>
              <a
                href="https://github.com/iamanurag101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start">
                <span className="text-sm hover:text-orange-500">GitHub</span>
              </a>
              <a
                href="https://x.com/anuragdeyO1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start">
                <span className="text-sm hover:text-orange-500">Twitter/X</span>
              </a>
              {/* <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-500 flex items-start gap-3">
                <span className="text-sm text-wh hover:text-orange-500">
                  Instagram
                </span>
              </a> */}
              <a
                href="https://www.linkedin.com/in/iamanurag101"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start">
                <span className="text-sm hover:text-orange-500">LinkedIn</span>
              </a>
            </div>
            {/* Navigation Links */}
            <div className="flex flex-col gap-1 w-max mb-4 lg:mb-0">
                <p className="text-md mb-2">Menu</p>
                <Link href="/" className="text-sm hover:text-orange-500">
                Home
                </Link>
                <Link href="/#pricing" className="text-sm hover:text-orange-500">
                Pricing
                </Link>
                <SignedIn>
                    <Link href="/dashboard" className="text-sm hover:text-orange-500">
                    Dashboard
                    </Link>
                    <Link href="/upload" className="text-sm hover:text-orange-500">
                    Upload a PDF
                    </Link>
                </SignedIn>
            </div>
          </div>

          {/* Policies */}
          {/* <div className="flex flex-col gap-1 w-max mb-6 lg:mb-0">
            <p className="text-md mb-2">Policies</p>
            <Link href="/tnc" className="text-links">
              Terms and Conditions
            </Link>
            <Link href="/privacy-policy" className="text-links">
              Privacy Policy
            </Link>
            <Link href="/refund-policy" className="text-links">
              Refund Policy
            </Link>
            <Link href="/cookies-policy" className="text-links">
              Cookie Policy
            </Link>
          </div> */}
      </div>

      {/* Copyright Statement */}
      <div className="flex flex-col gap-2 justify-center items-center py-4 text-center text-sm mt-3">
        <p>
          &copy; {new Date().getFullYear()} Anurag Dey. All rights reserved.
        </p>
        <Image
              src="/images/ByAnurag.svg"
              alt="Concise.ai"
              height={500}
              width={500}
              className="h-10 w-20"
        />
      </div>
    </footer>
  );
}