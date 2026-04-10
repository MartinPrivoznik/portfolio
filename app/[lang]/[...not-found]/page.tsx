import { Link, button as buttonStyles } from "@heroui/react";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { buildUrl } from "@/helpers/UrlBuilder";
import { useTranslation } from "../../i18n";
import { subtitle } from "@/components/primitives";

export default async function Home({
  params,
}: {
  params: Promise<IInternationalizedPageParams>;
}) {
  const { lang } = await params;
  const { t } = await useTranslation(lang);
  return (
    <section className="flex flex-col items-center justify-center h-[78vh]">
      <h3 className={subtitle() + " text-center"}>{t("pageNotFound")}</h3>
      <Link
        href={buildUrl(lang, "/")}
        className={
          buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          }) + " mt-5"
        }
      >
        {t("backToHomePage")}
      </Link>
    </section>
  );
}
