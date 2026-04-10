import { useTranslation } from "@/app/i18n";
import { buildUrl } from "@/helpers/UrlBuilder";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { siteConfig } from "@/config/site";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<IInternationalizedPageParams>;
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { lang } = await params;
  const { t } = await useTranslation(lang);
  const alternateLanguages = Object.fromEntries(
    siteConfig.siteLocales.map((locale) => [
      locale,
      buildUrl(locale, "/about"),
    ]),
  );

  return {
    title: t("aboutMe"),
    description: t("aboutMeDescription"),
    alternates: {
      canonical: buildUrl(lang, "/about"),
      languages: alternateLanguages,
    },
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
