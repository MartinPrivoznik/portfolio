"use client";

import { subtitle, title } from "./primitives";
import Link from "next/link";
import { RevealSlide } from "./animations/RevealSlide";

export const HeroText = () => {
  return (
    <div>
      <RevealSlide width="fit-content">
        <div>
          <h1 className={title({ size: "lg" })}>Hello, I&apos;m&nbsp;</h1>
          <h1 className={title({ color: "violet", size: "lg" })}>Martin</h1>
        </div>
      </RevealSlide>
      <br />
      <RevealSlide width="fit-content">
        <h2 className={subtitle({ class: "mt-2" })}>
          Full Stack software engineer, Co&#8209;Founder of{" "}
          <Link href="https://dreamind.cz/" target="_blank">
            Dreamind
          </Link>{" "}
          and Web&nbsp;Development&nbsp;Lecturer
        </h2>
      </RevealSlide>
    </div>
  );
};
