"use client";

import { siteConfig } from "@/config/site";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/dropdown";
import { Image } from "@nextui-org/image";
import { useEffect, useState } from "react";

export const LanguagesDropdown = (props: { lang: string }) => {
  const [activeLang, setActiveLang] = useState<{
    name: string;
    flagSrc: string;
    displayName: string;
  }>();
  const [nonActiveLangs, setNonActiveLangs] =
    useState<Array<{ name: string; flagSrc: string; displayName: string }>>();

  useEffect(() => {
    const activeLanguage =
      siteConfig.siteLocalesData.find((sld) => sld.name == props.lang) ??
      siteConfig.siteLocalesData[0];
    const nonActiveLangs = siteConfig.siteLocalesData.filter(
      (sld) => sld.name != props.lang
    );

    setActiveLang(activeLanguage);
    setNonActiveLangs(nonActiveLangs);
  }, [props.lang]);

  if (!activeLang) return <></>;

  return (
    <Dropdown>
      <DropdownTrigger>
        <div className="flex items-center" tabIndex={1}>
          <Image
            width={25}
            alt={activeLang.name}
            src={activeLang.flagSrc}
            className="cursor-pointer min-w-[25px]"
            tabIndex={2}
          />
        </div>
      </DropdownTrigger>
      <DropdownMenu variant="faded" aria-label="Languages">
        {/* @ts-ignore */}
        {nonActiveLangs &&
          nonActiveLangs.map((nal, i) => (
            <DropdownItem
              key={i}
              href={
                nal.name == siteConfig.defaultLocales ? "/" : `/${nal.name}`
              }
              startContent={
                <Image
                  width={25}
                  alt={nal.name}
                  src={nal.flagSrc}
                  className="cursor-pointer min-w-[25px]"
                />
              }
            >
              {nal.displayName}
            </DropdownItem>
          ))}
      </DropdownMenu>
    </Dropdown>
  );
};
