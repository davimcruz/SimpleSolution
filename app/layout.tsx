import type { Metadata, Viewport } from "next";
import { DM_Sans, Inter, Poppins } from "next/font/google";

import "./globals.css";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-poppins",
});

const dmsans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "600"],
  variable: "--font-dmsans",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  themeColor: "#007bff",
};


export const metadata: Metadata = {
  title: "Simple Solution — Soluções em Tecnologia",
  description: "Soluções minimalistas e profissionais em sistemas, serviços web e design para empresários e clientes respeitados.",
  keywords: "tecnologia, soluções digitais, desenvolvimento web, sistemas personalizados, design, simple, solution, simplesolution",
  robots: "index, follow",
  openGraph: {
    title: "Simple Solution — Soluções em Tecnologia",
    description: "Soluções minimalistas e profissionais em sistemas, serviços web e design para empresários e clientes respeitados.",
    url: "https://www.simplesolution.com.br",
    siteName: "Simple Solution &copy; 2024",
    images: [
      {
        url: "/images/banner.png",
        width: 800,
        height: 600,
        alt: "Banner da Simple Solution",
      },
    ],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Solution — Soluções em Tecnologia",
    description: "Soluções minimalistas e profissionais em sistemas, serviços web e design para empresários e clientes respeitados.",
    images: ["/images/banner.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">

      <body
        className={`antialiased ${poppins.variable} ${dmsans.variable} ${inter.variable}`}
      >
        {children}
      </body>
    </html>
  );
}