import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Choose the required weights
});

const ibmPlexSansThai = IBM_Plex_Sans_Thai({
  variable: "--font-ibm-plex-thai",
  subsets: ["thai"],
  weight: ["300", "400", "500", "600", "700"], // Choose the required weights
});

export const metadata: Metadata = {
  title: "RodFaiBob",
  description: "RodFaiBob-AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${ibmPlexSansThai.variable}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
