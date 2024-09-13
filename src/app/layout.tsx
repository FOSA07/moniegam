import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
const permanentMarker = localFont({
  src: "./fonts/PermanentMarker-Regular.ttf",
  variable: "--font-permanent-marker"
});

export const metadata: Metadata = {
  title: "Dart Dojo",
  description: "Learn Dart programming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${permanentMarker.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
