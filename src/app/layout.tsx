import type { Metadata } from "next";
import {Open_Sans,Inter} from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({
  subsets: ["latin"],
});
const inter = Inter({
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
        {children}
      </body>
    </html>
  );
}
