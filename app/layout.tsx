import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "@rt Chinny World — Chinenye Okonta | Visual Artist & Muralist",
  description: "@rt Chinny World — Nigerian-Canadian visual artist, muralist, and art educator based in Prince Edward Island. Mural commissions, gallery paintings, art therapy workshops.",
  icons: {
    icon: '/favicon.ico',
  },
};

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,500;1,9..144,600&family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
