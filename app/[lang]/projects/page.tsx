"use client";

import { ProjectList } from "@/components/projects/ProjectList";
import { SubpageHeader } from "@/components/shared/SubpageHeader";
import { useState } from "react";

export default function ProjectsPage() {
  const [uselessProjects, setUselessProjects] = useState<boolean>(false);

  return (
    <>
      <SubpageHeader
        heading={`${uselessProjects ? "Useless " : ""}Projects`}
        subheading={`Showcase of some of my ${
          uselessProjects ? "useless " : ""
        }work`}
        imgSrc="/images/programmingHead-min.jpg"
        imgWidth={500}
        imgHeight={300}
      />
      <div className="w-full flex justify-center">
        <ProjectList
          uselessProjects={uselessProjects}
          setUselessProjects={setUselessProjects}
        />
      </div>
    </>
  );
}
