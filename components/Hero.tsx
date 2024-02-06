"use client";

import Image from "next/image";
import { HeroText } from "./HeroText";
import { motion, useAnimation } from "framer-motion";
import { HideOnScroll } from "./animations/HideOnScroll";
import { useRef } from "react";

export const Hero = () => {
  const imgRef = useRef(null);
  const mainControls = useAnimation();

  const animateImage = () => {
    mainControls.start("visible");
  };

  return (
    <HideOnScroll>
      <div className="flex relative w-full px-5 md:px-24 border-b border-zinc-700 min-h-[240px]">
        <div className="hidden lg:block w-1/6"></div>
        <div className="w-2/3 lg:w-2/6 flex items-center justify-center">
          <HeroText />
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
          className="flex relative -right-[70px] xs:right-0 w-3/6 lg:w-2/6 justify-end"
        >
          <Image
            src={"/images/hero-min.png"}
            alt="Martin Přívozník"
            width={1060}
            height={918}
            priority={true}
            onLoad={animateImage}
            className=" absolute bottom-0 sm:relative hero-image"
          />
        </motion.div>
        <div className="hidden lg:block w-1/6"></div>
      </div>
    </HideOnScroll>
  );
};
