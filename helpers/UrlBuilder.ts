import { siteConfig } from "@/config/site";

export function buildUrl(lang: string, path: string) {
  path = path === "/" ? "" : path;

  if (lang === siteConfig.defaultLocales) {
    return path;
  }
  return `/${lang}${path}`;
}
