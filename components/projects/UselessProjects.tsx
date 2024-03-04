import { siteConfig } from "@/config/site";
import { Divider } from "@nextui-org/divider";
import { Reveal } from "../animations/Reveal";
import { Link } from "@nextui-org/link";
import { Image } from "@nextui-org/image";

export const UselessProjects = () => {
  return (
    <div className="w-full flex justify-center mt-7">
      {siteConfig.uselessProjects.map((p, i) => (
        <Reveal key={i}>
          <Link href={p.url} isExternal={false}>
            <Image
              alt={p.url}
              className="object-cover rounded-xl"
              src={p.imgPath}
              width={270}
            />
          </Link>
          <Divider />
        </Reveal>
      ))}
    </div>
  );
};
