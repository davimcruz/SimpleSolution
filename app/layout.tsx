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
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: false,
  viewportFit: "cover",
  themeColor: "#007bff",
};


export const metadata: Metadata = {
  metadataBase: new URL('https://simplesolution.com.br'),
  title: {
    default: "Simple Solution — Soluções em Tecnologia | Desenvolvimento Web Profissional",
    template: "%s | Simple Solution"
  },
  description: "Soluções minimalistas e profissionais em sistemas, serviços web e design para empresários e clientes respeitados. Desenvolvimento web personalizado, sistemas sob medida e consultoria em tecnologia.",
  keywords: [
    "desenvolvimento web",
    "sistemas personalizados",
    "design profissional",
    "soluções digitais",
    "tecnologia empresarial",
    "consultoria em TI",
    "desenvolvimento de software",
    "web design",
    "aplicações web",
    "sistemas web",
    "tecnologia",
    "simple solution"
  ],
  alternates: {
    canonical: 'https://simplesolution.com.br',
    languages: {
      'pt-BR': 'https://simplesolution.com.br',
    }
  },
  authors: [{ name: "Simple Solution" }],
  creator: "Simple Solution",
  publisher: "Simple Solution",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/favicon.ico", type: "image/x-icon" },
      { url: "/images/logo.png", type: "image/png", sizes: "192x192" },
      { url: "/images/logo.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/images/logo.png", sizes: "180x180", type: "image/png" },
    ],
    shortcut: ["/images/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://simplesolution.com.br",
    title: "Simple Solution — Soluções em Tecnologia | Desenvolvimento Web Profissional",
    description: "Soluções minimalistas e profissionais em sistemas, serviços web e design para empresários e clientes respeitados. Desenvolvimento web personalizado, sistemas sob medida e consultoria em tecnologia.",
    siteName: "Simple Solution",
    images: [
      {
        url: "/images/banner.png",
        width: 1200,
        height: 630,
        alt: "Simple Solution - Soluções em Tecnologia",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Simple Solution — Soluções em Tecnologia",
    description: "Soluções minimalistas e profissionais em sistemas, serviços web e design para empresários e clientes respeitados.",
    images: ["/images/banner.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#007bff" />
        <link rel="apple-touch-icon" href="/images/icon-192.png" />
      </head>
      <body className={`antialiased ${poppins.variable} ${dmsans.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}