"use client";

import { subtitle, title } from "./primitives";
import Link from "next/link";
import { RevealSlide } from "./animations/RevealSlide";
import { useTranslation } from "@/app/i18n/client";
import { button as buttonStyles } from "@heroui/react";
import { buildUrl } from "@/helpers/UrlBuilder";

export const HeroText = (props: { lang: string }) => {
  const { t } = useTranslation(props.lang);
  return (
    <div>
      <RevealSlide width="fit-content">
        <div className="p-3">
          <h1 className={title({ size: "lg" })}>
            {t("helloIm")}&nbsp;
            <span className={title({ color: "primary", size: "lg" })}>
              {t("martin")}
            </span>
          </h1>
        </div>
      </RevealSlide>
      <RevealSlide width="fit-content">
        <div className="p-3">
          <h3 className={subtitle()}>{t("heroSubheading1")}</h3>
        </div>
      </RevealSlide>
      <RevealSlide width="fit-content">
        <div className="px-3 pt-2 flex flex-wrap gap-3 mb-3 lg:mb-0">
          <Link
            href={buildUrl(props.lang, "/cv")}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            {t("cv")}
          </Link>
          <Link
            href={buildUrl(props.lang, "/contact")}
            className={buttonStyles({
              color: "default",
              radius: "full",
              variant: "flat",
            })}
          >
            {t("contactMe")}
          </Link>
        </div>
      </RevealSlide>
    </div>
  );
};
