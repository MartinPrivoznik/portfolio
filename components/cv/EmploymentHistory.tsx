"use client";

import { siteConfig } from "@/config/site";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";

export const CvEmploymentHistory = () => {
  return (
    <div className="flex flex-col items-center w-full max-w-[1000px]">
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2 text-center" })}>
          Employment history
        </h3>
      </RevealSlide>
      <div className="px-5 w-full">
        {siteConfig.experiences.map((s, i) => (
          <Reveal fullWidth key={i}>
            <div className="w-full">
              <div className="flex flex-col w-full px-5 pb-5">
                <h2 className={subtitle({ class: "mt-2 mb-0" })}>
                  {s.role} at {s.name}
                </h2>
                <span className="text-small text-default-500">
                  {s.period} - {s.length}
                </span>
                <Link href={s.url} isExternal>
                  {s.urlText}
                </Link>
                <p className="pt-2 text-justify">{s.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
