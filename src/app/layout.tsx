import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "milancodes.dev | Senior Frontend Engineer & Blockchain Architect",
  description: "Senior Frontend Engineer specializing in decentralized applications, blockchain technology, and modern web development. Creator of Phoenix Hub and HackAtom Winner.",
  keywords: ["Milan", "milancodes", "Frontend Engineer", "Blockchain Developer", "React", "TypeScript", "CosmJS", "CosmWasm", "Web3", "dApp Developer", "Phoenix Hub"],
  authors: [{ name: "Milan" }],
  openGraph: {
    title: "milancodes.dev | Senior Frontend Engineer",
    description: "Building the decentralized future, one dApp at a time.",
    url: "https://milancodes.dev",
    siteName: "milancodes.dev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "milancodes.dev | Senior Frontend Engineer",
    description: "Building the decentralized future, one dApp at a time.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
