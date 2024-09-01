import { useTranslation } from "@/app/i18n";
import { RevealSlide } from "@/components/animations/RevealSlide";
import { subtitle } from "@/components/primitives";
import { Techstack } from "@/components/services/Techstack";
import { SubpageHeader } from "@/components/shared/SubpageHeader";
import { buildUrl } from "@/helpers/UrlBuilder";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { Divider } from "@nextui-org/divider";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";

export default async function ServicesPage({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);
  return (
    <>
      <SubpageHeader
        heading={t("services")}
        subheading={t("servicesSubheading")}
        imgSrc="/images/about/1-min.webp"
        imgWidth={430}
        imgHeight={300}
      />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4">
          <Techstack lang={params.lang} />
          <Divider />
          <RevealSlide width="fit-content">
            <h2 className={subtitle({ class: "mt-2 text-center" })}>
              {t("contactSubheading")}
            </h2>
          </RevealSlide>
          <Link
            href={buildUrl(params.lang, "/contact")}
            className={buttonStyles({
              color: "primary",
              radius: "full",
              variant: "shadow",
            })}
          >
            {t("contactMe")}
          </Link>
        </div>
      </section>
    </>
  );
}
