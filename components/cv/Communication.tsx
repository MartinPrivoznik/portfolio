"use client";

import { Slider } from "@nextui-org/slider";
import { Reveal } from "../animations/Reveal";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export const CvCommunication = () => {
  const [commSkillsSorted, setCommSkillsSorted] =
    useState<typeof siteConfig.cv.skills>();

  useEffect(() => {
    setCommSkillsSorted(
      siteConfig.cv.communicationSkills.sort((a, b) => b.value - a.value)
    );
  }, []);

  return (
    <div className="flex flex-col items-center w-full px-5">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          Communication
        </h3>
      </RevealSlide>
      <div className="flex flex-col gap-3 w-full max-w-[500px] min-w-[320px] px-5">
        {commSkillsSorted &&
          commSkillsSorted.map((s, i) => (
            <Reveal key={i}>
              <Slider
                color="primary"
                label={s.name}
                defaultValue={s.value}
                getValue={(v) => `${v} %`}
                className="w-full pointer-events-none"
                hideThumb
              />
            </Reveal>
          ))}
      </div>
    </div>
  );
};
