"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export const HideOnScrollSoft = (props: {
  children: React.ReactNode;
  fullWidth?: boolean;
}) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.4, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0.4, 1], [1, 0.9]);

  return (
    <motion.div
      className={props.fullWidth ? "w-full" : ""}
      style={{ opacity }}
      ref={targetRef}
    >
      <motion.div style={{ scale }}>{props.children}</motion.div>
    </motion.div>
  );
};
