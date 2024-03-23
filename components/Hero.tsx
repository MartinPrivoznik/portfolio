"use client";

import Image from "next/image";
import { HeroText } from "./HeroText";
import { motion, useAnimation } from "framer-motion";
import { HideOnScroll } from "./animations/HideOnScroll";
import { useEffect, useRef } from "react";
import heroImg from "../public/images/hero-min.webp";

export const Hero = (props: { lang: string }) => {
  const imgRef = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, [mainControls]);

  return (
    <HideOnScroll>
      <div className="flex relative w-full px-5 md:px-24 border-b border-zinc-700 min-h-[240px]">
        <div className="hidden lg:block w-1/6"></div>
        <div className="w-2/3 lg:w-2/6 flex items-center justify-center">
          <HeroText lang={props.lang} />
        </div>
        <motion.div
          ref={imgRef}
          variants={{
            hidden: { opacity: 0.5, x: -30 },
            visible: { opacity: 1, x: 0 },
            x: { type: "spring" },
          }}
          initial="hidden"
          transition={{ duration: 0.5 }}
          animate={mainControls}
          className="flex absolute bottom-0 w-full h-full lg:relative -right-[55px] xs:right-0 md:w-3/7 lg:w-2/6 justify-end"
        >
          <Image
            src={heroImg}
            alt="Martin Přívozník"
            width={1060}
            height={918}
            priority={true}
            className="absolute bottom-0 lg:relative hero-image"
          />
        </motion.div>
        <div className="hidden lg:block w-1/6"></div>
      </div>
    </HideOnScroll>
  );
};
