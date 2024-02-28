"use client";

import { Slider } from "@nextui-org/slider";
import { Reveal } from "../animations/Reveal";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { siteConfig } from "@/config/site";
import { useEffect, useState } from "react";

export const CvSkills = () => {
  const [skillsSorted, setSkillsSorted] =
    useState<typeof siteConfig.cv.skills>();

  useEffect(() => {
    setSkillsSorted(siteConfig.cv.skills.sort((a, b) => b.value - a.value));
  }, []);

  return (
    <div className="flex flex-col items-center w-full px-5">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>Skills</h3>
      </RevealSlide>
      <div className="flex flex-col gap-3 w-full max-w-[500px] min-w-[320px] px-5">
        {skillsSorted &&
          skillsSorted.map((s, i) => (
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
