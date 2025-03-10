import { useTranslation } from "@/app/i18n";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: IInternationalizedPageParams;
}): Promise<Metadata> {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { t } = await useTranslation(params.lang);

  return {
    title: t("cv"),
  };
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
