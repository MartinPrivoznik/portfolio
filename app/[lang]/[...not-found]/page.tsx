import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { buildUrl } from "@/helpers/UrlBuilder";
import { useTranslation } from "../../i18n";
import { subtitle } from "@/components/primitives";

export default async function Home({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);
  return (
    <section className="flex flex-col items-center justify-center h-[78vh]">
      <h3 className={subtitle() + " text-center"}>{t("pageNotFound")}</h3>
      <Link
        href={buildUrl(params.lang, "/")}
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
