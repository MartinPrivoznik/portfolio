"use client";

import React, { useEffect, useRef, useState } from "react";

export const CursorGradient = () => {
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();
  const [lastMouseYOffset, _setLastMouseYOffset] = useState<number>();

  const lastMouseYOffsetRef = useRef(lastMouseYOffset);
  const setLastMouseYOffset = (n: number) => {
    lastMouseYOffsetRef.current = n;
    _setLastMouseYOffset(n);
  };

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const { clientX, clientY } = ev;
      setX(clientX);
      setY(clientY + window.scrollY);
      setLastMouseYOffset(clientY);
    };

    const handleScroll = (e: Event) => {
      if (lastMouseYOffsetRef.current)
        setY(lastMouseYOffsetRef.current + window.scrollY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <style jsx>{`
        .backdrop-div {
          background-image: radial-gradient(
            300px at ${x}px ${y}px,
            #fff,
            transparent 80%
          );
        }
      `}</style>
      <div className="fixed pointer-events-none opacity-10 inset-0 z-50 lg:absolute transition duration-300 backdrop-div"></div>
    </>
  );
};
