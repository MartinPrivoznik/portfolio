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

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/public/favicon.ico",
    apple: "/public/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: IInternationalizedPageParams;
}) {
  return (
    <html lang={params.lang} suppressHydrationWarning>
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
            <Navbar />
            <main className="w-full flex-grow">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}