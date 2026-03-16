import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Sacca Solutions | Conversational AI for Lead Generation",
  description: "Sacca Solutions builds conversational AI systems—voice AI receptionists and messaging agents—that capture, engage, and convert leads 24/7 for service businesses.",
  keywords: ["conversational AI", "AI receptionist", "AI messaging", "lead generation", "voice AI", "automation"],
  icons: {
    icon: "/favicon.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "Sacca Solutions | Conversational AI for Lead Generation",
    description: "AI voice receptionists and messaging agents that capture and convert leads 24/7 for service businesses.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} font-sans antialiased bg-[#09090b] text-white min-h-screen`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
