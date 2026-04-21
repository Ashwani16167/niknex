import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "NIKNEX IT SOLUTION - Your Complete IT & Security Solution",
  description: "Premium IT services, CCTV installation, computer repair, networking, and security solutions",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} bg-secondary text-white`}>
        {children}
      </body>
    </html>
  );
}
