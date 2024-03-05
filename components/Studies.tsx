import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { subtitle } from "./primitives";
import { Reveal } from "./animations/Reveal";
import { RevealSlide } from "./animations/RevealSlide";
import { useTranslation } from "@/app/i18n";

export const Studies = async (props: { title: string; lang: string }) => {
  const { t } = await useTranslation(props.lang);
  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {props.title}
        </h3>
      </RevealSlide>
      <div className="flex pt-4 gap-5 flex-wrap justify-center">
        {siteConfig.studies.map((e, i) => (
          <Reveal key={i}>
            <Card className="max-w-[300px] h-full border-gray-600 border-1 dark:border-0">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{e.name}</p>
                <small className="text-default-500">{t(e.period)}</small>
                <small className="text-default-500">{t(e.status)}</small>
                <span className="font-bold text-medium">{t(e.field)}</span>
              </CardHeader>
              <CardBody className="overflow-visible py-2 flex justify-center items-center">
                <Image
                  alt={e.name}
                  className="object-cover rounded-xl"
                  src={e.logoUrl}
                  width={270}
                />
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
