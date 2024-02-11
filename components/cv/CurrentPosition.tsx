"use client";

import { siteConfig } from "@/config/site";
import { RevealSlide } from "../animations/RevealSlide";
import { subtitle } from "../primitives";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";

export const CvCurrentPosition = () => {
  return (
    <div className="flex flex-col items-center w-full">
      <RevealSlide width="fit-content">
        <h2 className={subtitle({ class: "mt-2 text-center" })}>
          Current positions
        </h2>
      </RevealSlide>
      <div className="px-5 w-full">
        {siteConfig.currentPositions.map((s, i) => (
          <Reveal fullWidth key={i}>
            <div className="w-full">
              <div className="flex flex-col w-full px-5 pb-5">
                <h2 className={subtitle({ class: "mt-2 mb-0" })}>
                  {s.role} at {s.name}
                </h2>
                <span className="text-small text-default-500">
                  {s.period} - {s.length}
                </span>
                <Link href={s.url} isExternal={!s.url.startsWith("/")}>
                  {s.urlText}
                </Link>
                <p className="pt-2">{s.description}</p>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
};
