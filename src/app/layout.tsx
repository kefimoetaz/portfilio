import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kefi Moetaz | Full Stack Developer",
  description: "Portfolio of Kefi Moetaz, a Full Stack Developer specializing in web development and AI applications.",
  keywords: "Full Stack Developer, Web Development, AI, Python, React, Next.js, Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-gray-50 text-gray-900 dark:bg-gray-900 dark:text-gray-100`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
