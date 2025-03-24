import { useTranslation } from "@/app/i18n";
import { HideOnScrollSoft } from "@/components/animations/HideOnScrollSoft";
import { RevealSlide } from "@/components/animations/RevealSlide";
import { CvAchievements } from "@/components/cv/Achievements";
import { CvCommunication } from "@/components/cv/Communication";
import { CvCurrentPosition } from "@/components/cv/CurrentPosition";
import { CvEducation } from "@/components/cv/Education";
import { CvEmploymentHistory } from "@/components/cv/EmploymentHistory";
import { CvPageHeading } from "@/components/cv/PageHeading";
import { CvSkills } from "@/components/cv/Skills";
import { subtitle } from "@/components/primitives";
import { buildUrl } from "@/helpers/UrlBuilder";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { Divider } from "@nextui-org/divider";
import { button as buttonStyles } from "@nextui-org/theme";
import Link from "next/link";

export default async function CVPage({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);

  return (
    <>
      <CvPageHeading lang={params.lang} />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col lg:flex-row w-full">
            <HideOnScrollSoft fullWidth>
              <CvCurrentPosition lang={params.lang} />
            </HideOnScrollSoft>
            <Divider className="lg:hidden" />
            <HideOnScrollSoft fullWidth>
              <CvSkills lang={params.lang} />
            </HideOnScrollSoft>
          </div>
          <Divider />
          <HideOnScrollSoft>
            <CvEmploymentHistory lang={params.lang} />
          </HideOnScrollSoft>
          <Divider />
          <div className="flex flex-col lg:flex-row w-full">
            <HideOnScrollSoft fullWidth>
              <CvEducation lang={params.lang} />
            </HideOnScrollSoft>
            <Divider className="lg:hidden" />
            <HideOnScrollSoft fullWidth>
              <CvCommunication lang={params.lang} />
            </HideOnScrollSoft>
          </div>
          <Divider />
          <HideOnScrollSoft>
            <CvAchievements lang={params.lang} />
          </HideOnScrollSoft>
          <Divider />
          <RevealSlide width="fit-content">
            <h2 className={subtitle({ class: "mt-2 text-center" })}>
              {t("contactSubheading")}
            </h2>
          </RevealSlide>
          <div className="flex gap-3 sm:gap-6">
            <Link
              href={buildUrl(params.lang, "/contact")}
              className={
                buttonStyles({
                  color: "primary",
                  radius: "full",
                  variant: "shadow",
                }) + " font-semibold"
              }
            >
              {t("contactMe")}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
