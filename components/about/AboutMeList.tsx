"use client";

import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import { Reveal } from "../animations/Reveal";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Image } from "@nextui-org/image";

export const AboutMeList = () => {
  const calculateAge = (dateOfBirth: string) => {
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age.toString();
  };

  const formatString = (val: string) => {
    const res = val.replace("{age}", calculateAge(siteConfig.dateOfBirth));
    return res;
  };

  return (
    <div className="flex flex-col items-center w-full max-w-[1200px] px-10">
      {siteConfig.aboutSections.map((p, i) => (
        <>
          <div
            key={i}
            className={`flex flex-col w-full mb-4 mt-3 md:flex-row${
              i % 2 == 1 ? " md:flex-row-reverse" : ""
            }`}
          >
            <div className="w-full flex flex-col justify-center">
              <RevealSlide width="fit-content">
                <h2 className={subtitle({ class: "mt-2" })}>{p.name}</h2>
              </RevealSlide>
              <Reveal>
                <p className="text-justify">{formatString(p.desc)}</p>
              </Reveal>
            </div>
            <div className={`w-full flex ${i % 2 == 1 ? "" : "justify-end"}`}>
              <Reveal>
                <Image src={p.imgPath} alt={p.name} width={p.imgWidth} />
              </Reveal>
            </div>
          </div>
          <Divider />
        </>
      ))}
    </div>
  );
};
