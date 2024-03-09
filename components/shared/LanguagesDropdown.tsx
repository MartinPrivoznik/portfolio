"use client";

import { siteConfig } from "@/config/site";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";
import { Link } from "@nextui-org/link";
import { useRouter } from "next/navigation";

export const LanguagesDropdown = (props: { lang: string }) => {
  const router = useRouter();

  const activeLang =
    siteConfig.siteLocalesData.find((sld) => sld.name == props.lang) ??
    siteConfig.siteLocalesData[0];
  const nonActiveLangs = siteConfig.siteLocalesData.filter(
    (sld) => sld.name != props.lang
  );

  const nonActiveLangOptions = nonActiveLangs.map((nal, i) => {
    return {
      ...nal,
      key: i,
    };
  });

  const handleRedirectToLang = (lang: string) => {
    router.push(lang == siteConfig.defaultLocales ? "/" : `/${lang}`);
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Link className="flex items-center" href="#">
          <Image
            width={25}
            alt={activeLang.name}
            src={activeLang.flagSrc}
            className="cursor-pointer min-w-[25px]"
          />
        </Link>
      </DropdownTrigger>
      <DropdownMenu
        variant="faded"
        aria-label="Languages"
        items={nonActiveLangOptions}
      >
        {(lang) => (
          <DropdownItem
            onClick={() => handleRedirectToLang(lang.name)}
            key={lang.key}
            startContent={
              <Image
                width={25}
                alt={lang.name}
                src={lang.flagSrc}
                className="cursor-pointer min-w-[25px]"
              />
            }
          >
            {lang.displayName}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
};
