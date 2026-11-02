
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { NoiseOverlay } from "@/components/fx/NoiseOverlay";
import { CursorGlow } from "@/components/fx/CursorGlow";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://portfolio.beingai.space";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: "Rehaan Bara | AI Engineer & Python Developer",
    template: "%s | Rehaan Bara",
  },

  description:
    "Rehaan Bara is an AI Engineer and Python Developer building AI-powered applications, LLM integrations, intelligent automation platforms, and modern software systems. Explore his projects, skills, and experience.",

  applicationName: "Rehaan Bara Portfolio",
  authors: [{ name: "Rehaan Bara" }],
  creator: "Rehaan Bara",
  publisher: "Rehaan Bara",

  keywords: [
    "Rehaan Bara",
    "Rehaan Bara Portfolio",
    "Rehaan Bara AI Engineer",
    "Rehaan Bara Python Developer",
    "AI Engineer",
    "Python Developer",
    "AI Automation Engineer",
    "LLM Developer",
    "Generative AI Developer",
    "AI Applications",
    "Python AI Projects",
    "AI Software Engineer",
  ],

  alternates: {
    canonical: siteUrl,
  },

  openGraph: {
    title: "Rehaan Bara | AI Engineer & Python Developer",
    description:
      "Explore Rehaan Bara's AI engineering portfolio, Python projects, LLM applications, automation platforms, and software development experience.",
    url: siteUrl,
    siteName: "Rehaan Bara Portfolio",
    type: "website",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rehaan Bara | AI Engineer & Python Developer",
    description:
      "AI engineering, Python development, LLM applications, and intelligent automation systems by Rehaan Bara.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <NoiseOverlay />
        <CursorGlow />
        {children}
      </body>
    </html>
  );
}
