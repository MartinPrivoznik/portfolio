import { NextRequest, NextResponse } from "next/server";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { siteConfig } from "./config/site";

// Get the preferred locale, similar to the above or using a library
function getLocale(request: NextRequest) {
  var lang =
    request.headers.get("accept-language") ?? siteConfig.defaultLocales;
  let headers = { "accept-language": lang };
  let languages = new Negotiator({ headers }).languages();

  return match(languages, siteConfig.siteLocales, siteConfig.defaultLocales);
}

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

  // Redirect if there is no locale
  const locale = getLocale(request);

  if (locale == siteConfig.defaultLocales) {
    return NextResponse.rewrite(
      new URL(`/${siteConfig.defaultLocales}${pathname}`, request.url)
    );
  }

  request.nextUrl.pathname = `/${locale}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|public|images).*)"],
};
