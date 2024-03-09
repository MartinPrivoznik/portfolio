import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import { Reveal } from "../animations/Reveal";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Image } from "@nextui-org/image";
import { useTranslation } from "@/app/i18n";
import { AboutMeText } from "./AboutMeText";
import { calculateMyAge } from "@/helpers/Calculator";

export const AboutMeList = async (props: { lang: string }) => {
  const { t } = await useTranslation(props.lang);
  const age = calculateMyAge();

  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] px-10">
      {siteConfig.aboutSections.map((p, i) => (
        <div key={i}>
          <div
            className={`flex flex-col w-full mb-4 mt-3 md:flex-row${
              i % 2 == 1 ? " md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full flex flex-col justify-center">
              <RevealSlide width="fit-content">
                <h3 className={subtitle({ class: "mt-2" })}>{t(p.name)}</h3>
              </RevealSlide>
              <AboutMeText
                lang={props.lang}
                desc={p.desc}
                age={age}
              ></AboutMeText>
            </div>
            <div
              className={`w-full mt-5 md:mt-0 flex justify-center ${
                i % 2 == 1 ? "pr-5 md:justify-start" : "pl-5 md:justify-end"
              }`}
            >
              <Reveal>
                <Image src={p.imgPath} alt={p.name} width={p.imgWidth} />
              </Reveal>
            </div>
          </div>
          <Divider />
        </div>
      ))}
    </div>
  );
};
