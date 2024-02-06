import { ProjectList } from "@/components/ProjectList";
import { SubpageHeader } from "@/components/shared/SubpageHeader";

export default function ProjectsPage() {
  return (
    <>
      <SubpageHeader
        heading="Projects"
        subheading="Showcase of some of my work"
        imgSrc="/images/programmingHead-min.jpg"
        imgWidth={500}
        imgHeight={300}
      />
      <div className="w-full flex justify-center">
        <ProjectList />
      </div>
    </>
  );
}
