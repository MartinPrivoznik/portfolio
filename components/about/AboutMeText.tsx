"use client";

import { formatAge } from "@/helpers/formatAge";
import { Reveal } from "../animations/Reveal";
import { useTranslation } from "@/app/i18n/client";

export const AboutMeText = (props: {
  lang: string;
  desc: string;
  age: string;
}) => {
  const { t } = useTranslation(props.lang);

  return (
    <Reveal>
      <p className="text-justify">{formatAge(t(props.desc), props.age)}</p>
    </Reveal>
  );
};
