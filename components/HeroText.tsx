"use client";

import { subtitle, title } from "./primitives";
import Link from "next/link";
import { RevealSlide } from "./animations/RevealSlide";
import { useTranslation } from "@/app/i18n/client";

export const HeroText = (props: { lang: string }) => {
  const { t } = useTranslation(props.lang);
  return (
    <div>
      <RevealSlide width="fit-content">
        <div className="p-3">
          <h2 className={title({ size: "lg" })}>
            {t("helloIm")}&nbsp;
            <span className={title({ color: "primary", size: "lg" })}>
              {t("martin")}
            </span>
          </h2>
        </div>
      </RevealSlide>
      <br />
      <RevealSlide width="fit-content">
        <div className="p-3">
          <h3 className={subtitle({ class: "mt-2" })}>
            {t("heroSubheading1")}{" "}
            <Link href="https://dreamind.cz/" target="_blank">
              Dreamind
            </Link>{" "}
            {t("heroSubheading2")}
          </h3>
        </div>
      </RevealSlide>
    </div>
  );
};
