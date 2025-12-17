import type { Metadata } from "next";
import "./globals.css";
import { Space_Grotesk } from "next/font/google";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space" });

export const metadata: Metadata = {
  title: "Real Estate Data Analytics & Workflow Automation Case Study",
  description: "Gautham Gongada's Project Destined-focused analytics, SQL, and automation walkthrough."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={spaceGrotesk.variable}>
      <body className="bg-slate-950 text-slate-50 antialiased min-h-screen">
        <div className="page-bg">
          <div className="page-overlay" />
          {children}
        </div>
      </body>
    </html>
  );
}
