"use client";

import { buildUrl } from "@/helpers/UrlBuilder";
import { siteConfig } from "@/config/site";
import { Link } from "@heroui/react";
import NextLink from "next/link";
import { GithubIcon, LinkedInIcon } from "@/components/icons";

export const Footer = (props: { lang: string }) => {
  return (
    <footer className="w-full border-t border-divider">
      <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 py-5 px-6">
        <div className="flex items-center gap-1 text-small text-default-500">
          <span>© {new Date().getFullYear()}</span>
          <Link
            href={buildUrl(props.lang, "/")}
            size="sm"
            className="text-primary font-medium"
          >
            Martin Přívozník
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <NextLink
            href={siteConfig.links.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
            className="text-default-500 hover:text-primary transition-colors"
          >
            <LinkedInIcon className="w-5 h-5" />
          </NextLink>
          <NextLink
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
            className="text-default-500 hover:text-primary transition-colors"
          >
            <GithubIcon className="w-5 h-5" />
          </NextLink>
        </div>
      </div>
    </footer>
  );
};
