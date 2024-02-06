"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef } from "react";
import { HideOnScroll } from "../animations/HideOnScroll";
import { subtitle } from "../primitives";
import { RevealSlide } from "../animations/RevealSlide";
import { Reveal } from "../animations/Reveal";

export const SubpageHeader = (props: {
  heading: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  subheading: string;
}) => {
  const imgRef = useRef(null);
  const mainControls = useAnimation();

  useEffect(() => {
    mainControls.start("visible");
  }, []);

  return (
    <>
      <style jsx>{`
        .img-grow {
          content: "";
          width: ${props.imgWidth}px;
          height: ${props.imgHeight}px;
          background: linear-gradient(
            to left,
            rgba(0, 0, 0, 0) 0%,
            rgba(0, 0, 0, 1) 100%
          );
        }
      `}</style>
      <HideOnScroll>
        <div className="w-full relative h-[280px] border-b border-zinc-700 overflow-hidden flex justify-center items-center">
          <div className="w-full sm:w-4/5 flex flex-col items-center z-10">
            <RevealSlide width="fit-content">
              <h2 className="tracking-tight inline font-semibold text-3xl lg:text 5xl">
                {props.heading}
              </h2>
            </RevealSlide>
            <RevealSlide>
              <h3 className={subtitle({ class: "mt-2" })}>
                {props.subheading}
              </h3>
            </RevealSlide>
          </div>
          <div className="w-0 sm:w-1/5"></div>
          <motion.div
            ref={imgRef}
            variants={{
              hidden: { opacity: 0, x: 75 },
              visible: { opacity: 1, x: 0 },
              x: { type: "spring" },
            }}
            initial="hidden"
            transition={{ duration: 0.5 }}
            animate={mainControls}
            className="h-full w-full absolute"
          >
            <Image
              src={props.imgSrc}
              alt="Heading"
              className="block absolute -right-[200px] bottom-0 md:right-0 hero-image"
              width={props.imgWidth}
              height={props.imgHeight}
              priority={true}
            />
          </motion.div>
          <div className="absolute -right-[200px] bottom-0 md:right-0 block img-grow"></div>
        </div>
      </HideOnScroll>
    </>
  );
};
