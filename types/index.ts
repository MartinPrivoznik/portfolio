import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export type ContactFormType = {
  fullName: string;
  email: string;
  text: string;
  captchaToken: string;
};
