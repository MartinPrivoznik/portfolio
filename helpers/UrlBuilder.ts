import { siteConfig } from "@/config/site";

export function buildUrl(lang: string, path: string) {
  if (lang === siteConfig.defaultLocales) {
    return path;
  }

  path = path === "/" ? "" : path;
  return `/${lang}${path}`;
}
