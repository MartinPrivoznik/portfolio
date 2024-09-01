import "@/styles/globals.css";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Providers } from "../providers";
import { Navbar } from "@/components/navbar";
import clsx from "clsx";
import { CursorGradient } from "@/components/animations/CursorGradient";
import { Footer } from "@/components/Footer";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { dir } from "i18next";
import { GoogleAnalytics } from "@next/third-parties/google";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  authors: { url: "https://privoznik.dev/", name: "Martin Přívozník" },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["/logo192.png"],
  },
  openGraph: {
    type: "website",
    url: "https://privoznik.dev/",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [{ url: "/logo192.png", alt: siteConfig.name }],
  },
  keywords:
    "Martin Přívozník, Portfolio, Developer, Software engineer, Personal web",
  alternates: {
    canonical: "https://privoznik.dev/",
  },
};

export async function generateStaticParams() {
  return siteConfig.siteLocales.map((lang) => ({ lang }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IInternationalizedPageParams;
}) {
  return (
    <html lang={params.lang} dir={dir(params.lang)} suppressHydrationWarning>
      <head />
      <body
        className={clsx(
          "bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <div className="relative flex flex-col min-h-screen">
            <CursorGradient />
            <Navbar lang={params.lang} />
            <main className="w-full flex-grow">{children}</main>
            <Footer lang={params.lang} />
          </div>
        </Providers>
      </body>
      <GoogleAnalytics gaId="G-K7MDGX1K5T" />
    </html>
  );
}
