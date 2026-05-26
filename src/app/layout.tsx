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

export const metadata: Metadata = {
  title: {
    default: "AI Engineer — Premium Portfolio",
    template: "%s · AI Engineer",
  },
  description:
    "Premium cinematic AI engineer portfolio featuring modern full-stack + ML work, projects, services, and contact.",
  metadataBase: new URL("https://beingai.space"),
  openGraph: {
    title: "AI Engineer — Premium Portfolio",
    description:
      "Cinematic AI engineer portfolio with premium UI, projects, experience, and services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
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
