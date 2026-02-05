import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

const baseUrl = "https://privoznik.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = siteConfig.navItems.map((item) => item.href);
  const locales = siteConfig.siteLocales.filter(
    (locale) => locale !== "chewbacca" && locale !== "groot",
  );
  const currentDate = new Date().toISOString().split("T")[0];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  locales.forEach((locale) => {
    routes.forEach((route) => {
      const isHome = route === "/";
      const localePrefix =
        locale === siteConfig.defaultLocales ? "" : `/${locale}`;
      const url = isHome
        ? `${baseUrl}${localePrefix}`
        : `${baseUrl}${localePrefix}${route}`;

      sitemapEntries.push({
        url,
        lastModified: currentDate,
        changeFrequency: isHome ? "daily" : "monthly",
        priority: isHome ? 1.0 : 0.8,
      });
    });
  });

  return sitemapEntries;
}
