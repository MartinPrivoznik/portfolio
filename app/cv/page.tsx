import { HideOnScrollSoft } from "@/components/animations/HideOnScrollSoft";
import { CvCommunication } from "@/components/cv/Communication";
import { CvCurrentPosition } from "@/components/cv/CurrentPosition";
import { CvEducation } from "@/components/cv/Education";
import { CvEmploymentHistory } from "@/components/cv/EmploymentHistory";
import { CvPageHeading } from "@/components/cv/PageHeading";
import { CvSkills } from "@/components/cv/Skills";
import { Divider } from "@nextui-org/divider";

export default function CVPage() {
  return (
    <>
      <CvPageHeading />
      <section className="flex flex-col items-center justify-center gap-4 pb-8 md:pb-10 pt-3 w-full overflow-x-hidden">
        <div className="container flex flex-col items-center justify-center gap-4">
          <div className="flex flex-col lg:flex-row w-full">
            <HideOnScrollSoft fullWidth>
              <CvCurrentPosition />
            </HideOnScrollSoft>
            <Divider className="lg:hidden" />
            <HideOnScrollSoft fullWidth>
              <CvSkills />
            </HideOnScrollSoft>
          </div>
          <Divider />
          <HideOnScrollSoft>
            <CvEmploymentHistory />
          </HideOnScrollSoft>
          <Divider />
          <div className="flex flex-col lg:flex-row w-full">
            <HideOnScrollSoft fullWidth>
              <CvEducation />
            </HideOnScrollSoft>
            <Divider className="lg:hidden" />
            <HideOnScrollSoft fullWidth>
              <CvCommunication />
            </HideOnScrollSoft>
          </div>
        </div>
      </section>
    </>
  );
}
