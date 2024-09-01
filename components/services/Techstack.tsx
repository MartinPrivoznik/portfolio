import { useTranslation } from "@/app/i18n";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { siteConfig } from "@/config/site";
import Image from "next/image";

export const Techstack = async (props: { lang: string }) => {
  const { t } = await useTranslation(props.lang);
  return (
    <div className="flex flex-col justify-center items-center h-full px-4 mb-3">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {t("techstack")}
        </h3>
      </RevealSlide>
      <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 max-w-4xl">
        {siteConfig.services.techstack.map((e, i) => (
          <Reveal key={i}>
            <div className="flex flex-col items-center max-h-[120px]">
              <Image
                src={e.iconPath}
                alt={e.name}
                width={100}
                height={100}
                className="h-[80px]"
              />
              <label>{e.name}</label>
            </div>
          </Reveal>
        ))}
        <Reveal className="col-span-6">
          <div
            className="text-justify"
            dangerouslySetInnerHTML={{ __html: t("techstackDescription") }}
          ></div>
        </Reveal>
      </div>
    </div>
  );
};
