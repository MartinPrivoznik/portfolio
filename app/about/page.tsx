import { AboutMeList } from "@/components/about/AboutMeList";
import { SubpageHeader } from "@/components/shared/SubpageHeader";

export default function AboutPage() {
  return (
    <>
      <SubpageHeader
        heading="About me"
        subheading="Some kind words about my livelihood"
        imgSrc="/images/about-hero-min.png"
        imgWidth={420}
        imgHeight={400}
        pngImg
      />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4"></div>
        <AboutMeList />
      </section>
    </>
  );
}
