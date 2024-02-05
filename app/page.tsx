import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { GithubIcon } from "@/components/icons";
import Image from "next/image";
import { HeroText } from "@/components/HeroText";
import { ExperienceCards } from "@/components/ExperienceCards";
import { Divider } from "@nextui-org/divider";
import { CurrentPositionCards } from "@/components/CurrentPositionCards";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 w-full">
      <div className="flex w-full px-24 border-b border-zinc-700">
        <div className="w-1/6"></div>
        <div className="w-2/6 flex items-center justify-center">
          <HeroText />
        </div>
        <div className="w-2/6">
          <Image
            src={"/images/hero.png"}
            alt="Martin Přívozník"
            width={2120}
            height={1837}
          />
        </div>
        <div className="w-1/6"></div>
      </div>
      <div className="container flex flex-col items-center justify-center gap-4">
        <CurrentPositionCards title="Current positions" />
        <Divider />
        <ExperienceCards title="Experience roadmap" />
      </div>

      {/* <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Documentation
        </Link>
        <Link
          isExternal
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href={siteConfig.links.github}
        >
          <GithubIcon size={20} />
          GitHub
        </Link>
      </div> */}
    </section>
  );
}
