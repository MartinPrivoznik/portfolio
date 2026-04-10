import { siteConfig } from "@/config/site";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { Link } from "@heroui/react";
import { useTranslation } from "@/app/i18n";

export const CvEmploymentHistory = async (props: { lang: string }) => {
  const { t } = await useTranslation(props.lang);
  return (
    <div className="flex flex-col items-center w-full max-w-[1000px]">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {t("employmentHistory")}
        </h3>
      </RevealSlide>
      <div className="px-5 w-full mt-3">
        {siteConfig.experiences.map((s, i) => (
          <Reveal fullWidth key={i}>
            <div className="w-full relative pl-8 pb-6 border-l-2 border-default-200">
              <span
                className="absolute -left-[9px] top-2 block h-4 w-4 rounded-full bg-primary shadow-sm"
                aria-hidden="true"
              />
              <div className="flex flex-col w-full pl-5">
                <h4 className={subtitle({ class: "mt-0 mb-0" })}>
                  {t(s.role)} {t("at")} {s.name}
                </h4>
                <span className="text-small text-default-500">
                  {t(s.period)} - {t(s.length)}
                </span>
                <Link href={s.url} isExternal className="w-fit">
                  {s.urlText}
                </Link>
                <p className="pt-2 text-justify text-default-700">
                  {t(s.description)}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
