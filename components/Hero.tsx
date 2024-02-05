"use client";

import Image from "next/image";
import { HeroText } from "./HeroText";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const Hero = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);

  return (
    <motion.div style={{ opacity }} ref={targetRef}>
      <motion.div
        style={{ scale }}
        className="flex w-full px-24 border-b border-zinc-700"
      >
        <div className="w-1/6"></div>
        <div className="w-2/6 flex items-center justify-center">
          <HeroText />
        </div>
        <div className="w-2/6">
          <Image
            src={"/images/hero.png"}
            alt="Martin Přívozník"
            width={2120}
            height={1837}
          />
        </div>
        <div className="w-1/6"></div>
      </motion.div>
    </motion.div>
  );
};
