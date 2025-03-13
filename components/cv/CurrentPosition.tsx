import { siteConfig } from "@/config/site";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";
import { useTranslation } from "@/app/i18n";

export const CvCurrentPosition = async (props: { lang: string }) => {
  const { t } = await useTranslation(props.lang);
  return (
    <div className="flex flex-col items-center w-full">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {t("currentPositions")}
        </h3>
      </RevealSlide>
      <div className="px-5 w-full">
        {siteConfig.currentPositions.map((s, i) => (
          <Reveal fullWidth key={i}>
            <div className="w-full">
              <div className="flex flex-col w-full px-5 pb-5">
                <h4 className={subtitle({ class: "mt-2 mb-0" })}>
                  {t(s.role)} {t("at")} {s.name}
                </h4>
                <span className="text-small text-default-500">
                  {t(s.period)} - {t(s.length)}
                </span>
                <Link href={s.url} isExternal={!s.url.startsWith("/")}>
                  {s.urlText}
                </Link>
                <p className="pt-2 text-justify">{t(s.description)}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
