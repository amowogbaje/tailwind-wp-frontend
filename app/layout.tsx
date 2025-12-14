import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import {  Montserrat } from "next/font/google";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "./globals.css";


const montserrat = Montserrat({ subsets: ["latin"], weight: ["400", "500", "600"] });


export const metadata: Metadata = {
  title: "MaxiLife",
  description: "Helping you live your best life with personalized health insights.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.className} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
