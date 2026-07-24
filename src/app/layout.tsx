import type { Metadata } from "next";
import {
  Instrument_Sans,
  Libre_Baskerville,
  Spline_Sans_Mono,
} from "next/font/google";

import "./globals.css";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "700"],
});

const splineSansMono = Spline_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Kenley Group",
  description: "Supported Accommodation",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${instrumentSans.variable}
          ${libreBaskerville.variable}
          ${splineSansMono.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}
