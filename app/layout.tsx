import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

import "./globals.css";

import Header from "@/components/common/header";
import Footer from "@/components/common/footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Concise.ai - Your AI PDF Summarizer",
  description: "Skip the fluff. Concise.ai distills your PDFs into powerful summaries so you can focus on what matters.",
  openGraph: {
    type: "website",
    url: "",
    title: "Concise.ai - Your AI PDF Summarizer",
    description:
      "Skip the fluff. Concise.ai distills your PDFs into powerful summaries so you can focus on what matters.",
    images: [
      {
        url: "/images/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "Concise.ai - Your AI PDF Summarizer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "",
    title: "Concise.ai - Your AI PDF Summarizer",
    description:
      "Skip the fluff. Concise.ai distills your PDFs into powerful summaries so you can focus on what matters.",
    images: [
      {
        url: "/images/opengraph-image.png",
        alt: "Concise.ai - Your AI PDF Summarizer",
      },
    ],
  },
  alternates: {
    canonical: "",
  },
  authors: {
    name: "Anurag Dey",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <link rel="icon" href="/images/favicon.svg" sizes="any" />
        </head>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div className="relative flex min-h-screen flex-col">
            <Header/>
              <main className="flex-1">{children}</main>
            <Footer/>
          </div>
          <Toaster richColors/>
        </body>
      </html>
    </ClerkProvider>
  );
}
