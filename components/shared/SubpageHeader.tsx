"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useRef } from "react";
import { HideOnScroll } from "../animations/HideOnScroll";
import { subtitle } from "../primitives";
import { RevealSlide } from "../animations/RevealSlide";
import Link from "next/link";

export const SubpageHeader = (props: {
  heading: string;
  postHeadingText?: string;
  postHeadingClickAction?: () => void;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  subheading: string;
  pngImg?: boolean;
}) => {
  const imgRef = useRef(null);
  const mainControls = useAnimation();

  const animateImage = () => {
    mainControls.start("visible");
  };

  return (
    <>
      <style jsx>{`
        .img-grow {
          content: "";
          width: ${props.imgWidth}px;
          height: ${props.imgHeight}px;
          transition: right 1s;
        }
      `}</style>
      <HideOnScroll>
        <div className="w-full relative min-h-[280px] border-b border-zinc-700 overflow-hidden flex justify-start sm:justify-center items-center">
          <div
            className={
              "sm:w-4/5 flex flex-col z-10" +
              (props.pngImg
                ? " w-2/3 pl-6 sm:pl-0 items-start sm:items-center"
                : " w-full items-center")
            }
          >
            <RevealSlide width="fit-content">
              <h2 className="tracking-tight inline font-semibold text-3xl lg:text text-center">
                {props.heading}
                {props.postHeadingText && (
                  <>
                    {" "}
                    <Link
                      href="#"
                      onClick={props.postHeadingClickAction}
                      className="hidden md:inline-block text-primary hover:underline"
                    >
                      {props.postHeadingText}
                    </Link>
                  </>
                )}
              </h2>
            </RevealSlide>
            <RevealSlide width="fit-content">
              <span
                className={subtitle({
                  class: "mt-2" + (props.pngImg ? "" : " text-center"),
                })}
              >
                {props.subheading}
              </span>
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
            <div className="relative h-full w-full">
              {!props.pngImg && (
                <Image
                  src={props.imgSrc}
                  alt="Heading"
                  className="block absolute h-full -right-[200px] bottom-0 md:right-0 subpage-hero-image"
                  width={props.imgWidth}
                  height={props.imgHeight}
                  priority={true}
                  onLoad={animateImage}
                />
              )}
              {props.pngImg && (
                <Image
                  src={props.imgSrc}
                  alt="Heading"
                  className="block absolute h-full -right-[80px] sm:right-0 bottom-0 lg:right-[200px] xl:right-[270px] 2xl:right-[450px] subpage-hero-image"
                  width={props.imgWidth}
                  height={props.imgHeight}
                  priority={true}
                  onLoad={animateImage}
                />
              )}
            </div>
          </motion.div>
          {!props.pngImg && (
            <div className="absolute -right-[200px] bottom-0 md:right-0 block img-grow bg-gradient-to-l from-transparent to-white dark:to-black to-90%"></div>
          )}
        </div>
      </HideOnScroll>
    </>
  );
};
