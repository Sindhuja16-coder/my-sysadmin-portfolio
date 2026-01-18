import type { Metadata } from "next";
import { Inter } from "next/font/google"; // 1. Use Google Font instead of local
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";

// 2. Configure the standard font
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NextGenAdmin Portfolio",
  description: "System Administration & Automation Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the font class here */}
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
