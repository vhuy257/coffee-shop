import type { Metadata } from "next";
import Header from "@/components/header/Header";

import { Oswald, Sue_Ellen_Francisco } from "next/font/google";
import localFont from "next/font/local";

import "./globals.scss";
import SmoothScrolling from "@/components/SmoothScrolling/SmoothScrolling";

const oswald = Oswald({ subsets: ["latin"] });

const audrey = localFont({
  src: './fonts/Audrey-Medium.otf',
  variable: '--font-audrey'
})

const calibri = localFont({
  src: './fonts/CerebriSans-Book.ttf',
  variable: '--font-calibri'
})

const sue_Ellen_Francisco = Sue_Ellen_Francisco({ 
  subsets: ["latin"],
  weight: "400",
  variable: '--font-sue-ellen'
})

export const metadata: Metadata = {
  title: "Coffee Shop",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oswald.className} ${audrey.variable} ${calibri.variable} ${sue_Ellen_Francisco.variable} overflow-x-hidden`}>
        <SmoothScrolling>
        <Header />
        {children}
        </SmoothScrolling>
      </body>
    </html>
  );
}
