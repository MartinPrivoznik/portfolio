import { NextRequest, NextResponse } from "next/server";
import { siteConfig } from "./config/site";

export function middleware(request: NextRequest) {
  // Check if there is any supported locale in the pathname
  const { pathname } = request.nextUrl;
  const matchingLocale = siteConfig.siteLocales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  //if matching locale doesnt exist or is default, rewrite to default
  if (!matchingLocale) {
    return NextResponse.rewrite(
      new URL(`/${siteConfig.defaultLocales}${pathname}`, request.url)
    );
  }

  if (matchingLocale && matchingLocale != siteConfig.defaultLocales) return;

  if (matchingLocale == siteConfig.defaultLocales) {
    return NextResponse.rewrite(
      new URL(`/${siteConfig.defaultLocales}${pathname}`, request.url)
    );
  }

  return;
}

export const config = {
  matcher: [
    "/((?!_next|public|images|favicon.ico|sitemap.xml|robots.txt|apple-touch-icon.png|logo192.png|neotravuj.mp3).*)",
  ],
};
