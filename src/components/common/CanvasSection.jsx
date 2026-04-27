"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import HeroScene from "../scene/HeroScene";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const CanvasSection = () => {
  const distance = 700;
  const [Fov, setFov] = useState(75);

  const FovCalc = () => {
    const height = window.innerHeight;
    const fov = 2 * Math.atan(height / (2 * distance)) * (180 / Math.PI);
    setFov(fov);
  };

  useEffect(() => {
    FovCalc();

    const CTL = gsap.timeline();

    // BLUR ON SCROLL
    CTL.to(
      ".CANVASContMAIN",
      {
        filter: "blur(10px) ", // adjust blur strength
        ease: "none",
        scrollTrigger: {
          trigger: ".aboutDIV",
          start: "top bottom",
          end: "top 50%", // scroll distance (tweak this)
          scrub: true,
          // markers: true,
        },
      },
      "c1",
    );

    // black fade
    CTL.to(
      ".overlay",
      {
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: ".aboutDIV",
          start: "top bottom",
          end: "top 50%",
          scrub: true,
        },
      },
      "c1",
    );
    

    window.addEventListener("resize", FovCalc);
    return () => {
      window.removeEventListener("resize", FovCalc);
    };
  }, []);

  return (
    <div className="w-full h-svh CANVASContMAIN fixed top-0 left-0 overflow-hidden z-[-1] ">
      <div className="overlay absolute w-full h-svh bg-black opacity-0 pointer-events-none"></div>

      <Canvas className="w-full h-full canvas-container ">
        <PerspectiveCamera makeDefault position={[0, 0, distance]} fov={Fov} />
        <HeroScene />
        <OrbitControls
          minPolarAngle={Math.PI / 2}
          maxPolarAngle={Math.PI / 2}
          // minPolarAngle={Math.PI / 2 - Math.PI / 6} // up
          // maxPolarAngle={Math.PI / 2 + Math.PI / 6} // down
          enableZoom={false}
          enablePan={false}
        />
      </Canvas>
    </div>
  );
};

export default CanvasSection;
