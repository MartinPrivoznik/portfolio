import { siteConfig } from "@/config/site";

export const defaultNS = "globals";
export const cookieName = "i18next";

export function getOptions(
  lng: string = siteConfig.defaultLocales,
  ns: string = defaultNS
) {
  return {
    supportedLngs: siteConfig.siteLocales,
    fallbackLng: siteConfig.defaultLocales,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
  };
}
