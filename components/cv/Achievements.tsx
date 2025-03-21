import { siteConfig } from "@/config/site";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";
import { GithubIcon } from "../icons";
import { useTranslation } from "@/app/i18n";

export const CvAchievements = async (props: { lang: string }) => {
  const { t } = await useTranslation(props.lang);
  return (
    <div className="flex flex-col items-center w-full max-w-[1000px]">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {t("achievements")}
        </h3>
      </RevealSlide>
      <div className="px-5 w-full">
        {siteConfig.cv.achievements.map((s, i) => (
          <Reveal fullWidth key={i}>
            <div className="w-full">
              <div className="flex flex-col w-full px-5 pb-5">
                <div className="flex w-full items-center">
                  <div className="flex flex-col">
                    <h4 className={subtitle({ class: "mt-2 mb-0" })}>
                      {t(s.name)}
                    </h4>
                    <span className="text-small text-default-500">
                      {t(s.subdesc)}, {t("issuedBy")}{" "}
                      <Link href={s.issuerLink} isExternal>
                        {s.issuer}
                      </Link>{" "}
                      {t("on")} {t(s.date)}
                    </span>
                  </div>
                  <div className="ml-auto w-[20%] text-end">
                    <Link isExternal href={s.gitLink} aria-label="Github">
                      <GithubIcon className="text-default-500" />
                    </Link>
                  </div>
                </div>
                <p className="pt-2 text-justify">{t(s.desc)}</p>
                <div className="flex w-full justify-center mt-5">
                  <iframe
                    style={{ width: "60%", minWidth: 300, minHeight: 250 }}
                    src="https://www.youtube.com/embed/RuPYUzX7cac"
                    title="Středoškolská odborná činnost - 10 - Martin Přívozník - Tux-Man pro FPGA"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  ></iframe>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
