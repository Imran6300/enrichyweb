import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/data/content";

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    variable: "--font-space-grotesk",
    display: "swap",
});

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-inter",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL(site.domain),
    title: {
        default: `${site.name} — Self-Hosted Apollo Alternative for B2B Lead Enrichment`,
        template: `%s | ${site.name}`,
    },
    description:
        "Enrichly is a self-hosted B2B lead discovery and enrichment platform. Discover companies, crawl websites, extract verified business emails, score leads, and export CSVs — no subscription, full source code, one-time payment.",

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}
        >
            <head />
            <meta name="google-site-verification" content="1qT9Qq_PS3x-5f6p1XwXpztUk0r29lA4mv7h6cTeVoA" />
            <body className="font-sans antialiased bg-bg text-text">{children}</body>
        </html>
    );
}