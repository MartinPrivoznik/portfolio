"use client";

import Image from "next/image";
import { HeroText } from "./HeroText";
import { motion } from "framer-motion";
import { HideOnScroll } from "./animations/HideOnScroll";

export const Hero = () => {
  return (
    <HideOnScroll>
      <div className="flex relative w-full px-5 sm:px-24 border-b border-zinc-700">
        <div className="hidden lg:block w-1/6"></div>
        <div className="w-2/3 lg:w-2/6 flex items-center justify-center">
          <HeroText />
        </div>
        <motion.div
          animate={{ x: 50 }}
          transition={{
            ease: "linear",
            duration: 2,
            x: { duration: 1 },
          }}
          className="flex relative w-2/5 lg:w-2/6 justify-end"
        >
          <Image
            src={"/images/hero-min.png"}
            alt="Martin Přívozník"
            width={1060}
            height={918}
            priority={true}
            className="max-w-fit-content absolute bottom-0 sm:relative hero-image"
          />
        </motion.div>
        <div className="hidden lg:block w-1/6"></div>
      </div>
    </HideOnScroll>
  );
};
