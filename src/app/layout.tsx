import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai ,Poppins ,Poetsen_One } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/common";
import { Toaster } from 'react-hot-toast';


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

const poetsenOne = Poetsen_One({
  variable: "--font-poetsen-one",
  subsets: ["latin"],
  weight: [ "400"],
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

        className={`${poppins.variable} ${ibmPlexSansThai.variable} ${poetsenOne.variable} antialiased`}
      >
        <Toaster position="top-right" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
