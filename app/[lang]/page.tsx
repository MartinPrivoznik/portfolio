import { ExperienceCards } from "@/components/ExperienceCards";
import { Divider } from "@nextui-org/divider";
import { CurrentPositionCards } from "@/components/CurrentPositionCards";
import { Hero } from "@/components/Hero";
import { Studies } from "@/components/Studies";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
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
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 w-full overflow-x-hidden pt-16">
      <Hero lang={params.lang} />

      <div className="container flex flex-col items-center justify-center gap-4">
        <div className="flex flex-col lg:flex-row w-full xl:px-20 gap-4 lg:gap-6">
          <div className="w-full lg:w-1/2">
            <CurrentPositionCards
              title={t("currentPositions")}
              lang={params.lang}
            />
          </div>
          <div className="lg:w-1/2 mx-3 flex justify-center">
            <Techstack lang={params.lang} />
          </div>
        </div>
        <Divider />
        <ExperienceCards title={t("experienceRoadmap")} lang={params.lang} />
        <Divider />
        <Studies title={t("mapOfStudies")} lang={params.lang} />
        <Divider />
        <RevealSlide width="fit-content">
          <h2 className={subtitle({ class: "mt-2 text-center" })}>
            {t("wannaKnowMore")}
          </h2>
        </RevealSlide>
        <div className="flex gap-3 sm:gap-6">
          <Link
            href={buildUrl(params.lang, "/about")}
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
            href={buildUrl(params.lang, "/projects")}
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
            href={buildUrl(params.lang, "/cv")}
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
