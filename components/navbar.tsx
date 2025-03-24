"use client";

import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { link as linkStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import NextLink from "next/link";
import clsx from "clsx";
import { GithubIcon, DiscordIcon, LinkedInIcon } from "@/components/icons";
import { Logo } from "@/components/icons";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { ThemeSwitch } from "./theme-switch";
import { buildUrl } from "@/helpers/UrlBuilder";
import { useTranslation } from "@/app/i18n/client";
import dynamic from "next/dynamic";

const LanguagesDropdown = dynamic(
  () =>
    import("./shared/LanguagesDropdown").then((mod) => mod.LanguagesDropdown),
  {
    ssr: false,
  }
);

export const Navbar = (props: { lang: string }) => {
  const { t } = useTranslation(props.lang);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const path = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [path]);

  return (
    <NextUINavbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1"
            href={buildUrl(props.lang, "/")}
          >
            <Logo />
            <h1 className="font-bold text-inherit">Martin Přívozník</h1>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden sm:flex gap-4 justify-start ml-0 md:ml-5">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <NextLink
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium"
                )}
                color="foreground"
                href={buildUrl(props.lang, item.href)}
              >
                {t(item.label)}
              </NextLink>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-2">
          <NextLink
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.linkedIn}
            aria-label="LinkedIn"
          >
            <LinkedInIcon className="text-default-500" />
          </NextLink>
          <NextLink
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.discord}
            aria-label="Discord"
          >
            <DiscordIcon className="text-default-500" />
          </NextLink>
          <NextLink
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.github}
            aria-label="Github"
          >
            <GithubIcon className="text-default-500" />
          </NextLink>
          <LanguagesDropdown lang={props.lang} />
          <ThemeSwitch lang={props.lang} />
        </NavbarItem>
        <NavbarItem className="hidden md:flex"></NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <LanguagesDropdown lang={props.lang} />
        <ThemeSwitch lang={props.lang} />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <NextLink
                color={
                  index === siteConfig.navItems.length - 1
                    ? "primary"
                    : "foreground"
                }
                href={buildUrl(props.lang, item.href)}
                className="text-lg"
              >
                {t(item.label)}
              </NextLink>
            </NavbarMenuItem>
          ))}
        </div>
        <div className="mx-4 mt-2 flex gap-2">
          <NextLink
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.linkedIn}
          >
            <LinkedInIcon className="text-default-500" />
          </NextLink>
          <NextLink
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.discord}
            aria-label="Discord"
          >
            <DiscordIcon className="text-default-500" />
          </NextLink>
          <NextLink
            target="_blank"
            rel="noopener noreferrer"
            href={siteConfig.links.github}
            aria-label="Github"
          >
            <GithubIcon className="text-default-500" />
          </NextLink>
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
