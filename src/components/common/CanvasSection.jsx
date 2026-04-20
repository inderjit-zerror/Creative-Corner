"use client";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import HeroScene from "../scene/HeroScene";

const CanvasSection = () => {
  const distance = 200;
  const [Fov, setFov] = useState(75);

  const FovCalc = () => {
    const height = window.innerHeight;
    const fov = 2 * Math.atan(height / (2 * distance)) * (180 / Math.PI);
    setFov(fov);
  };

  useEffect(() => {
    FovCalc();

    window.addEventListener("resize", FovCalc);
    return () => {
      window.removeEventListener("resize", FovCalc);
    };
  }, []);

  return (
    <div className="w-full h-svh fixed top-0 left-0 overflow-hidden z-[-1]">
      <Canvas className="w-full h-full">
        <PerspectiveCamera makeDefault position={[0, 0, distance]} fov={Fov} />
        <HeroScene />
        <OrbitControls
          // minPolarAngle={Math.PI / 2}
          // maxPolarAngle={Math.PI / 2}
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
