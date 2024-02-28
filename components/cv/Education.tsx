"use client";

import { siteConfig } from "@/config/site";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";

export const CvEducation = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1000px]">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>Education</h3>
      </RevealSlide>
      <div className="px-5 w-full">
        {siteConfig.studies.map((s, i) => (
          <Reveal fullWidth key={i}>
            <div className="w-full">
              <div className="flex flex-col w-full px-5 pb-5">
                <h2 className={subtitle({ class: "mt-2 mb-0" })}>
                  {s.name} - {s.field}
                </h2>
                <span className="text-small text-default-500">
                  {s.period} - {s.status}
                </span>
                <Link href={s.url} isExternal>
                  {s.urlText}
                </Link>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
