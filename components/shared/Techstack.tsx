import { siteConfig } from "@/config/site";
import Image from "next/image";
import { useTranslation } from "@/app/i18n";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";

type TechCategory = {
  title: string;
  items: { iconPath: string; name: string }[];
};

export const Techstack = async (props: { lang: string }) => {
  const { t } = await useTranslation(props.lang);

  const categories: TechCategory[] = [
    { title: t("frameworks"), items: siteConfig.services.techstack.frameworks },
    {
      title: t("programmingLanguages"),
      items: siteConfig.services.techstack.programmingLanguages,
    },
    { title: t("databases"), items: siteConfig.services.techstack.databases },
    { title: t("automation"), items: siteConfig.services.techstack.automation },
  ];

  return (
    <div className="flex flex-col items-center w-full">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {t("techstack")}
        </h3>
      </RevealSlide>
      <Reveal>
        <div className="space-y-3 w-full pt-6">
          {categories.map((category, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 bg-gradient-to-r from-default-50/40 to-default-100/40 rounded-xl p-3 border border-default-200/40 hover:border-primary/30 hover:shadow-sm transition-all duration-300"
            >
              <h4 className="text-xs font-semibold text-default-600 uppercase tracking-wide min-w-[120px] sm:min-w-[140px]">
                {category.title}
              </h4>
              <div className="flex items-center gap-2 flex-wrap">
                {category.items.map((tech, i) => (
                  <div key={i} className="group relative" title={tech.name}>
                    <div className="p-2 rounded-lg bg-white/50 dark:bg-default-100/50 hover:bg-white dark:hover:bg-default-100 transition-all duration-300 hover:scale-110 hover:shadow-md border border-transparent hover:border-primary/20">
                      <Image
                        src={tech.iconPath}
                        alt={tech.name}
                        width={32}
                        height={32}
                        className="h-[32px] w-[32px] object-contain grayscale group-hover:grayscale-0 transition-all duration-300"
                      />
                    </div>
                    <span className="absolute -top-9 left-1/2 -translate-x-1/2 px-2.5 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-[11px] font-medium rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none z-10 shadow-lg">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </div>
  );
};
