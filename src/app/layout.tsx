import type { Metadata, Viewport } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import FloatButton from "./Components/FloatButton";
import FloatingCallButton from "./Components/FloatingCallButton";

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "YGSD - Your Global Software Development Partner",
  description: "YGSD delivers cutting-edge software solutions to transform your business. Expert developers, custom applications, and innovative technology to drive your success.",
  keywords: "software development, custom applications, web development, mobile apps, cloud solutions, digital transformation",
  authors: [{ name: "YGSD Team", url: "https://www.ygsd.in" }],
  openGraph: {
    title: "YGSD - Innovative Software Solutions for Your Business",
    description: "Transform your ideas into powerful digital realities with YGSD's expert software development services.",
    type: "website",
    url: "https://www.ygsd.in",
    images: ["https://www.ygsd.in/og-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    site: "@YGSD",
    title: "YGSD - Your Trusted Software Development Partner",
    description: "Elevate your business with custom software solutions from YGSD. Innovative, scalable, and user-friendly applications.",
    images: ["https://www.ygsd.in/twitter-image.jpg"] ,
  },
  robots: "index, follow",
  alternates: {
    canonical: "https://www.ygsd.in",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
        <FloatButton/>
        <FloatingCallButton/>
      </body>
    </html>
  );
}
