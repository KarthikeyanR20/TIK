import React, { useEffect, useRef } from "react";

const CustomCursor = () => {

  const dotRef = useRef(null);
  const outlineRef = useRef(null);

  useEffect(() => {

    let mouseX = 0;
    let mouseY = 0;

    let dotX = 0;
    let dotY = 0;

    let outlineX = 0;
    let outlineY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", moveCursor);

    const animate = () => {

      /* INNER DOT */
      dotX += (mouseX - dotX) * 0.12;
      dotY += (mouseY - dotY) * 0.12;

      /* OUTER RING */
      outlineX += (mouseX - outlineX) * 0.06;
      outlineY += (mouseY - outlineY) * 0.06;

      if (dotRef.current) {
        dotRef.current.style.left = `${dotX}px`;
        dotRef.current.style.top = `${dotY}px`;
      }

      if (outlineRef.current) {
        outlineRef.current.style.left = `${outlineX}px`;
        outlineRef.current.style.top = `${outlineY}px`;
      }

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };

  }, []);

  return (
    <>
      <div className="cursor-dot" ref={dotRef}></div>
      <div className="cursor-outline" ref={outlineRef}></div>
    </>
  );
};

export default CustomCursor;