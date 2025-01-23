import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope tracker",
  description: "The price of hope",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/btc@2x.png" />
      </head>
      <body
        className={`dark ${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)] antialiased isolate`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
