import { useTranslation } from "@/app/i18n";
import { ContactForm } from "@/components/contact/ContactForm";
import { SubpageHeader } from "@/components/shared/SubpageHeader";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";

export default async function ContactPage({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  const { t } = await useTranslation(params.lang);
  return (
    <>
      <SubpageHeader
        heading={t("contact")}
        subheading={t("contactSubheading")}
        imgSrc="/images/contact-page-hero-min.jpg"
        imgWidth={430}
        imgHeight={300}
      />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4">
          <ContactForm lang={params.lang} />
        </div>
      </section>
    </>
  );
}
