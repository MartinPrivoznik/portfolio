import { SubpageHeader } from "@/components/shared/SubpageHeader";

export default function AboutPage() {
  return (
    <>
      <SubpageHeader
        heading="About me"
        subheading="Some kind words about my livelihood"
        imgSrc="/images/about-hero-min.png"
        imgWidth={450}
        imgHeight={300}
        pngImg
      />
    </>
  );
}
