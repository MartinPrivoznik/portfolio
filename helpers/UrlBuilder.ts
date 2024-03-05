import { siteConfig } from "@/config/site";

export function buildUrl(lang: string, path: string) {
  if (lang === siteConfig.defaultLocales) {
    return path;
  }
  return `/${lang}${path}`;
}
