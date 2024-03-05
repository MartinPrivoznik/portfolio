import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";
import { buildUrl } from "@/helpers/UrlBuilder";

export const UselessProjects = (props: { lang: string }) => {
  return (
    <div className="w-full flex justify-center mt-7 flex-wrap gap-10">
      {siteConfig.uselessProjects.map((p, i) => (
        <Reveal key={i}>
          <Link
            href={p.isExternal ? p.url : buildUrl(props.lang, p.url)}
            isExternal={p.isExternal}
          >
            <Image
              alt={p.url}
              className="object-cover rounded-xl max-h-[270px]"
              src={p.imgPath}
              height={270}
            />
          </Link>
        </Reveal>
      ))}
    </div>
  );
};
