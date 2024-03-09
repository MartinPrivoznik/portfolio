"use client";

import { Reveal } from "../animations/Reveal";
import { useTranslation } from "@/app/i18n/client";

export const AboutMeText = (props: {
  lang: string;
  desc: string;
  age: string;
}) => {
  const { t } = useTranslation(props.lang);

  const formatString = (val: string) => {
    const res = val.replace("{age}", props.age);
    return res;
  };

  return (
    <Reveal>
      <p className="text-justify">{formatString(t(props.desc))}</p>
    </Reveal>
  );
};
