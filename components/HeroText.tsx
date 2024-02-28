import { subtitle, title } from "./primitives";
import Link from "next/link";
import { RevealSlide } from "./animations/RevealSlide";

export const HeroText = () => {
  return (
    <div>
      <RevealSlide width="fit-content">
        <div>
          <h2 className={title({ size: "lg" })}>
            Hello, I&apos;m&nbsp;
            <span className={title({ color: "violet", size: "lg" })}>
              Martin
            </span>
          </h2>
        </div>
      </RevealSlide>
      <br />
      <RevealSlide width="fit-content">
        <h3 className={subtitle({ class: "mt-2" })}>
          Full Stack software engineer, Co&#8209;Founder of{" "}
          <Link href="https://dreamind.cz/" target="_blank">
            Dreamind
          </Link>{" "}
          and Web&nbsp;Development&nbsp;Lecturer
        </h3>
      </RevealSlide>
    </div>
  );
};
