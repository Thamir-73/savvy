'use client'

import { useEffect } from 'react';
import localFont from "next/font/local";
import "./globals.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { GoogleAnalytics } from '@next/third-parties/google'
import { LanguageProvider, useLanguage } from './LanguageContext';

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

function RootLayoutContent({ children }) {
  const { language } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = language;
    // Remove the dir attribute to prevent automatic flipping
    document.documentElement.removeAttribute('dir');
  }, [language]);

  return (
    <html lang={language} suppressHydrationWarning>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="theme-color" content="#1C3F94" />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}>
        <Navbar />
        <main className="">
          {children}
        </main>
        <Footer />
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <LanguageProvider>
      <RootLayoutContent>{children}</RootLayoutContent>
    </LanguageProvider>
  );
}