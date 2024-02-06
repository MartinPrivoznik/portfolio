"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const Reveal = (props: {
  children: JSX.Element;
  fullWidth?: boolean;
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      style={{ position: "relative", overflow: "hidden" }}
      className={props.fullWidth ? "w-full" : ""}
    >
      <motion.div
        ref={ref}
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
