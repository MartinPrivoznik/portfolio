"use client";

import { siteConfig } from "@/config/site";
import { Card, CardHeader, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { subtitle } from "./primitives";
import { Reveal } from "./animations/Reveal";
import { RevealSlide } from "./animations/RevealSlide";

export const Studies = (props: { title: string }) => {
  return (
    <div className="flex flex-col justify-center items-center h-full px-4">
      <RevealSlide width="fit-content">
        <h2 className={subtitle({ class: "mt-2 text-center" })}>
          {props.title}
        </h2>
      </RevealSlide>
      <div className="flex pt-4 gap-5 flex-wrap justify-center">
        {siteConfig.studies.map((e, i) => (
          <Reveal key={i}>
            <Card className="max-w-[300px] h-full">
              <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                <p className="text-tiny uppercase font-bold">{e.name}</p>
                <small className="text-default-500">{e.period}</small>
                <small className="text-default-500">{e.status}</small>
                <h4 className="font-bold text-medium">{e.field}</h4>
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
