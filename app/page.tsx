import { ExperienceCards } from "@/components/ExperienceCards";
import { Divider } from "@nextui-org/divider";
import { CurrentPositionCards } from "@/components/CurrentPositionCards";
import { Hero } from "@/components/Hero";
import { Studies } from "@/components/Studies";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { RevealSlide } from "@/components/animations/RevealSlide";
import { subtitle } from "@/components/primitives";
import { Reveal } from "@/components/animations/Reveal";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 w-full overflow-x-hidden">
      <Hero />
      <div className="container flex flex-col items-center justify-center gap-4">
        <CurrentPositionCards title="Current positions" />
        <Divider />
        <ExperienceCards title="Experience roadmap" />
        <Divider />
        <Studies title="Map of studies" />
        <Divider />
        <RevealSlide width="fit-content">
          <h2 className={subtitle({ class: "mt-2 text-center" })}>
            Wanna know more?
          </h2>
        </RevealSlide>
        <Link
          href={"/about"}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          About me
        </Link>
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
