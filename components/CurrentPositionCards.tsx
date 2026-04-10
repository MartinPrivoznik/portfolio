import { siteConfig } from "@/config/site";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Divider,
  Image,
  Chip,
} from "@heroui/react";
import { subtitle } from "./primitives";
import { Reveal } from "./animations/Reveal";
import { RevealSlide } from "./animations/RevealSlide";
import { useTranslation } from "@/app/i18n";

export const CurrentPositionCards = async (props: {
  title: string;
  lang: string;
}) => {
  const { t } = await useTranslation(props.lang);
  return (
    <div className="flex flex-col justify-center items-center h-full w-full px-4">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          {props.title}
        </h3>
      </RevealSlide>
      <div className="flex pt-4 gap-5 flex-wrap justify-center">
        {siteConfig.currentPositions.map((e, i) => (
          <Reveal key={i}>
            <Card className="max-w-[400px] h-full border-gray-600 border-1 dark:border-0">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={e.logoUrl}
                  width={40}
                />
                <div className="flex flex-col">
                  <h4 className="text-md">
                    {t(e.role)} {t("at")} {e.name}
                  </h4>
                  <p className="text-small text-default-500">{e.urlText}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="h-full">
                <p className="text-justify">{t(e.description)}</p>
                <br />
                <div className="flex gap-2 mt-auto flex-wrap">
                  {e.skills.map((s, i) => (
                    // @ts-ignore
                    <Chip key={i} color={s.importance}>
                      {s.text}
                    </Chip>
                  ))}
                </div>
              </CardBody>
              <Divider />
              <CardFooter>
                <p>
                  {t(e.period)} - {t(e.length)}
                </p>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
