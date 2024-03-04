"use client";

import { useEffect, useState } from "react";

const imageCount = 24;
const imageWidth = 250;

export const MiddleFinger = () => {
  const [x, setX] = useState<number>(0);
  const [backgroundPositionX, setBackgroundPositionX] = useState<number>(0);

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      const { clientX, clientY } = ev;
      setX(clientX);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  useEffect(() => {
    const isInBounds = (boundAxis: number) => {
      const rightBoundMax = rightBound - leftBound;
      return boundAxis > 0 && boundAxis < rightBoundMax;
    };

    const leftBound = window.document.body.clientWidth * 0.2;
    const rightBound = window.document.body.clientWidth * 0.8;
    const boundsWidth = rightBound - leftBound;
    const treshHoldWidth = boundsWidth / imageCount;

    const boundPosition = x - leftBound;
    const backgroundIndex = Math.floor(boundPosition / treshHoldWidth);
    const newBackgroundPositionX = backgroundIndex * imageWidth * -1;

    if (
      isInBounds(boundPosition) &&
      newBackgroundPositionX !== backgroundPositionX
    ) {
      setBackgroundPositionX(newBackgroundPositionX);
    }
  }, [x, backgroundPositionX]);

  return (
    <div
      className="midfing"
      style={{ backgroundPositionX: backgroundPositionX }}
    ></div>
  );
};
