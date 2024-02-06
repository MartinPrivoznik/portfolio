import { SubpageHeader } from "@/components/shared/SubpageHeader";

export default function CVPage() {
  return (
    <>
      <SubpageHeader
        heading="CV"
        subheading="So I don't have to send you an email with that PDF file"
        imgSrc="/images/cv-hero-min.png"
        imgWidth={430}
        imgHeight={300}
        pngImg
      />
    </>
  );
}
