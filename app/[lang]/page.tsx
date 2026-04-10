import { ExperienceCards } from "@/components/ExperienceCards";
import { Divider, Link, button as buttonStyles } from "@heroui/react";
import { CurrentPositionCards } from "@/components/CurrentPositionCards";
import { Hero } from "@/components/Hero";
import { Studies } from "@/components/Studies";
import { RevealSlide } from "@/components/animations/RevealSlide";
import { subtitle } from "@/components/primitives";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { buildUrl } from "@/helpers/UrlBuilder";
import { useTranslation } from "../i18n";
import { Techstack } from "@/components/shared/Techstack";
import { Reveal } from "@/components/animations/Reveal";

export default async function Home({
  params,
}: {
  params: Promise<IInternationalizedPageParams>;
}) {
  const { lang } = await params;
  const { t } = await useTranslation(lang);
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 w-full overflow-x-hidden pt-16">
      <Hero lang={lang} />

      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col lg:flex-row w-full xl:px-20 gap-4 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <CurrentPositionCards title={t("currentPositions")} lang={lang} />
          </div>
          <div className="lg:w-1/2 mx-3 flex justify-center">
            <Techstack lang={lang} />
          </div>
        </div>
        <Divider />
        <ExperienceCards title={t("experienceRoadmap")} lang={lang} />
        <Divider />
        <Studies title={t("mapOfStudies")} lang={lang} />
        <Divider />
        <RevealSlide width="fit-content">
          <h2 className={subtitle({ class: "mt-2 text-center" })}>
            {t("wannaKnowMore")}
          </h2>
        </RevealSlide>
        <div className="flex gap-3 sm:gap-6">
          <Link
            href={buildUrl(lang, "/about")}
            className={
              buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              }) + " font-semibold"
            }
          >
            {t("aboutMe")}
          </Link>
          <Link
            href={buildUrl(lang, "/projects")}
            className={
              buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              }) + " font-semibold"
            }
          >
            {t("myProjects")}
          </Link>
          <Link
            href={buildUrl(lang, "/cv")}
            className={
              buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
              }) + " font-semibold"
            }
          >
            {t("cv")}
          </Link>
        </div>
      </div>
    </section>
  );
}
