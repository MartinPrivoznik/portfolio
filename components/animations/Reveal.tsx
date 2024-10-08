"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = (props: {
  children: React.ReactNode;
  fullWidth?: boolean;
  className?: string;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView, mainControls]);

  return (
    <div
      ref={ref}
      style={{ position: "relative", overflow: "hidden" }}
      className={
        (props.fullWidth ? "w-full" : "") +
        (props.className ? ` ${props.className}` : "")
      }
    >
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
          x: { type: "spring" },
        }}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.2 }}
        animate={mainControls}
        className="flex flex-col h-full"
      >
        {props.children}
      </motion.div>
    </div>
  );
};
