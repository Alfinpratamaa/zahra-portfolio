// app/layout.tsx

// Hapus import Metadata yang spesifik dari sini
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Definisi font tetap di root layout agar bisa digunakan di mana saja
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Anda bisa punya metadata yang sangat dasar di sini jika mau, tapi opsional
// export const metadata = { ... }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Terapkan variabel font di sini, dan kelas lain yang benar-benar global.
        Hapus Navbar dan tag <main> dari sini.
      */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
