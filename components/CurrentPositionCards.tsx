"use client";

import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardBody, CardFooter } from "@nextui-org/card";
import { Divider } from "@nextui-org/divider";
import { Image } from "@nextui-org/image";
import { subtitle } from "./primitives";
import { Reveal } from "./animations/Reveal";
import { RevealSlide } from "./animations/RevealSlide";
import { Chip } from "@nextui-org/chip";

export const CurrentPositionCards = (props: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <RevealSlide width="fit-content">
        <h2 className={subtitle({ class: "mt-2 text-center" })}>
          {props.title}
        </h2>
      </RevealSlide>
      <div className="flex pt-4 gap-5">
        {siteConfig.currentPositions.map((e, i) => (
          <Reveal key={i}>
            <Card className="max-w-[400px] h-full">
              <CardHeader className="flex gap-3">
                <Image
                  alt="nextui logo"
                  height={40}
                  radius="sm"
                  src={e.logoUrl}
                  width={40}
                />
                <div className="flex flex-col">
                  <p className="text-md">
                    {e.role} at {e.name}
                  </p>
                  <p className="text-small text-default-500">{e.url}</p>
                </div>
              </CardHeader>
              <Divider />
              <CardBody className="h-full">
                <p>{e.description}</p>
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
                  {e.period} - {e.length}
                </p>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
