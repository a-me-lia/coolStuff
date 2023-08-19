import "./globals.css";
import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

const plexSans = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  title: "Matthew Guo",
  description: "冰淇淋",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head><link rel="icon" href="/favicon.ico"/></head>
      <body
        className={`${inter.variable} font-sans  ${plexSans.variable} font-ibm`}
      >
        {children}
      </body>
    </html>
  );
}
