import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Circuito da Beleza - Sua escola de capacitação profissional",
  description: "Sua escola de capacitação profissional",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content=", initial-scale=0.6"></meta>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
