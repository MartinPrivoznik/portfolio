import { Metadata, Viewport } from "next";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/navbar";
import { CursorGradient } from "@/components/animations/CursorGradient";
import { Footer } from "@/components/Footer";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { useTranslation } from "../i18n";
import { dir } from "i18next";
import clsx from "clsx";
import { fontSans } from "@/config/fonts";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Providers } from "../providers";
import { WithContext } from "schema-dts";
import { calculateMyAge } from "@/helpers/Calculator";
import { formatAge } from "@/helpers/formatAge";

export async function generateStaticParams() {
  return siteConfig.siteLocales.map((lang) => ({ lang }));
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  colorScheme: "dark",
};

export async function generateMetadata({
  params,
}: {
  params: IInternationalizedPageParams;
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lang);

  return {
    title: {
      default: t(siteConfig.title),
      template: `%s | ${t(siteConfig.title)}`,
    },
    description: t(siteConfig.description),
    metadataBase: new URL("https://privoznik.dev"),
    authors: { name: "Martin Přívozník" },
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
    alternates: {
      canonical: "/",
      languages: {
        en: "/",
        cs: "/cs",
      },
    },
    category: "CV",
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);
  const age = calculateMyAge();

  const jsonLd: WithContext<any> = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: t("MartinPrivoznik"),
    url: "https://privoznik.dev",
    sameAs: [
      "https://www.linkedin.com/in/martin-p%C5%99%C3%ADvozn%C3%ADk-5b16a0192/",
      "https://github.com/MartinPrivoznik",
    ],
    jobTitle: t("softwareEngineer"),
    worksFor: {
      "@type": "Organization",
      name: "Foxentry",
    },
    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: t("uoePrague"),
    },
    description: formatAge(t("basicInformationDesc"), age),
    address: {
      "@type": "PostalAddress",
      addressLocality: t("prague"),
      addressCountry: t("czechRepublic"),
    },
    birthDate: "2000-09-20",
  };

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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
      <GoogleAnalytics gaId="G-K7MDGX1K5T" />
    </html>
  );
}
