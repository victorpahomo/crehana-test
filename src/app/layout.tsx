import type { Metadata, Viewport } from "next";
import FloatingButton from "@/components/ui/floating-button";
import { Poppins, Geist_Mono } from "next/font/google";
import AppProvider from "@/providers/app-provider";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://crehana-test.vercel.app/"),
  title: "Crehana Countries | Explorador de Países - @victorpahomo",
  description:
    "Aplicación web para explorar información sobre países del mundo, sus banderas, población, idiomas y más. Desarrollado como prueba técnica para Crehana.",
  keywords: [
    "países",
    "banderas",
    "explorador",
    "población",
    "idiomas",
    "crehana",
    "nextjs",
    "react",
  ],
  authors: [{ name: "Victor Pahomo", url: "https://github.com/victorpahomo" }],
  creator: "Victor Pahomo",
  publisher: "Crehana",
  robots: "index, follow",
  icons: {
    icon: "/favicon.ico",
    apple: "/img/apple-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://crehana-test.vercel.app/",
    title: "Crehana Countries | Explorador de Países",
    description:
      "Aplicación web para explorar información sobre países del mundo, sus banderas, población, idiomas y más.",
    siteName: "Crehana Countries",
    images: [
      {
        url: "/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "Crehana Countries Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crehana Countries | Explorador de Países",
    description:
      "Aplicación web para explorar información sobre países del mundo",
    images: ["/img/twitter-image.webp"],
    creator: "@victorpahomo",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={`${poppins.variable} ${geistMono.variable} antialiased`}>
        <AppProvider>
          {children}
          <FloatingButton href="/about" label="Acerca de" />
        </AppProvider>
      </body>
    </html>
  );
}
