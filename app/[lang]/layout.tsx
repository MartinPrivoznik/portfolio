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
import { useTranslation } from "../i18n";

export async function generateStaticParams() {
  return siteConfig.siteLocales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: IInternationalizedPageParams;
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lang);

  return {
    title: {
      default: t(siteConfig.name),
      template: `%s - ${t(siteConfig.name)}`,
    },
    description: t(siteConfig.description),
    authors: { url: "https://privoznik.dev/", name: "Martin Přívozník" },
    icons: {
      icon: "/favicon.ico",
      shortcut: "/favicon.ico",
      apple: "/apple-touch-icon.png",
    },
    twitter: {
      card: "summary_large_image",
      title: t(siteConfig.name),
      description: t(siteConfig.description),
      images: ["/logo192.png"],
    },
    openGraph: {
      type: "website",
      url: "https://privoznik.dev/",
      title: t(siteConfig.name),
      description: t(siteConfig.description),
      images: [{ url: "/logo192.png", alt: t(siteConfig.name) }],
    },
    keywords: t(siteConfig.keywords),
    robots: "index, follow",
  };
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
