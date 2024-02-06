"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HideOnScroll = (props: { children: JSX.Element }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 0.8]);

  return (
    <motion.div style={{ opacity }} ref={targetRef}>
      <motion.div style={{ scale }}>{props.children}</motion.div>
    </motion.div>
  );
};
