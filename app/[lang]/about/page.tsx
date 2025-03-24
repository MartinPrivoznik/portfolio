import { useTranslation } from "@/app/i18n";
import { AboutMeList } from "@/components/about/AboutMeList";
import { RevealSlide } from "@/components/animations/RevealSlide";
import { subtitle } from "@/components/primitives";
import { SubpageHeader } from "@/components/shared/SubpageHeader";
import { buildUrl } from "@/helpers/UrlBuilder";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default async function AboutPage({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);
  return (
    <>
      <SubpageHeader
        heading={t("aboutMe")}
        subheading={t("aboutMeSubheading")}
        imgSrc="/images/about-hero-min.webp"
        imgWidth={420}
        imgHeight={400}
        pngImg
      />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4"></div>
        <AboutMeList lang={params.lang} />
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
      </section>
    </>
  );
}
