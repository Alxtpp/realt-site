import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "RealT SA | Promotion Immobilière & Construction",
    template: "%s | RealT SA",
  },
  description:
    "RealT SA - Promotion immobilière et construction en Suisse romande. Plus de 25 ans d'expérience.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
