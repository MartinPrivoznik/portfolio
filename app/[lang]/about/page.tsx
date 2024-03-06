import { useTranslation } from "@/app/i18n";
import { AboutMeList } from "@/components/about/AboutMeList";
import { SubpageHeader } from "@/components/shared/SubpageHeader";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";

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
        imgSrc="/images/about-hero-min.png"
        imgWidth={420}
        imgHeight={400}
        pngImg
      />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4"></div>
        <AboutMeList lang={params.lang} />
      </section>
    </>
  );
}
