import type { Metadata } from "next";
import {Open_Sans,} from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
});


export const metadata: Metadata = {
  title: "YGSD",
  description: "Created by YGSD Team",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.className}`}
      >
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
