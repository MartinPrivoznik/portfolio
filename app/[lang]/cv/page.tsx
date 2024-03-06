import { HideOnScrollSoft } from "@/components/animations/HideOnScrollSoft";
import { CvAchievements } from "@/components/cv/Achievements";
import { CvCommunication } from "@/components/cv/Communication";
import { CvCurrentPosition } from "@/components/cv/CurrentPosition";
import { CvEducation } from "@/components/cv/Education";
import { CvEmploymentHistory } from "@/components/cv/EmploymentHistory";
import { CvPageHeading } from "@/components/cv/PageHeading";
import { CvSkills } from "@/components/cv/Skills";
import IInternationalizedPageParams from "@/models/IInternationalizedPageParams";
import { Divider } from "@nextui-org/divider";

export default function CVPage({
  params,
}: {
  params: IInternationalizedPageParams;
}) {
  return (
    <>
      <CvPageHeading lang={params.lang} />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col lg:flex-row w-full">
            <HideOnScrollSoft fullWidth>
              <CvCurrentPosition lang={params.lang} />
            </HideOnScrollSoft>
            <Divider className="lg:hidden" />
            <HideOnScrollSoft fullWidth>
              <CvSkills lang={params.lang} />
            </HideOnScrollSoft>
          </div>
          <Divider />
          <HideOnScrollSoft>
            <CvEmploymentHistory lang={params.lang} />
          </HideOnScrollSoft>
          <Divider />
          <div className="flex flex-col lg:flex-row w-full">
            <HideOnScrollSoft fullWidth>
              <CvEducation lang={params.lang} />
            </HideOnScrollSoft>
            <Divider className="lg:hidden" />
            <HideOnScrollSoft fullWidth>
              <CvCommunication lang={params.lang} />
            </HideOnScrollSoft>
          </div>
          <Divider />
          <HideOnScrollSoft>
            <CvAchievements lang={params.lang} />
          </HideOnScrollSoft>
        </div>
      </section>
    </>
  );
}
