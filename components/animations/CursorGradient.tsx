"use client";

import { useEffect, useState } from "react";

export const CursorGradient = () => {
  const [x, setX] = useState<number>();
  const [y, setY] = useState<number>();

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const { clientX, clientY } = ev;
      setX(clientX);
      setY(clientY + window.scrollY);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
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
      <div className="fixed pointer-events-none opacity-5 inset-0 z-50 lg:absolute transition duration-300 backdrop-div"></div>
    </>
  );
};
