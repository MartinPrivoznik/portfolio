"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

export const RevealSlide = (props: {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const mainControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
      slideControls.start("visible");
    }
  }, [isInView]);

  return (
    <div
      style={{ position: "relative", overflow: "hidden", width: props.width }}
    >
      <motion.div
        ref={ref}
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        transition={{ duration: 0.5, delay: 0.3 }}
        animate={mainControls}
        className="flex flex-col"
      >
        {props.children}
      </motion.div>
      <motion.div
        ref={ref}
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        transition={{ duration: 0.5, ease: "easeIn" }}
        animate={slideControls}
        style={{
          position: "absolute",
          top: 4,
          bottom: 4,
          left: 0,
          right: 0,
          background: "#b249f8",
          zIndex: 20,
        }}
      />
    </div>
  );
};
