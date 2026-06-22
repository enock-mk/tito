import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Tito - Universal Ticket Booking Platform",
  description: "Book buses, hotels, movies and more with Tito. The all-in-one ticketing solution for businesses and travelers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Script id="theme-init" strategy="beforeInteractive">
          {`try { const theme = window.localStorage.getItem('tito-theme'); const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches; const isDark = theme ? theme === 'dark' : prefersDark; document.documentElement.classList.toggle('dark', isDark); } catch (e) {}`}
        </Script>
        {children}
      </body>
    </html>
  );
}
