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
        <div className="fixed inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <div className="fixed inset-y-0 left-0 -z-10 w-1/2 blur-3xl opacity-20 bg-[radial-gradient(circle_at_20%_20%,#0ea5e9,transparent_40%)]" />
        <div className="fixed inset-y-0 right-0 -z-10 w-1/2 blur-3xl opacity-20 bg-[radial-gradient(circle_at_80%_30%,#22d3ee,transparent_40%)]" />
        {children}
      </body>
    </html>
  );
}
