'use client'
import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const AnimatedTitle = ({ text }) => {
  const [hasMounted, setHasMounted] = useState(false);

  const firstRef = useRef(null);
  const secondRef = useRef(null);

  const split1 = useRef(null);
  const split2 = useRef(null);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (!hasMounted) return;

    // Split text using GSAP SplitText
    split1.current = new SplitText(firstRef.current, { type: "chars" });
    split2.current = new SplitText(secondRef.current, { type: "chars" });

    // Initial position
    gsap.set(split2.current.chars, { yPercent: 100 });

    // Cleanup (VERY IMPORTANT)
    return () => {
      split1.current.revert();
      split2.current.revert();
    };
  }, [hasMounted]);

  const handleMouseEnter = () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to(split1.current.chars, {
      yPercent: -100,
      stagger: 0.02,
      duration: 0.3,
    }, "start");

    tl.to(split2.current.chars, {
      yPercent: 0,
      stagger: 0.02,
      duration: 0.3,
    }, "start");
  };

  const handleMouseLeave = () => {
    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    tl.to(split2.current.chars, {
      yPercent: 100,
      stagger: 0.02,
      duration: 0.3,
    }, "start");

    tl.to(split1.current.chars, {
      yPercent: 0,
      stagger: 0.02,
      duration: 0.3,
    }, "start");
  };

  if (!hasMounted) return null;

  return (
    <div
      className="relative overflow-hidden leading-none h-fit w-fit cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={firstRef} className="inline-block">
        {text}
      </span>

      <span
        ref={secondRef}
        className="inline-block absolute top-0 left-0"
      >
        {text}
      </span>
    </div>
  );
};

export default AnimatedTitle;