"use client";

import { useTranslation } from "@/app/i18n/client";
import { ProjectList } from "@/components/projects/ProjectList";
import { SubpageHeader } from "@/components/shared/SubpageHeader";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { useState } from "react";

export default function ProjectsPage({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  const { t } = useTranslation(params.lang);
  const [uselessProjects, setUselessProjects] = useState<boolean>(false);

  return (
    <>
      <SubpageHeader
        heading={`${uselessProjects ? `${t("Useless")} ` : ""}${t("projects")}`}
        subheading={`${t("showCaseOfSomeOfMy")} ${
          uselessProjects ? `${t("useless4pad")} ` : ""
        }${t("work")}`}
        imgSrc="/images/programmingHead-min.jpg"
        imgWidth={500}
        imgHeight={300}
      />
      <div className="w-full flex justify-center">
        <ProjectList
          uselessProjects={uselessProjects}
          setUselessProjects={setUselessProjects}
          lang={params.lang}
        />
      </div>
    </>
  );
}
