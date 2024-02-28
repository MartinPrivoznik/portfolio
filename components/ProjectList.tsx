import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import { subtitle } from "./primitives";
import { Chip } from "@nextui-org/chip";
import { Reveal } from "./animations/Reveal";
import { Link } from "@nextui-org/link";

export const ProjectList = () => {
  return (
    <div className="container flex flex-col justify-center items-center w-full mt-5 mb-5">
      {siteConfig.projects.map((p, i) => (
        <Reveal key={i} fullWidth>
          <div className="w-full px-6 md:px-24 lg:px-32 xl:px-64 mt-5">
            <div className="flex flex-col w-full px-5 pb-5">
              <h2 className={subtitle({ class: "mt-2 mb-0" })}>{p.name}</h2>
              <span className="text-small text-default-500">
                {p.shortDescription}
              </span>
              {p.links ? (
                <div className="flex flex-col">
                  {p.links.map((l, i) => (
                    <div className="flex gap-x-2 flex-wrap" key={i}>
                      <Link href={l.url} isExternal={!l.url.startsWith("/")}>
                        {l.text}
                      </Link>
                      {l.private && <span>(Authorized access only)</span>}
                    </div>
                  ))}
                </div>
              ) : (
                <span className="text-primary">Not public</span>
              )}
              <p className="pt-2 text-justify">{p.text}</p>
              <div className="flex flex-wrap mt-3 gap-2">
                {p.technologies.map((t, i) => (
                  <Chip key={i} color="primary">
                    {t}
                  </Chip>
                ))}
              </div>
            </div>
            <Divider />
          </div>
        </Reveal>
      ))}
    </div>
  );
};
