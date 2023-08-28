import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import Navbar from "./components/navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const plexSans = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Matthew Guo",
  description: "冰淇淋",
  openGraph: {
    title: "Matthew Guo",
    description: "冰淇淋",
    url: "https://homescree.net",
    siteName: "Matthew Guo",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} font-sans  ${plexSans.variable} font-ibm `}
      >
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
