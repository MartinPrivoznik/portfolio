import { title } from "@/components/primitives";
import { SubpageHeader } from "@/components/shared/SubpageHeader";

export default function ProjectsPage() {
  return (
    <>
      <SubpageHeader
        heading="Projects"
        subheading="Showcase of some of my work"
        imgSrc="/images/programmingHead.jpg"
        imgWidth={500}
        imgHeight={300}
      />
    </>
  );
}
